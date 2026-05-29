// Sticky nav + scroll-to-top behaviour
(function () {
  const nav = document.getElementById('site-nav');
  const scrollTopBtn = document.getElementById('scroll-top');
  const hero = document.querySelector('.hero');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav .nav-links a');

  function onScroll() {
    const scrollY = window.scrollY;
    const heroH = hero ? hero.offsetHeight : 400;

    // Show sticky nav after scrolling past hero
    nav.classList.toggle('visible', scrollY > heroH * 0.6);

    // Show scroll-to-top button after 600px
    scrollTopBtn.classList.toggle('visible', scrollY > 600);

    // Highlight active nav link
    let activeId = '';
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop - 80) {
        activeId = section.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}());

vegaEmbed(
"#graph1",
"graphs/graph1.json",
).catch(console.error);
vegaEmbed(
"#graph2",
"graphs/graph2.json",
).catch(console.error);
vegaEmbed(
"#graph3",
"graphs/graph3.json",
).catch(console.error);
vegaEmbed(
"#graph4",
"graphs/graph4.json",
).catch(console.error);
vegaEmbed(
"#graph5",
"graphs/graph5.json",
).catch(console.error);
vegaEmbed(
"#graph6",
"graphs/graph6.json",
).catch(console.error);
vegaEmbed(
"#graph7",
"graphs/graph7.json",
).catch(console.error);
vegaEmbed(
"#graph8",
"graphs/graph8.json",
).catch(console.error);
vegaEmbed(
"#graph9",
"graphs/graph9.json",
).catch(console.error);
vegaEmbed(
"#graph10",
"graphs/graph10.json",
).catch(console.error);
vegaEmbed(
"#graph11",
"graphs/graph11.json",
).catch(console.error);
