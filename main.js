prediction_1 = "";

Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5.version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/veHznx6eX/model.json', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!')
}

function speak()
{
    var syth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+ prediction_1
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results) {
    console.log("kjkgrwl")
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        
        speak();
        if(results[0].label == "Best or all the best")
        {
            document.getElementById("update_emoji").innerHTML == "&#128077;";
        }
        if(results[0].label == "Victory")
        {
            document.getElementById("update_emoji").innerHTML == "&#9996;";
        }
        if(results[0].label == "Good")
        {
            document.getElementById("update_emoji").innerHTML == "&#128076;";
        }

    }
}
