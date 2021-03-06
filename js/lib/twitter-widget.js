
/**
 * Loads the twitter widgets js
 * Should be called only one time on the app
 */

function load(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};

  if (d.getElementById(id)) return t;

  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}

module.exports = load(document, "script", "twitter-wjs");

