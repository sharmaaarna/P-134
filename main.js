object=[];
adviject="";

function draw(){
    image(cam,0,0,600,400)

    if(adviject !=""){
        Od.detect(cam, gotResult)
        document.getElementById("HowMuch").innerHTML="Number Of Objects Being Detetced:"+object.length;     
        for(i=0; i<object.length; i++){
            document.getElementById("adviject").innerHTML="Status: Objects Deteted";

            fill("black");
            percent=Math.floor(object[i].confidence*100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function setup(){
    Canva=createCanvas(600,400);
    Canva.position(500,250)
    cam=createCapture(VIDEO);
    cam.hide()
    Od= ml5.objectDetector('cocossd',modelLoded);
    document.getElementById('adviject').innerHTML="Status: Detecting Objects";
}

function preload(){
}

function modelLoded(){
    console.log("modelLoded");
    adviject=true;
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result)
        object=result;         
    }
}