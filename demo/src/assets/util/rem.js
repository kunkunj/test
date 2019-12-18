/* eslint-disable no-unused-expressions */
function setFontSize () {
  // 获取window 宽度 sss
  // zepto实现 $(window).width()就是这么干的
  var winWidth = window.innerWidth
  winWidth = winWidth > 750 ? 750 : winWidth

  document.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px'
}!(function (win, doc) {
  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize'
  var timer = null
  win.addEventListener(evt, function () {
    clearTimeout(timer)
    timer = setTimeout(setFontSize, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(timer)
      timer = setTimeout(setFontSize, 300)
    }
  }, false)
  // 初始化
  setFontSize()
}(window, document))

window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  var lastTouchEnd = 0
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)

  setTimeout(setFontSize, 300)
}
