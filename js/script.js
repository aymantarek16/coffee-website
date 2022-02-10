// Start J.s

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');  
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// End J.s



// Start Jquery
  // Loading Page Befor Load Main Page
  $(window).on("load", function () {
    $(".loader").fadeOut("2000");
    $(".content").fadeIn("2000");
  });


  $(document).ready(function(){
    //   Change bg of Navbar
    $(window).scroll(()=>{
        let scroll_top = $(window).scrollTop();
        if(scroll_top > 10){
            $(".header").addClass("header2")
        }
        else{
            $(".header").removeClass("header2")

        }
    })
  
  })

// End Jquery
