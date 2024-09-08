function speaking(){
    var text = document.getElementById('mytext').value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}