function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = decodeURIComponent(value);
    });
    return vars;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function () {
    var dat = [[]];
    var colors = ["#E74C3C", "#3498DB", "#2ECC71", "#F39C12", "#2C3E50"]

    var vars = getUrlVars();

    if (vars["metrics"] === undefined || vars["metrics"][0] === "undefined") {
        $("#container").html("Please specify the metrics for the chart by adding a query parameter \"metrics\".</br>Multiple metrics can be separated by comma.</br></br>Example: ?metrics=SOCKET POWER,PPT FAST LIMIT,PPT SLOW LIMIT")
        return;
    }

    var metrics = vars["metrics"].split(',');
    var title = vars["title"]

    var chart = new Chart($("#chart"), {
        type: 'line',
        options: {
            animation: {
                duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            title: {
                text: title,
                display: true,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                    },
                }]
            },
        }
    });

    for (var x = 0; x < metrics.length; x++) {
        dat[x] = [];
        var col = "";
        if (x > colors.length) {
            col = getRandomColor();
        } else {
            col = colors[x];
        }
        chart.data.datasets.push(
            {
                label: metrics[x],
                fill: false,
                data: dat[x],
                borderColor: col
            }
        );
    }

    var i = 1;
    window.setInterval(function () {
        $.ajax({
            url: "http://127.0.0.1:8090/pmtab"
            ,
            success: function (result) {
                for (var x = 0; x < metrics.length; x++) {
                    dat[x].push(result[metrics[x]].Value);
                }
                chart.data.labels.push("");
                if (dat[0].length > 30) {
                    dat.forEach(function (el) {
                        el.shift();
                    });
                    chart.data.labels.shift();
                }
                chart.update();
                i++;
            }
        });
    }, 1000);
});