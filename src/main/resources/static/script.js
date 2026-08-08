const questionBox = document.getElementById("questionBox"); 
const researchButton = document.getElementById("researchButton");

researchButton.addEventListener('click', researchClicked);

 async function researchClicked(){
    const researchButtonReturned = await fetch("/postPath", {
        method : "POST",
        body : questionBox.value,
        headers : {"Content-Type" : "text/plain"}
    }); 

    const textRecieved = await researchButtonReturned.text(); 
    alert(`your question ${textRecieved} has been recieved thankyou !!!`); 

}