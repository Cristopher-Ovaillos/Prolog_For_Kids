
let currentSection = localStorage.getItem('currentSection') || 'bienvenida'; 

async function loadContent(section) {
  try {
    const response = await fetch('/assets/js/GILIA/data.json');
    const data = await response.json();
    const content = document.getElementById("content-id");
    content.innerHTML = '';  

    if (data[section]) {
      renderSection(section, data[section], content);
    } else {
      content.innerHTML = `<p>Sección no encontrada.</p>`;
    }
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
}

function renderSection(section, data, content) {
  switch (section) {
    case 'bienvenida':
      content.innerHTML = `
        <h2>${data.titulo}</h2>
        <p>${data.contenido}</p>
      `;
      break;
    case 'quienesSomos':
      let html = `
        <h2>¿Quiénes Somos?</h2>
        <p>${data.descripcion}</p>
        <h3 id="director">Directores:</h3>
      `;
      data.directores.forEach(director => {
        html += `
          <div class="profile-card">
            <img src="${director.avatar || '/assets/images/default-profile.webp'}" alt="${director.nombre}" />
            <div>
              <div class="name">${director.nombre}</div>
              <a href="${director.linkedin}" target="_blank">LinkedIn</a>
            </div>
          </div>
        `;
      });

      html += `<h3 id="docInvestigador">Docentes Investigadores:</h3>`;
      data.docentesInvestigadores.forEach(docente => {
        html += `
          <div class="profile-card">
            <img src="${docente.avatar || '/assets/images/default-profile.webp'}" alt="${docente.nombre}" />
            <div class="name">${docente.nombre}</div>
          </div>
        `;
      });


      html += `<h3 id="becario">Becarios:</h3>`;
      data.becarios.forEach(becario => {
        html += `
          <div class="profile-card">
            <img src="${becario.avatar || '/assets/images/default-profile.webp'}" alt="${becario.nombre}" />
            <div class="name">${becario.nombre}</div>
          </div>
        `;
      });

      html += `<h3 id="integrante">Integrantes:</h3>`;
      data.integrantes.forEach(integrante => {
        html += `
          <div class="profile-card">
            <img src="${integrante.avatar || '/assets/images/default-profile.webp'}" alt="${integrante.nombre}" />
            <div class="name">${integrante.nombre}</div>
          </div>
        `;
      });


      html += `<h3 id="proyecto">Proyectos:</h3>`;
      data.proyectos.forEach(proyecto => {
        html += `
          <div class="project-card">
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.enlace}" target="_blank">Ver más</a>
          </div>
        `;
      });
      
      content.innerHTML = html;
      break;
    default:
      content.innerHTML = `<p>Sección no disponible.</p>`;
      break;
  }
}


function navigateTo(section) {

  if (section !== currentSection) {
    loadContent(section); 
    currentSection = section; 
    localStorage.setItem('currentSection', section); 
  }

  const sidebarItems = document.querySelectorAll(".sidebar nav ul li");
  sidebarItems.forEach(item => item.classList.remove("active"));
  

  const activeItem = document.querySelector(`li[onclick="navigateTo('${section}')"]`);
  if (activeItem) {
    activeItem.classList.add("active");
  }
}


window.addEventListener('DOMContentLoaded', () => {
  loadContent(currentSection); 

  const sidebarItems = document.querySelectorAll(".sidebar nav ul li");
  sidebarItems.forEach(item => item.classList.remove("active"));
  const activeItem = document.querySelector(`li[onclick="navigateTo('${currentSection}')"]`);
  if (activeItem) {
    activeItem.classList.add("active");
  }
});
