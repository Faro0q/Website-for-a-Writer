$(function () {

    // ---------------------------------------------- //
    // Navbar
    // ---------------------------------------------- //

    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });


    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    // ------------------------------------------------------ //
    // Portfolio script to appear and dissapear
    // ------------------------------------------------------ //
//     $(document).ready(function(){
//         $(".dropdown-menu a").on("click",function(){
//          var iddiv =  $(this).attr("id") ;
//              $(".box").hide();
//              $("."+iddiv).show();
//                 });
//      });


    // ------------------------------------------------------ //
    // navbar
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, {
                expires: 365,
                path: document.URL.substr(0, document.URL.lastIndexOf('/'))
            });

        }

        return false;
    });

});

// Made each tab obect have a # on the url
$('a[data-toggle="pill"]').on('click', function (e) {
    var target = this.href.split('#');
    $('.nav a').filter('a[href="#'+target[1]+'"]').tab('show');
})


    // ------------------------------------------------------ //
    // enlarge the image
    // ------------------------------------------------------ //
    // 
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    

 // ------------------------------------------------------ //
    // enlarge the image
    // ------------------------------------------------------ //
    // 
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg1");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
    
    
     // ------------------------------------------------------ //
    // enlarge the image
    // ------------------------------------------------------ //
    // 
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg2");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
    
    
     // ------------------------------------------------------ //
    // enlarge the image
    // ------------------------------------------------------ //
    // 
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg3");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
    
    
     // ------------------------------------------------------ //
    // enlarge the image
    // ------------------------------------------------------ //
    // 
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg4");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
    
         // ------------------------------------------------------ //
    // enlarge the image
    // ------------------------------------------------------ //
    // 
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg5");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }