document.addEventListener('DOMContentLoaded', function() {
  const newsItems = document.querySelectorAll('.news-item');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const itemsPerPage = 3;
  let currentPage = 0;

  // Hide all items initially
  newsItems.forEach((item, index) => {
    if (index >= itemsPerPage) {
      item.style.display = 'none';
    }
  });

  loadMoreBtn.addEventListener('click', function() {
    currentPage++;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Show next set of items
    for (let i = startIndex; i < endIndex && i < newsItems.length; i++) {
      newsItems[i].style.display = 'list-item';
    }

    // Hide button if all items are shown
    if (endIndex >= newsItems.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
});