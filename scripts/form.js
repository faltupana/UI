function checkForm(){
    var username=document.userForm.un;
    var password=document.userForm.pw;
    var g=document.userForm.g;
    var courses=document.userForm.course;
    document.getElementById("unError").innerHTML="";
    document.getElementById("pwError").innerHTML="";
    if(username.value.length<=0){
        //alert("username cant be empty");
        document.getElementById("unError").innerHTML="username cant be empty";
        username.focus();
        return false;
    }
    if(password.value.length<=0){
        //alert("password cant be empty");
        document.getElementById("pwError").innerHTML="password cant be empty";
        password.focus();
        return false;
    }
    if(g.value==""){
        document.getElementById("gError").innerHTML="please select a gender";
        g.focus;
        return false;
    }
    var courseflag=false;
    for(var c=0;c<courses.length;c++){
        if(courses[c].checked){
            courseflag = true;
            break;
        }
    }
    if(courseflag==false){
        document.getElementById("courseError").innerHTML="please select courses";
        courses.focus;
        return false;
    }
    
    
}
function handleBack(){
    alert("back button clicked");
}