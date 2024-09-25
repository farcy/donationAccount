
 

// donate for noakhali


document.getElementById('donateNow').addEventListener('click', function(){

    // Get input value from the donation field
    const inputFields = document.getElementById('inputField').value;  
    const inputFieldNumber = parseFloat(inputFields);

    // Get the main balance value
    const mainBalance = document.getElementById('mainBalance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance); 


    // Check if input amount is greater than main balance
    if(inputFieldNumber > mainBalanceNumber){
        alert("You don't have enough amount for donation");
    } else {
        // Deduct donation amount from main balance
        const newMainBalance = mainBalanceNumber - inputFieldNumber;
        document.getElementById('mainBalance').innerText = newMainBalance; 

        // Update donation amount for Noakhali
        const donationBalance = document.getElementById('donateForFloat').innerText;
        const donationBalanceNumber = parseFloat(donationBalance); 

        const newBalanceForFloat = donationBalanceNumber + inputFieldNumber;
        document.getElementById('donateForFloat').innerText = newBalanceForFloat;

        document.getElementById('inputField').value = ""; 

    }
});

document.getElementById('donateNow2').addEventListener('click', function(){

    // Get input value from the donation field
    const inputFields = document.getElementById('inputField2').value;  
    const inputFieldNumber = parseFloat(inputFields);

    // Get the main balance value
    const mainBalance = document.getElementById('mainBalance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance); 


   

    // Check if input amount is greater than main balance
    if(inputFieldNumber > mainBalanceNumber){
        alert("You don't have enough amount for donation");
    } else {
        // Deduct donation amount from main balance
        const newMainBalance = mainBalanceNumber - inputFieldNumber;
        document.getElementById('mainBalance').innerText = newMainBalance; 

        // Update donation amount for Noakhali
        const donationBalance = document.getElementById('donateForFloods').innerText;
        const donationBalanceNumber = parseFloat(donationBalance); 

        const newBalanceForFloat = donationBalanceNumber + inputFieldNumber;
        document.getElementById('donateForFloods').innerText = newBalanceForFloat;

        document.getElementById('inputField2').value = ""; 

    }
});


document.getElementById('donateNow3').addEventListener('click', function(){

    // Get input value from the donation field
    const inputFields = document.getElementById('inputField3').value;  
    const inputFieldNumber = parseFloat(inputFields);

    // Get the main balance value
    const mainBalance = document.getElementById('mainBalance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance); 


   

    // Check if input amount is greater than main balance
    if(inputFieldNumber > mainBalanceNumber){
        alert("You don't have enough amount for donation");
    } else {
        // Deduct donation amount from main balance
        const newMainBalance = mainBalanceNumber - inputFieldNumber;
        document.getElementById('mainBalance').innerText = newMainBalance; 

        // Update donation amount for Noakhali
        const donationBalance = document.getElementById('donationForQuota').innerText;
        const donationBalanceNumber = parseFloat(donationBalance); 

        const newBalanceForFloat = donationBalanceNumber + inputFieldNumber;
        document.getElementById('donationForQuota').innerText = newBalanceForFloat;

        document.getElementById('inputField3').value = ""; 

    }
});






 



    // Get the buttons
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');

    // Function to change the button to green
    function makeGreen(event) {
        // Remove green color from both buttons
        donationBtn.classList.remove('bg-green-500', 'text-white');
        donationBtn.classList.add('bg-white', 'text-black', 'border');
        
        historyBtn.classList.remove('bg-green-500', 'text-white');
        historyBtn.classList.add('bg-white', 'text-black', 'border');

        // Add green color to the clicked button
        event.target.classList.remove('bg-white', 'text-black', 'border');
        event.target.classList.add('bg-green-500', 'text-white');
    }

    // Add event listeners to both buttons
    donationBtn.addEventListener('click', makeGreen);
    historyBtn.addEventListener('click', makeGreen);



