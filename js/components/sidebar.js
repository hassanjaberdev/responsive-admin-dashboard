let link = document.querySelectorAll('ul .sidebar-link');

link.forEach(element => {
    element.addEventListener('click', function() {
        link.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
   }) });