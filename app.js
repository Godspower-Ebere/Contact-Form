// Input
let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let GE = document.getElementById("GE");
let SR = document.getElementById("SR");
let msg = document.getElementById("msg");
let check = document.getElementById("check");
let submit = document.getElementById("submit");
let radio = document.getElementById("radio");

// Radio Parents Elements
let GEP = document.getElementById("GEParent");
let SRP = document.getElementById("SRParent");

// POPUP
let success = document.getElementById("success");

//Alerts
let alerts = document.getElementsByTagName("span")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (fname.value == "") {
        alerts[0].innerText = "This field is required"
    }
    if (lname.value == "") {
        alerts[1].innerText = "This field is required";
    }
    if (email.value == "") {
        alerts[2].innerText = "Please enter a valid email address";
    }
    if (!GE.checked && !SR.checked) {
        alerts[3].innerText = "Please select a query type"
    }
    if (msg.value == "") {
        alerts[4].innerText = "This field is required";
    }
    if (!check.checked) {
        alerts[5].innerText = "To submit this form, please consent to being contacted";
    }
    if (
        !fname.value == "" &&
        !lname.value == "" &&
        !email.value == "" &&
        GE.checked || SR.checked &&
        !msg.value == "" &&
        check.checked
    ) {
        form.reset()
        setTimeout(() => {
            success.style.top = "0px";
            setInterval(() => {
                success.style.top = "-200px";
            }, 5000)
        }, 1000)
    }
})

// FORM ON RESET
form.addEventListener("reset",()=>{
    GEP.style.background = "white";
    SRP.style.background = "white";
})

// RADIO BUTTON ON CLICK EVENT
radio.addEventListener("click", (event) => {
    if (event.target.tagName == "INPUT") {
        if (GE.checked) {
            GEP.style.background = "hsl(148, 38%, 91%)"
        }
        if (!GE.checked) {
            GEP.style.background = "white"
        }

        if (SR.checked) {
            SRP.style.background = "hsl(148, 38%, 91%)"
        }
        if (!SR.checked) {
            SRP.style.background = "white"
        }
    }
})