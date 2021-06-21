/**
 * Toggle settings tray open
 */
function toggleOpen():void{
    $(".settings-tray").toggleClass("open");
}

/**
 * Toggle class "active" from "e"
 * @param e HTML or JQuery element
 */
function toggleActive(e: HTMLElement|JQuery<HTMLElement>){
    $(".active").toggleClass('active');
    $(e).toggleClass("active");
}

// nav link click event
$(()=>{
    $("#menu a").each((i:number,e:HTMLElement) => {
        $(e).on("click", ()=>{
            toggleActive(e);
        })
    })
})

// Settings btn click event
$(()=>{
    $("#settings-btn").each((i:number,e:HTMLElement) => {
        $(e).on("click", ()=>{
            toggleOpen();
        })
    })
})

$(()=>{
    $('main').on('scroll', ()=>{
        $('.nav-link').each(function(i:number,e:HTMLElement):void{
            let currLink:string = e.getAttribute('href');
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