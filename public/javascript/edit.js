const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${postId}`, {
       // Create the functionality to help create the buttons for your website.
      method: "PUT",
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        "Content-Type": "application/json"
      }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
       // Create the functionality to help create the buttons for your website.
       await fetch (`/api/post/S{postId}`, {
         method: "DELETE"
       });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);