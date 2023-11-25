const alligator = document.createElement('img');
alligator.src = 'smallalligator.png'; 
alligator.alt = 'Alligator';
alligator.style.position = 'fixed';
alligator.style.bottom = '0';
alligator.style.left = '0';
alligator.style.width = '100px';
alligator.style.height = '100px';
document.body.appendChild(alligator);


function walkAlligator() {
    let currentPosition = 0;
    const screenWidth = window.innerWidth;
    const walkSpeed = .8;

    function step() {
        currentPosition += walkSpeed;
        alligator.style.left = currentPosition + 'px';

        
        if (currentPosition > screenWidth) {
            currentPosition = -50;
        }

        requestAnimationFrame(step);
    }

    
    step();
}

walkAlligator();