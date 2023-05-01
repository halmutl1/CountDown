const d = document.getElementById('d');
const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');

const facebookIcon = document.getElementById('facebookIcon');
const pintIcon = document.getElementById('pintIcon');
const instgIcon = document.getElementById('instgIcon');

const newYears = '1 jan 2024';

const countDown = () =>{    
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const diff = newYearsDate - currentDate;

    const totalSeconds = diff /1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor((totalSeconds/3600) % 24);
    const minutes = Math.floor((totalSeconds/60) %60);
    const seconds = Math.floor(totalSeconds %60);

    d.innerText = formatCountDown(days);
    h.innerText = formatCountDown(hours);
    m.innerText = formatCountDown(minutes);
    s.innerText = formatCountDown(seconds);

    return;
}
setInterval(countDown); 

const formatCountDown = (time) =>{
    return time < 10 ? `0${time}` : time;
}
