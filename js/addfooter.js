var addFooter = function() {
    document.getElementsByTagName('main')[0].innerHTML += '<footer class="mdl-mega-footer">\
        <div class="mdl-mega-footer--top-section">\
            <div class="mdl-mega-footer--right-section">\
                <a class="mdl-typography--font-light" href="#" onclick="scrollToDiv(\'top\')">\
        Back to Top\
        <i class="material-icons">expand_less</i>\
        </a>\
            </div>\
        </div>\
        <div class="mdl-mega-footer--middle-section">\
            <address class="mdl-typography--font-light address">\
            <p>LinerGame.com<br>\
            Tagensvej 188, 1<br>\
            DK-2400 Copenhagen NV<br>\
            Denmark<br>\
            Phone: +45 4141 8228<br>\
            <a href="mailto:contact@linergame.com" target="_top">contact@linergame.com</a>\
            </p>\
    </address>\
        </div>\
        <div class="mdl-mega-footer--bottom-section">\
            <a class="mdl-typography--font-light" href="about.html">About</a>\
            <a class="mdl-typography--font-light" href="contact.html">Contact</a>\
        </div>\
    </footer>'
};