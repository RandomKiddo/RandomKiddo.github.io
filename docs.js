$(window).on('beforeunload', function(e) {
  var msg = 'It looks like you are about to leave this page. '
          + 'Are you sure you want to leave?';
  (e || window.event).returnValue = msg;
  return msg;
});
