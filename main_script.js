const notificationAmountText = document.querySelector('#notification-number');
const unreadNotifications = document.querySelectorAll('.new-notification');
const markReadButton = document.querySelector('#mark-all-read-button');
let unreadShown = true;

function markReadClicked() {
    if (unreadShown === true) {
        unreadShown = false;
        unreadNotifications.forEach(element => {
            element.classList.remove('new-notification');
        })
        notificationAmountText.innerHTML = '0';
        markReadButton.setAttribute('disabled', true);
    }
}