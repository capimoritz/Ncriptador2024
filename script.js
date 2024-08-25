document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt');
    const decryptBtn = document.getElementById('decrypt');
    const copyBtn = document.getElementById('copy');
    const missionMessage = document.getElementById('mission-message');
    const acceptMission = document.getElementById('accept-mission');
    const rejectMission = document.getElementById('reject-mission');
    const gameOver = document.getElementById('game-over');
    const backgroundMusic = document.getElementById('background-music');

    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function encrypt(text) {
        return text.replace(/[eiaou]/g, letter => encryptionMap[letter]);
    }

    function decrypt(text) {
        let decrypted = text;
        Object.entries(encryptionMap).forEach(([key, value]) => {
            decrypted = decrypted.replace(new RegExp(value, 'g'), key);
        });
        return decrypted;
    }

    encryptBtn.addEventListener('click', () => {
        outputText.value = encrypt(inputText.value.toLowerCase());
    });

    decryptBtn.addEventListener('click', () => {
        outputText.value = decrypt(inputText.value);
    });

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });

    // Mostrar mensaje de misión
    missionMessage.style.display = 'block';

    acceptMission.addEventListener('click', () => {
        missionMessage.style.display = 'none';
        backgroundMusic.play();
    });

    rejectMission.addEventListener('click', () => {
        missionMessage.style.display = 'none';
        gameOver.style.display = 'block';
    });

    // Eliminamos el temporizador para la auto-destrucción del mensaje
});