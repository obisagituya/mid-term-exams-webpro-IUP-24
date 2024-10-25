document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }

      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert('Registration successful!');
          window.location.href = '../login/login.html';
        } else {
          const errorData = await response.json();
          alert(`Registration failed: ${errorData.message}`)
        }
      } catch (error) {
        console.error('Error:', error);
        alert("An error occurred. Please try again later");
      }
    })
  }
})