document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('coolButton').addEventListener('click', function() {
      // Add your cool effect or redirect logic here
      // For example, change the background color on click
      document.body.style.backgroundColor = '#ff6347';
      
      // Redirect to an external link after a delay
      setTimeout(() => {
        window.location.href = 'https://jakem1213.github.io/HarmoniccollectionHome/';
      }, 500);
    });
  });
  