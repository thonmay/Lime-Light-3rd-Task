
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hrefAttribute = this.getAttribute('href');
        if (hrefAttribute.length > 1 && hrefAttribute.startsWith('#') && hrefAttribute !== '#!' && document.querySelector(hrefAttribute)) {
            e.preventDefault();
            document.querySelector(hrefAttribute).scrollIntoView({
                behavior: 'smooth'
            });

            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                
                if (getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            }
        }
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) { 
        navbar.classList.add('navbar-scrolled'); 
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

