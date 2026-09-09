const contactButton = document.getElementById("contactButton");

const helloButton = document.getElementById("helloButton");


contactButton.addEventListener("click", function () {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

});


helloButton.addEventListener("click", function () {

    alert("Hello bhai! 👋 Thanks for visiting my website.");

});