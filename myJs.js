function fun1(){
    alert("hello from fun1");
}
function fun2(){
    var spanVar=document.getElementById("span1");
    spanVar.append("clicked");
}
function fun3(){
    var x=20;
    var y=30;
    var z=x+y;
    alert("z ="+z);
    document.body.append("z ="+z);
    //document.append("z ="+z);
}
