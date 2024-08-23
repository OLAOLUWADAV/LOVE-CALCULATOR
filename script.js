

 function checkout() {
    // currentIndex = index;
    //     let checkout = 12345
    
        inputFirst = document.getElementById('checkout1').value 
    
        inputSecond = document.getElementById('checkout2').value 
    
    if(inputFirst=='' || inputSecond == '')
        {
            alert("Check it out with the right information");
        }
        else{
            
            let rands = Math.ceil(Math.random()*100)
            document.getElementById("checkout1").value = ''
            document.getElementById("checkout2").value = ''
        getout.innerHTML = `${rands}%`
        } 
}