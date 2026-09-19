const questionBox = document.getElementById("questionBox"); 
const researchButton = document.getElementById("researchButton");
const response = document.getElementById("response"); 

researchButton.addEventListener('click', researchClicked);

 async function researchClicked(){
    const researchButtonReturned = await fetch("/submitQuestion", {
        method : "POST",
        body : JSON.stringify({question: questionBox.value}),
        headers : {"Content-Type" : "application/json"}
    }); 

    const textReceived = await researchButtonReturned.text(); 
    //let readable = JSON.stringify(JSON.parse(textReceived), null, 4);
    //response.textContent = `${readable}`; 
    //questionBox.value = "";

}

