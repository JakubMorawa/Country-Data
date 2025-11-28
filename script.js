let jsonData = {}; 
let dataNames = [];
let fuse; 
let selectedCountry = '';

async function loadJsonData() {
    const response = await fetch("./countries.json");
    return response.json();
}

async function init() {
    jsonData = await loadJsonData();

    dataNames = Object.keys(jsonData);

    console.log("Loaded:", dataNames);

    fuse = new Fuse(dataNames.map(name => ({ name })), {
        keys: ['name'],
        threshold: 0.3
    });

    console.log("Fuse loaded:", fuse);
}

init();

function getCountryInfo(name) {
    return jsonData[name.toLowerCase()];
}

const input = document.getElementById('search-input');


input.addEventListener('input', () => {
    const searchTerm = input.value;
    const output = fuse.search(searchTerm); 
    const results = document.getElementById('results');

    results.innerHTML = '';

    const searchSize = Math.min(5,output.length);
    for(let i = 0; i<searchSize;i++){
        const li = document.createElement('li');

        li.innerHTML = searchBtn(output[i].item.name)

        results.appendChild(li);
    }

    

    if (results.innerHTML.trim() === '') {
        results.style.borderWidth = '0px'; 
        results.style.marginBottom = '0px'
        results.style.paddingTop = '0px'
        results.style.paddingBottom = '0px'
    } else {
        results.style.borderWidth = '3px';
        results.style.borderStyle = 'solid'; 
        results.style.borderColor = 'rgb(0, 47, 84)'
        results.style.marginBottom = '10px'
        results.style.paddingTop = '10px'
        results.style.paddingBottom = '10px'
        
}
});

function searchBtn(text) {
    let frontTag = "<button class='searchBtn' id='"+text+"'><img src='MGlass.svg'><span class='button-text'>"
    let endTag = "</span></button>"
    return frontTag + text + endTag
}

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".searchBtn");
    if (btn) {
        const countryName = document.getElementById('country-name');
        const countryData = document.getElementById('country-data');

        let countrySelectedData = jsonData[btn.id];
        countryName.innerHTML = `<b>${btn.id}</b>`;
        let text = ""
        
        Object.keys(countrySelectedData).forEach(key => {
            console.log(key);
            text += `<div class = "data-point"><p class = "title"><b>${key}</b>:</p> <p class = "data">${countrySelectedData[key]}</p></div>`
        });
        countryData.innerHTML = text
    }
});

