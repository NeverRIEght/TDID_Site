// Скрипт плавного пролистывания

const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    })

    function onMenuLinkClick(obj) {
        const menuLink = obj.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoHeight = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoHeight,
                behavior: "smooth"
            })
            obj.preventDefault();
        }
    }
}

// Получение ширины и высоты экрана

// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

// var obj = document.getElementByTagName('header');
