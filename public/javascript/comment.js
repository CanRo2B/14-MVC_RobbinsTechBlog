const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    // Create the functionality to help create the buttons for your website.
    if (postID && body) {
      const response = await fetch("/api/", {
        method: "POST",
        body: JSON.stringify({ postId, body }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.resplace("/dashboard");
      } else {
        alert("Did not add new blog");
      }
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);