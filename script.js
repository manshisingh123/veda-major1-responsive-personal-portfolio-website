/* =========================================
   RESPONSIVE PORTFOLIO JAVASCRIPT
========================================= */


/* ================= NAVIGATION ================= */

const navToggle =
    document.getElementById("navToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


function closeMenu() {

    navMenu.classList.remove("open");

    document.body.classList.remove(
        "menu-open"
    );

    navToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}


/* Mobile Menu */

navToggle.addEventListener(
    "click",
    function () {

        const isOpen =
            navMenu.classList.toggle("open");

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

        navToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


/* Close menu after clicking link */

navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeMenu
    );

});



/* ================= SCROLL PROGRESS ================= */

const progress =
    document.getElementById(
        "scrollProgress"
    );


const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateScrollUI() {

    const scrollTop =
        window.scrollY;

    const total =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    /* Progress */

    const percentage =
        total > 0
            ? (scrollTop / total) * 100
            : 0;


    progress.style.width =
        `${percentage}%`;


    /* Active Navigation */

    let current =
        "home";


    sections.forEach(
        function (section) {

            if (
                scrollTop >=
                section.offsetTop - 180
            ) {

                current =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.toggle(
                "active",

                link.getAttribute(
                    "href"
                ) === `#${current}`
            );

        }
    );

}


/* Scroll event */

window.addEventListener(
    "scroll",
    updateScrollUI,
    {
        passive: true
    }
);


updateScrollUI();



/* ================= SCROLL REVEAL ================= */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        function (element) {

            observer.observe(element);

        }
    );



/* ================= CURRENT YEAR ================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();



/* ================= FORM VALIDATION ================= */

const form =
    document.getElementById(
        "contactForm"
    );


function setError(
    elementId,
    message
) {

    document.getElementById(
        elementId
    ).textContent =
        message;

}


form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get values */

        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        const status =
            document.getElementById(
                "formStatus"
            );


        /* Clear errors */

        setError(
            "nameError",
            ""
        );

        setError(
            "emailError",
            ""
        );

        setError(
            "subjectError",
            ""
        );

        setError(
            "messageError",
            ""
        );


        status.textContent = "";


        let valid = true;



        /* Name validation */

        if (name.length < 2) {

            setError(
                "nameError",
                "Please enter your name."
            );

            valid = false;

        }



        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(email)
        ) {

            setError(
                "emailError",
                "Please enter a valid email address."
            );

            valid = false;

        }



        /* Subject validation */

        if (subject.length < 3) {

            setError(
                "subjectError",
                "Please add a short subject."
            );

            valid = false;

        }



        /* Message validation */

        if (message.length < 10) {

            setError(
                "messageError",
                "Message should contain at least 10 characters."
            );

            valid = false;

        }



        /* Stop if invalid */

        if (!valid) {

            return;

        }



        /* Success */

        status.textContent =
            "Form validated successfully! Connect this form to a backend or email service for real message delivery.";


        form.reset();

    }
);



/* ================= PLACEHOLDER LINKS ================= */

document
    .querySelectorAll(
        ".placeholder-link"
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    alert(
                        "Please replace this # link with your actual GitHub or LinkedIn URL."
                    );

                }
            );

        }
    );