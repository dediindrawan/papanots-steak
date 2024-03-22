// add new class on whatsapp icon and form search every window on scroll
function windowOnScroll() {
    window.addEventListener('scroll', () => {
        const ctaButtonWhatsapp = document.querySelector('.cta-button-whatsapp');
        ctaButtonWhatsapp.classList.add('hide-icon');

        setTimeout(() => {
            ctaButtonWhatsapp.classList.remove('hide-icon');
        }, 1500);

        if (location.pathname === '/index.html' || location.pathname === '/pages/menu.html') {
            const searchFormWrapper = document.querySelector('.search-form-wrapper');
            searchFormWrapper.classList.toggle('sticky-background', scrollY >= 165);
        };
    });
};
windowOnScroll();

// add sign active on navlink items when this button clicked
function navlink() {
    const navlinks = document.querySelectorAll('.navbar ul li');
    navlinks.forEach(navlink => {
        navlink.addEventListener('click', () => {
            navlinks.forEach(recentActive => {
                if (recentActive.classList.contains('nav-active')) {
                    navlink.classList.remove('nav-active');
                };
            });

            navlink.classList.add('nav-active');
        });
    });
};
navlink();

// cta button search is activated
function ctaButtonSearch() {
    sessionStorage.setItem('ctaButtonSearch-clicked', 'true');
};

document.addEventListener('DOMContentLoaded', () => {
    const ctaButtonSearchClicked = sessionStorage.getItem('ctaButtonSearch-clicked');

    if (ctaButtonSearchClicked === 'true') {
        document.querySelector('.search-input').focus();

        sessionStorage.removeItem('ctaButtonSearch-clicked');
    };
});

// copyright text contents auto updated
function copyright() {
    const copyrights = document.querySelectorAll('.copyright span');
    const years = new Date().getFullYear();
    copyrights.forEach(copyright => copyright.textContent = years);
};
copyright();