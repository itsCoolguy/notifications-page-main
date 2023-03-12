const notificationAmountText = document.querySelector('#notification-number');
const unreadSymbols = document.querySelectorAll('.new-notification-icon');
const markReadButton = document.querySelector('#mark-all-read-button');
let unreadShown = true;

function markReadClicked() {
    if (unreadShown === true) {
        unreadShown = false;
        unreadSymbols.forEach(symbol => {
            symbol.style.display = 'none';
        });
        notificationAmountText.innerHTML = '0';
        markReadButton.setAttribute('disabled', true);
    }
}