function validator(pass) {

    let validPass = true;

    if (pass.length < 6 || pass.length > 10) {
        console.log(`Password must be between 6 and 10 characters`)
        validPass = false;
    }
    
    if ( !/^[A-Za-z0-9]*$/.test(pass) ) {
        console.log(`Password must consist only of letters and digits`)
        validPass = false;
    }

    if (pass.replace(/[^0-9]/g,"").length < 2 ) {
        console.log(`Password must have at least 2 digits`)
        validPass = false;
    }

    if (validPass) {
        console.log(`Password is valid`)
    }
    
}

validator('logIn');
validator('MyPass123');
validator('Pa$s$s');