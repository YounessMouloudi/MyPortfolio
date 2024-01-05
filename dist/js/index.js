var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

var themeToggleBtn = document.getElementsByClassName('BtnDark');

Array.from(themeToggleBtn).forEach( function(button) {
    button.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
    } 
    else {
        document.documentElement.classList.add('dark');
    }
    
})

});

let menuLinks = document.querySelector('#menu-links');
let btncheckbox = document.querySelector('#btn-checkbox');

btncheckbox.addEventListener('change',(e) => {
    var isChecked = e.currentTarget.checked;
    if (isChecked) {
        menuLinks.classList.add('visible');
    } else {
        menuLinks.classList.remove('visible');
    }
})

let linkMenu = document.querySelectorAll(".menu-links a");
linkMenu.forEach(link => {
    link.addEventListener('click',() => {
        if(btncheckbox.checked){
            setTimeout( () => {
                btncheckbox.checked = false;
                menuLinks.classList.remove('visible');
            },500);
        }
    })     
});


let bttnScrolling = document.getElementById("scrollingButton");
let footer = document.getElementById('footer');

window.onscroll = function () {
        
    let footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition + 40 <= window.innerHeight) {
        bttnScrolling.classList.add("changeColor")
    }
    else {
        bttnScrolling.classList.remove("changeColor");
    }

    if (window.scrollY > 600) {
        bttnScrolling.classList.add("showbtn");
    }
    else {
        bttnScrolling.classList.remove("showbtn");
    }

    function up() {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
    }

    bttnScrolling.onclick = function () {
        up();
    }
}

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("hashchange", () => {
        handleHashChange();
    });

    handleHashChange();

    document.querySelectorAll('input[type="hidden"]').forEach( (input) => {
        input.setAttribute('readonly', true);
    });

    document.getElementsByName("_next")[0].addEventListener('input', function() {
        console.log('ss');
        this.value = "https://younessmouloudi.github.io/MyPortfolio/";
    });

    document.getElementsByName("_captcha")[0].addEventListener('input', function() {
        console.log('ss');
        this.value = "false";
    });

    document.getElementsByName("_template")[0].addEventListener('input', function() {
        this.value = "table";
    });
});

function handleHashChange() {
    var hash = window.location.hash.substring(1);

    if (!hash || hash === "/") {
        return;
    }
    
    if (hash && hash !== "/") {

        const targetSection = document.getElementById(hash);

        if (targetSection) {
            targetSection.scrollIntoView();
        } 
        else {
            window.location.href="/MyPortfolio/404.html";
        }
    }  
}

let myForm = document.getElementById("myForm");
let formMessage = document.getElementById("formMessage");

myForm.addEventListener("submit", (e) => {

    let fullName = document.getElementById("fullname");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (fullName.value !== "" && email.value !== "" && message.value !== "") {
        
        if(regexEmail.test(email.value)) {

            if (myForm.action !== "https://formsubmit.co/4fac93bcdd626d59494e99a513599908" || myForm.method !== "post") {
            
                myForm.action = "https://formsubmit.co/4fac93bcdd626d59494e99a513599908";
                myForm.method = "post";
            }
            
            localStorage.setItem("formSubmitted", "true");
        }
        else {
            formMessage.textContent = "The email address is invalid !!";
            formMessage.className = "message error-message show-message";
            
            setTimeout( () => {
                formMessage.classList.remove("show-message");
                
                setTimeout( () => {
                    formMessage.classList.remove("error-message");
                    formMessage.textContent = "";
                },1000);
            
            }, 3000);

            return e.preventDefault();    
        }
    } 
    else {
        formMessage.textContent = "Please Fill in all the fields !";
        formMessage.className = "message error-message show-message";
        
        setTimeout( () => {
            formMessage.classList.remove("show-message");
            
            setTimeout( () => {
                formMessage.classList.remove("error-message");
                formMessage.textContent = "";
            },1000);

        }, 3000);

        fullName.focus();

        return e.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("formSubmitted")) {

        formMessage.classList.remove("hidden");
        formMessage.textContent = "Thanks for getting in touch! I will respond to your message shortly.";
        formMessage.className = "message show-message";

        setTimeout( () => {
            formMessage.classList.remove("show-message");
            localStorage.removeItem("formSubmitted");
            
            setTimeout( () => {
                formMessage.textContent = "";
            },1000);
        
        }, 5000);
    }
});

let year = document.querySelector("#year");
year.textContent = new Date().getFullYear();