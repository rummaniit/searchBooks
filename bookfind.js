

let SearchBook = () => {
    let spinner = document.getElementById('load')
    spinner.style.display = 'block'
    let Showing = document.getElementById('ShowingPlace')
    Showing.textContent = ''
    let Showingyr = document.getElementById('showYear')
    Showingyr.textContent = ''
    let GetInputValue = document.getElementById('enter-book-name').value
    document.getElementById('enter-book-name').value = ''
    let url = `https://openlibrary.org/search.json?q=${GetInputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => DisPlay(data.docs))
}


let DisPlay = (books) => {
    let Showing = document.getElementById('ShowingPlace')
    Showing.textContent = ''
    for (let show of books) {
        console.log(show)
        if (!show.title) {
            document.getElementById('whatMan').innerText = 'what'
        }
        else {
            let div = document.createElement('div')
            div.innerHTML = `
        <div class="card text-dark bg-light mb-4 mt-4" style="max-width: 18rem;" onclick='ShowDetails("${show.publish_year}")'>
            <div class="card-header"><h3>${show.title}</h3></div>
            <div class="card-body">
                 <h5 class="card-title">${show.author_name}</h5>     
            </div>
        </div>
        `
            Showing.appendChild(div)
            let spinner = document.getElementById('load')
            spinner.style.display = 'none'
        }
    }
}

let ShowDetails = (Publishdate) => {
    document.getElementById('showYear').innerText = Publishdate

}
//  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>