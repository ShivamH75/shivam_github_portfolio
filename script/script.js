// script.js

fetch('config/contact-details.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('email-link').href = `mailto:${data.email}`;
        document.getElementById('linkedin-link').href = data.linkedin;
        document.getElementById('github-link').href = data.github;
    })
    .catch(error => console.error('Error fetching contact information:', error));

   
    // main.js
function openProjectLink(index) {
    fetch('config/project-details.json') // Assuming JSON file is in 'config' folder
        .then(response => response.json())
        .then(data => {
            const projectLink = data.projects[index].link;
            window.open(projectLink, '_blank');
        })
        .catch(error => console.error('Error fetching project details:', error));
}
