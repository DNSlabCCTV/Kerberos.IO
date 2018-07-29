$(document).ready(function() {
  $.getScript('Script/get_data.js', function() {
    //kerberos api를 사용한 데이터 로드
    var radar_api = "api/v1/images/perweekday"
    var name_api = "api/v1/name"

    name_json = get_data(name_api);
    data = get_data(radar_api);

    name_ = name_json.name;
    events_weekday_ = data.instances[name_].eventsOnWeekday
    var week_name = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"]
    console.log(events_weekday_)
    data_ = {
      labels: week_name,
      datasets: [{
        fill: true,
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        data: events_weekday_
      }]
    };

    options_ = {
      title: {
        display: true,
        text: 'Weekday Events'
      },
      legend:{
        display:false
      }
    };

    new Chart(document.getElementById("radar-chart"), {
      type: 'radar',
      data: data_,
      options: options_
    });

  });




});
