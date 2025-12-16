document.addEventListener('DOMContentLoaded', () => {
            const startMenu = document.querySelector('.start-menu');
            const startButton = document.querySelector('.start-button');
            const StartInput = document.getElementById('start-bar');

            startButton.addEventListener('click', (e) => {
                e.stopPropagation();
                startMenu.classList.toggle('active');
                StartIcon();
            });
            StartInput.addEventListener('click', (e) => {
                e.stopPropagation();
                startMenu.classList.toggle('active');
                StartIcon();
            });
            document.addEventListener('click', (e) => {
                if (!StartInput.contains(e.target) && !startButton.contains(e.target)) {
                    startMenu.classList.remove('active');
                }
            });
            document.addEventListener('click', (e) => {
                if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
                    startMenu.classList.remove('active');
                }
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
    const startButtonIcon = document.querySelector('.start-button-icon');

    startButtonIcon.addEventListener('mouseenter', () => {
            startButtonIcon.src = 'Start-Buttons/Hover.png';
    });

    startButtonIcon.addEventListener('mouseleave', () => {
        startButtonIcon.src = 'Start-Buttons/Default.png';
    });
});

async function getWeather() {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=af44525b075e45eb9c7123443250706&q=45011&aqi=no");
    const data = await response.json();
    document.getElementById("temperature").innerText = `${data.current.temp_c}°C`;
}

setInterval(getWeather, 60000); 
getWeather();

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.add('show');
    } else {
        alert(`Popup with ID '${popupId}' not found.`);
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.remove('show');
    }
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    if (!timeElement || !dateElement) return;
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().substr(-2);

    timeElement.textContent = `${hours}:${minutes}`;
    dateElement.textContent = `${month}/${day}/${year}`;
}

setInterval(updateTime, 1000);
updateTime();

function updateCalendar() {
    let today = new Date();
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = days[today.getDay()];

    let dayNumber = today.getDate();

    document.getElementById("day-of-week").textContent = `${dayOfWeek}`;
    document.getElementById("day-number").textContent = ` ${dayNumber}`;
}

updateCalendar();


    function StartIcon() {
        const startButton = document.getElementById('Hover');
            const startMenu = document.querySelector('.start-menu');
        if(startMenu.style.display === 'block') {
            startButton.style.display = 'block';
        } else {
            startButton.style.display = 'none';
        }
    }

    setInterval(StartIcon, 1000)