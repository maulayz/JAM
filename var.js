// Function to format 1 in 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();
    const dateTime = zeroFill((now.getMonth() + 1)) + '/' + zeroFill(now.getUTCDate()) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    document.getElementById('date').innerHTML = dateTime;
}, 1000);



const kalender = document.querySelector('.kalender');

function tanggal() {
    kalender.style.backgroundColor = 'lightblue';
}

kalender.onclick = tanggal;