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

todayDate()
countDown()
