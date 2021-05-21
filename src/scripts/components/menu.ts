const changeActiveEl = (e: JQuery<HTMLElement>): void => {
  $('.active').toggleClass('active');
  $(e).toggleClass('active');
}

const toggleTrayOpen = () => {
  $('.settings-tray').toggleClass('open')
}
const toggleMobileMenu = () => {
  $('#mobile-menu').toggleClass('open')
}

document.addEventListener('mouseup', ()=>{
  if ($('.settings-tray').hasClass('open')) {
    $('.settings-tray').removeClass('open');
  }
})


$(function(){
  $('main').on('scroll', ()=>{
    $('.nav-link').each(function(){
      let currLink = this.getAttribute('href')
      if ( $(currLink).offset().top <= ( $('#main').scrollTop() - $('#menu').offset().top )) {
        changeActiveEl($(`a[href="${currLink}"]`))
      }
    })
  })
})