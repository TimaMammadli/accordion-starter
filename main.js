document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.ul li');
  
    accordionItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          accordionItems.forEach(item => {
            item.classList.remove('active');
          });
          item.classList.add('active');
        }
      });
    });
  });
  