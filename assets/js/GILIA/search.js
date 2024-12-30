const searchItems = [
    "Bienvenida",
    "Objetivos",
    "Visión",
    "¿Quienes somos?",
    "Materiales",
    "Narrativas",
    "Proyectos",
    "Publicaciones",
    "Subsección 1.1",
    "Subsección 1.2",
    "Directores",
    "Docentes Investigadores",
    "Becarios",
    "Integrantes",
    "Proyectos"
];

const searchBar = document.getElementById('search-bar');
const resultsList = document.getElementById('result-list');


searchBar.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const results = searchItems.filter(item => item.toLowerCase().includes(query));

    resultsList.innerHTML = ''; 


    if (results.length > 0) {
        results.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            resultsList.appendChild(listItem);
        });
        resultsList.style.display = 'block'; 
    } else {
        resultsList.innerHTML = '<li>No se encontraron resultados</li>'; 
        resultsList.style.display = 'block';
    }
});


document.addEventListener('click', function (event) {
    if (!searchBar.contains(event.target) && !resultsList.contains(event.target)) {
        resultsList.style.display = 'none';
    }
});


resultsList.addEventListener('mouseenter', function () {
    resultsList.style.display = 'block';
});


resultsList.addEventListener('mouseleave', function () {
    if (searchBar.value === '') {  
        resultsList.style.display = 'none';
    }
});


resultsList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        alert(`You clicked on: ${event.target.textContent}`);
        searchBar.value = event.target.textContent; 
        resultsList.style.display = 'none';
    }
});
