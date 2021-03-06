const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
  if (usernameEl && passwordEl) {
    const response = await fetch('/api/user', {
         // Create the functionality to help create the buttons for your website.
      method: "POST",
      body: JSON.stringify({ usernameEl: usernameEl.value, passwordEl: passwordEl.value }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };

  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);