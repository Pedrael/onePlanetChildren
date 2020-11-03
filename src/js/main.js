function todayDate() {
  let date = new Date()
  let item = document.querySelector('#today-date')
  if(!item) return
  //console.log(date)
  let months =
  ['января',
  'феваля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря']

  let textDate = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года'
  item.innerHTML = textDate
}

function countDown() {
  let min = document.querySelector('#min')
  let sec = document.querySelector('#sec')
  if(!min || !sec) return
  let min_ = min.innerHTML
  let sec_ = sec.innerHTML

  let timerId = setInterval(() => {
    sec_--
    if(sec_ == -1) {
      sec_ = 59
      min_--
      if(min_ == -1) {
        min_ = 0
        sec_ = 0
        clearInterval(timerId)
      }

      min.innerHTML = min_
    }
    sec.innerHTML = sec_
  }, 1000)
}

function animateLoading() {
  let l_progress = document.querySelector('#loading-progress')
  let l_value = document.querySelector('#loading-value')
  if(!l_progress || !l_value) return
  let l_width = l_progress.offsetWidth
  let i = 1
  let timerId = setInterval(() => {
    l_value.innerHTML ='загрузка: ' + i + '%'
    l_progress.style.left = -100 + i*0.9 + '%'
    i++
    if(i == 99) clearInterval(timerId)
  }, 6)
  // for(let i = 1; i < 99; i++) {
  //   l_value.innerHTML ='загрузка: ' + i + '%'
  //   l_progress.style.left = -100 + i*0.9 + '%'
  // }
}

function togglePopup() {
  let open = document.querySelectorAll('.js-open-popup')
  let popup = document.querySelector('.popup-message')
  let close = popup.querySelector('.js-close-popup')
  if(!open || !popup || !close) return
  if(open != null) {
    open.forEach((i) => {
      i.addEventListener('click', (e) => {
        e.preventDefault()
        popup.style.display = 'flex'
      })
    })
  }

  if(close != null) {
    close.addEventListener('click', () => {
      popup.style.display = 'none'
    })
  }

  // let switchItem = popup.querySelector('.switch')
  // if(switchItem != null) switchItem.addEventListener('click', () => {
  //   let switches = switchItem.querySelectorAll('.switch-btn')
  //   switches.forEach((sw) => {
  //     sw.classList.toggle('switched')
  //   })
  //   popup.querySelector('.social-if').classList.toggle('disabled')
  //   popup.querySelector('.contact-if').classList.toggle('disabled')
  // })
}

todayDate()
countDown()
animateLoading()
togglePopup()
