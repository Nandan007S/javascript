let pass = prompt("Enter a password");
if(pass.length<8){
    console.log("Invalid, password length must be greater than 8");
}
else{
    if(pass.indexOf(' ')!=-1){
        console.log('password cannot contain spaces');
    }
    else{
        console.log("password is valid");
    }
}
