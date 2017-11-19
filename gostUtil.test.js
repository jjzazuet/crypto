module.exports = Object.assign({
  println: function (s, h) {
    if (typeof console !== 'undefined') {
      console.log((s || '--------'));
    }
  }
}, exports);
