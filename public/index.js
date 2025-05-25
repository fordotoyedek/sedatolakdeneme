// Bootstrap 5 zaten kendi toggle fonksiyonunu sağlıyor ama ekstra animasyon istersen buradan yapabilirsin.
// Şimdilik ekstra bir şey koymuyorum ama istersen buradan destek oluruz.

document.getElementById('navbar-toggler').addEventListener('click', () => {
  // Butonun aktifliği ve navbar collapse açılıp kapanması bootstrap zaten handle ediyor.
  // İstersen console.log ile kontrol yapabilirsin.
  console.log('Toggle clicked');
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#services .card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        // index’e göre soldan veya sağdan animasyon ver
        const index = Array.from(cards).indexOf(entry.target);
        if(index % 2 === 0){
          entry.target.classList.add('slide-in-left');
        } else {
          entry.target.classList.add('slide-in-right');
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
