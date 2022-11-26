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
        img : 'images/1.jfif',
        name : '3 Peg',
        artist : 'Sharry Maan',
        music : 'music/1.m4a'
    },
    {
        img : 'images/2.jfif',
        name : 'Brown Munde',
        artist : 'AP Dhillon ',
        music : 'music/2.m4a'
    },
    {
        img : 'images/3.jfif',
        name : '295',
        artist : 'Sidhu Moosewaala',
        music : 'music/3.m4a'
    },
    {
        img : 'images/4.jfif',
        name : 'Game',
        artist : 'Sidhu Moosewaala',
        music : 'music/4.m4a'
    },
    {
        img : 'images/5.jfif',
        name : 'Elevated',
        artist : 'Shubh',
        music : 'music/5.m4a'
    },
    {
        img : 'images/6.jfif',
        name : 'Phulkari',
        artist : 'Karan Randhawa',
        music : 'music/6.m4a'
    },
    {
        img : 'images/7.jfif',
        name : '8 Parche',
        artist : 'Baani Sandhu',
        music : 'music/7.m4a'
    },
    {
        img : 'images/8.jfif',
        name : '12 Bande',
        artist : 'Varinder Brar',
        music : 'music/8.m4a'
    },
    {
        img : 'images/9.jfif',
        name : 'GOAT',
        artist : 'Sidhu Moosewaala',
        music : 'music/9.m4a'
    },
    {
        img : 'images/10.jfif',
        name : 'Daku',
        artist : 'Inderpal Moga',
        music : 'music/10.m4a'
    },
    {
        img : 'images/12.jfif',
        name : 'Bapu Zimidar',
        artist : 'Jassi Gill',
        music : 'music/12.m4a'
    },
    {
        img : 'images/11.jfif',
        name : 'Patiala Peg',
        artist : 'Diljit Dosanjh',
        music : 'music/11.m4a'
    },
    {
        img : 'images/13.jfif',
        name : '8 raflaan',
        artist : 'Mankirt Aulakh ',
        music : 'music/13.m4a'
    },
    {
        img : 'images/14.jfif',
        name : 'Distance Love',
        artist : 'Zehr Vibe',
        music : 'music/14.m4a'
    },
    {
        img : 'images/15.jfif',
        name : 'The Last Ride',
        artist : 'Sidhu Moosewaala',
        music : 'music/15.m4a'
    },
    {
        img : 'images/16.jfif',
        name : 'We Rollin',
        artist : 'Shubh',
        music : 'music/16.m4a'
    },
    {
        img : 'images/17.jfif',
        name : 'Diamond',
        artist : 'Gurnam Bhullar',
        music : 'music/17.m4a'
    },
    {
        img : 'images/18.jfif',
        name : 'Bhalwani Gedi',
        artist : 'Jassa Dhillon',
        music : 'music/18.m4a'
    },
    {
        img : 'images/19.jfif',
        name : 'Baapu',
        artist : 'Sidhu Moosewaala',
        music : 'music/19.m4a'
    },
    {
        img : 'images/20.jfif',
        name : 'Aadat',
        artist : 'Ninja',
        music : 'music/20.m4a'
    },
    {
        img : 'images/21.jfif',
        name : 'Main Vechara',
        artist : 'Armaan Bedil',
        music : 'music/21.m4a'
    },
    {
        img : 'images/22.jfif',
        name : 'Udd Gya',
        artist : 'B Praak',
        music : 'music/22.m4a'
    },
    {
        img : 'images/23.jfif',
        name : 'Bhabhi',
        artist : 'Mankirt Aulakh',
        music : 'music/23.m4a'
    },
    {
        img : 'images/24.jfif',
        name : 'Chan Vekheya',
        artist : 'Harnoor',
        music : 'music/24.m4a'
    },
    {
        img : 'images/25.jfif',
        name : 'Chitta Kurta',
        artist : 'Karan Aujla',
        music : 'music/25.m4a'
    },
    {
        img : 'images/26.jfif',
        name : 'Death Route',
        artist : 'Sidhu Moosewaala',
        music : 'music/26.m4a'
    },
    {
        img : 'images/27.jfif',
        name : 'Lahore',
        artist : 'Guru Randhawa',
        music : 'music/27.m4a'
    },{
        img : 'images/28.jfif',
        name : 'Hostel',
        artist : 'Sharry Maan',
        music : 'music/28.m4a'
    },
    {
        img : 'images/29.jfif',
        name : 'Jhanjhar',
        artist : 'Karan Aujla',
        music : 'music/29.m4a'
    },
    {
        img : 'images/30.jfif',
        name : 'Judge',
        artist : 'Mankirt Aulakh',
        music : 'music/30.m4a'
    },
    {
        img : 'images/31.jfif',
        name : 'Just Listen',
        artist : 'Sidhu Moosewaala',
        music : 'music/31.m4a'
    },
    {
        img : 'images/33.jfif',
        name : 'Khaab',
        artist : 'Akhil',
        music : 'music/33.m4a'
    },
    {
        img : 'images/34.jfif',
        name : 'Ki Krde Je',
        artist : 'Nimrat Khaira',
        music : 'music/34.m4a'
    },
    {
        img : 'images/35.jfif',
        name : 'Laare',
        artist : 'Maninder Bhuttar',
        music : 'music/35.m4a'
    },
    {
        img : 'images/36.jfif',
        name : 'Legend',
        artist : 'Sidhu Moosewaala',
        music : 'music/36.m4a'
    },
    {
        img : 'images/37.jfif',
        name : 'Levels',
        artist : 'Sidhu Moosewaala',
        music : 'music/37.m4a'
    },
    {
        img : 'images/38.jfif',
        name : 'Libaas',
        artist : 'Kaka',
        music : 'music/38.m4a'
    },
    {
        img : 'images/39.jfif',
        name : 'Mai Teri Ho Gyi',
        artist : 'Millind Gaba',
        music : 'music/39.m4a'
    },
    {
        img : 'images/40.jfif',
        name : 'Mera Yaar',
        artist : 'Gurnaam Bhullar',
        music : 'music/40.m4a'
    },
    {
        img : 'images/41.jfif',
        name : 'Mere Beliya Ve',
        artist : 'Gurnam Bhullar',
        music : 'music/41.m4a'
    },
    {
        img : 'images/42.jfif',
        name : 'Mere Wala Sardar',
        artist : 'Jugraj',
        music : 'music/42.m4a'
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
        element.classList.remove('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
random_bg_color();
loadTrack(0);
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
        var x = window.matchMedia("(max-width: 768px)")
        if(x.matches)
        {
            document.getElementById("wrapper").style.display="block";
            document.getElementById("songList").style.display="none";
            document.getElementById("hammburger").style.display="block";
            
        }
        
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
      x.style.display = "none";
      y.style.display ="block"
      document.getElementById("hammburger").style.display="none";
    }
  
