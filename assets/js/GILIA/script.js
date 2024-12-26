const sections = {
    Bienvenida: "<h2>Bienvenida</h2><p>INTRODUCCION GILIA.</p>",
    transactions: "<h2>Transactions Section</h2><p>Manage your transactions here.</p>",
    customers: "<h2>Customers Section</h2><p>View your customers data.</p>",
    reports: "<h2>Reports Section</h2><p>Generate detailed reports here.</p>",
    settings: "<h2>Settings Section</h2><p>Customize your settings.</p>",
    developer: "<h2>Developer Section</h2><p>Access developer tools and APIs.</p>",
  };
  

  function navigateTo(section) {

    const content = document.getElementById("content");
    content.innerHTML = sections[section];
    const sidebarItems = document.querySelectorAll(".sidebar nav ul li");
    sidebarItems.forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(`li[onclick="navigateTo('${section}')"]`).classList.add("active");
  }
  