/* Progressive-enhancement mobile nav toggle. Site is fully usable with JS off. */
document.documentElement.classList.add('js');
(function () {
  var b = document.querySelector('.nav-toggle');
  var m = document.getElementById('site-menu');
  if (!b || !m) return;
  b.addEventListener('click', function () {
    var open = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!open));
    m.hidden = open;
    if (!open) { var a = m.querySelector('a'); if (a) a.focus(); }
  });
  m.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { b.setAttribute('aria-expanded', 'false'); m.hidden = true; }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && b.getAttribute('aria-expanded') === 'true') {
      b.setAttribute('aria-expanded', 'false'); m.hidden = true; b.focus();
    }
  });
})();
