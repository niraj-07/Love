function changeNoPosition() {
    var noButton = document.getElementById('no');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * 100 + '%';
    noButton.style.top = Math.random() * 100 + '%';
}

var balloons = document.querySelectorAll('.balloons');

balloons.forEach(function(balloon) {
    balloon.style.animation = 'none'; // Reset animation
});

function celebrate() {
    var balloons = document.querySelectorAll('.balloons');
    const endGamePopup = document.getElementById('end-game-popup');
    const endGameMessage = document.getElementById('end-game-message');
  
    endGamePopup.style.display = 'flex'; // Show the popup

    // Close the popup if clicked outside
    endGamePopup.addEventListener('click', function(event) {
        if (event.target === this) {
            endGamePopup.style.display = 'none'; // Hide the popup
        }
    });

    balloons.forEach(function(balloon) {
        balloon.style.display = 'block';
        balloon.style.animation = 'floatBalloons 7s linear forwards'; // Start animation
    });
}

document.getElementById('no').addEventListener('mouseover', changeNoPosition);
document.getElementById('yes').addEventListener('click', celebrate);
