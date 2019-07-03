"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('updates-widget')[0].querySelectorAll("button").length > 0) {
      count = parseInt(document.getElementsByClassName('updates-widget')[0].querySelectorAll("button")[0].innerHTML.replace(/[^0-9.]/g, ''),10);
    }

    count = parseInt(count, 10);

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};