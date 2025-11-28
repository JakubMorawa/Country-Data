from bs4 import BeautifulSoup
from selenium import webdriver
import asyncio
import aiohttp
import json

#Scrape the list of countries using Selenium
driver = webdriver.Chrome()
driver.get("https://data.worldbank.org/country")
driver.implicitly_wait(3)  # wait for page to load JS

html = driver.page_source
soup = BeautifulSoup(html, "html.parser")


countries = {}
for li in soup.select("section li a"):
    name = li.text.strip()
    link = "https://data.worldbank.org" + li['href'] 
    countries[name] = link

driver.quit()

# Async fetch additional info for each country
async def fetch_country(session, name, url):
    async with session.get(url) as response:
        text = await response.text()
        soup = BeautifulSoup(text, "html.parser")
        divList = soup.find_all("div", class_= "indicator-item__inner")
        info = {}
        for div in divList:
            title = div.find("div", class_= "indicator-item__title").text.strip() if div.find("div", class_= "indicator-item__title") else "No info"
            data = div.find("div", class_= "indicator-item__data-info").text.strip() if div.find("div", class_= "indicator-item__data-info") else "No info"
            info[title] = data
        print("done with country " + name)
        return name, info

async def main(countries):
    results = {}
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_country(session, name, url) for name, url in countries.items()]
        for task in asyncio.as_completed(tasks):
            name, info = await task
            results[name] = info
    return results


country_info = asyncio.run(main(countries))
print(country_info)
with open("countries.json", "w") as json_file:
    json.dump(country_info, json_file, indent=4)
