document.addEventListener('DOMContentLoaded', () => {
    // Attach click event listeners to each box
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Log which box was clicked
            console.log(`Box clicked: ${box.querySelector('p').innerText}`);
        });
    });
});
