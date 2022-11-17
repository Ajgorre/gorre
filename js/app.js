// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the leni votes span
const leniVotesEl = document.querySelector('.votes-number-leni');

// Get a reference to the marcos votes span
const marcosVotesEl = document.querySelector('.votes-number-marcos');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-leni')) {
            addVote(0, 'leni', leniVotesEl)
        } else {
            addVote(1, 'marcos', marcosVotesEl)
        }
    })
})