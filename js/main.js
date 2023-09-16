var allMovies = [];
var popularMovies = [];
var topRatedMovies = [];
var trendingMovies = [];
var upComingMovies = [];
var searchedMovies = [];

//======================FORM INPUT=====================

var nameInput = $('#fname');
var emailInput = $('#email');
var phoneInput = $('#phone');
var ageInput = $('#age');
var passwordInput = $('#password');
var rpasswordInput = $('#rpassword');

var submitButton = $('.submitBtn');

function validateName() {
    var nameRegex = /^[A-Za-z]+$/;
    var inputValue = nameInput.val(); // Get the value of the input field
    var nameRegexRes = nameRegex.test(inputValue);

    // want to display the result in the next element
    nameInput.next().html(nameRegexRes ? "" : "Invalid Name, only Characteres allowed").fadeIn(1000, function () {
        nameInput.css({
            "border-bottom": "2px solid red"
        })
    });
    return nameRegexRes;
}




function validateEmail() {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var inputValue = emailInput.val(); // Get the value of the input field
    var emailRegexRes = emailRegex.test(inputValue);

    // want to display the result in the next element
    emailInput.next().html(emailRegexRes ? "" : "Invalid Email, try example@domain.com").fadeIn(3000);
    return emailRegexRes;





}

function validatePhone() {
    var phoneRegex = /^(010|012)\d{8}$/;
    var inputValue = phoneInput.val(); // Get the value of the input field
    var phoneRegexRes = phoneRegex.test(inputValue);

    // want to display the result in the next element
    phoneInput.next().html(phoneRegexRes ? "" : "Invalid Phone Number").fadeIn(3000);
    return phoneRegexRes;
}

function validateAge() {
    var ageRegex = /^(1[7-9]|[2-9]\d+)$/;
    var inputValue = ageInput.val(); // Get the value of the input field
    var ageRegexRes = ageRegex.test(inputValue);

    // want to display the result in the next element
    ageInput.next().html(ageRegexRes ? "" : "Your age musr be over 16+").fadeIn(3000);
    return ageRegexRes;


}

function validatePassword() {
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
    var inputValue = passwordInput.val(); // Get the value of the input field
    var passwordRegexRes = passwordRegex.test(inputValue);

    // want to display the result in the next element
    passwordInput.next().html(passwordRegexRes ? "" : "Password should contain numbers and letters and atleast 8 characters").fadeIn(3000);
    return passwordRegexRes;

}

function validateRPassword() {
    passwordInput.next().html((passwordInput.val() == rpasswordInput.val()) ? "" : "passwords do not match").fadeIn(3000);

    return(passwordInput.val() == rpasswordInput.val());

}

// ANIMATING THE INPUT BUTTON IN CASE ANY OF THE INPUTS ARE WRONG
// this was for some reason diffiult for me
function animateBtn() {

    var res = validateName() && validateEmail() && validatePhone() && validateAge() && validatePassword() && validateRPassword();
    console.log(res);
    console.log(validateName());
    console.log(validateEmail());
    console.log(validatePhone());
    console.log(validateAge());
    console.log(validatePassword());
    console.log(validateRPassword());
    

    if (res == false) {
        console.log("entered the scope of the if statement");
        $(function () {
            $(".submitBtn").on({
                mouseover: function () {
                    $(this).css({
                        left: (Math.random() * 200) + "px",
                        //   top: (Math.random() * 200) + "px",
                    });
                }
            });
        });

    }





   



}








// animateButton(test);



//=====================================================













function searchMoviesMethod(term) {


    var searchMoviesRequest = new XMLHttpRequest();
    // ESTABLISHING A CONNECTION BETWEEN YOU AND THE BACKEND 
    searchMoviesRequest.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${term}`);

    searchMoviesRequest.send();
    searchMoviesRequest.addEventListener('readystatechange', function () {
        if (searchMoviesRequest.readyState == 4 && searchMoviesRequest.status == 200) {

            searchedMovies = JSON.parse(searchMoviesRequest.response).results;
            console.log(searchedMovies);

            displaySearchedMovies();



        }

    })
}



$(document).ready(function () {
    // THE API PART



    var getMoviesRequest = new XMLHttpRequest();
    // ESTABLISHING A CONNECTION BETWEEN YOU AND THE BACKEND 


    getMoviesRequest.open("GET", 'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44');

    getMoviesRequest.send();
    getMoviesRequest.addEventListener('readystatechange', function () {
        if (getMoviesRequest.readyState == 4 && getMoviesRequest.status == 200) {
            allMovies = JSON.parse(getMoviesRequest.response).results;
            console.log(allMovies);

            displayAllMovies();











        }

    })


    //===========================================================================================







    //============================================================================================

    $('.two').click(function () {
        var getPopularMoviesRequest = new XMLHttpRequest();
        getPopularMoviesRequest.open("GET", 'https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
        getPopularMoviesRequest.send();
        getPopularMoviesRequest.addEventListener('readystatechange', function () {
            if (getPopularMoviesRequest.readyState == 4 && getPopularMoviesRequest.status == 200) {
                popularMovies = JSON.parse(getPopularMoviesRequest.response).results;
                console.log(popularMovies);

                displayPopularMovies();











            }

        })

    })

    $('.three').click(function () {
        var gettopRatedMoviesRequest = new XMLHttpRequest();
        gettopRatedMoviesRequest.open("GET", 'https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
        gettopRatedMoviesRequest.send();
        gettopRatedMoviesRequest.addEventListener('readystatechange', function () {
            if (gettopRatedMoviesRequest.readyState == 4 && gettopRatedMoviesRequest.status == 200) {
                topRatedMovies = JSON.parse(gettopRatedMoviesRequest.response).results;
                console.log(topRatedMovies);

                displaytopRatedMovies();











            }

        })

    })

    $('.four').click(function () {
        var getTrendingMoviesRequest = new XMLHttpRequest();
        getTrendingMoviesRequest.open("GET", 'https://api.themoviedb.org/3/trending/movie/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
        getTrendingMoviesRequest.send();
        getTrendingMoviesRequest.addEventListener('readystatechange', function () {
            if (getTrendingMoviesRequest.readyState == 4 && getTrendingMoviesRequest.status == 200) {
                popularMovies = JSON.parse(getTrendingMoviesRequest.response).results;
                console.log(trendingMovies);

                displayTrendingMovies();











            }

        })

    })

    $('.five').click(function () {
        var getUpcomingMoviesRequest = new XMLHttpRequest();
        getUpcomingMoviesRequest.open("GET", 'https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
        getUpcomingMoviesRequest.send();
        getUpcomingMoviesRequest.addEventListener('readystatechange', function () {
            if (getUpcomingMoviesRequest.readyState == 4 && getUpcomingMoviesRequest.status == 200) {
                UpcomingMovies = JSON.parse(getUpcomingMoviesRequest.response).results;
                console.log(UpcomingMovies);

                displayUpcomingMovies();











            }

        })

    })
















    //=============================================================================================






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
                    <div class="movieContainer">
                        <div class="imageContainer">
                            <img class="testImage img-fluid"
                                src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}" alt="profile" />

                            <div class="imageLayer">
                                <h1 class="text-center py-4">${allMovies[i].original_title}</h1>
                                <p>${allMovies[i].overview}</p>
                                <span>${allMovies[i].release_date} <span>
                            </div>

                        </div>





                    </div>


                </div>



        
        
    `

    }

    document.querySelector('.row').innerHTML = cartona;

    //place 1
    // THE HOVERING ANIMATION
    $(".imageContainer").hover(
        function () {
            // On hover in
            var $imageLayer = $(this).children('.imageLayer');

            $imageLayer.fadeIn(1000);

            $(this).children('img').css({

                "transform": "scale(1.7) rotate(10deg)",
                "transition": "all 1s"


            })


            // Reset the position properties to their initial values
            $imageLayer.children('h1').fadeIn(1000).animate({
                "bottom": "0",
                "right": "0"
            }, 500);
            $imageLayer.children('p').fadeIn(1000).css("right", "0");
            $imageLayer.children('span').fadeIn(1000).animate({
                "top": "0",
                "right": "0"
            }, 500);
        },
        function () {
            // On hover out
            var $imageLayer = $(this).children('.imageLayer');
            $(this).children('img').css({

                "transform": "scale(1) rotate(0deg)",
                "transition": "all 1s"


            })

            // Reset the position properties to their initial values and hide elements
            $imageLayer.css({
                "overflow": "hidden",
                "background-color": "transparent"
            });

            $imageLayer.children('h1').animate({
                "right": "100%"

            }).animate({
                "bottom": "100%", // Reset bottom
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);

            $imageLayer.children('p').animate({
                "right": "100%"

            }).css("right", "initial").fadeOut(1000); // Reset right and hide
            $imageLayer.children('span').animate({
                "right": "100%"

            }).animate({
                "top": "100%", // Reset top
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);
        }
    );














}

// DISPLAYING POPULAR MOVIES FUNCTION

function displayPopularMovies() {
    var cartona = "";

    for (var i = 0; i < popularMovies.length; i++) {

        cartona += `
        <div class="col-md-4">
                    <div class="movieContainer">
                        <div class="imageContainer">
                            <img class="testImage img-fluid"
                                src="https://image.tmdb.org/t/p/w500/${popularMovies[i].poster_path}" alt="profile" />

                            <div class="imageLayer">
                                <h1 class="text-center py-4">${popularMovies[i].original_title}</h1>
                                <p>${popularMovies[i].overview}</p>
                                <span>${popularMovies[i].release_date} <span>
                            </div>

                        </div>





                    </div>


                </div>



        
        
    `

    }

    document.querySelector('.row').innerHTML = cartona;

    //place 1
    // THE HOVERING ANIMATION
    $(".imageContainer").hover(
        function () {
            // On hover in
            var $imageLayer = $(this).children('.imageLayer');

            $imageLayer.fadeIn(1000);

            $(this).children('img').css({

                "transform": "scale(1.7) rotate(10deg)",
                "transition": "all 1s"


            })


            // Reset the position properties to their initial values
            $imageLayer.children('h1').fadeIn(1000).animate({
                "bottom": "0",
                "right": "0"
            }, 500);
            $imageLayer.children('p').fadeIn(1000).css("right", "0");
            $imageLayer.children('span').fadeIn(1000).animate({
                "top": "0",
                "right": "0"
            }, 500);
        },
        function () {
            // On hover out
            var $imageLayer = $(this).children('.imageLayer');
            $(this).children('img').css({

                "transform": "scale(1) rotate(0deg)",
                "transition": "all 1s"


            })

            // Reset the position properties to their initial values and hide elements
            $imageLayer.css({
                "overflow": "hidden",
                "background-color": "transparent"
            });

            $imageLayer.children('h1').animate({
                "right": "100%"

            }).animate({
                "bottom": "100%", // Reset bottom
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);

            $imageLayer.children('p').animate({
                "right": "100%"

            }).css("right", "initial").fadeOut(1000); // Reset right and hide
            $imageLayer.children('span').animate({
                "right": "100%"

            }).animate({
                "top": "100%", // Reset top
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);
        }
    );














}

//DISPLAYING TRENDING MOVIES FUNCTION
function displayTrendingMovies() {
    var cartona = "";

    for (var i = 0; i < trendingMovies.length; i++) {

        cartona += `
        <div class="col-md-4">
                    <div class="movieContainer">
                        <div class="imageContainer">
                            <img class="testImage img-fluid"
                                src="https://image.tmdb.org/t/p/w500/${trendingMovies[i].poster_path}" alt="profile" />

                            <div class="imageLayer">
                                <h1 class="text-center py-4">${trendingMovies[i].original_title}</h1>
                                <p>${trendingMovies[i].overview}</p>
                                <span>${trendingMoviesMovies[i].release_date} <span>
                            </div>

                        </div>





                    </div>


                </div>



        
        
    `

    }

    document.querySelector('.row').innerHTML = cartona;

    //place 1
    // THE HOVERING ANIMATION
    $(".imageContainer").hover(
        function () {
            // On hover in
            var $imageLayer = $(this).children('.imageLayer');

            $imageLayer.fadeIn(1000);

            $(this).children('img').css({

                "transform": "scale(1.7) rotate(10deg)",
                "transition": "all 1s"


            })


            // Reset the position properties to their initial values
            $imageLayer.children('h1').fadeIn(1000).animate({
                "bottom": "0",
                "right": "0"
            }, 500);
            $imageLayer.children('p').fadeIn(1000).css("right", "0");
            $imageLayer.children('span').fadeIn(1000).animate({
                "top": "0",
                "right": "0"
            }, 500);
        },
        function () {
            // On hover out
            var $imageLayer = $(this).children('.imageLayer');
            $(this).children('img').css({

                "transform": "scale(1) rotate(0deg)",
                "transition": "all 1s"


            })

            // Reset the position properties to their initial values and hide elements
            $imageLayer.css({
                "overflow": "hidden",
                "background-color": "transparent"
            });

            $imageLayer.children('h1').animate({
                "right": "100%"

            }).animate({
                "bottom": "100%", // Reset bottom
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);

            $imageLayer.children('p').animate({
                "right": "100%"

            }).css("right", "initial").fadeOut(1000); // Reset right and hide
            $imageLayer.children('span').animate({
                "right": "100%"

            }).animate({
                "top": "100%", // Reset top
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);
        }
    );














}

// DISPLAYING TOP RATED MOVIES FUNCTION
function displaytopRatedMovies() {
    var cartona = "";

    for (var i = 0; i < topRatedMovies.length; i++) {

        cartona += `
        <div class="col-md-4">
                    <div class="movieContainer">
                        <div class="imageContainer">
                            <img class="testImage img-fluid"
                                src="https://image.tmdb.org/t/p/w500/${topRatedMovies[i].poster_path}" alt="profile" />

                            <div class="imageLayer">
                                <h1 class="text-center py-4">${topRatedMovies[i].original_title}</h1>
                                <p>${topRatedMovies[i].overview}</p>
                                <span>${topRatedMovies[i].release_date} <span>
                            </div>

                        </div>





                    </div>


                </div>



        
        
    `

    }

    document.querySelector('.row').innerHTML = cartona;

    //place 1
    // THE HOVERING ANIMATION
    $(".imageContainer").hover(
        function () {
            // On hover in
            var $imageLayer = $(this).children('.imageLayer');

            $imageLayer.fadeIn(1000);

            $(this).children('img').css({

                "transform": "scale(1.7) rotate(10deg)",
                "transition": "all 1s"


            })


            // Reset the position properties to their initial values
            $imageLayer.children('h1').fadeIn(1000).animate({
                "bottom": "0",
                "right": "0"
            }, 500);
            $imageLayer.children('p').fadeIn(1000).css("right", "0");
            $imageLayer.children('span').fadeIn(1000).animate({
                "top": "0",
                "right": "0"
            }, 500);
        },
        function () {
            // On hover out
            var $imageLayer = $(this).children('.imageLayer');
            $(this).children('img').css({

                "transform": "scale(1) rotate(0deg)",
                "transition": "all 1s"


            })

            // Reset the position properties to their initial values and hide elements
            $imageLayer.css({
                "overflow": "hidden",
                "background-color": "transparent"
            });

            $imageLayer.children('h1').animate({
                "right": "100%"

            }).animate({
                "bottom": "100%", // Reset bottom
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);

            $imageLayer.children('p').animate({
                "right": "100%"

            }).css("right", "initial").fadeOut(1000); // Reset right and hide
            $imageLayer.children('span').animate({
                "right": "100%"

            }).animate({
                "top": "100%", // Reset top
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);
        }
    );














}

// DISPLAYING UPCOMING MOVIES FUNCTION

function displayUpcomingMovies() {
    var cartona = "";

    for (var i = 0; i < upComingMovies.length; i++) {

        cartona += `
        <div class="col-md-4">
                    <div class="movieContainer">
                        <div class="imageContainer">
                            <img class="testImage img-fluid"
                                src="https://image.tmdb.org/t/p/w500/${upComingMovies[i].poster_path}" alt="profile" />

                            <div class="imageLayer">
                                <h1 class="text-center py-4">${upComingMovies[i].original_title}</h1>
                                <p>${upComingMovies[i].overview}</p>
                                <span>${upComingMovies[i].release_date} <span>
                            </div>

                        </div>





                    </div>


                </div>



        
        
    `

    }

    document.querySelector('.row').innerHTML = cartona;

    //place 1
    // THE HOVERING ANIMATION
    $(".imageContainer").hover(
        function () {
            // On hover in
            var $imageLayer = $(this).children('.imageLayer');

            $imageLayer.fadeIn(1000);

            $(this).children('img').css({

                "transform": "scale(1.7) rotate(10deg)",
                "transition": "all 1s"


            })


            // Reset the position properties to their initial values
            $imageLayer.children('h1').fadeIn(1000).animate({
                "bottom": "0",
                "right": "0"
            }, 500);
            $imageLayer.children('p').fadeIn(1000).css("right", "0");
            $imageLayer.children('span').fadeIn(1000).animate({
                "top": "0",
                "right": "0"
            }, 500);
        },
        function () {
            // On hover out
            var $imageLayer = $(this).children('.imageLayer');
            $(this).children('img').css({

                "transform": "scale(1) rotate(0deg)",
                "transition": "all 1s"


            })

            // Reset the position properties to their initial values and hide elements
            $imageLayer.css({
                "overflow": "hidden",
                "background-color": "transparent"
            });

            $imageLayer.children('h1').animate({
                "right": "100%"

            }).animate({
                "bottom": "100%", // Reset bottom
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);

            $imageLayer.children('p').animate({
                "right": "100%"

            }).css("right", "initial").fadeOut(1000); // Reset right and hide
            $imageLayer.children('span').animate({
                "right": "100%"

            }).animate({
                "top": "100%", // Reset top
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);
        }
    );














}


// DISPLAY SERACHED MOVIES
function displaySearchedMovies() {
    var cartona = "";

    for (var i = 0; i < searchedMovies.length; i++) {

        cartona += `
        <div class="col-md-4">
                    <div class="movieContainer">
                        <div class="imageContainer">
                            <img class="testImage img-fluid"
                                src="https://image.tmdb.org/t/p/w500/${searchedMovies[i].poster_path}" alt="profile" />

                            <div class="imageLayer">
                                <h1 class="text-center py-4">${searchedMovies[i].original_title}</h1>
                                <p>${searchedMovies[i].overview}</p>
                                <span>${searchedMovies[i].release_date} <span>
                            </div>

                        </div>





                    </div>


                </div>



        
        
    `

    }

    document.querySelector('.row').innerHTML = cartona;

    //place 1
    // THE HOVERING ANIMATION
    $(".imageContainer").hover(
        function () {
            // On hover in
            var $imageLayer = $(this).children('.imageLayer');

            $imageLayer.fadeIn(1000);

            $(this).children('img').css({

                "transform": "scale(1.7) rotate(10deg)",
                "transition": "all 1s"


            })


            // Reset the position properties to their initial values
            $imageLayer.children('h1').fadeIn(1000).animate({
                "bottom": "0",
                "right": "0"
            }, 500);
            $imageLayer.children('p').fadeIn(1000).css("right", "0");
            $imageLayer.children('span').fadeIn(1000).animate({
                "top": "0",
                "right": "0"
            }, 500);
        },
        function () {
            // On hover out
            var $imageLayer = $(this).children('.imageLayer');
            $(this).children('img').css({

                "transform": "scale(1) rotate(0deg)",
                "transition": "all 1s"


            })

            // Reset the position properties to their initial values and hide elements
            $imageLayer.css({
                "overflow": "hidden",
                "background-color": "transparent"
            });

            $imageLayer.children('h1').animate({
                "right": "100%"

            }).animate({
                "bottom": "100%", // Reset bottom
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);

            $imageLayer.children('p').animate({
                "right": "100%"

            }).css("right", "initial").fadeOut(1000); // Reset right and hide
            $imageLayer.children('span').animate({
                "right": "100%"

            }).animate({
                "top": "100%", // Reset top
                "right": "initial", // Reset right
            }, 500).fadeOut(1000);
        }
    );














}
















