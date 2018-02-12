
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// FUNCTION TO CHANGE AVATAR CONTENT ///////////////////////////////////////////

af = document.getElementsByClassName('avafeat');
for (var i = 0; i< af.length; i++){
    af[i].onclick = function(){
        var img = this.getElementsByTagName('img')[0].src;
        console.log(img);
        var pid = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        console.log(pid);
        if(pid == 'hair-mdl'){
            document.getElementById("hair").setAttribute("src", img);
        } else if (pid == 'skin-mdl'){
            document.getElementById("avatar").setAttribute("src", img); 
        }  else if (pid == 'jersey-mdl'){
            document.getElementById("jersey").setAttribute("src", img); 
        }  else if (pid == 'shorts-mdl'){
            document.getElementById("shorts").setAttribute("src", img); 
        }  else if (pid == 'accessories-mdl'){
            document.getElementById("accessories").setAttribute("src", img); 
        }
        
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// FUNCTION TO SHOW CHARACTER CREATION CONTENT /////////////////////////////////

//shows the creation character content
function contentGameShows() {

    //container div for start game
    var startGameContainer = document.getElementById("startGameContainer");
    //kobe image
    var kobe = document.getElementById("kobe");
    //lebron
    var lebron = document.getElementById("lebron");
    //var for start game button
    var startGameButton = document.getElementById("startGameButton");
    //var for hidden avatar view
    var avatarView = document.getElementById("avatarView");
    //var for hidden button view
    var buttonView = document.getElementById("buttonView");
    //var for take screen shot button view
    var takeScreenShot = document.getElementById("takeScreenShot");

    //if statement that changes view page of user
    if (avatarView.style.display === "none" && buttonView.style.display === "none" ) {

        // //initial countdown number
        var timeCounter = 4;

        // change the count down every 1 second
        var changeTime = setInterval(function() {

            // subtracting from timeCounter
            timeCounter--;

            //renders on the page 
            document.getElementById("countDown").innerHTML = timeCounter;

            if (timeCounter <= 0) {
                clearInterval(changeTime);

                //SHOW view of character creation content shows

                buttonView.style.display = "block";
                avatarView.style.display = "block";
                takeScreenShot.style.display = "block";

                //HIDES the button to start the game
                startGameContainer.style.display = "none";
                startGameButton.style.display = "none";
                kobe.style.display = "none";
                lebron.style.display = "none";

            }
        }, 1000);
    }
}


//html2Canvas
$(document).ready(function() {

    $( "#takeScreenShot" ).click(function() {

        html2canvas(document.querySelector("#avatarView")).then(canvas => {

            $('#test').attr('href', canvas.toDataURL("image/png"));
            $('#test').attr('download','Test file.png');
            $('#test')[0].click();

        });

    });

});

