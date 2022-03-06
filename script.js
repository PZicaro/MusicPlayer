let music = document.querySelector('audio')
const playButton = document.querySelector('.play-button')
const pauseButton = document.querySelector ('.pause-button')
const nextButton = document.querySelector('.next-button')
const backButton = document.querySelector('.back-button')
const nameMusic = document.querySelector('h2')
const image = document.querySelector('.image-music')
let indexMusic =[]
let allMusics =[
    {title:'Have it All', 
    image:'imagens/haveItAll.jpg', 
    src:'song/X2Download.com - Have It All (Official Lyric Video) - Brian Johnson _ Have It All (128 kbps).mp3'},

    {title:'Funeral', 
    image:'imagens/funeral.jpg', 
    src:'song/X2Download.com - Leanna Crawford - Funeral (Official Lyric Video) (128 kbps).mp3'}



]


function musicPlayer(){
    
music.addEventListener('timeupdate', updateBar)

playButton.addEventListener('click', startMusic)

pauseButton.addEventListener('click', pauseMusic)



backButton.addEventListener('click', () => {
    indexMusic=indexMusic-1
    changeMusic(indexMusic)
})
nextButton.addEventListener('click', ()=>{
   indexMusic= indexMusic+1
    changeMusic(indexMusic)
})
}



function startMusic(){
    music.play()
    playButton.style.display='none'
    pauseButton.style.display='block'
}

function pauseMusic(){
    music.pause()
    playButton.style.display='block'
    pauseButton.style.display='none'
}

function updateBar(){
const bar = document.querySelector('.progress')
bar.style.width = (music.currentTime / music.duration * 100 + '%')
const timeRunning = document.querySelector('.now')
timeRunning.textContent=convertseconds( Math.floor( music.currentTime))

const musicEnd = document.querySelector('.end')
musicEnd.textContent= convertseconds( Math.floor( music.duration))
}

function convertseconds(seconds){
    const minuteCamp = Math.floor(seconds/60)
    let secondsCamp = Math.floor( seconds % 60 )
    if (secondsCamp<10){
        secondsCamp= '0' + secondsCamp
    }
    return minuteCamp+ ':' + secondsCamp
}
function changeMusic(){
    const musicEnd = document.querySelector('.end')
    music.setAttribute ('src', allMusics[indexMusic].src)
    music.addEventListener('loadeddata', ()=>{
        nameMusic.textContent=allMusics[indexMusic].title
        image.src= allMusics[indexMusic].image
        musicEnd.textContent= convertseconds( music.duration)
    
    })
    }
    

musicPlayer()