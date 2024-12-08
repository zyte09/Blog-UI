$(document).ready(function(){
    $('#submenu').click(function(event){
        event.stopPropagation();
        $('#drop').toggle();
    });

    $(document).click(function(){
        $('#drop').hide();
    });
});

document.querySelector('button').addEventListener('click', function() {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  });
  
function showSidebar(){
    const sidebar = document.querySelector('.side-nav-links');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.side-nav-links');
    sidebar.style.display = 'none';
}

document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked on ${button.textContent}`);
    });
  });
