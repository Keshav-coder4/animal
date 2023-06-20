function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/y8-5_4Csb/model.json', modelReady);
}
//we need to write code to access the microphone by using th e navigator .madia
//this function would promote the user to grand access to their connected microphones and camara
//to get the data from the microphone , we  just have to set(audio:true) and pass this inside the navigator.mediaDevices.getUserMedia() function
//define the variable "cassifier" and we need to write the liberary name ml5.js.
//sound classifier function is use to triger the ml5.js sound classification function
//we pass a function that starts the ml5 sound classification /and if we don'tpass the function, th eml5 classification does not start


function modelReady(){
    classifier.classify(gotResults);
}
//classifier is the variable that hold the teacheable mechine madel
//classifier is a predefined function to compare

function gotResults(error , results) {
    if (error) {
        console.assert(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3= document.getElementById('alien4');

      if (results[0].label == "snap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
     }
            else if (results[0].label == "clap") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
            }
       else if (results[0].label == "tap") {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.png';
                img2.src = 'aliens-03.gif';
                img3.src = 'aliens-04.png';


        } else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';

        }
    }
}

