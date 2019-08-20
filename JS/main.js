
var title = "DAVIDs TEA";
var tempString = "";

var countdown = setInterval(typeTitle, 55);

function typeTitle(){
    if(tempString!=title){
        tempString+=title[tempString.length];
    }
    document.getElementById('title').innerHTML=tempString;
    if(tempString==title){
        clearInterval(countdown);
        return;
    }
}

