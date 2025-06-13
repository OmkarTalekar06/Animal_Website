 let i=0
function imchange() {
  let  x = new Array(3);
    x[0] = "tiger.jpg";
    x[1] = "elephant.jpg";
    x[2] = "giraffe.jpg";
    x[3] = "panda.jpg"
    i++;
    
    if(i>=3){
        i=0
        }
    let wolfImage = document.getElementById("wolf");
    wolfImage.src=x[i];
    wolfImage.classList.remove("fade-out","fade-in");   
    void wolfImage.offsetWidth; 
    wolfImage.classList.add("fade-in");
     setTimeout(imchange, 4000);
}

function hlp() {
  alert("The website is very clear and everthing is very easy to access, \nPlease read and check for the needful,\nThankyou for your co-operation.")
}