let taps = 0;
const song = document.getElementById('mySong');

function nextStage(num) {
    // Starts the local music file when she clicks the very first button
    if (num === 1) {
        song.play().catch(error => {
            console.log("Audio playback failed. Browsers usually require a user tap to play sound.", error);
        });
    }
    
    document.getElementById(`stage-${num}`).classList.remove('active');
    setTimeout(() => {
        document.getElementById(`stage-${num+1}`).classList.add('active');
    }, 600);
}

function createHeart(e) {
    taps++;
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'burst-heart';
    
    // Get tap coordinates for mobile or desktop
    const x = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const y = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    
    heart.style.left = (x - 15) + 'px';
    heart.style.top = (y - 15) + 'px';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);

    // After 5 taps, reveal the magic photo
    if (taps === 5) {
        document.getElementById('hidden-memory').classList.remove('hidden');
        document.querySelector('.tap-hint').classList.add('hidden');
    }
}

function openLetter() {
    document.querySelector('.envelope-box').classList.add('open');
    document.querySelector('.tap-to-open').classList.add('hidden');
}

// Background effect: Floating flowers
setInterval(() => {
    const p = document.createElement('div');
    p.innerHTML = '🌸';
    p.style.position = 'fixed';
    p.style.bottom = '-20px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.opacity = '0.4';
    p.style.fontSize = Math.random() * (25 - 15) + 15 + 'px';
    p.style.transition = 'transform 6s linear';
    document.body.appendChild(p);
    
    setTimeout(() => {
        p.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
    }, 100);
    
    setTimeout(() => p.remove(), 6000);
}, 600);