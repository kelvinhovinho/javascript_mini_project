let UserDetailsDatabase={}


function getuserdetails(){
    let username =prompt("Enter your username")

    if (username==null){
        return
    }
    function validateusername(username){
        if (username.length < 10 && username.length > 0){
            return true
        }else{
            return false
        }
    }

    while(validateusername(username) == false){
        username = prompt("Userrname must be less than ten and greater than zero. Please try again")
    }

    UserDetailsDatabase["UserName"] = username

    let email = prompt("Enter your email address")
    if (email==null){
        return
    }
    function validateemail(email){
        var emailchek = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        emailchekresults = emailchek.test(email);
        if (emailchekresults == true){
            return true
        } else {
            return false
        }
    }

    while (validateemail(email)==false){
       email= prompt("Enter a valid email")
    }

    UserDetailsDatabase["Email"] = email

    let phonenumber = prompt("Enter your phone number")

    if (phonenumber==null){
        return
    }
    function validatephonenumber(phonenumber){
        if (phonenumber.length == 10){
            return true
        } else{
            return false
        }
    }

    while (validatephonenumber(phonenumber)== false){
        phonenumber=prompt("Phone number must be 10 difgits. Try again")
    }

    UserDetailsDatabase["Phonenumber"] = phonenumber

    let password = prompt("Enter your password")
    if (password==null){
        return
    }

    function validattepass(password){
        if (password.length<6){
            return false
        } else{
            return true
        }
    }

    while (validattepass(password)==false){
        password = prompt("Password must not be less than six Digits")
    }

    UserDetailsDatabase["Password"] = password

    let confirmpassword = prompt("Confirm your password")

    if (confirmpassword==null){
        return
    }

    function validateconfirmpass(confirmpassword){
        if (confirmpassword == password){
            return true
        } else{
            return false
        }
    }

    while (validateconfirmpass(confirmpassword)==false){
        confirmpassword = prompt("your password do not match. Please try again")
    }

    console.log(UserDetailsDatabase)
}

function DisplayUserDetails(){
    alert(`Your Details are \n\n Username: ${UserDetailsDatabase.UserName}\nPhone number: ${UserDetailsDatabase.Phonenumber}\n Email: ${UserDetailsDatabase.Email}`)   
}