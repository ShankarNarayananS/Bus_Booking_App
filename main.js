function passenger_check_signup() {

    var p1 = document.getElementById("signup_password_passenger").value;
    var p2 = document.getElementById("signup_password2_passenger").value;

    if (p1 != p2) {
        alert("Please enter same password")
        document.getElementById("signup_username_passenger").value = ""
        document.getElementById("signup_password_passenger").value = ""
        document.getElementById("signup_password2_passenger").value=""
        document.getElementById("signup_email_passenger").value=""

    }

    else {


        var user_name_passenger = document.getElementById("signup_username_passenger").value;
        var email_id_passenger = document.getElementById("signup_email_passenger").value;
        var password_passenger = document.getElementById("signup_password2_passenger").value;
        
        function generateOTP() { 
          
            // Declare a string variable  
            // which stores all string 
            var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
            let OTP = ''; 
              
            // Find the length of string 
            var len = string.length; 
            for (let i = 0; i < 6; i++ ) { 
                OTP += string[Math.floor(Math.random() * len)]; 
            } 
            return OTP; 
        } 


        var OTP_for_login_passenger=generateOTP();

        localStorage.setItem("user_name_passenger",user_name_passenger)
        localStorage.setItem("email_id_passenger",email_id_passenger)
        localStorage.setItem("password_passenger",password_passenger)
        localStorage.setItem("OTP_for_login_passenger",OTP_for_login_passenger)
        

        window.open("./regsuccess_passenger.html")

    }



}


function passenger_login() {

    var p_name=document.getElementById("login_username_passenger").value;
    var p_password=document.getElementById("login_password_passenger").value;


    if (p_name==localStorage.getItem("user_name_passenger") && (p_password==localStorage.getItem("password_passenger") || p_password==localStorage.getItem("OTP_for_login_passenger"))) {

        window.open("./book_ticket.html")


    }

    



}

function busowner_login() {

    var B_name=document.getElementById("login_username_busowner").value;
    var B_password=document.getElementById("login_password_busowner").value;


    if (B_name==localStorage.getItem("user_name_busowner") && (B_password==localStorage.getItem("password_busowner") || B_password==localStorage.getItem("OTP_for_login_busowner"))) {

        window.open("./dashboard_busowner.html")


    }


    
}


function busowner_check_signup() {

    var p1 = document.getElementById("signup_password_busowner").value;
    var p2 = document.getElementById("signup_password2_busowner").value;

    if (p1 != p2) {
        alert("Please enter same password")
        document.getElementById("signup_password_busowner").value = ""
        document.getElementById("signup_password2_busowner").value = ""
        document.getElementById("signup_username_busowner").value=""
        document.getElementById("signup_email_busowner").value=""

    }

    else {


        var busowner_name = document.getElementById("signup_username_busowner").value;
        var busowner_email_id = document.getElementById("signup_email_busowner").value;
        var busowner_password = document.getElementById("signup_password2_busowner").value;
        var busowner_license_plate = document.getElementById("signup_license_plate_busowner").value;
        var busowner_capacity = document.getElementById("signup_capacity_busowner").value;
        var busowner_destination = document.getElementById("signup_destination_busowner").value;

        
        function generateOTP() { 
          
            // Declare a string variable  
            // which stores all string 
            var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
            let OTP = ''; 
              
            // Find the length of string 
            var len = string.length; 
            for (let i = 0; i < 6; i++ ) { 
                OTP += string[Math.floor(Math.random() * len)]; 
            } 
            return OTP; 
        } 


        var OTP_for_login_busowner=generateOTP();

        localStorage.setItem("user_name_busowner",busowner_name)
        localStorage.setItem("email_id_busowner",busowner_email_id)
        localStorage.setItem("password_busowner",busowner_password)
        localStorage.setItem("license_plate_busowner",busowner_license_plate)
        localStorage.setItem("capacity_busowner",busowner_capacity)
        localStorage.setItem("destination_busowner",busowner_destination)
        localStorage.setItem("OTP_for_login_busowner",OTP_for_login_busowner)
        localStorage.setItem("status_busowner","Disabled");
        

        window.open("./regsuccess_busowner.html")

       







    }



}