/* =====================================================================
   script.js = THE BEHAVIOUR (what happens when you scroll)
   Pattern used here:  1) FIND an element  2) LISTEN for an event  3) CHANGE a class.
   JS rarely sets colours itself. It adds/removes class names and the CSS restyles.
   The file is wrapped in (function(){ ... })(); so our variable names stay private.
   ===================================================================== */
(function(){

  /* ---------- 1. FIND THE ELEMENTS WE NEED ---------- */
  var nav = document.getElementById('nav');   // the top navigation bar
  var bar = document.getElementById('bar');   // the gold progress line
  var bg  = document.getElementById('bg');    // the moving stripe background in the hero

  /* ---------- 2. SCROLL EFFECTS (progress bar, sticky nav, parallax) ----------
     This function runs every time the user scrolls. */
  function onScroll(){
    var y = window.scrollY || 0;                                          // pixels scrolled from the top
    var h = document.documentElement.scrollHeight - window.innerHeight;   // total scrollable distance
    bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';                    // % scrolled becomes the bar's width
    nav.classList.toggle('s', y > 40);                                    // after 40px add class "s" (CSS gives the nav a background)
    bg.style.transform = 'translateY(' + (y * 0.25) + 'px)';              // move the stripes at 1/4 speed = parallax
  }
  window.addEventListener('scroll', onScroll, {passive:true});            // run on every scroll (passive = smoother)
  onScroll();                                                             // also run once now so everything is correct on load

  /* ---------- 3. SCROLL REVEAL ----------
     Elements with class "reveal" start hidden (CSS). When one enters the screen
     we add the class "in" and the CSS transition fades it in. */
  var els = document.querySelectorAll('.reveal');       // find ALL elements with class "reveal"

  if ('IntersectionObserver' in window){                // check the browser supports this feature
    // IntersectionObserver = a watcher that tells us when an element becomes visible
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){                          // true = it is now on screen
          e.target.classList.add('in');                 // reveal it (CSS does the animation)
          io.unobserve(e.target);                       // stop watching it: animate only once
        }
      });
    }, {threshold:.15});                                // fire when 15% of the element is visible

    els.forEach(function(el){ io.observe(el); });       // start watching every .reveal element
  } else {
    els.forEach(function(el){ el.classList.add('in'); });   // very old browser: just show everything
  }

})();  // the () at the end runs the wrapper function immediately
