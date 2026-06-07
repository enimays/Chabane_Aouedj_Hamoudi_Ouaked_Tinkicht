const DEFAULT_USERS = [
    { username: "wissam", password: "Wass@10" },
    { username: "lila",   password: "Lila@79" }
];


function getAllUsers() {
    const stored = JSON.parse(localStorage.getItem('users') || '[]');
    const merged = [...DEFAULT_USERS];
    stored.forEach(u => {
        if (!merged.some(d => d.username === u.username)) {
            merged.push(u);
        }
    });
    return merged;
}


const loginForm = document.querySelector('.login-box');

if (loginForm) {

    window.addEventListener('load', function () {
       
        const remembered = localStorage.getItem('remembered_user');
        const expires    = localStorage.getItem('remember_expires');
        if (remembered && expires && Date.now() < parseInt(expires)) {
            document.getElementById('username').value = remembered;
            document.getElementById('check').checked  = true;
        }

      
        const newUser = sessionStorage.getItem('signup_success');
        if (newUser) {
            const message = document.getElementById('message');
            message.style.color = 'lightgreen';
           message.textContent = Account created! Welcome, ${newUser}. You can now sign in.;
            document.getElementById('username').value = newUser;
            sessionStorage.removeItem('signup_success');
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const remember = document.getElementById('check').checked;
        const message  = document.getElementById('message');

        if (!username || !password) {
            message.style.color = 'red';
            message.textContent = 'Please fill out all fields.';
            return;
        }

       
        const users = getAllUsers();
        const user  = users.find(u => u.username === username && u.password === password);

        if (!user) {
            message.style.color = 'red';
            message.textContent = 'Incorrect username or password.';
            return;
        }

        message.style.color = 'lightgreen';
        message.textContent = 'Login successful! Redirecting...';

        if (remember) {
            localStorage.setItem('remembered_user',  username);
            localStorage.setItem('remember_expires', Date.now() + 7 * 24 * 60 * 60 * 1000);
        } else {
            localStorage.removeItem('remembered_user');
            localStorage.removeItem('remember_expires');
            sessionStorage.setItem('current_user', username);
        }

        setTimeout(function () {
            window.location.href = '../index.html';
        }, 1500);
    });
}