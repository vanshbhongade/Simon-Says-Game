let url = "http://universities.hipolabs.com/search?name=india&state-provision=";
let btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    console.log('button clicked');
    let collArr = await getColleges(country);
    
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector('#list');
    list.innerText = "";
    for (coll of collArr){
        let li = document.createElement('li');
        li.innerText = coll.name;
        list.appendChild(li);
    }
};

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch (e) {
        return [];
    }
};