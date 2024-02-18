var projectsText = "";

fetch('https://pixelatedlagg.github.io/projects.json').then(response => response.json()).then(data => //read projects file and put as html
{
    //handle data
    data.projects.forEach(project => {
        //main.innerHTML += `<div class="title"><h2>${project.title}</h2><a href="${project.link}">${project.symbol}</a></div><p>${project.description}</p>`;
        projectsText += `<a href=\"${project.link}\">${project.title}</a><br>${project.description}<br><br>`;
    });
    projectsText = projectsText.slice(0, -8);
})
.catch(error =>
{
    console.error('Error reading JSON file:', error);
});

window.onpopstate = function() { //force reload on chromium
    location.reload();
}
window.onunload = function() { }; //stop firefox from caching
var loading = false;
$(function () {
    $('#form').on('submit',function (e) {
        e.preventDefault();
        input(document.getElementById("input").value);
    });
});
function input(input)
{
    if (input == "" || loading)
    {
        return;
    }
    var originalInput = input;
    input = input.toLowerCase();
    if (input == "clear" || input == "cls")
    {
        $('#output').empty();
        document.getElementById("input").value = "";
        return;
    }
    var p = document.createElement('p');
    var inp = document.createElement('p');
    switch (input)
    {
        case "info":
        case "help":
            p.innerHTML = "<span onclick=\"input('projects')\">projects</span>   - Display all of my projects, new and old.<br><span onclick=\"input('old')\">old</span>   - Go back to my old website (The one that isn't a terminal).<br><span onclick=\"input('about')\">about</span>   - Learn more about me.<br><span onclick=\"input('clear')\">clear</span>   - Clear the terminal.";
            break;
        case "projects":
            p.innerHTML = projectsText;
            break;
        case "about":
            p.innerHTML = "Hello! I'm PixelatedLagg.<br>I am a teenage developer who likes to make games, applications, and discord bots. <br>I mainly use C#, however I am learning C and C++. I am also somewhat competent in HTML/CSS. <br>With nearly 2 years of experience and way too much free time, I am constantly making a new game or piece of software.<br><a href=\"https://discord.gg/4W5rTDD73X\">Discord</a> <a href=\"https://github.com/PixelatedLagg\">Github</a> <a href=\"https://itch.io/profile/pixelated-lagg\">Itch</a>";
            break;
        case "old":
            p.className = "loading";
            p.innerHTML = "Loading old website...";
            inp.innerHTML = `<i>root@pl-website</i>:<b>~</b>$ ${input}`;
            document.getElementById("output").appendChild(inp);
            document.getElementById("output").appendChild(p);
            document.getElementById("input").value = "";
            document.getElementById("inputLine").remove();
            loading = true;
            setTimeout(function(){
                p.className = "";
                p.innerHTML = "Loaded old website."
                loading = false;
                window.location.href = "https://pixelatedlagg.github.io/old-website/";
            }, 5000);
            break;
        case "welcome":
            p.innerHTML = "Welcome to my website. Use <span onclick=\"input('ui')\">ui</span> to be sent to a normal user interface. Use <span onclick=\"input('help')\">help</span> to list all commands.";
            break;
        case "ui":
            p.className = "loading";
            p.innerHTML = "Loading user interface...";
            inp.innerHTML = `<i>root@pl-website</i>:<b>~</b>$ ${originalInput}`;
            document.getElementById("output").appendChild(inp);
            document.getElementById("output").appendChild(p);
            document.getElementById("input").value = "";
            document.getElementById("inputLine").remove();
            loading = true;
            setTimeout(function(){
                p.className = "";
                p.innerHTML = "Loaded user interface."
                loading = false;
                window.location.href = "ui/index.html";
            }, 5000);
            return;
        default:
            p.innerHTML = `${originalInput} : The term '${originalInput}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.`;
            break;
    }
    inp.innerHTML = `<i>root@pl-website</i>:<b>~</b>$ ${originalInput}`;
    document.getElementById("output").appendChild(inp);
    document.getElementById("output").appendChild(p);
    document.getElementById("input").value = "";
}