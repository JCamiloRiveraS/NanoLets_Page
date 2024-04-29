/*Desarrollado por Camilo Rivera */

document.addEventListener('DOMContentLoaded', function () {
    const eye = document.getElementById('eye');
  
    eye.addEventListener('click', function () {
      eye.classList.add('rotateX', 'rotateY', 'rotateZ');
  
      setTimeout(function () {
        eye.classList.remove('rotateX', 'rotateY', 'rotateZ');
      }, 1000);
    });
  });
  