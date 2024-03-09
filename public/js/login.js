const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#signupFirstName').value.trim();
    const lastName = document.querySelector('#signupLastName').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (email && password && firstName && lastName) {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            body: JSON.stringify({firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' },
        }).then(resp => resp.json());

        if (response) {
            console.log("you are logged in!")
            console.log(response);
            document.location.replace(`/user/${response.id}`);
        } else {
            alert('Failed to log in.');
        }
    }
};

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json());

        if (response) {
            console.log(response.user.id);
            document.location.replace(`/user/${response.user.id}`)
            
            // console.log("you are logged in!");
        } else {
            alert('Failed to sign up.');
        }
    }
};

document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);

document.querySelector('#signupBtn').addEventListener('click', signupFormHandler);