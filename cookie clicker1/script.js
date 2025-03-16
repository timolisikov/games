// script.js
let cookieCount = 0;
let clickValue = 1;
let autoClickerCost = 50;
let upgradeClickCost = 100;
let megaClickCost = 500;
let superClickerCost = 1000;
let autoClickers = 0;
let superClickers = 0;

const cookie = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookie-count');
const autoClickerButton = document.getElementById('auto-clicker');
const upgradeClickButton = document.getElementById('upgrade-click');
const megaClickButton = document.getElementById('mega-click');
const superClickerButton = document.getElementById('super-clicker');

cookie.addEventListener('click', () => {
    cookieCount += clickValue;
    updateDisplay();
});

autoClickerButton.addEventListener('click', () => {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.floor(autoClickerCost * 1.2);
        autoClickerButton.textContent = `Auto-Clicker kaufen (Kosten: ${autoClickerCost} Cookies)`;
        updateDisplay();
    }
});

upgradeClickButton.addEventListener('click', () => {
    if (cookieCount >= upgradeClickCost) {
        cookieCount -= upgradeClickCost;
        clickValue++;
        upgradeClickCost = Math.floor(upgradeClickCost * 1.5);
        upgradeClickButton.textContent = `Upgrade klicken (Kosten: ${upgradeClickCost} Cookies)`;
        updateDisplay();
    }
});

megaClickButton.addEventListener('click', () => {
    if (cookieCount >= megaClickCost) {
        cookieCount -= megaClickCost;
        clickValue += 10;
        megaClickCost = Math.floor(megaClickCost * 2);
        megaClickButton.textContent = `Mega-Klick (Kosten: ${megaClickCost} Cookies)`;
        updateDisplay();
    }
});

superClickerButton.addEventListener('click', () => {
    if (cookieCount >= superClickerCost) {
        cookieCount -= superClickerCost;
        superClickers++;
        superClickerCost = Math.floor(superClickerCost * 2);
        superClickerButton.textContent = `Super-Clicker kaufen (Kosten: ${superClickerCost} Cookies)`;
        updateDisplay();
    }
});

function updateDisplay() {
    cookieCountDisplay.textContent = `Cookies: ${cookieCount}`;
}

function autoClick() {
    cookieCount += autoClickers;
    cookieCount += superClickers * 5;
    updateDisplay();
}

setInterval(autoClick, 1000);
