    function quiz(){
    let marks = 0;

    if(document.getElementById("tiger").checked){
        marks += 5;
        document.getElementById("animal").style.backgroundColor= "lightgreen";
    }
    else{
        document.getElementById("animal").style.backgroundColor= "#e97474";
    }
    if(document.getElementById("tulsi").checked){
        marks += 5;
        document.getElementById("wildlady").style.backgroundColor = "lightgreen";
    }
    else{
        document.getElementById("wildlady").style.backgroundColor = "#e97474";
    }
    if (document.getElementById("hemis").checked) {
        marks +=5;
        document.getElementById("park").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("park").style.backgroundColor = "#e97474"
    }
    if (document.getElementById("AP").checked) {
        marks += 5;
        document.getElementById("tree").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("tree").style.backgroundColor = "#e97474"
    }
    if (document.getElementById("jadev").checked) {
        marks += 5;
        document.getElementById("wildman").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("wildman").style.backgroundColor = "#e97474"
    }
    if(marks<10){
        alert("You have got very less score, spend more time in nature \n Your score is "+ marks);
    }
    else{
        alert("Congratulations!!! \nYou have an amazing score in the quiz \nYour score is "+ marks);
    }
};