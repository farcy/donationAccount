
// donate for feni button
document.getElementById('donateNow2').addEventListener('click', function() {
    // Get input value from the donation field
    const inputFields = document.getElementById('inputField2').value;
    const inputFieldNumber = parseFloat(inputFields);

    // Get the main balance value
    const mainBalance = document.getElementById('mainBalance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance); 

    // Check if input amount is greater than main balance
    if (inputFieldNumber > mainBalanceNumber) {
        alert("You don't have enough amount for donation");
    } else {
        // Deduct donation amount from main balance
        const newMainBalance = mainBalanceNumber - inputFieldNumber;
        document.getElementById('mainBalance').innerText = newMainBalance; 

        // Update donation amount for Feni
        const donationBalance = document.getElementById('donateForFeni').innerText;
        const donationBalanceNumber = parseFloat(donationBalance); 

        const newBalanceForFeni = donationBalanceNumber + inputFieldNumber;
        document.getElementById('donateForFeni').innerText = newBalanceForFeni;

        document.getElementById('inputField2').value = ""; 
    }
});

// donate for quota movement button
document.getElementById('donateNow3').addEventListener('click', function() {
    // Get input value from the donation field
    const inputFields = document.getElementById('inputField3').value;
    const inputFieldNumber = parseFloat(inputFields);

    // Get the main balance value
    const mainBalance = document.getElementById('mainBalance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance); 

    // Check if input amount is greater than main balance
    if (inputFieldNumber > mainBalanceNumber) {
        alert("You don't have enough amount for donation");
    } else {
        // Deduct donation amount from main balance
        const newMainBalance = mainBalanceNumber - inputFieldNumber;
        document.getElementById('mainBalance').innerText = newMainBalance; 

        // Update donation amount for Quota Movement
        const donationBalance = document.getElementById('donateForQuota').innerText;
        const donationBalanceNumber = parseFloat(donationBalance); 

        const newBalanceForQuota = donationBalanceNumber + inputFieldNumber;
        document.getElementById('donateForQuota').innerText = newBalanceForQuota;

        document.getElementById('inputField3').value = ""; 
    }
});