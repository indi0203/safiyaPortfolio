    window.addEventListener("load", sidenVises);

    function sidenVises() {
        console.log("sidenVises");

        document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    }

    function toggleMenu() {
        console.log("toggleMenu")

        document.querySelector("#menu").classList.toggle("hidden");

        let erSkjult = document.querySelector("#menu").classList.contains("hidden");

        if (erSkjult == true) {
            document.querySelector("#menuknap").textContent = "☰";
        } else {
            document.querySelector("#menuknap").textContent = "x";
        }
    }

    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").className = "scroll";
        } else {
            document.getElementById("navbar").className = "";
        }
    }
