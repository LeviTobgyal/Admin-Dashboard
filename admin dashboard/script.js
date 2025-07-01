const project_names = ["Project 1","Project 2","Project 3","Project 4", "Project 5", "Project 6"]


const maincontent = document.querySelector(".projects");

function createProjectCard(title, content){
    return `
        <div class="project-card">
            <div>
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        
            <div class="project-links">
                <a href="/"><img src="images/star-plus-outline.svg" width=20px></a>
                <a href="/"><img src="images/eye-plus-outline.svg" width=20px></a>
                <a href="/"><img src="images/source-fork.svg" width=20px></a>
            </div>
        </div>
    `;
}

const pcontent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

for (let project_name of project_names){
    const project_card = createProjectCard(project_name, pcontent);
    maincontent.innerHTML += project_card;
}

function openModal() {
    const title = prompt("Enter Project Title:");
    if (!title) return;

    const description = prompt("Enter Project Description:");
    if (!description) return;

    const card = createProjectCard(title, description);
    maincontent.innerHTML += card;
}