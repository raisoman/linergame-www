var addButtonsToContent = function(gameType, gameDuration) {
    document.getElementById('content').innerHTML +=
    '<div class="mdl-cell mdl-cell--12-col">\
        <p class="time-description"><i class="material-icons">access_time</i> <span class="game-time"> '+ gameDuration + '</span></p><br>\
        <button onClick="window.location.href=\'mailto:lars.jensen@vespucci-maritime.com?Subject=Request%20info\';" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">\
            Request more info\
        </button>\
        &nbsp;\
        <button onClick="window.location.href=\'mailto:lars.jensen@vespucci-maritime.com?Subject=Book%20' + gameType + ' %20game%20session\';" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">\
            Book a session\
        </button>\
    </div>';
}