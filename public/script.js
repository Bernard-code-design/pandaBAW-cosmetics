document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll(".navbar-nav a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar toggle in mobile view
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Product actions: Buy Now and Add to Cart
    const buyButtons = document.querySelectorAll(".btn-success");
    const cartButtons = document.querySelectorAll(".btn-primary");

    function showThankYouModal(message) {
        const modalMessage = document.getElementById("thankYouMessage");
        modalMessage.textContent = message;

        
        const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        modal.show();
    }

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            showThankYouModal("Thank you for your purchase!");
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            showThankYouModal("Item added to cart!");
        });
    });
});
