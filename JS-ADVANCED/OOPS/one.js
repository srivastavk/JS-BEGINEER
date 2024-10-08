const user = {
    username : "Srivastav", 
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details form database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());