
document.addEventListener('DOMContentLoaded', function() {

  const div = document.getElementById('chaton');;

  div.style.display = 'none';

  bouton.addEventListener('click', function() {
    if (div.style.display === 'none') {
      div.style.display = 'block'; 
    } else {
      div.style.display = 'none'; 
    }
  });
});
