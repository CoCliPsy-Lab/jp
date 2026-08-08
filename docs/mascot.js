(() => {
  const mascot = document.querySelector('.site-mascot');
  const image = mascot?.querySelector('img');
  if (!mascot || !image) return;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  const variants = {
    'articles.html': 'lab-mascot-book.png',
    'articles-jp.html': 'lab-mascot-book.png',
    'books.html': 'lab-mascot-book.png',
    'bulletins.html': 'lab-mascot-book.png',
    'presentations.html': 'lab-mascot-book.png',
    'presentations-jp.html': 'lab-mascot-book.png',
    'education.html': 'lab-mascot-book.png',
    'research.html': 'lab-mascot-research.png',
    'members.html': 'lab-mascot-laptop.png',
    'news.html': 'lab-mascot-laptop.png',
    'feedback.html': 'lab-mascot-laptop.png',
    'portal.html': 'lab-mascot-laptop.png',
    'yoshihiko-kunisato.html': 'lab-mascot-research.png'
  };

  if (page === 'index.html') {
    mascot.hidden = true;
    return;
  }

  image.src = `images/${variants[page] || 'lab-mascot.png'}`;
})();
