// Function to generate a random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send OTP via email
function sendOTP() {
    const email = document.getElementById('email').value;
    const otp = generateOTP();

    // Use your email sending logic here
    Email.send({
        SecureToken: "56706867-eabb-4f98-8373-bb962fe3fc8f",
        To: email,  // Remove .value here
        From: "iamrajgupta6@gmail.com",
        Subject: "OTP for Login",
        Body: `Your OTP is: ${otp}.`  // Use backticks for template string
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent successfully!");
            } else {
                alert("Failed to send OTP. Please try again.");
            }
        }
    );

    // Store the OTP locally for verification
    localStorage.setItem('otp', otp);
}

// Function to verify OTP and show home page
function verifyOTP() {
    const enteredOTP = document.getElementById('otp_inp').value;
    const storedOTP = localStorage.getItem('otp');

    if (enteredOTP === storedOTP) {
        // OTP verification successful
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('homeContainer').style.display = 'block';

        // Display welcome message
        const email = document.getElementById('email').value;
        document.getElementById('welcomeMessage').innerText = `Hello ${email}!`;
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

// Function to log out and go back to the login page
function logout() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('homeContainer').style.display = 'none';

    // Clear stored OTP and email
    localStorage.removeItem('otp');
    document.getElementById('email').value = '';
    document.getElementById('otp_inp').value = '';
}
