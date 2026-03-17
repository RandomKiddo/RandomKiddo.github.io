window.initPlugins = function() {
  // Check if jQuery is ready. If not, wait and retry.
  if (typeof jQuery === 'undefined' || typeof $.fn.DataTable === 'undefined' || typeof $.fn.slick === 'undefined') {
    console.log("Hydejack-Init: Libraries not ready yet, retrying in 50ms...");
    setTimeout(window.initPlugins, 50);
    return;
  }

  console.log("Hydejack-Init: Libraries ready. Checking for elements...");

  // --- Table Logic ---
  var $table = $('#cube-table');
  if ($table.length) {
    if ($.fn.DataTable.isDataTable('#cube-table')) {
      $table.DataTable().destroy();
    }
    $table.DataTable({
      paging: false, searching: false, info: false, autoWidth: false,
      columnDefs: [
        { type: "any-number", targets: [1, 2] },
        { orderable: false, targets: [3, 4] },
        { className: "dt-center", targets: "_all" }
      ]
    });
    console.log("Hydejack-Init: Table initialized.");
  }

  // --- Slider Logic ---
  var $gallery = $('.slick-gallery');
  if ($gallery.length) {
    if ($gallery.hasClass('slick-initialized')) {
      $gallery.slick('unslick');
    }
    $gallery.slick({
      dots: true, infinite: true, speed: 300, slidesToShow: 1, autoplay: true, arrows: true
    });
    console.log("Hydejack-Init: Slider initialized.");
  }
};

// Listeners
document.addEventListener('hydejack:fullload', window.initPlugins);

// PushState documentation listener
var pushState = document.getElementById('_pushState');
if (pushState) {
  pushState.addEventListener('hy-push-state-load', window.initPlugins);
}

// Initial fire
window.initPlugins();