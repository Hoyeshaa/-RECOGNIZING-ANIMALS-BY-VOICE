function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OfcH8BvCn/model.json'
    ,modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error , results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = results[0].label;
       
        img = document.getElementById("animal_image");
       

        if(results[0].label == "cat"){
            img.src = "giphy.gif";
            
        }
        else if(results[0].label == "cow"){
            img.src = "giphy (1).gif";
    }
    else{
        img.src = "giphy (2).gif"; 
    }}}
