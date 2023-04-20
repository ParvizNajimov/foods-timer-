// carousel

const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')


let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {
    
    if(slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    if(slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    current.innerHTML = slideIndex + 1

    slides.forEach(el => el.style.display = "none")
    
    slides[slideIndex].style.display = "block"
    slides[slideIndex].classList.add('fade')
   

}


offer__slider_next.onclick = () => {
    slideIndex++

    showSlides(slideIndex)
}
offer__slider_prev.onclick = () => {
    slideIndex--

    showSlides(slideIndex)
}





let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
}) 




let call = document.querySelectorAll('.btn')
let modal = document.querySelector('.modaal')
let modal_bg = document.querySelector('.modal_bg')


  call.forEach((i) => {
    i.onclick = () => {
        modal.style.display ='block'   
        modal_bg.style.display ='block'   
     }
  })

  modal_bg.onclick = () => {
    modal.style.display ='none'   
    modal_bg.style.display ='none'   
 }


let btnss = document.querySelectorAll('.calculating__choose_big  .calculating__choose-item')



btnss.forEach(btn => {
    
    btn.onclick = () => {
        btnss.forEach(b => b.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})




const deadLine = '2023-04-20 00:00'

function getTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.round((t/1000)/60/60/24),
    hours = Math.round((t/100)/60/60 % 24),
    minutes = MAth.round((t/1000)/60%60),
    seconds = MAth.round((t/1000) %60);




  return {
    t,
    days,
    hours,
    minutes, 
    seconds

  }


}

function showTime(endTime , selector) {
    const timer = document.querySelector(selector),
//     days = timer.querySelector('#days'),
//     hours = timer.querySelector('#hours'),
//    minutes   = timer.querySelector('#minutes'),
//    seconds = timer.querySelector('#seconds'),
    interval = setInterval(setTime, 1000);



function setTime() {
    const getTime = getTime(endTime)
   days.innerHTML = t.days 
   hours.innerHTML = t.hours 
   minutes.innerHTML = t.minutes 
   seconds.innerHTML = t.seconds 
}

}

showTime(deadLine , 'timer')

let days  = document.querySelector('#days')
let hours  = document.querySelector('#hours')
let minutes  = document.querySelector('#minutes')
let seconds  = document.querySelector('#seconds')