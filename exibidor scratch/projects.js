// Lista de projetos do Scratch

let projects = [
    {
        id: "1",
        title: "Jogo do Gato",
        description: "Um jogo simples feito no Scratch onde você controla um gato para coletar moedas.",
        embedUrl: "https://scratch.mit.edu/projects/10128407/embed"
    },
    {
        id: "2",
        title: "Corrida Maluca",
        description: "Corra contra o tempo e desvie dos obstáculos!",
        embedUrl: "https://scratch.mit.edu/projects/612484/embed"
    }
];


function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
            <strong>ID: ${project.id}</strong>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <iframe src="${project.embedUrl}" allowfullscreen></iframe>
            <a href="${project.embedUrl.replace('/embed','')}" target="_blank" style="color:#357ae8;text-decoration:underline;word-break:break-all;display:block;margin-top:8px;">${project.embedUrl.replace('/embed','')}</a>
        `;
        container.appendChild(div);
    });
}

function addProject(e) {
    e.preventDefault();
    const id = document.getElementById('project-id').value.trim();
    const title = document.getElementById('project-title').value.trim();
    const description = document.getElementById('project-description').value.trim();
    const embedUrl = document.getElementById('project-embed').value.trim();
    if (!id || !title || !description || !embedUrl) return;
    // Verifica se o ID já existe
    if (projects.some(p => p.id === id)) {
        alert('Já existe um projeto com esse ID!');
        return;
    }
    projects.push({ id, title, description, embedUrl });
    renderProjects();
    document.getElementById('add-project-form').reset();
}

document.getElementById('add-project-form').addEventListener('submit', addProject);

renderProjects();
