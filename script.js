const cardContentOne = document.querySelector('.container-one');
const cardContentTwo = document.querySelector('.container-two');
const submitBtn = document.querySelector('.btn');
const ratingBtn = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let starScore = 3;  

submitBtn.addEventListener('click', onSubmit);
ratingBtn.forEach( btn => {
    btn.addEventListener('click', handleClickRating);
});

function onSubmit(){
    cardContentOne.classList.add('hide');
    cardContentTwo.classList.remove('hide');
    score.textContent = starScore;
}

function handleClickRating(event){
    ratingBtn.forEach( btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    starScore = event.target.textContent;
}