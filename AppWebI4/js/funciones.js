const inputSearch = document.getElementById("search");
const api_key = 'wmv0INF90WkqHl8pj3I1j2IePnWfFsG7'

// inputSearch.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     alert("Hola")
//   }
// });

inputSearch.onkeyup = async (event) => {
    var imgContainer = document.getElementById("imgContainer")
    event.preventDefault();
    if (event.keyCode !== 13) return;
    imgContainer.innerHTML = ''
    const req = await fetch(
        `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputSearch.value}`
    );
    const response = await req.json();
    // console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        var imgUrl = response.data[i].images.original.url;
        // console.log(imgUrl);
        var imgList = `<div class="col-2 shadow p-2 mx-2 my-2 bg-white rounded">
                        <img src="${imgUrl}" width="200" height="100">
                        </div>
                        `
        imgContainer.innerHTML += imgList;
    }
    // console.log(imgContainer.innerHTML);
}
