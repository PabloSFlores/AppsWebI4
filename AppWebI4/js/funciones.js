// const API_KEY = 'wmv0INF90WkqHl8pj3I1j2IePnWfFsG7'
const api_key = "wmv0INF90WkqHl8pj3I1j2IePnWfFsG7"
const inputSearch = document.getElementById("search")

var imgContainer = document.getElementById("imgContainer")
var imgRandomContainer = document.getElementById("imgRandomContainer")

//GifBSearch
inputSearch.onkeyup = async (event) => {
    event.preventDefault()
    if (event.keyCode !== 13) return
    imgContainer.innerHTML = ''
    imgRandomContainer.innerHTML = ''
    const req = await fetch(
        `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputSearch.value}`
    )
    const response = await req.json()
    // console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        var imgUrl = response.data[i].images.original.url
        // console.log(imgUrl);
        var imgList = `<div class="col-2 shadow p-2 mx-2 my-2 bg-white rounded text-center">
                        <img src="${imgUrl}" width="200" height="100">
                        </div>
                        `
        imgContainer.innerHTML += imgList
    }
    // console.log(imgContainer.innerHTML);
}

//Gif random
window.onload = async () => {
    imgContainer.innerHTML = ""
    imgRandomContainer.innerHTML = ""
    const req = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${api_key}&q=${inputSearch.value}`
    )
    const response = await req.json()
    console.log(response)
    var imgUrl = response.data.images.original.url
    var imgList = `<div class="col-12 shadow p-2 mx-2 my-2 bg-white rounded text-center">
                    <img src="${imgUrl}" width="500" height="400">
                    </div>`
    imgRandomContainer.innerHTML += imgList
}

//Forma del profesor
// inputSearch.onkeyup = async (event) => {
//     event.preventDefault();
//     console.log(event);
//     if (event.keyCode != 13) return;
//     const response = await fetch(
//         `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputSearch.value}`
//     );
//     const datagif = await response.json();
//     // console.log(data);
//     // console.log(data.json);
//     let content = ``;
//     datagif.data.map((gif, index) => {
//         content += `
//           <img src="${gif.images.original.url}" class= "mb-3 ms-1" alt="${gif.title}">
//           `;
//     });
//     gifs.innerHTML = content;
// };

//Prueba de events de teclado
// inputSearch.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     alert("Hola")
//   }
// });
