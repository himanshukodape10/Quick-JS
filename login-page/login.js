var count = 2;
function validate(){
    var user = document.login.username.value;
    var password = document.login.username.value;
    var valid = false;
    var usernameArray = ["yuki"]
    var passwordArray = ["123"]

   for( var i = 0; i < usernameArray.length; i++)
    if(user == usernameArray[i])
        if (password == passwordArray[i]){

            valid = true;
            break;
        }
        if(valid){
            alert("Login was success")
            window.location = " www.goggle.ie"
            return false;
        }
        var again = " tries";
        if( count == 1){
            again = "try"
        }
        if(count >= 1){
            alert("wrong password or username")
          count--;
        }

}