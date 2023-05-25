
// Function to convert length from meters to feet and vice versa
function convertLength() {
    const input = parseFloat(document.getElementById('Input').value);
    const metersToFeet = (input * 3.28084).toFixed(2);
    const feetToMeters = (input / 3.28084).toFixed(2);
  
    document.getElementById('length-text').textContent = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters`;
  }
  
  // Function to convert volume from liters to gallons and vice versa
  function convertVolume() {
    const input = parseFloat(document.getElementById('Input').value);
    const litersToGallons = (input * 0.264172).toFixed(2);
    const gallonsToLiters = (input * 3.78541).toFixed(2);
  
    document.getElementById('volume-text').textContent = `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${gallonsToLiters} liters`;
  }
  
  // Function to convert mass from kilograms to pounds and vice versa
  function convertMass() {
    const input = parseFloat(document.getElementById('Input').value);
    const kilogramsToPounds = (input * 2.20462).toFixed(2);
    const poundsToKilograms = (input / 2.20462).toFixed(2);
  
    document.getElementById('mass-text').textContent = `${input} Kilos = ${kilogramsToPounds} pounds | ${input} pounds = ${poundsToKilograms} Kilos`;
  }
  
  // Event listener for the convert button
  const convertButton = document.querySelector('.btn');
  convertButton.addEventListener('click', function() {
    convertLength();
    convertVolume();
    convertMass();
  });
  