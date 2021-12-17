// Скрипт плавного пролистывания на JQuerry

$(document).ready(function()
{
    $("#menu").on("click","a", function (event)
    {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Получение ширины и высоты экрана

// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

// var obj = document.getElementByTagName('header');
