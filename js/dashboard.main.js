// Get query strings
var strUrl = location.search;
var apiKey, devId;

if (strUrl.indexOf("?") != -1) {
    var aryPara = [];
    var getSearch = strUrl.split("?");
    var getPara = getSearch[1].split("&");
    for (i = 0; i < getPara.length; i++) {
        var paraVal = getPara[i].split("=");
        //aryPara.push(ParaVal[0]);
        aryPara[paraVal[0]] = paraVal[1];
    }
    // API Key and Device ID
    apiKey = aryPara['key'];
    devId = aryPara['dev'];
    //console.log('API Key: ' + apiKey);
}

// Set up dropdown menu
function renderDropMenu() {
    // query device list for specific API key
    $.ajax({
        url: "http://alpha.rododo.farm/ntu/device",
        dataType: "json",
        crossDomain: true,
        type: "POST",
        data: "CK=" + apiKey,
        success: function(data) {
            var resAry = data.payload;
            for (var i = 0; i < resAry.length; i++) {
                var index = i + 1;
                $('#dropdown').append('<li><a href="?key=' + apiKey + '&dev=' + resAry[i].id + '">' +
                                      index + '.' + resAry[i].name +
                                      '</a></li>');
            }

            console.log(JSON.stringify(data));

            // refirect to first device and relaod
            if (typeof devId == "undefined") {
                //console.log(location.href);
                var curUrl = location.href.split('?');
                var newUrl = curUrl[0] + '?key=' + apiKey + '&dev=' + resAry[0].id;
                //console.log(newUrl);
                window.location.replace(newUrl);
            }
        }, error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

/*
                        <li><a href="#">01.雲林國小</a></li>
                        <li><a href="#">02.初鄉國小</a></li>
                        <li><a href="#">03.鹿谷國小</a></li>
                        <li><a href="#">04.廣興國小</a></li>
                        <li><a href="#">05.鳳凰國小</a></li>
                        <li><a href="#">06.文昌國小</a></li>
                        <li><a href="#">07.內湖國小</a></li>
                        <li><a href="#">08.和雅國小</a></li>
                        <li><a href="#">09.溪頭辦公室</a></li>
                        <li><a href="#">10.鳳凰茶園辦公室</a></li>
                        <li><a href="#">11.溪頭天文台</a></li>
                        <li><a href="#">12.實驗林管理處</a></li>
*/
}

var chart_1;
var chart_2;
var chart_3;
var chart_4;
var chart_5;

// PM 1
function setPM1(value) {
    chart_1 = c3.generate({
        bindto: '#chart_1',
        data: {
            columns: [
                ['PM 1.0', value]
            ],
            type: 'gauge',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
            label: {
                format: function(value, ratio) {
                    return value;
                },
                show: true
            },
            min: 0,
            max: 200,
            units: 'PM 1.0'
        },
        color: {
            pattern: ['#31B404', '#F7FE2E', '#FFBF00', '#FF0000', '#8A4B08'],
            threshold: {
                values: [50, 100, 150, 200]
            }
        },
        size: {
            height: 180
        }
    });
}

// PM 2.5
function setPM25(value) {
    chart_2 = c3.generate({
        bindto: '#chart_2',
        data: {
            columns: [
                ['PM 2.5', value]
            ],
            type: 'gauge',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
            label: {
                format: function(value, ratio) {
                    return value;
                },
                show: true
            },
            min: 0,
            max: 100,
            units: 'PM 2.5'
        },
        color: {
            pattern: [
                '#A9F5BC', '#58FA58', '#31B404',
                '#F7FE2E', '#F5DA81', '#FFBF00',
                '#FA5858', '#FF0000', '#8A4B08',
                '#CC2EFA'
            ],
            threshold: {
                values: [11, 23, 35, 41, 47, 53, 58, 64, 70]
            }
        },
        size: {
            height: 180
        }
    });
}

// PM 10
function setPM10(value) {
    chart_3 = c3.generate({
        bindto: '#chart_3',
        data: {
            columns: [
                ['PM 10', value]
            ],
            type: 'gauge',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
            label: {
                format: function(value, ratio) {
                    return value;
                },
                show: true
            },
            min: 0,
            max: 200,
            units: 'PM 10'
        },
        color: {
            pattern: ['#31B404', '#F7FE2E', '#FFBF00', '#FF0000', '#8A4B08'],
            threshold: {
                values: [50, 100, 150, 200]
            }
        },
        size: {
            height: 180
        }
    });
}

// Voltage
function setVoltage(value) {
    chart_4 = c3.generate({
        bindto: '#chart_4',
        data: {
            columns: [
                ['Voltage', value]
            ],
            type: 'gauge',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
            label: {
                format: function(value, ratio) {
                    return value;
                },
                show: true
            },
            min: 0,
            max: 30,
            units: 'Voltage'
        },
        color: {
            pattern: ['#FF0000', '#0000FF'],
            threshold: {
                values: [12]
            }
        },
        size: {
            height: 180
        }
    });
}

// Temperature and Humidity
function setTempHumi(value) {
    chart_5 = c3.generate({
        bindto: '#chart_5',
        data: {
            x: 'x',
            xFormat: '%Y-%m-%dT%H:%M:%S.%LZ',
            rows: value,
            axes: {
                Temperature: 'y',
                Humidity: 'y2'
            },
        },
        axis: {
            x: {
                type: 'timeseries',
                localtime: false,
                tick: {
                    format: '%Y-%m-%dT%H:%M:%S.%LZ'
                },
            },
            y: {
                show: true,
                label: {
                    text: 'Temperature',
                    position: 'outer-middle'
                }
            },
            y2: {
                show: true,
                label: {
                    text: 'Humidity',
                    position: 'outer-middle'
                }
            }
        }
    });
}

function update() {
    // Realtime settings at first load
    /*
    setPM1(0);
    setPM25(0);
    setPM10(0);
    setVoltage(0);
    */
    setTempHumi([
        ['x', 'Temperature', 'Humidity'],
        ['2016-08-11T16:16:14.957Z', 26, 85],
        ['2016-08-11T17:16:14.957Z', 27.8, 80],
        ['2016-08-12T09:16:14.957Z', 22, 90],
        ['2016-08-12T14:16:14.957Z', 23.2, 85],
        ['2016-08-13T10:16:14.957Z', 25, 81],
        ['2016-08-13T13:16:14.957Z', 25.5, 80],
        ['2016-08-14T08:16:14.957Z', 26, 85],
        ['2016-08-14T12:16:14.957Z', 22, 83],
        ['2016-08-14T00:21:14.957Z', 21, 85]
    ]);

    // query specific device for specific API key
    $.ajax({
        url: "http://alpha.rododo.farm/ntu/device/" + devId + "/realtime",
        dataType: "json",
        crossDomain: true,
        type: "POST",
        data: "CK=" + apiKey,
        success: function(data) {
            var resAry = data.payload;
            setPM1(resAry[0].value);
            setPM25(resAry[1].value);
            setPM10(resAry[2].value);
            setVoltage(resAry[3].value);

            // dyamic add data to time series chart
            var tckCount = 0;
            var totalTck = 5;
            chart_5.flow({
                columns: [
                    ['x', resAry[4].time],
                    ['Temperature', resAry[4].value],
                    ['Humidity', resAry[5].value]

                ],
                duration: 500,
                length: (tckCount < totalTck) ? 0 : 1,
                done: function() {
                    if (tckCount < totalTck) ++tckCount;
                }
            });

            console.log(JSON.stringify(data));
        }, error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

// inital
update();
renderDropMenu();

// loop
setInterval(function () {
    //
    // do something
    update();

    console.log('Every 60 seconds to update data.');
}, 5000);
