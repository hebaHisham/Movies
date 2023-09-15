$(document).ready(function () {

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

    $('.backToTop').click(function () {
        $(window).scrollTop(0);
    })




    //============================
    //MOVIE POSTER ANIMATION

    // $('.imageContainer').hover(function(){
    //     $('.testImage').css({"transform":"scale(1.2) rotate(10deg)","transition": "all 1s"});
    //     $('.imageContainer').css('overflow','hidden');
    //     $('.imageContent').fadeIn(10000)

    //     });



    // })

    $('.imageContainer').hover(function () {
       
        /*some changes*/
        
       





        $('.imageLayer').fadeIn(1000);






        $(this).children('img').css({

            "transform": "scale(1.2) rotate(10deg)",
            "transition": "all 1s"


        }


        )
        $('.imageContainer').css('overflow', 'hidden');
        $('.imageLayer').children('h1').animate({
            "top": "0px",


        }, 1000)

        $('.imageLayer').children('span').animate({
            "top": "0"

        }, 1000)

        // $('.imageLayer').children('p').css({
        //   "transform":"skewX(10deg)",
        //   "transition": "all 1s"



        // },1000)









    }, function () {

        $('.imageLayer').children('h1').animate({
            "right": "100%"

        }, 1000)

        $('.imageLayer').children('p').animate({
            "right": "100%"
        }, 1000)

        $('.imageLayer').children('span').animate({
            "right": "100%"
        }, 1000)

        $('.imageLayer').fadeOut(1000,function(){
            $(this).children('h1').css({
                "color": "red",
                "position": "relative",
                "top": "-100%",
    
                "right": "0"
    
            })
    
            $(this).children('p').css({
                "position": "relative",
    
                "right": "0"
    
    
    
            })
            
            $(this).children('span').css({
                "color": "red",
                "position": "relative",
                "top": "100%",
                "right": "0"
    
            })
        });
        $(this).children('img').css({

            "transform": "scale(1) rotate(0)",
            "transition": "all 1s"


        })





    }
    );











})








