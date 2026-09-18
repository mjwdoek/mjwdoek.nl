/* maartendoek.nl — taalwissel NL/EN, onthoudt de keuze */
(function () {
  var KEY = 'md-lang';
  function buttons() { return document.querySelectorAll('[data-set-lang]'); }
  function apply(lang) {
    if (lang !== 'en') lang = 'nl';
    document.documentElement.lang = lang;
    buttons().forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  var saved = 'nl';
  try { saved = localStorage.getItem(KEY) || 'nl'; } catch (e) {}
  apply(saved);
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-set-lang]') : null;
    if (b) apply(b.getAttribute('data-set-lang'));
  });
})();
