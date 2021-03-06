
const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
  
    if(usernameEl && passwordEl) {
    const response = await fetch('/api/user/login', {
          // Create the functionality to help create the buttons for your website.
      method: "POST",
      body: JSON.stringify({ usernameEl, passwordEl }),
      headers: {"Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
};
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
