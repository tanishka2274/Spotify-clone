let songindex=0;
let audioelement= new Audio('song/6.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let mastersongname= document.getElementById('mastersongname');
let songs=[
    {songname:"She's all i wanna be", filepath:"song/1.mp3" , coverpath:"covers/1.jpg"},
    {songname:"Euphoria", filepath:"song/2.mp3" , coverpath:"covers/2.jpg"},
    {songname:"Levitating", filepath:"song/3.mp3" , coverpath:"covers/3.jpg"},
    {songname:"Khwaab", filepath:"song/4.mp3" , coverpath:"covers/4.jpg"},
    {songname:"Control", filepath:"song/5.mp3" , coverpath:"covers/5.jpg"},
    {songname:"I like me better", filepath:"song/6.mp3" , coverpath:"covers/6.jpg"},
    {songname:"Slow motion", filepath:"song/7.mp3" , coverpath:"covers/7.jpg"},
    {songname:"Mon ami", filepath:"song/8.mp3" , coverpath:"covers/8.jpg"},
    {songname:"Filter", filepath:"song/9.mp3" , coverpath:"covers/9.jpg"},
    {songname:"Kabhi kabhi", filepath:"song/10.mp3" , coverpath:"covers/10.jpg"},
    
]
//all cover and song name can be changed using above array
// audioelement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if (audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})

audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    //show % how much song is played
    console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime= myprogressbar.value * audioelement.duration/100;
    //% into current tym----- 100 * (ct/d)=% so----  ct=%*d /100
})

//playing song on play of each song
const makeallplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
         console.log(e.target)
         makeallplays();//agr koi pause ho rkha ho to saro phle play me convert kr de
         songindex=parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioelement.src=`song/${songindex+1}.mp3`;
         mastersongname.innerText=songs[songindex].songname;
         audioelement.currentTime=0;
         audioelement.play();
         masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
//
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>9){
        songindex=0
    }
    else{
        songindex+=1;
    }
    audioelement.src=`song/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
         audioelement.currentTime=0;
         audioelement.play();
         masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex <= 0){
        songindex=0
    }
    else{
        songindex-=1;
    }
    audioelement.src=`song/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
         audioelement.currentTime=0;
         audioelement.play();
         masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})

Array.from(document.getElementsByClassName('likedsong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        const heartIcon = e.currentTarget;

        heartIcon.classList.toggle('liked'); // Toggle the 'liked' class
        if (heartIcon.classList.contains('liked')) {
            heartIcon.style.color = 'green'; // Change color to green when liked
        } else {
            heartIcon.style.color = ''; // Reset color if unliked
        }
    });
});


