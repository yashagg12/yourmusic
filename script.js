let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.play-paused');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer; 
let songitemss=Array.from(document.getElementsByClassName("songItem"));

const music_list = [
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'music/TheLastRide.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];


function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play-pause')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        // element.classList.add('fa-play-circle');
    })
}
random_bg_color();
Array.from(songitemss).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        random_bg_color();
        document.getElementById('wrapper').style.display="block";
        if(e.target.parentNode.id ==='')
        track_index =e.target.id;
        else
        track_index = e.target.parentNode.id;
        // console.log(track_index);
        // document.getElementsByClassName("play-pause").classList.remove("fa-play-circle");
        document.getElementsByClassName("play-pause")[track_index].classList.add("fa-pause-circle");
        // console.log("yash");
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        loadTrack(track_index);
        playTrack();
        
    })
})
// loadTrack(track_index);
function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (parseInt(track_index) + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    playpause_btn.classList.remove("fa-play-circle");
    playpause_btn.classList.add("fa-pause-circle");
    wave.classList.add('loader');
    document.getElementsByClassName("play-pause")[track_index].classList.remove("fa-play-circle");
        document.getElementsByClassName("play-pause")[track_index].classList.add("fa-pause-circle");
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    playpause_btn.classList.add("fa-play-circle");
    playpause_btn.classList.remove("fa-pause-circle");
    wave.classList.remove('loader');
    document.getElementsByClassName("play-pause")[track_index].classList.add("fa-play-circle");
        document.getElementsByClassName("play-pause")[track_index].classList.remove("fa-pause-circle");

}
// Array.from.getElementsByClassName()
function nextTrack(){
    document.getElementsByClassName("play-pause")[track_index].classList.remove("fa-pause-circle");
    document.getElementsByClassName("play-pause")[track_index].classList.remove("fa-play-circle");
    // makeAllPlays();
    if(track_index < music_list.length - 1){
        track_index =parseInt(track_index)+1;
    }
    else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
    // makeAllPlays();
}
function prevTrack(){
    document.getElementsByClassName("play-pause")[track_index].classList.remove("fa-play-circle");
    document.getElementsByClassName("play-pause")[track_index].classList.remove("fa-pause-circle");
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

songitemss.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=music_list[i].img;
    element.getElementsByClassName("songName")[0].innerText=music_list[i].name;
});

function myFunction() {
    var x = document.getElementById("wrapper");
    var y = document.getElementById("songList");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display ="block"
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }