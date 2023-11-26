//console.log("Welcome to Spotify");
//Initializing the variables  songItemPlay
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "It's Always Blue", filePath: "Songs/1.mp3", coversPath: "Covers/1.jpg" },
    { songName: "Always Blue", filePath: "Songs/2.mp3", coversPath: "Covers/2.jpg" },
    { songName: "Blue", filePath: "Songs/3.mp3", coversPath: "Covers/3.jpg" },
    { songName: "ys Blue", filePath: "Songs/4.mp3", coversPath: "Covers/4.jpg" },
    { songName: "s Blue", filePath: "Songs/5.mp3", coversPath: "Covers/5.jpg" },
    { songName: "Always ", filePath: "Songs/6.mp3", coversPath: "Covers/6.jpg" },
    { songName: "Always B", filePath: "Songs/7.mp3", coversPath: "Covers/7.jpg" },
    { songName: "ways Blue", filePath: "Songs/8.mp3", coversPath: "Covers/8.jpg" },
    { songName: "I Always Blue", filePath: "Songs/9.mp3", coversPath: "Covers/9.jpg" },
    { songName: "Al Blue", filePath: "Songs/10.mp3", coversPath: "Covers/10.jpg" }
]
songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coversPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })
    //audioElement.play();
    //Handleplay/pause click

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    })
    // masterPlay.addEventListener('click', () => {
    //     if (audioElement.paused || audioElement.currentTime <= 0) {
    //         audioElement.play();
    //         masterPlay.classList.remove('fa-circle-play');
    //         masterPlay.classList.add('fa-circle-pause');
    //         gif.style.opacity = 1;
    //     } else {
    //         audioElement.pause();
    //         masterPlay.classList.remove('fa-circle-pause');
    //         masterPlay.classList.add('fa-circle-play');
    //         gif.style.opacity = 0;
    //     }
    // })
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //makeAllPlay();
        songIndex = parseInt(e.target.id);
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        // audioElement.play();
        // masterPlay.classList.remove('fa-circle-play');
        // masterPlay.classList.add('fa-circle-pause');
        // gif.style.opacity = 1;

        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlay();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        }
        /*else {
                 audioElement.pause();
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                 gif.style.opacity = 0;
                  makeAllPlay();
               }*/
    })
})
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
            makeAllPlay();
        }
    })
    // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    //     element.addEventListener('click', (e) => {
    //         makeAllPlay();
    //         songIndex = parseInt(e.target.id);
    //         e.target.classList.remove('fa-circle-play');
    //         e.target.classList.add('fa-circle-pause');
    //         audioElement.src = `Songs/${songIndex+1}.mp3`;
    //         masterSongName.innerText = songs[songIndex].songName;
    //         audioElement.currentTime = 0;
    //         audioElement.play();
    //         gif.style.opacity = 1;
    //         masterPlay.classList.remove('fa-circle-play');
    //         masterPlay.classList.add('fa-circle-pause');
    //     })
    // })
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9)
        songIndex = 0;
    else
        songIndex += 1;
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0)
        songIndex = 9;
    else
        songIndex -= 1;
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})