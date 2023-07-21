function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
  
    // Alternar entre modo claro e modo escuro
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
      document.querySelector('.theme-toggle').textContent = 'Modo Escuro';
    } else {
      body.setAttribute('data-theme', 'dark');
      document.querySelector('.theme-toggle').textContent = 'Modo Claro';
    }
  }
  