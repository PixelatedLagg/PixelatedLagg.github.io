$(document).ready(function() {
    $(".itch").hover(
    function() { 
        $("#icons").toggleClass('itchShadow'); 
    });
    $(".discord").hover(
    function() { 
        $("#icons").toggleClass('discordShadow'); 
    });
    $(".github").hover(
    function() { 
        $("#icons").toggleClass('githubShadow'); 
    });
});
function infoDisplay(obj) {
    var desc = document.getElementById("desc");
    var title = document.getElementById("title");
    var link = document.getElementById("linkContent");
    switch (obj) {
        case 1:
            link.href = "https://pixelatedlagg.github.io";
            title.textContent = "Hello! I'm PixelatedLagg.";
            desc.textContent = "I am a teenage developer who likes to make games, applications, and discord bots. I mainly use C#, however I am learning C and C++. I am also somewhat competent in HTML/CSS. With nearly 2 years of experience and way too much free time, I am constantly making a new game or piece of software.";
            break;
        case 2:
            link.href = "https://pixelated-lagg.itch.io/jump-squared";
            title.textContent = "Jump Squared";
            desc.textContent = "Jump Squared is a basic 2d platformer based on Geometry Dash and Jump King. It is centered around a nameless and emotionless blue square who needs to get to the white platform at the end of each level. (Very original, I know.) Currently, there are 3 levels in the game, and I am planning to eventually finish the game with a fourth level.";
            break;
        case 3:
            link.href = "https://github.com/PixelatedLagg/Impart";
            title.textContent = "Impart";
            desc.textContent = "Impart is a library of C# methods to help developers in creating a cool looking website, while skipping the annoying markup. Somewhat ironcially, this website isn't made using it. When Impart evolves enough, I will have an example website (with source code) for all to admire.";
            break;
        case 4:
            link.href = "https://github.com/PixelatedLagg/Scrape";
            title.textContent = "Scrape";
            desc.textContent = "Scrape is an object oriented programming language very similiar to C#, in syntax and in use. The fellow developers and I plan to implement a default framework to rival C#'s System.Reflections and a dynamic naming operator to allow for maximum variable control for the developer.";
            break;
    }
}
function colorGen(obj) {
    switch (Math.floor(Math.random() * (3) + 1))
    {
        case 1:
            obj.style["color"] = 'rgb(117, 15, 138)';
            break;
        case 2:
            obj.style["color"] = 'rgb(15, 99, 177)';
            break;
        case 3:
            obj.style["color"] = 'rgb(177, 15, 15)';
            break;
    }
}
function setWhite(obj) {
    obj.style["color"] = 'white';
}