const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Dark Mode';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px 15px';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';
document.body.appendChild(toggleBtn);

let darkMode = false;
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkMode = !darkMode;
    toggleBtn.textContent = darkMode ? ' Light Mode' : 'Dark Mode';
});

// Add dark mode styles
const darkStyle = document.createElement('style');
darkStyle.textContent = `
  body.dark {
    background-color: #111;
    color: #eee;
  }
  body.dark header,
  body.dark footer {
    background: #222;
  }
  body.dark nav a,
  body.dark .contact a,
  body.dark .card a {
    color: #90caf9;
  }
  body.dark .skills li {
    background: #333;
  }
  body.dark .work-experience .card {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(255,255,255,0.05);
  }
  body.dark .projects .card {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(255,255,255,0.05);
  }
`
document.head.appendChild(darkStyle);


