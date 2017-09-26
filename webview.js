// mijnoverheid-berichtenbox integration
module.exports = (Franz, options) => {
  function getMessages() {
    // Remove session keepalive popup.
    var popup = document.getElementById("alert_session");
    popup.parentNode.removeChild(popup);

    // Get actual message count.
    var count = 0;
    const FranzData = document.querySelector('h2.slideout__panel__title strong');
    if (FranzData) {
      count = FranzData.innerHTML;
    }
    Franz.setBadge(count);
  }
  Franz.loop(getMessages);
}

// Refresh page to avoid logout.
// Yes, it's ugly...
setTimeout(function() {
  location.reload();
}, 120000)
