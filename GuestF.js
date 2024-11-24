let score = 0;
const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.droppable');
const correctPositions = new Set();
const totalFlags = draggableElements.length; // Total flags to be matched

// DRAG START
draggableElements.forEach(element => {
    element.addEventListener('dragstart', (drgStart) => {
        drgStart.dataTransfer.setData('text', drgStart.target.id);
        drgStart.currentTarget.classList.add('draggableFormat');
    });
});

// DROP EVENT
droppableElements.forEach(element => {
    element.addEventListener('drop', (drpEvt) => {
        drpEvt.preventDefault();
        const droppedElementId = drpEvt.dataTransfer.getData('text');
        const dropZoneId = drpEvt.target.getAttribute('data-draggable-id');
        const draggableElement = document.getElementById(droppedElementId);

        drpEvt.target.appendChild(draggableElement);
        
        // Check if the dropped element matches the correct droppable element
        if (droppedElementId === dropZoneId) {
            score += 1;
            document.getElementById('remarks').innerText = "RIGHT!";
            document.getElementById('scores').innerText = score;
            correctPositions.add(dropZoneId); // Mark this position as correct
        } else {
            document.getElementById('remarks').innerText = "WRONG!";
        }
        
        checkWin(); // Check if the game is won
    });

    // DRAG OVER
    element.addEventListener('dragover', (drgOverEvt) => {
        drgOverEvt.preventDefault();
    });
});

// DRAG END
draggableElements.forEach(element => {
    element.addEventListener('dragend', (drgendEvt) => {
        // drgendEvt.currentTarget.classList.remove('draggableFormat');
    });
});

// Check if all flags are in the correct positions
function checkWin() {
    if (correctPositions.size === totalFlags) {
        showWinnerMessage(); // Show the "You Win" message
    }
}

// Show "You Win" message
function showWinnerMessage() {
    const winnerMessage = document.createElement('div');
    winnerMessage.classList.add('winner-message');
    winnerMessage.innerText = "YOU WIN!";
    document.body.appendChild(winnerMessage);

    // Optionally, reset the game after some time
    setTimeout(() => {
        reset();
    }, 3000); // Reset after 3 seconds
}

// Start the game
function startGame() {
    document.querySelector('.start-game-container').style.display = 'none'; // Hide the start button
    document.querySelector('.game-container').style.display = 'block'; // Show the game container
    score = 0; // Reset score
    document.getElementById('remarks').innerText = ""; // Clear remarks
    document.getElementById('scores').innerText = score; // Display initial score
    correctPositions.clear(); // Clear correct positions set
}

// Reset the game
function reset() {
    location.reload(); // Reload the page to reset the game
}

// Setup images on page load
document.addEventListener('DOMContentLoaded', () => {
    const box1 = document.getElementById('box1');
    box1.style.backgroundImage = 'url(korea.png)';
    const box2 = document.getElementById('box2');
    box2.style.backgroundImage = 'url(australia.png)';
    const box3 = document.getElementById('box3');
    box3.style.backgroundImage = 'url(canada.png)';
    const box4 = document.getElementById('box4');
    box4.style.backgroundImage = 'url(germany.png)';
    const box5 = document.getElementById('box5');
    box5.style.backgroundImage = 'url(unitedstate.png)';
    const box6 = document.getElementById('box6');
    box6.style.backgroundImage = 'url(unitedkingdom.png)';
    const box7 = document.getElementById('box7');
    box7.style.backgroundImage = 'url(france.png)';
    const box8 = document.getElementById('box8');
    box8.style.backgroundImage = 'url(japan.png)';
    const box9 = document.getElementById('box9');
    box9.style.backgroundImage = 'url(philippines.png)';
    const box10 = document.getElementById('box10');
    box10.style.backgroundImage = 'url(china.png)';
});
