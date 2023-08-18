let musics = [
    {
        name : "Set Fire To The Rain",
        cover: "images/4.jfif",
        audio : new Audio("./music/set-fire.mp3")
    },
    {
        name : "Ready For It",
        cover: "images/tailor-swift.jpg",
        audio : new Audio("./music/ready for it.mp3")
    },
    {
        name : "Rolling In The Deep",
        cover: "images/3.png",
        audio : new Audio("./music/someone like you.mp3")
    },
    {
        name : "Someone Like You",
        cover: "images/6.jfif",
        audio : new Audio("./music/rolling in the deep.mp3")
    },
    {
        name : "english",
        cover: "images/5.jfif",
        audio : new Audio("./music/34.wma")
    }


 ]

let range = document.querySelector("#musics-time")
let playBtn = document.querySelector("#play-btn")
let preBtn = document.querySelector("#pre-btn")
let nextBtn = document.querySelector("#next-btn")
let musicCover = document.querySelector("#musics-cover")
let musicName = document.querySelector("#musics-name")

let currentMusic = 0;
let audio = musics[currentMusic].audio//موسیقی مربوط به این ایندکس بیرون می کشم.
musicCover.src = musics[currentMusic].cover//srcتصویر رو ست می کنم
musicName.innerText = musics[currentMusic].name

audio.addEventListener("canplay" ,() => {
    console.log(audio.duration)
    range.max = audio.duration//طول موزیک

})

audio.addEventListener("timeupdate" , () =>{
    range.value = audio.currentTime
})
range.addEventListener("input" , () =>{
    audio.currentTime = range.value 
}) 

playBtn.addEventListener("click" , () =>{
    if(audio.paused){
        audio.play()
        musicCover.style.animationPlayState ="running"
        playBtn.classList.replace("fa-play","fa-pause")
    }else{
        audio.pause()
        musicCover.style.animationPlayState ="paused"
        playBtn.classList.replace("fa-pause","fa-play")
    }
})

nextBtn.addEventListener("click", () => {
    changeMusic("next")
})
preBtn.addEventListener("click",()=>{
    changeMusic("pre")
})

function changeMusic(state){
    audio.pause()//ابتدا باید موزیک متوقف شود.
    range.value = 0//رنج به نقطه ابتدا برگرده
    playBtn.classList.replace("fa-pause","fa-play")
    musicCover.style.animationPlayState = "paused" 
    audio.currentTime = 0
    if(state == "next"){
        if(currentMusic == musics.length -1)
           currentMusic = 0
        else currentMusic +=1
    }else{//یعنی حالت پری یعنی به عقب برمی گردیم
        if(currentMusic == 0)//اگر به نقطه ی شروع رسیده بودیم
           currentMusic = musics.length -1//باید بریم به اخرین موزیک
        else currentMusic -=1//اگر به ابتدا نرسیدیم یکی ازش کم کن
    }


audio = musics[currentMusic].audio
musicCover.src = musics[currentMusic].cover
musicName.innerText = musics[currentMusic].name 

audio.addEventListener("timeupdate" , () =>{
    range.value = audio.currentTime
})

}


