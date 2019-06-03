function changeImage(event) {
    var main = document.getElementById("mainImage");
    var ele = event.target;
    if (ele.tagName == "IMG") {
        main.src = ele.src;
    }
}
function changeImageOnNext(){
    var image=document.getElementById("mainImage");
    var oldSrc=image.src;
    var counter2=oldSrc.split(".")[0].split("/").pop();
    //console.log("current image number="+counter2);
    changeImageOnNext.counter=parseInt(counter2);
    if(typeof changeImageOnNext.counter == "undefined" || changeImageOnNext.counter>=4){
        changeImageOnNext.counter=0;
    }
    changeImageOnNext.counter++;
    
    //console.log(changeImageOnNext.counter.toString()+".jpg");
    image.src=changeImageOnNext.counter.toString()+".jpg";
}
function loadImages(){
    console.log("inside onLoad()");
    var imageContainer=document.getElementById("thumbnailContainer");
    for( var i = 1; i<5 ;i++){
        var img=document.createElement("img");
        img.src=i+".jpg";
        console.log("current src "+img.src);
        console.log("current class "+img.className);
        //img.className("thumbnail");
        img.setAttribute('class','thumbnail');
        console.log("current class "+img.className);
       
        
        imageContainer.appendChild(img);
    }
}
