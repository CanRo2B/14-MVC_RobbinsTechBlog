const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    if (title && body) {
    const response = await fetch(`/api/post`, {
         // Create the functionality to help create the buttons for your website.
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to create project');
  }
}
};
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  