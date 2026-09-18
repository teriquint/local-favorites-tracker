const favoritePlace = {
  name: "Press Cafe",
  category: "restaurants",
  rating: 5,
  notes: "Great patio and brunch",
  dateAdded: new Date().toLocaleDateString()
};

console.log(favoritePlace);

console.log(favoritePlace.name);
console.log(favoritePlace.category);
console.log(favoritePlace.rating);
console.log(favoritePlace.notes);
console.log(favoritePlace.dateAdded);

console.log(
  favoritePlace.name + " - " +
  favoritePlace.category + " - " +
  favoritePlace.rating + " stars"
);

console.log(typeof favoritePlace.name);
console.log(typeof favoritePlace.category);
console.log(typeof favoritePlace.rating);
console.log(typeof favoritePlace.notes);
console.log(typeof favoritePlace.dateAdded);
console.log("⭐".repeat(favoritePlace.rating));
console.log(favoritePlace.name + " - " + "⭐".repeat(favoritePlace.rating));

function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('Starbucks', 5);   // "Starbucks has 5 stars!"

const nameInput = document.getElementById('name');
console.log(nameInput.value);   // what the user typed

const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();   // stop the page reload
    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);

