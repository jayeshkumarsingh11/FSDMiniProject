function addRecommendation(){
    //Get the message of new recommendation
    let recommendation = document.getElementById("new_recommendation");
    //if the user has left a reccomendtion,display a pop-up
    if(recommendation.value !=null && recommendation.value.trim() !=""){
        console.log("New recommendation added");
        //call shoepopup here

        //create a new 'recommendtion' element and set it's value to the user's message
        var element=document.createElement("div");
        element.setAttribute("class","all_recommendations");
        element.innerHTML="\<span\>&#8220;\<span\>"+ recommendation.value +"\<span\>&#8221;\</sapn\>";
        // Add this element to the end of the list of recommendations
        document.getElementById("recommendations").appendChild(element);

        //Reset the value of the textarea
        recommendation.value=" ";
    }
}

function showPopup(bool){
    if (bool){
        document.getElementById('popup').style.visibility='visible'
    }else{
        document.getElementById('popup').style.visibility='hidden'
    }
}
