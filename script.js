const searchInput = document.querySelector("#event-search");
const clearButton = document.querySelector("#clear-search");
const resultStatus = document.querySelector("#event-results");
const emptyResults = document.querySelector("#empty-results");
const eventCards = document.querySelectorAll(".grid article");

function normalizeTurkishText(text) {
  // Boşlukları temizle ve Türkçe küçük harfe dönüştür.
  return text.trim().toLocaleLowerCase("tr-TR");
}

function filterEvents() {
  // Başlıkları aramayla karşılaştırıp kart görünürlüğünü güncelle.
  const query = normalizeTurkishText(searchInput.value);
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector("h2").textContent;
    const matches = normalizeTurkishText(title).includes(query);

    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultStatus.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  emptyResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
  searchInput.focus();
});

filterEvents();