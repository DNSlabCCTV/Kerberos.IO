var image_url;

$(window).ready(function() {
  $.getScript('Script/get_data.js', function() {

    heat_map_api = "api/v1/images/latest_sequence";
    img_data = get_data(heat_map_api);
    image_url = img_data[img_data.length - 1].src;

    var img = new Image();
    img.src = image_url;
    console.log(img.src);

    $(img).one('load', function() {
      originalWidth = img.width;
      originalHeight = img.height;
      currentWidth = $("#heatmapContainer").width();
      currentHeight = $("#heatmapContainer").height();

      dx = currentWidth / originalWidth;
      dy = currentHeight / originalHeight;

      //kerberos api를 사용한 데이터 로드
      heat_map_api = "api/v1/images/regions";
      data = get_data(heat_map_api);
      data_remove = get_heatmap(data);
      heatmap_data = calculate(data_remove, dx, dy);
      console.log(heatmap_data);

      make(heatmap_data);

      var canvas = $("#heatmapContainer canvas").get(0)
      canvas.style.background = "url(" + image_url + ")0% 0% / 100% 100% no-repeat";

    });
  });
});


var make = function(data_) {

  // create a heatmap instance
  var heatmap = h337.create({
    container: document.getElementById('heatmapContainer'),
    maxOpacity: .4,
    radius: 5,
    blur: .75,

  });

  // set the generated dataset
  heatmap.setData(
    data_
  );

}

var get_heatmap = function(data_low) {
  regions = [];
  for (var i = 0; i < data.length; i++) {
    var regionCoordinates = data_low[i].regionCoordinates.split("-");

    var region = {
      'start': {
        'x': 0,
        'y': 0,
      },
      'end': {
        'x': 0,
        'y': 0,
      },
      'changes': 0
    }

    if (regionCoordinates.length > 1) {
      region.start.x = parseInt(regionCoordinates[0]);
      region.start.y = parseInt(regionCoordinates[1]);
      region.end.x = parseInt(regionCoordinates[2]);
      region.end.y = parseInt(regionCoordinates[3]);
      region.changes = parseInt(data[i].numberOfChanges);
      region.average = parseInt(data[i].numberOfChanges) / ((region.end.x - region.start.x) * (region.end.y - region.start.y));
      regions.push(region);

    }
  }

  return regions;
}

var calculate = function(regions, dx, dy) {
  var max = 0;
  var dataPoints = [];

  for (var i = 0; i < regions.length; i++) {
    max = Math.max(max, regions[i].average);
    //console.log(regions[i].start.x * dx);

    var point = {
      x: parseInt(regions[i].start.x * dx + (regions[i].end.x - regions[i].start.x) * dx / 2),
      y: parseInt(regions[i].start.y * dy + (regions[i].end.y - regions[i].start.y) * dy / 2),
      value: regions[i].average,
      radius: regions[i].average * 200,
    };

    if (point.x <= 0) {
      console.log(point.x);
    }
    dataPoints.push(point);
  }

  var data = {
    max: max,
    data: dataPoints
  };

  return data;
}
