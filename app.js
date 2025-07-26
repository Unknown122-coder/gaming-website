window.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bg-music');

    const startMusic = () => {
        bgMusic.play().then(() => {
            console.log('Music started after interaction');
        }).catch(err => {
            console.log('Error:', err);
        });
        document.removeEventListener('click', startMusic);
    };

    document.addEventListener('click', startMusic);
});

const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if (index === 3){
        index = -1;
    }


})