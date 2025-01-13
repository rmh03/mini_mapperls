document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('optionText').style.display = 'none'; 
    document.querySelector('.form-toggle').style.display = 'none'; 
});

document.getElementById('loginBtn').addEventListener('click', function() {
    
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('optionText').style.display = 'none'; 
    document.querySelector('.form-toggle').style.display = 'none'; 
});


document.getElementById('toLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
});


document.getElementById('toSignup').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here
    alert('Signup form submitted!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    alert('Login form submitted!');
});