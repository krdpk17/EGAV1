document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('clickMe');
  const messageElement = document.getElementById('message');
  let clickCount = 0;

  button.addEventListener('click', function() {
    clickCount++;
    messageElement.textContent = `You clicked the button ${clickCount} time${clickCount === 1 ? '' : 's'}!`;
  });
}); 