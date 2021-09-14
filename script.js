let hour_div = document.getElementById("hour");
let minute_div = document.getElementById("minute");
let seconds_div = document.getElementById("seconds");

let clock = setInterval(
    function time(){
        let date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let sec = date_now.getSeconds();

        if(hr < 10){
            hr = "0" + hr;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        hour_div.textContent = hr;
        minute_div.textContent = min;
        seconds_div.textContent = sec;

    }, 1000
)