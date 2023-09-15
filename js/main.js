var allMovies = [];

$(document).ready(function () {
    // THE API PART



    var getMoviesRequest = new XMLHttpRequest();
    // ESTABLISHING A CONNECTION BETWEEN YOU AND THE BACKEND 
    getMoviesRequest.open("GET", 'https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');

    getMoviesRequest.send();
    getMoviesRequest.addEventListener('readystatechange', function () {
        if (getMoviesRequest.readyState == 4 && getMoviesRequest.status == 200) {
            allMovies = JSON.parse(getMoviesRequest.response).results;
            console.log(allMovies);

            displayAllMovies();

        }

    })






    const sidebarPartW = $('.SideBarPart').outerWidth();

    const listItemH = $('li').outerHeight();

    const ulHeight = $('ul').outerHeight();


    $('.sideBarMenuTogglePart i').click(function () {


        if ($('.SideBarPart').css('left') == "0px") {
            $('.SideBarPart').animate({ left: -sidebarPartW }, 1000);
            $('.fa-xmark').attr('class', 'fa-bars');


            setTimeout(function () {
                $('.one').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity': '0'


                });
            }, 1000);


            setTimeout(function () {
                $('.two').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity': '0'

                });
            }, 900);

            setTimeout(function () {
                $('.three').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity': '0'

                });
            }, 800);

            setTimeout(function () {
                $('.four').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity': '0'

                });
            }, 700);

            setTimeout(function () {
                $('.five').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity': '0'


                });
            }, 600);

            setTimeout(function () {
                $('.six').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity': '0'

                });
            }, 500);




        }
        else {
            $('.SideBarPart').animate({ left: 0 }, 1000);
            $('.fa-bars').attr('class', 'fa-solid fa-xmark fa-xl');




            setTimeout(function () {
                $('.six').css({
                    'transform': `translateY(10px)`,
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
            }, 1000);


            setTimeout(function () {
                $('.five').css({
                    'transform': `translateY(10px)`,
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
            }, 900);

            setTimeout(function () {
                $('.four').css({
                    'transform': `translateY(10px)`,
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
            }, 800);

            setTimeout(function () {
                $('.three').css({
                    'transform': `translateY(10px)`,
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
            }, 700);

            setTimeout(function () {
                $('.two').css({
                    'transform': `translateY(10px)`,
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
            }, 600);

            setTimeout(function () {
                $('.one').css({
                    'transform': `translateY(10px)`,
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
            }, 500);






















        }

    })





    //----------TO TOP BUTTON
    // MAKING THE BUTTON DISAPPEAR ONCE WE REACH THE TOP

    const topSpaceFromSection = $('#theSeparator').offset().top;

    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > topSpaceFromSection) {

            $('.backToTop').fadeIn(500).css('display', 'flex');

        }
        else {

            $('.backToTop').fadeOut(500).css('display', 'flex');

        }


    });

    
    
    
    
    // SCROLLING TO THE TOP BUTTON FUNCTIONALITY
    $('.backToTop').click(function () {
        $(window).scrollTop(0);
    })




    //============================




















})

// DISPLAYING ALL MOVIES FUNCTION
function displayAllMovies() {
    var cartona = "";

    for (var i = 0; i < allMovies.length; i++) {

        cartona += `
        
    <div class="col-md-4">
        <div class="movieContainer bg-info">
            <div class="imageContainer bg-danger">
                <img class="testImage img-fluid" src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}"
                    alt="profile" />
           
            </div>



        </div>


    </div>`

    }

    document.querySelector('.row').innerHTML = cartona;

}









