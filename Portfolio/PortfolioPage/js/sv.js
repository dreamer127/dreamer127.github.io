openFollowersWindow().then(function () {
  populateUnfollowsPool();
  digestUnfollowsPool();
});

function openFollowersWindow() {
  var onFollowersWindowWasOpenedListeners = [];
  var openWindowTimeout = 3000;

  var followersElement = getFollowersElement();
  followersElement.click();

  function digestOnFollowersWindowWasOpenedListeners() {
    onFollowersWindowWasOpenedListeners.forEach(function (onFollowersWindowWasOpenedListener) {
      onFollowersWindowWasOpenedListener();
    });
  }

  var wasOpened;
  setTimeout(function () {
    // TODO Verify that the window was indeed opened
    wasOpened = true;
    digestOnFollowersWindowWasOpenedListeners();
  }, openWindowTimeout);
  return {
    then: function (onFollowersWindowWasOpened) {
      if (wasOpened) {
        onFollowersWindowWasOpened();
      } else {
        onFollowersWindowWasOpenedListeners.push(onFollowersWindowWasOpened);
      }
    }
  };
}

function getFollowersElement() {
  return getFollowersElementWithUsername(getUsername());
}

function getUsername() {
  var pageTitleElement = document.getElementsByTagName('h1')[0];
  if (pageTitleElement)
  return pageTitleElement.innerHTML;
}

function getFollowersElementWithUsername(username) {
  var followersElement = document.querySelectorAll('a[href="/' + username + '/following/"]')[0];
  if (followersElement)
   return followersElement;
}

var unfollowsPool;

function populateUnfollowsPool() {
  var buttons = document.getElementsByTagName('button');
  unfollowsPool = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.innerHTML.includes('Подписки')) {
      var randomTimeoutForUnfollow = Math.floor((Math.random() * 60) + 58) * 1000;

      var unfollow = {
        buttonElement: button,
        timeout: randomTimeoutForUnfollow
      };

      unfollowsPool.push(unfollow);
    }
  }
}

function digestUnfollowsPool() {
  if (unfollowsPool.length === 0) {
    populateUnfollowsPool();
  }
  var unfollow = unfollowsPool.shift();
  var unfollowTimeout = unfollow.timeout;
  var interlavID = setInterval(function () {
    var unfollowButtonElement = unfollow.buttonElement;
    unfollowButtonElement.scrollIntoView(true);
    console.log('Нажатие кнопки "Подписки"');
    unfollowButtonElement.click();
    //Second confirm
    var el = document.getElementsByClassName("aOOlW -Cab_ ");
    for (var i = 0; i < el.length; i++) {
      el[i].click();
    }
    digestUnfollowsPool();
  }, 4000);

  setTimeout(clearInterval(intervalID), 300000);

}