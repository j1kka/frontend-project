document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date();
    const dateElement = document.getElementById('current-date');
    const monthElement = document.getElementById('current-month');
    const timeElement = document.getElementById('current-time');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    dateElement.textContent = `${days[currentDate.getDay()]} ${currentDate.getDate()}th`;
    monthElement.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    function updateTime() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'pm' : 'am';
        timeElement.textContent = `${hours}:${minutes} ${ampm}`;
    }

    updateTime();
    setInterval(updateTime, 60000);
});
