const element = document.querySelector('.chatList');

// Add a class to show the scrollbar when scrolling
element.addEventListener('scroll', () => {
  element.classList.add('scrolling');
  
  // Remove the class after the user stops scrolling
  clearTimeout(element.scrollTimeout);
  element.scrollTimeout = setTimeout(() => {
    element.classList.remove('scrolling');
  }, 1000); // Adjust delay for auto-hide (e.g., 1000ms = 1 second)
});
