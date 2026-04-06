document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('main-button');
    const smallButton1 = document.getElementById('small-button-1');
    const smallButton2 = document.getElementById('small-button-2');

    mainButton.addEventListener('click', function() {
        navigateTo('message1');
    });

    smallButton1.addEventListener('click', function() {
        navigateTo('message1');
    });

    smallButton2.addEventListener('click', function() {
        navigateTo('message2');
    });
});

function navigateTo(page) {
    const mainContent = document.getElementById('mainContent');
    const message1Content = document.getElementById('message1Content');
    const message2Content = document.getElementById('message2Content');
    const message3Content = document.getElementById('message3Content');
    
    // Hide all content with visibility control
    mainContent.classList.add('hidden');
    message1Content.classList.add('hidden');
    message2Content.classList.add('hidden');
    message3Content.classList.add('hidden');
    
    // Show selected page
    if (page === 'message1') {
        message1Content.classList.remove('hidden');
        console.log('Showing message1 (My Confession)');
    } else if (page === 'message2') {
        message2Content.classList.remove('hidden');
        console.log('Showing message2 (About Me)');
    } else if (page === 'message3') {
        message3Content.classList.remove('hidden');
        console.log('Showing message3 (Clues)');
    }
}

function goBack() {
    const mainContent = document.getElementById('mainContent');
    const message1Content = document.getElementById('message1Content');
    const message2Content = document.getElementById('message2Content');
    const message3Content = document.getElementById('message3Content');
    
    // Hide all message content
    message1Content.classList.add('hidden');
    message2Content.classList.add('hidden');
    message3Content.classList.add('hidden');
    
    // Show main content
    mainContent.classList.remove('hidden');
    console.log('Returning to main screen');
}

function handleImageError(img) {
    console.error('Image failed to load: ' + img.src);
    img.style.display = 'none';
    console.log('Image path:', img.src);
    console.log('Please ensure the image file exists in the correct folder');
}

/* ===== Random Popup Images Animation ===== */

// Array of random popup image filenames (1-10) - JPG format
const popupImagePaths = [
    'assets/images/randompopup1.jpg',
    'assets/images/randompopup2.jpg',
    'assets/images/randompopup3.jpg',
    'assets/images/randompopup4.jpg',
    'assets/images/randompopup5.jpg',
    'assets/images/randompopup6.jpg',
    'assets/images/randompopup7.jpg',
    'assets/images/randompopup8.jpg',
    'assets/images/randompopup9.jpg',
    'assets/images/randompopup10.jpg'
];

function createRandomPopupImage() {
    const popupContainer = document.getElementById('randomPopupContainer');
    
    if (!popupContainer) {
        console.warn('Random popup container not found');
        return;
    }
    
    // Select random image from array
    const randomIndex = Math.floor(Math.random() * popupImagePaths.length);
    const imagePath = popupImagePaths[randomIndex];
    
    // Create img element
    const popupImg = document.createElement('img');
    popupImg.className = 'random-popup-img';
    popupImg.src = imagePath;
    popupImg.alt = `Popup Image ${randomIndex + 1}`;
    
    // Random horizontal position (0-90%)
    const randomLeft = Math.random() * 90;
    
    // Random duration between 5-9 seconds
    const randomDuration = 5 + Math.random() * 4;
    
    // Random delay before starting (0-0.5 seconds)
    const randomDelay = Math.random() * 0.5;
    
    // Random animation direction (normal or reverse rotation)
    const animationName = Math.random() > 0.5 ? 'popupFall' : 'popupFallSlow';
    
    // Set inline styles
    popupImg.style.left = randomLeft + '%';
    popupImg.style.animation = `${animationName} ${randomDuration}s linear ${randomDelay}s forwards`;
    
    // Add error handler
    popupImg.onerror = function() {
        console.warn('Failed to load popup image: ' + imagePath);
        this.remove();
    };
    
    // Add to container
    popupContainer.appendChild(popupImg);
    
    console.log(`Created popup image: ${imagePath} at ${randomLeft}%`);
    
    // Remove element after animation completes to prevent memory leaks
    const totalAnimationTime = (randomDuration + randomDelay) * 1000;
    setTimeout(() => {
        if (popupImg.parentNode) {
            popupImg.remove();
        }
    }, totalAnimationTime);
}

// Start creating random popup images at intervals (every 2 seconds)
// Adjust the interval value (in milliseconds) to control spawn frequency
// 2000ms = spawns 1 image every 2 seconds
// 1500ms = spawns 1 image every 1.5 seconds (faster)
// 3000ms = spawns 1 image every 3 seconds (slower)
let popupIntervalId = setInterval(createRandomPopupImage, 2000);

console.log('Random popup image animation started');