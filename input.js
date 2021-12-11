$(function () {
    $('#form').on('submit',function (e) {
        e.preventDefault();
        terminalInput();
    });
});
function terminalInput()
{
    if (document.getElementById("input").value == "")
    {
        return;
    }
    if (document.getElementById("input").value == "clear")
    {
        $('#output').empty();
        document.getElementById("input").value = "";
        return;
    }
    var p = document.createElement('p');
    var inp = document.createElement('p');
    switch (document.getElementById("input").value)
    {
        case "info":
            p.innerHTML = "\"projects\"   - Display all of my projects, new and old.<br>\"old\"   - Go back to my old website (The one that isn't a terminal).<br>\"about\"   - Learn more about me.<br>\"clear\"   - Clear the terminal.";
            break;
        case "projects":
            p.innerHTML = "<a href=\"https://pixelated-lagg.itch.io/jump-squared\">Jump Squared</a><br>A Jump Squared is a basic 2d platformer based on Geometry Dash and Jump King. <br>It is centered around a nameless and emotionless blue square who needs to get to the white platform at the end of each level. (Very original, I know.)<br> Currently, there are 3 levels in the game, and I am planning to eventually finish the game with a fourth level.<br><br><a href=\"https://github.com/PixelatedLagg/Impart\">Impart</a><br>Impart is a library of C# methods to help developers in creating a cool looking website, while skipping the annoying markup. Somewhat ironcially, this website isn't made using it. <br>When Impart evolves enough, I will have an example website (with source code) for all to admire.<br><br><a href=\"https://github.com/PixelatedLagg/Scrape\">Scrape</a><br>Scrape is an object oriented programming language very similiar to C#, in syntax and in use. <br>The fellow developers and I plan to implement a default framework to rival C#'s System.Reflections and a dynamic naming operator to allow for maximum variable control for the developer.";
            break;
        case "about":
            p.innerHTML = "Hello! I'm PixelatedLagg.<br>I am a teenage developer who likes to make games, applications, and discord bots. <br>I mainly use C#, however I am learning C and C++. I am also somewhat competent in HTML/CSS. <br>With nearly 2 years of experience and way too much free time, I am constantly making a new game or piece of software.<br><a href=\"https://discord.gg/4W5rTDD73X\">Discord</a> <a href=\"https://github.com/PixelatedLagg\">Github</a> <a href=\"https://itch.io/profile/pixelated-lagg\">Itch</a>";
            break;
        case "old":
            p.innerHTML = "<a href=\"https://pixelatedlagg.github.io/old-website/\">Old Website</a>";
            break;
        case "welcome":
            p.innerHTML = "You have already been welcomed :/";
            break;
        case "wwssadadba":
            p.innerHTML = "You have found my hidden secret :>";
            break;
        default:
            p.innerHTML = `"${document.getElementById("input").value}" is not a recognized command!`;
            break;
    }
    inp.innerHTML = `<i>root@pl-website</i>:<b>~</b>$ ${document.getElementById("input").value}`;
    document.getElementById("output").appendChild(inp);
    document.getElementById("output").appendChild(p);
    document.getElementById("input").value = "";
}
function removeItem(item) {
    item.remove();
}