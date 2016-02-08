var addHeader = function() {
    document.getElementsByClassName('mdl-layout')[0].innerHTML +=
    '<header class="mdl-layout__header">\
        <div class="mdl-layout__header-row">\
            <span class="mdl-layout-title"><a href="index.html"><img src="images/linergame-logo.png" alt="LinerGame"></a></span>\
        </div>\
    </header>\
    <div class="mdl-layout__drawer">\
        <span class="mdl-layout-title">LinerGame</span>\
        <nav class="mdl-navigation">\
            <a class="mdl-navigation__link" href="index.html">Home (The Game)</a>\
            <a class="mdl-navigation__link" href="about.html">About</a>\
            <a class="mdl-navigation__link" href="references.html">References</a>\
            <a class="mdl-navigation__link" href="contact.html">Contact</a>\
            <div class="drawer-separator"></div>\
            <span class="mdl-navigation__link mdl-color-text--cyan-400" href="">Game types</span>\
            <a class="mdl-navigation__link" href="standard-game.html">Standard</a>\
            <a class="mdl-navigation__link" href="executive-game.html">Executive</a>\
            <a class="mdl-navigation__link" href="support-functions-game.html">Support functions</a>\
            <a class="mdl-navigation__link" href="teambuilding-game.html">Teambuilding</a>\
            <a class="mdl-navigation__link" href="ports-game.html">For ports</a>\
            <a class="mdl-navigation__link" href="advanced-game.html">Advanced</a>\
        </nav>\
    </div>';
}