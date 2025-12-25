window.onload = function() {
    var progressBar = document.querySelector('.progress-bar');
    var progress = 0;
    var intervalID = setInterval(function() {
        progress += 1.9;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(intervalID);
            
           
           
        }
       
    }, 1000); // Progression chaque seconde

 
};
