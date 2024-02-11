resizeUpdate();
function resizeUpdate()
{
    if (window.innerHeight > 948)
    {
        document.documentElement.style.setProperty("--sideWidth", window.innerHeight + "px");
    }
}
window.addEventListener('resize', resizeUpdate()); //resize moving text on zoom

fetch('https://pixelatedlagg.github.io/projects.json').then(response => response.json()).then(data => //read projects file and put as html
{
    var main = document.getElementsByClassName("main")[0];
    //handle data
    data.projects.forEach(project => {
        main.innerHTML += `<div class="title"><h2>${project.title}</h2><a href="${project.link}">${project.symbol}</a></div><p>${project.description}</p>`;
    });
    console.log(data);
})
.catch(error =>
{
    console.error('Error reading JSON file:', error);
});