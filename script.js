(() => {
  const productUrl = new URL('https://saint-armont.com/products/levoria-genuine-leather-satchel-bag?variant=50281932161264');
  const incoming = new URLSearchParams(window.location.search);
  incoming.forEach((value, key) => {
    if (key !== 'variant') productUrl.searchParams.set(key, value);
  });

  document.querySelectorAll('[data-destination]').forEach((link) => {
    link.href = productUrl.toString();
  });

  const sticky = document.getElementById('stickyBuy');
  const hero = document.querySelector('.hero');
  if (!sticky || !hero || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    sticky.style.opacity = entry.isIntersecting ? '0' : '1';
    sticky.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
  }, { threshold: 0.08 });
  observer.observe(hero);
})();
