document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const today = new Date();

    if (dob > today) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const age = calculateAge(dob, today);
    displayAge(age);
});

function calculateAge(dob, today) {
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

function displayAge(age) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You are <strong>${age}</strong> years old.`;
}
