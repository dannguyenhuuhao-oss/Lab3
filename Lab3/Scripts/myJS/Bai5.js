var progress = 0;
var interval;


function startProgress() {

    clearInterval(interval);

    interval = setInterval(function () {

        if (progress >= 100) {

            clearInterval(interval);

            return;
        }

        progress++;

        document.getElementById("progress").style.width =
            progress + "%";

        document.getElementById("percent").innerHTML =
            progress + "%";

    }, 100);

}


function resetProgress() {

    clearInterval(interval);

    progress = 0;

    document.getElementById("progress").style.width =
        "0%";

    document.getElementById("percent").innerHTML =
        "0%";

}