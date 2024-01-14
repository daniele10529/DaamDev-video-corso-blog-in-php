
var remote = false;

function home() 
{
    //è obbligatorio usare id diversi altrimenti non funziona
    var el = document.getElementById("home");
    var ind = document.getElementById("index");

    if(remote === false){
        el.setAttribute("href","/videocorso/");
        ind.setAttribute("href","/videocorso/");
    }
    else{
        el.setAttribute("href","/");
        ind.setAttribute("href","/");
    }    
}

function login() 
{
    var el = document.getElementById("login");
    if(remote === false){
        el.setAttribute("href","/videocorso/doLogin.php");
    }
    else{
        el.setAttribute("href","/doLogin.php");
    }    
}

function logout() 
{
    var el = document.getElementById("logout");
    if(remote === false){
        el.setAttribute("href","/videocorso/PolicyUser/Logout.php");
    }
    else{
        el.setAttribute("href","/PolicyUser/Logout.php");
    }    
}

function dashboard() 
{
    var el = document.getElementById("dashboard");
    if(remote === false){
        el.setAttribute("href","/videocorso/Admin/dashboard.php");
    }
    else{
        el.setAttribute("href","/Admin/dashboard.php");
    }    
}

