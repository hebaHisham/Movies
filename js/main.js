$(document).ready(function () {

    const sidebarPartW = $('.SideBarPart').outerWidth();

    const listItemH = $('li').outerHeight();

    const ulHeight = $('ul').outerHeight();


    $('.sideBarMenuTogglePart i').click(function () {
        // $('.coloringBox').animate({left: -boxWidth},1000);

        if ($('.SideBarPart').css('left') == "0px") {
            $('.SideBarPart').animate({ left: -sidebarPartW }, 1000);
            $('.fa-xmark').attr('class', 'fa-bars');


            setTimeout(function () {
                $('.one').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease' ,
                    'opacity':'0'
                  
                   
                });
            }, 1000);

            
            setTimeout(function () {
                $('.two').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity':'0'
                
                });
            }, 900);

            setTimeout(function () {
                $('.three').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity':'0'
                 
                });
            }, 800);

            setTimeout(function () {
                $('.four').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease',
                    'opacity':'0'
                  
                });
            }, 700);

            setTimeout(function () {
                $('.five').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease', 
                    'opacity':'0'

                    
                }); 
            }, 600);

            setTimeout(function () {
                $('.six').css({
                    'transform': `translateY(${ulHeight}px)`,
                    'transition': 'all 1s ease', 
                    'opacity':'0'
               
                });
            }, 500);




        }
        else {
            $('.SideBarPart').animate({ left: 0 }, 1000);
            $('.fa-bars').attr('class', 'fa-solid fa-xmark fa-xl');
            
            
           

            setTimeout(function () {
                $('.six').css({
                    'transform': `translateY(${-ulHeight}px)`,
                    'transition': 'transform 1s ease', 
                    'opacity':'1'
                });
            }, 1000);

            
            setTimeout(function () {
                $('.five').css({
                    'transform': `translateY(${-ulHeight}px)`,
                    'transition': 'transform 1s ease', 
                    'opacity':'1'
                });
            }, 900);

            setTimeout(function () {
                $('.four').css({
                    'transform': `translateY(${-ulHeight}px)`,
                    'transition': 'transform 1s ease',
                    'opacity':'1'
                });
            }, 800);

            setTimeout(function () {
                $('.three').css({
                    'transform': `translateY(${-ulHeight}px)`,
                    'transition': 'transform 1s ease',
                    'opacity':'1'
                });
            }, 700);

            setTimeout(function () {
                $('.two').css({
                    'transform': `translateY(${-ulHeight}px)`,
                    'transition': 'transform 1s ease',
                    'opacity':'1'
                });
            }, 600);

            setTimeout(function () {
                $('.one').css({
                    'transform': `translateY(${-ulHeight}px)`,
                    'transition': 'transform 1s ease' ,
                    'opacity':'1'
                });
            }, 500);


            
            

            
            
            
           













        }

    })







})


