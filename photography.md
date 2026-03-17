---
layout: default
title: "Photography"
accordion: 
  - title: "Photography Equipment"
    content: |
      **Cameras:**<br>
      Canon Powershot G7X Mark II<br>
      Sony α6000 Mirrorless<br>

      **Lenses:**<br>
      Sony Zoom Lens (Details Unknown)<br>
      Rokinon 14mm f/2.8 Lens<br>

      **Other:**<br>
      Neewer 72mm ND100000 Filter<br>
  - title: "Astrophotography Equipment"
    content: |
      **The Rig:**<br>
      Sony α6000 Mirrorless<br>
      Sky-Watcher EvoStar 72 APO Doublet Refractor<br>
      Sky-Watcher 0.85x Focal Reducer/Flattener for EvoStar 72<br>
      Oumij M48x0.75mm T-Mount Adapter for NEX<br>
      Sky-Watcher Star Adventurer GTi Mount Kit<br>
---

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>
addBackToTop({
  diameter: 56,
  backgroundColor: '#3d6f75',
  textColor: 'rgb(225, 221, 214)'
})
</script> 

<script>
function loadSlickGallery() {
  var $gallery = $('.slick-gallery');
  if ($gallery.length) {
    // If slick was already initialized, kill it first to avoid duplicates
    if ($gallery.hasClass('slick-initialized')) {
      $gallery.slick('unslick');
    }
    
    $gallery.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      autoplay: true,
      arrows: true
    });
  }
}

// Hydejack: Fired when the page transition is 100% complete
document.addEventListener('hydejack:fullload', loadSlickGallery);

// Standard: Fired on initial page landing/refresh
$(document).ready(loadSlickGallery);
</script>

<style>
/* Move dots inside the gallery so 'overflow: hidden' doesn't hide them */
.slick-dots {
  bottom: 15px !important; /* Positions them 15px up from the bottom edge */
  z-index: 10 !important;   /* Ensures they sit above the image layer */
}

/* Make the dots white and more visible against photos */
.slick-dots li button:before {
  font-size: 12px !important;
  color: white !important;
  opacity: 0.5;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8); /* Shadow helps on light photos */
}

/* Highlight the active dot */
.slick-dots li.slick-active button:before {
  color: white !important;
  opacity: 1;
}

/* 1. Set the fixed container size */
.slick-gallery {
  margin: 40px auto;
  max-width: 1000px; /* Or whatever width fits your layout */
  height: 700px;    /* Force a fixed height */
  overflow: hidden;
  border-radius: 12px;
  background: #000; /* Black bars behind if an image is somehow too small */
}

/* 2. Force the images to fill that container and crop the excess */
.slick-gallery img {
  width: 100% !important;
  height: 700px !important; /* Must match the container height above */
  object-fit: cover;        /* This is the magic: it crops instead of stretching */
  object-position: center;  /* Keeps the middle of the photo visible */
}

/* Ensure the container allows the arrows to be seen */
.slick-list {
  z-index: 1;
}

/* Position arrows inside the frame so 'overflow: hidden' doesn't clip them */
.slick-prev {
  left: 25px !important;
  z-index: 10 !important; /* Higher than the image */
}

.slick-next {
  right: 40px !important; /* Extra 15px to account for the default 20px offset */
  z-index: 10 !important;
}

/* Make sure the arrow icons are large and bright */
.slick-prev:before, .slick-next:before {
  font-size: 40px !important;
  color: white !important;
  opacity: 0.8;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.8); /* Crucial for seeing white arrows on light photos */
}

/* Optional: Hide the default "Next/Previous" text if it's bleeding out */
.slick-prev, .slick-next {
  width: 40px;
  height: 40px;
}

.slick-slide.slick-active {
  opacity: 1 !important;
  z-index: 2 !important;
}

/* Ensure the background slides are fully hidden so they don't bleed through */
.slick-slide {
  opacity: 0 !important;
  transition: opacity 500ms ease-in-out;
}
</style>

{% include accordion.html %}

<div class="slick-gallery">
  {% assign images = site.static_files | where_exp: "item", "item.path contains 'assets/img/scrs/'" %}
  {% for image in images %}
    <div><img src="{{ image.path | relative_url }}" style="width:100%;"></div>
  {% endfor %}
</div>