// script.js

// DOMContentLoaded event untuk memastikan DOM sudah sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Menghilangkan loading spinner setelah konten dimuat
    const loadingSpinner = document.querySelector('.loading');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }

    // Menampilkan elemen dengan efek fade-in saat di-scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll untuk navigasi
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset untuk header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menyembunyikan navbar saat scroll ke bawah
    let lastScrollTop = 0;
    const navbar = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-80px'; // Menyembunyikan navbar
        } else {
            navbar.style.top = '0'; // Menampilkan navbar
        }
        lastScrollTop = scrollTop;
    });
});

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// JavaScript untuk mengontrol sidebar
const sidebar = document.getElementById('sidebar');