
let main = document.getElementById("main")


async function getApi ()
{
    var expresson = document.querySelector(".text").value;
    console.log(expresson)
    const options = {
        method: 'GET',
    };
    
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_8te0sy9o/${expresson}`, options)
        .then(response => response.json())
        .then(response => showData(response))
        .catch(err => console.error(err));

}
getApi()
const callDebounce = debounce(getApi,500)

function debounce(getfun,delay)
{
    let timer
    
    return function ()
    {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getfun()
        },delay)
    }
}


function showData(data)
{
    console.log(data)
    if(!data)
    {
    data.forEach(element => {
        let div = document.createElement("div");
        let img = document.createElement("img")
        img.setAttribute("img",element.image)
        div.append(img)
        main.append(div)
    });
    }
}


