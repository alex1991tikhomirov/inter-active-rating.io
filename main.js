const button = document.querySelector('.button');

const card = document.querySelector('.card');

const cardThank = document.querySelector('.card__thankYou');

const selection = document.getElementById('selection');

const rate = document.querySelectorAll('a');

const rateError = document.querySelector('.repeat_selection');

let rating;

rate.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating = rate.innerHTML;
        rate.style.backgroundColor = '#FC7613';
    })
});


function myFunc(){
    if (rating == undefined){
        rateError.style.visibility = 'visible';
    }else{
    card.style.display = 'none',
    cardThank.style.display = 'block';
    selection.innerHTML = "You selected " + rating + " out of " + rate.length;}
    
};