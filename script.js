/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
===================================================== */

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   NAVBAR SHADOW ON SCROLL
===================================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(80, 40, 100, 0.12)";

    } else {

        header.style.boxShadow =
            "0 3px 20px rgba(80, 40, 100, 0.06)";

    }

});


/* =====================================================
   PORTFOLIO LOADED MESSAGE
===================================================== */

console.log(
    "✨ V.D. Rekha Portfolio Loaded Successfully!"
);