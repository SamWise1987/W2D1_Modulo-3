// JavaScript to handle the scroll event
window.addEventListener('scroll', function() {
    const title = document.getElementById('title');
    const favoriteCard = document.getElementById('favoriteCard');

    if (window.scrollY > 0) {
        // If the user has scrolled down, hide the title and show the card
        title.style.display = 'none';
        favoriteCard.classList.remove('d-none');
        favoriteCard.classList.add('fade-in');
    } else {
        // If the user has scrolled back up, show the title and hide the card
        title.style.display = 'block';
        favoriteCard.classList.add('d-none');
        favoriteCard.classList.remove('fade-in');
    }
});


function openFavoritesPage() {
    window.location.href = "./favorites.html"; 
}

function homeBtn(){
    const homeBtn = document.querySelector('#homeBtn');
    homeBtn.addEventListener('click', () =>{
        window.location.href = "./index.html";
    });
}

