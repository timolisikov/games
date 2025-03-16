let cookieCount = 0;
let upgradeCount = 0;

const cookieCountElement = document.getElementById('cookie-count');
const cookieButton = document.getElementById('cookie-button');
const upgradeButton = document.getElementById('upgrade-button');
const upgradeCountElement = document.getElementById('upgrade-count');

cookieButton.addEventListener('click', () => {
    cookieCount += 1 + upgradeCount;
    updateDisplay();
});

upgradeButton.addEventListener('click', () => {
    if (cookieCount >= 10) {
        cookieCount -= 10;
        upgradeCount += 1;
        updateDisplay();
    }
});

function updateDisplay() {
    cookieCountElement.textContent = `Cookies: ${cookieCount}`;
    upgradeCountElement.textContent = `Upgrades: ${upgradeCount}`;
}
