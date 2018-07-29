$.getScript('Script/get_data.js', function() {
  //kerberos api를 사용한 데이터 로드
  var pie_api = "api/v1/images/perhour";
  var color_array = ["#369EAD", "#C24642", "#FFA500", "#369F36"];

  data = get_data(pie_api);
  days_array = data.days
  average_json = data.statistics
  legend_json = data.legend //요일
  days_array.push(data.statistics.average) // 일별 횟수에 평균 횟수를 추가

  //json 혁식의 데이터를 array 형식으로  담을 변수
  legend_array = new Array();
  //그래프를 데이터 array
  var dataArray = new Array();

  $.each(legend_json, function(key, value) {
    legend_array.push(value)
  });

  //일별 이름, 횟수 형식의 json데이터 생성
  for (var i = 0; i < 4; i++) {
    aJson = new Object();
    aJson.type = "spline";
    aJson.name = legend_array[i];
    aJson.color = color_array[i];
    aJson.xValueFormatString = "#### hour";
    aJson.yValueFormatString = "#event";
    aJson.showInLegend = true;

    /*
    x, y 데이터를 가지고 있는 Json데이터 생성
    */
    pointArray = new Array();

    for (var j = 0; j < 24; j++) {
      pointJson = new Object();
      pointJson.x = j;
      pointJson.y = days_array[i][j];
      pointArray.push(pointJson);
    }
    aJson.dataPoints = pointArray;
    dataArray.push(aJson);
  }

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Hour"
    },
    axisX: {
      title: "Time",
      suffix: " H"
    },
    axisY: [{
      lineColor: "#C24642",
      tickColor: "#C24642",
      labelFontColor: "#C24642",
      titleFontColor: "#C24642",
    }],
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: dataArray
  });

  chart.render();

  function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

});
