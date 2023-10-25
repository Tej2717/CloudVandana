function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (
        firstName === "" ||
        lastName === "" ||
        dob === "" ||
        country === "" ||
        gender.length === 0 ||
        profession === "" ||
        email === "" ||
        mobile === ""
    ) {
        alert("Please fill out all fields.");
    } else {
        const genderValues = Array.from(gender).map(g => g.value).join(', ');
        const popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${genderValues}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
        document.getElementById('popupContent').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('surveyForm').reset();
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
