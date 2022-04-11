document.querySelector('button').addEventListener('click', getArtist)

function getArtist() {

    let userSearchValue = document.querySelector('input').value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': 'c65e937f99mshfecaf8c7886b084p18b732jsn6f136cd51b86'
        }
    };
    
    fetch(`https://spotify23.p.rapidapi.com/search/?q=${userSearchValue}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.albums)
            console.log(data.albums.items)
            console.log(data.albums.items[0])
            let albumArray = data.albums.items
            albumArray.forEach(album => {
                console.log(album.data);
                let container = document.getElementById("artistInfo")
                container.insertAdjacentHTML('beforeend', `<img class= "artistImg" src="${album.data.coverArt.sources[0].url}">`)
            });


        })
        .catch(err => console.error(err));

}