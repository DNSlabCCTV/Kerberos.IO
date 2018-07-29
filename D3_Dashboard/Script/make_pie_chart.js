window.onload = function() {
  $.getScript('Script/get_data.js', function() {
    var pie_api = "api/v1/images/perday"
    data = get_data(pie_api);

    //횟수, 일별, 평균 데이터
    days_array = data.days
    average_json = data.statistics
    legend_json = data.legend //요일
    days_array.push(data.statistics.average) // 일별 횟수에 평균 횟수를 추가

    //json 혁식의 데이터를 array 형식으로  담을 변수
    legend_array = new Array();

    //그래프를 데이터 array
    var dataset = new Array();
    $.each(legend_json, function(key, value) {
      legend_array.push(value)
    });

    //일별 이름, 횟수 형식의 json데이터 생성
    for (var i = 0; i < 4; i++) {
      aJson = new Object();
      aJson.name = legend_array[i];
      aJson.percent = days_array[i];
      dataset.push(aJson)
    }


    var config = {
      type: 'doughnut',

      data: {
        datasets: [{
          data: days_array,
          backgroundColor: [
            "#3399ff",
            "#ff9933",
            "#009933",
            "#cc3300",
          ],
          label: 'Overview'
        }],
        labels: legend_array
      },

      options: {
        responsive: true,
        legend:{
          display:true,
          position:'bottom'
        }
      }
    };
    var ctx = document.getElementById('pie-chart').getContext('2d');
    window.myPie = new Chart(ctx, config);

  });
}
