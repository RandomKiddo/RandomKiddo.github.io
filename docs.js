$(window).on('beforeunload', function() {
  var c = confirm();
  if (c) {
    return true;
  } else {
    return false;
  }
});