document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const alertBox = document.getElementById('alertSuccess');
    alertBox.classList.remove('d-none');

    
    document.getElementById('contactForm').reset();
  });
