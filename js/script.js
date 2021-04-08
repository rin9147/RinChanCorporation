function jump() {
    const URL = "https://tgftp.nws.noaa.gov/data/observations/metar/stations/";
    icao = document.form.textBox1.value;
    upper_icao = icao.toUpperCase()
    //console.log(icao)
    metar_URL = URL + upper_icao + '.TXT';
    //metar_URL = "https://tgftp.nws.noaa.gov/data/observations/metar/stations/RJTT.TXT"
    window.open(metar_URL, '_blank')
}

function enter() {
    if (window.event.keyCode == 13) {
        jump();
    }
}
