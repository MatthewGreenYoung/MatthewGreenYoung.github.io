const alligator = document.createElement('img');
alligator.src = 'smallalligator.png';
alligator.alt = 'Alligator';
alligator.style.position = 'fixed';
alligator.style.bottom = '0';
alligator.style.right = '0';
alligator.style.width = '50px';
document.body.appendChild(alligator);


function walkAlligator() {
    let currentPosition = 0;
    const screenWidth = window.innerWidth;
    const walkSpeed = 1;

    function step() {
        currentPosition += walkSpeed;
        alligator.style.right = currentPosition + 'px';

        
        if (currentPosition > screenWidth) {
            currentPosition = -50;
        }

        requestAnimationFrame(step);
    }

    
    step();
}

walkAlligator();
