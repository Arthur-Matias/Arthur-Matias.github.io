/**
 * Toggle settings tray open
 */
function toggleOpen(){
    $(".settings-tray").toggleClass("open");
}

/**
 * Toggle class "active" from "e"
 * @param e HTML or JQuery element
 */
export function toggleActive(e){
    $(".active").toggleClass('active');
    $(e).toggleClass("active");
}

// nav link click event
$(()=>{
    $("#menu a").each((i,e) => {
        $(e).on("click", ()=>{
            toggleActive(e);
        })
    })
})

// Settings btn click event
$(()=>{
    $("#settings-btn").each((i,e) => {
        $(e).on("click", ()=>{
            toggleOpen();
        })
    })
})

$(()=>{
    $('main').on('scroll', ()=>{
        console.log($("main").scrollTop())
        $('.nav-link').each(function(i,e){
            let currLink = e.getAttribute('href')
        if ( $(currLink).offset().top <= $('main').scrollTop()) {
            if(currLink === "#contact" && ($("main").scrollTop() < 1650)){
                currLink = "#portfolio";
            }
            toggleActive($(`a[href="${currLink}"]`))
        }
      })
    })
  })

$(()=>{
    $('.btn').on("click", ()=>{
        $(".btn").toggleClass("active")
        $('#menu').toggleClass("active")
    })
})