document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Remove animation class from all sections
            sections.forEach(section => {
                section.classList.remove('fade-in');
            });

            // Add animation class to the target section
            targetSection.classList.add('fade-in');

            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


fetch('config/contact_details.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('email-link').href = 'mailto:' + data.email;
        document.getElementById('linkedin-link').href = data.linkedin;
        document.getElementById('github-link').href = data.github;
    })
    .catch(error => console.error('Error fetching contact details:', error));


// // main.js
// function openProjectLink(index) {
//     fetch('config/project-details.json') //  JSON file is in 'config' folder
//         .then(response => response.json())
//         .then(data => {
//             const projectLink = data.projects[index].link;
//             window.open(projectLink, '_blank');
//         })
//         .catch(error => console.error('Error fetching project details:', error));
// }




// fetch('../config/project_details.json')
//             .then(response => response.json())
//             .then(data => {
//                 // Assuming project1.html corresponds to the first project in the JSON
//                 const project = data.projects[0];
//                 document.getElementById('project-name').textContent = project.name;
//                 document.getElementById('github-link').href = project.link;
//             })
//             .catch(error => console.error('Error fetching project details:', error));