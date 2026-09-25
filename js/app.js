let favorites = [];

const form = document.getElementById("add-favorite-form");
const favoritesList = document.getElementById("favorites-list");

const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

function addFavorite(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const category = document.getElementById("category").value;
  const rating = parseInt(document.getElementById("rating").value);
  const notes = document.getElementById("notes").value.trim();

  if (!name || !category) {
    return;
  }

  const favorite = {
    name: name,
    category: category,
    rating: rating,
    notes: notes
  };

  favorites.push(favorite);

  form.reset();

  displayFavorites();
}
function deleteFavorite(index) {
  const favorite = favorites[index];

  if (confirm(`Delete "${favorite.name}"?`)) {
    favorites.splice(index, 1);
    searchFavorites();
  }
}
function searchFavorites() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  const filtered = favorites.filter(function(favorite) {
    const matchesSearch = searchText === '' ||
      favorite.name.toLowerCase().includes(searchText) ||
      favorite.notes.toLowerCase().includes(searchText);

    const matchesCategory = selectedCategory === 'all' ||
      favorite.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML =
      '<p class="empty-message">No favorites yet. Add your first favorite place above!</p>';
    return;
  }

  if (filtered.length === 0) {
    favoritesList.innerHTML =
      '<p class="empty-message">No favorites match your search.</p>';
    return;
  }

  filtered.forEach(function(favorite) {
    const index = favorites.indexOf(favorite);

    favoritesList.innerHTML += `
      <article class="favorite-card">
        <h3>${favorite.name}</h3>
        <p>Category: ${favorite.category}</p>
        <p>Rating: ${"⭐".repeat(favorite.rating)}</p>
        <p>${favorite.notes}</p>
        <button class="btn-danger" onclick="deleteFavorite(${index})">Delete</button>
      </article>
    `;
  });
}
function displayFavorites() {
  searchInput.value = '';
  categoryFilter.value = 'all';
  searchFavorites();
}

form.addEventListener("submit", addFavorite);

searchInput.addEventListener('input', searchFavorites);
categoryFilter.addEventListener('change', searchFavorites);

displayFavorites();