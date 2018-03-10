$(document).ready(function(){
    $('button').click(function(){
        $('.click .header').css("color", "red");
    });

    $('.hide button').click(function(){
       $('.hide button').hide('400', 'swing'); 
    });

    $('.show button').click(function(){
        $('button').show('400', 'linear');
    });

    $('.toggle button').click(function(){
        $('.toggle p').toggle(1000);
    });

    $('.slideDown button').click(function(){
        $('.slideDown h1').slideDown();  
    });

    $('.slideUp button').click(function(){
        $('.slideUp h1').slideUp()
    });

    $('.slideToggle button').click(function(){
        $('.slideUp h1').slideToggle();
    });

    $('.fadeIn button').click(function(){
        $('.fadeOut .header').fadeIn();
    });

    $('.fadeOut button').click(function(){
        $('.fadeOut .header').fadeOut();
    });

    $('.addClass button').click(function(){
        $('.addClass p').addClass('bigBlue');
    });

    $('.before button').click(function(){
        $('.before p:first').before('added some stuff');
    });

    $('.after button').click(function(){
        $('.after p:first').after('added some stuff');
    });

    $('.append button').click(function(){
        $('.append p').append('add some stuff to the paragraph');
    })

    $('.html button').click(function(){
        $('.html h1').html('<b>I AM BOLD</b>');
    })

    $('.attr button').click(function(){
        $('.attr p').html('');
    })

    





});