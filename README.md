<h1 style="text-align: center;">🌍 <a href = "https://jakubmorawa.github.io/Country-Data/"> Country Data</a></h1>

<p style="text-align: center; font-size:18px;">
Explore countries worldwide with an interactive search, responsive design, and real-time data fetched from the World Bank.


<img src="Screenshot 2025-11-28 174033.png" alt="Country Data Explorer Screenshot" style="width:80%; max-width:800px; display:block; margin:20px auto; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2);">



<hr style="margin: 20px 0;">

<h2 style="color: #00305b;">🛠️ How It Works</h2>

<div style="display:flex; flex-wrap: wrap; gap: 20px;">

  <div style="flex:1; min-width: 250px; background-color:#e2e8ee; padding:15px; border-radius:10px;">
    <h3>1️⃣ Scraping</h3>
    <p>
      A <b>Python script</b> uses <i>Selenium</i> and <i>BeautifulSoup</i> to extract country links and data from the World Bank. All information is stored in <code>countries.json</code>.
    </p>
  </div>

  <div style="flex:1; min-width: 250px; background-color:#e2e8ee; padding:15px; border-radius:10px;">
    <h3>2️⃣ Async Data Fetching</h3>
    <p>
      Using <i>aiohttp</i> and <i>asyncio</i>, the script fetches detailed data for each country efficiently, so the site loads quickly even with hundreds of countries.
    </p>
  </div>

  <div style="flex:1; min-width: 250px; background-color:#e2e8ee; padding:15px; border-radius:10px;">
    <h3>3️⃣ Interactive Frontend</h3>
    <p>
      The website loads the JSON data dynamically and uses <i>Fuse.js</i> for smart search. Users can type a country name and get instant suggestions, then click to view detailed indicators.
    </p>
  </div>

</div>

<hr style="margin: 20px 0;">

<h2 style="color: #00305b;">🌟 Features</h2>

<div style="display:flex; flex-wrap:wrap; gap:20px;">

  <div style="flex:1; min-width:200px; background-color:#f0f7fb; padding:15px; border-radius:10px; text-align:center;">
    <h3>🔍 Dynamic Search</h3>
    <p>Approximate matching with top suggestions displayed as you type.</p>
  </div>

  <div style="flex:1; min-width:200px; background-color:#f0f7fb; padding:15px; border-radius:10px; text-align:center;">
    <h3>📱 Responsive Design</h3>
    <p>Adapts perfectly to desktop, tablet, and mobile devices using CSS Grid and media queries.</p>
  </div>

  <div style="flex:1; min-width:200px; background-color:#f0f7fb; padding:15px; border-radius:10px; text-align:center;">
    <h3>📊 Interactive Data Display</h3>
    <p>Shows country name and key indicators in a clean, card-style grid layout.</p>
  </div>

  <div style="flex:1; min-width:200px; background-color:#f0f7fb; padding:15px; border-radius:10px; text-align:center;">
    <h3>⚡ Full Automation</h3>
    <p>Python script scrapes, organizes, and saves data with zero manual effort.</p>
  </div>

</div>

<hr style="margin: 20px 0;">

<h2 style="color: #00305b;">⚡ Tech Stack</h2>

<table style="width:100%; text-align:center; border-collapse:collapse;">
  <tr style="background-color:#e2e8ee;">
    <th style="padding:10px;">Frontend</th>
    <th style="padding:10px;">Backend / Scraping</th>
    <th style="padding:10px;">Other</th>
  </tr>
  <tr>
    <td style="padding:10px;">HTML, CSS, JavaScript</td>
    <td style="padding:10px;">Python, Selenium, BeautifulSoup</td>
    <td style="padding:10px;">asyncio, aiohttp, Fuse.js</td>
  </tr>
</table>

<hr style="margin: 20px 0;">

<h2 style="color: #00305b;">🚀 Getting Started</h2>

<pre style="background-color:#f0f7fb; padding:15px; border-radius:10px; overflow-x:auto;">
git clone https://github.com/yourusername/country-data-explorer.git
cd country-data-explorer
pip install selenium aiohttp beautifulsoup4
python scrape_countries.py
</pre>

<p>Then open <code>index.html</code> in your browser (or use VSCode Live Server) to explore the website.</p>
