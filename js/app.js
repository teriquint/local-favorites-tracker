let favorites = [];

const form = document.getElementById("add-favorite-form");
const favoritesList = document.getElementById("favorites-list");

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

function displayFavorites() {

  favoritesList.innerHTML = "";

  if (favorites.length === 0) {

    favoritesList.innerHTML =
      '<p class="empty-message">No favorites yet. Add your first favorite place above!</p>';

    return;
  }

  favorites.forEach(function(favorite) {

    favoritesList.innerHTML += `
      <article class="favorite-card">
        <h3>${favorite.name}</h3>
        <p>Category: ${favorite.category}</p>
        <p>Rating: ${"⭐".repeat(favorite.rating)}</p>
        <p>${favorite.notes}</p>
      </article>
    `;

  });

}

form.addEventListener("submit", addFavorite);

displayFavorites();