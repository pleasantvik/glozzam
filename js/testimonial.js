const testimonials = document.getElementById('testimonials')

const slide = document.querySelectorAll('.carousel__test-1')

let idx = 0

let timer = setInterval(run, 3000)

// console.log(slide2)

function run() {
  idx++

  changeSlider()
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(run, 3000)
}

// CHANGE THE CAROUSEL SLIDER
function changeSlider() {
  if (idx > slide.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = slide.length - 1
  }

  testimonials.style.transform = `translateX(${-idx * 100}%)`
}

// leftBtn.addEventListener('click', () => {
//   idx--
//   changeSlider()
//   resetTimer()
// })
// rightBtn.addEventListener('click', () => {
//   idx++
//   changeSlider()
//   resetTimer()
// })
