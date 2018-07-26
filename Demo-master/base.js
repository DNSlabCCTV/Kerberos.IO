var nodesTable = null;
var linksTable = null;
var network = null;
var options = null;
var DIR = './static/node/';
var moveX = 0;
var moveY = 160;
//google.load(API_name, version)
google.load('visualization', '1'); //?
// Set callback to run when API is loaded  `
google.setOnLoadCallback(drawVisualization); //?
function drawVisualization() {
  //use the 'google.visualization' API's DataTable()
  //make the Matrix(including column and row)
  nodesTable = new google.visualization.DataTable();
  linksTable = new google.visualization.DataTable();
  //when you add the column, Column goes orderly
  nodesTable.addColumn('number', 'id');
  nodesTable.addColumn('string', 'text');
  nodesTable.addColumn('string', 'image');
  nodesTable.addColumn('string', 'style');
  nodesTable.addColumn('number', 'x');
  nodesTable.addColumn('number', 'y');
  //when you add the row, Row goes orderly
  nodesTable.addRow([1, 'KOREN', DIR + 'cloud.PNG', 'image', 550 + moveX, 350 + moveY]);
  //////////////////Type-O
  nodesTable.addRow([2, 'TYPE O - KU', DIR + 'TYPEO-hard.PNG', 'image', 300 + moveX, 420 + moveY]);
  nodesTable.addRow([3, 'TYPE O - GIST', DIR + 'TYPEO-hard.PNG', 'image', 500 + moveX, 500 + moveY]);
  nodesTable.addRow([4, 'TYPE O - JNU', DIR + 'TYPEO-hard.PNG', 'image', 780 + moveX, 400 + moveY]);
  nodesTable.addRow([5, ' ', DIR + 'TYPEO-hard.PNG', 'image', 4000 + moveX, 4400 + moveY]);
  /////////////
  /////////////
  nodesTable.addRow([8, 'KU_Phone', DIR + 'Iphone.PNG', 'image', 200 + moveX, 420 + moveY]);
  nodesTable.addRow([9, 'JNU_video', DIR + 'cam.png', 'image', 990 + moveX, 400 + moveY]);
  nodesTable.addRow([10, 'JNU_Drone', DIR + 'drone.PNG', 'image', 950 + moveX, 300 + moveY]);
  ///////////////JNU_DORNE_SENSOR
  nodesTable.addRow([14, 'DRONE_TEMP', DIR + 'sensor.png', 'image', 900 + moveX, 150 + moveY]);
  nodesTable.addRow([15, 'DRONE_DUST', DIR + 'sensor.png', 'image', 980 + moveX, 120 + moveY]);
  nodesTable.addRow([16, 'DRONE_LIGHT', DIR + 'sensor.png', 'image', 1060 + moveX, 150 + moveY]);
  nodesTable.addRow([20, 'DRONE_ALCOHOL_GAS', DIR + 'sensor.png', 'image', 1100 + moveX, 210 + moveY]);
  nodesTable.addRow([26, 'DRONE_GPS', DIR + 'sensor.png', 'image', 1100 + moveX, 270 + moveY]);
  ///////////GIST에 있는 라즈베리파이
  nodesTable.addRow([21, 'Raspberry Pi', DIR + 'Raspberry.png', 'image', 550 + moveX, 605 + moveY]);
  nodesTable.addRow([22, 'RASP_TEMP', DIR + 'sensor.png', 'image', 550 + moveX, 710 + moveY]);
  nodesTable.addRow([23, 'RASP_DUST', DIR + 'sensor.png', 'image', 630 + moveX, 730 + moveY]);
  nodesTable.addRow([24, 'RASP_LIGHT', DIR + 'sensor.png', 'image', 710 + moveX, 720 + moveY]);
  nodesTable.addRow([25, 'RASP_ALCOHOL_GAS', DIR + 'sensor.png', 'image', 750 + moveX, 640 + moveY]);
  nodesTable.addRow([27, 'RASP_GPS', DIR + 'sensor.png', 'image', 750 + moveX, 570 + moveY]);
  ///////////JNU_Rasp_SenSor
  nodesTable.addRow([31, 'Raspberry Pi', DIR + 'Raspberry.png', 'image', 950 + moveX, 520 + moveY]);
  nodesTable.addRow([32, 'RASP_TEMP', DIR + 'sensor.png', 'image', 900 + moveX, 650 + moveY]);
  nodesTable.addRow([33, 'RASP_DUST', DIR + 'sensor.png', 'image', 980 + moveX, 680 + moveY]);
  nodesTable.addRow([34, 'RASP_LIGHT', DIR + 'sensor.png', 'image', 1060 + moveX, 650 + moveY]);
  nodesTable.addRow([35, 'RASP_ALCOHOL_GAS', DIR + 'sensor.png', 'image', 1100 + moveX, 590 + moveY]);
  nodesTable.addRow([36, 'RASP_GPS', DIR + 'sensor.png', 'image', 1100 + moveX, 520 + moveY]);
  ///////////DEMO_PHONE,DRONE
  nodesTable.addRow([17, 'TYPE 0 - DEMO', DIR + 'TYPEO-hard.PNG', 'image', 500 + moveX, 170 + moveY]);
  nodesTable.addRow([18, 'Demo Drone', DIR + 'drone.PNG', 'image', 400 + moveX, 60 + moveY]);
  nodesTable.addRow([19, 'Demo Phone', DIR + 'Iphone.PNG', 'image', 580 + moveX, 20 + moveY]);
  /////////////KU
  nodesTable.addRow([11, 'KU_DUST', DIR + 'sensor.png', 'image', 90 + moveX, 380 + moveY]);
  nodesTable.addRow([12, 'KU_GPS', DIR + 'sensor.png', 'image', 80 + moveX, 470 + moveY]);
  nodesTable.addRow([13, 'KU_Video', DIR + 'cam.png', 'image', 108 + moveX, 540 + moveY]);
  //////////////////////안 쓰는 sensor 추가부분. 50번대////
  ////////////Demo Drone_sensor
  nodesTable.addRow([51, 'DRONE_TEMP', DIR + 'sensor.png', 'image', 240 + moveX, moveY - 50]);
  nodesTable.addRow([52, 'DRONE_DUST', DIR + 'sensor.png', 'image', 320 + moveX, moveY - 80]);
  nodesTable.addRow([53, 'DRONE_LIGHT', DIR + 'sensor.png', 'image', 400 + moveX, moveY - 110]);
  nodesTable.addRow([54, 'DRONE_ALCOHOL_GAS', DIR + 'sensor.png', 'image', 480 + moveX, moveY - 90]);
  nodesTable.addRow([55, 'DRONE_GPS', DIR + 'sensor.png', 'image', 550 + moveX, moveY - 60]);
  nodesTable.addRow([56, 'demo_DUST', DIR + 'sensor.png', 'image', 680 + moveX, moveY - 50]);
  nodesTable.addRow([57, 'demo_GPS', DIR + 'sensor.png', 'image', 750 + moveX, moveY - 10]);
  nodesTable.addRow([58, 'demo_Video', DIR + 'cam.png', 'image', 240 + moveX, 70 + moveY]);
  //////////////////새로 추가된 CO_GAS
  nodesTable.addRow([59, 'DRONE_CO_GAS', DIR + 'sensor.png', 'image', 830 + moveX, 170 + moveY]);
  nodesTable.addRow([60, 'RASP_CO_GAS', DIR + 'sensor.png', 'image', 1050 + moveX, 470 + moveY]);
  nodesTable.addRow([61, 'RASP_CO_GAS', DIR + 'sensor.png', 'image', 720 + moveX, 520 + moveY]);
  nodesTable.addRow([62, 'DRONE_CO_GAS', DIR + 'sensor.png', 'image', 210 + moveX, moveY - 10]);
  /////////////////건국대데모장 드론
  nodesTable.addRow([63, 'DEMO_PHONE_VIDEO', DIR + 'cam.png', 'image', 730 + moveX, moveY + 80]);
  ////////////////GIST type C
  nodesTable.addRow([64, 'TYPE C - GIST', DIR + 'TYPEC-hard.PNG', 'image', 350 + moveX, moveY + 560]);
  /////////////////gist datalake
  nodesTable.addRow([65, 'DataLake', DIR + 'datalake.png', 'image', 310 + moveX, moveY + 700]);
  nodesTable.addRow([70, 'TYPE O - JEJU', DIR + 'TYPEO-hard.PNG', 'image', 360 + moveX, 270 + moveY]);
  nodesTable.addRow([71, 'Raspberry Pi', DIR + 'Raspberry.png', 'image', 220 + moveX, 270 + moveY]);
  nodesTable.addRow([72, 'TEMP', DIR + 'sensor.png', 'image', 90 + moveX, 300 + moveY]);
  nodesTable.addRow([73, 'DUST', DIR + 'sensor.png', 'image', 100 + moveX, 230 + moveY]);
  nodesTable.addRow([74, 'LIGHT', DIR + 'sensor.png', 'image', 140 + moveX, 170 + moveY]);
  //KU
  nodesTable.addRow([101, '', DIR + 'KU.png', 'image', 300 + moveX, 365 + moveY]);
  //GIST
  nodesTable.addRow([102, '', DIR + 'GIST.png', 'image', 580 + moveX, 500 + moveY]);
  //JNU
  nodesTable.addRow([103, '', DIR + 'JNU.png', 'image', 780 + moveX, 350 + moveY]);
  //JEJU
  nodesTable.addRow([104, '', DIR + 'JEJU.png', 'image', 360 + moveX, 220 + moveY]);
  nodesTable.addRow([75, 'ALCOHOL', DIR + 'sensor.png', 'image', 220 + moveX, 170 + moveY]);
  nodesTable.addRow([76, 'GPS', DIR + 'sensor.png', 'image', 290 + moveX, 190 + moveY]);
  nodesTable.addRow([77, 'CO_GAS', DIR + 'sensor.png', 'image', 170 + moveX, 330 + moveY]);
  /////////////////////////////////linkstable
  linksTable.addColumn('number', 'from');
  linksTable.addColumn('number', 'to');
  linksTable.addColumn('number', 'id');
  linksTable.addColumn('string', 'style');
  linksTable.addColumn('string', 'color');
  linksTable.addRow([2, 1, 1, 'moving-arrows', undefined]);
  linksTable.addRow([3, 1, 2, 'moving-arrows', undefined]);
  linksTable.addRow([4, 1, 3, 'moving-arrows', undefined]);
  linksTable.addRow([4, 1, 5, 'line', undefined]);
  linksTable.addRow([8, 2, 7, 'line', undefined]);
  linksTable.addRow([9, 10, 8, 'moving-arrows', 'RED']);
  linksTable.addRow([10, 4, 9, 'line', undefined]);
  linksTable.addRow([11, 8, 10, 'line', undefined]);
  linksTable.addRow([12, 8, 11, 'line', undefined]);
  linksTable.addRow([13, 8, 12, 'moving-arrows', 'RED']);
  linksTable.addRow([14, 10, 13, 'line', undefined]);
  linksTable.addRow([15, 10, 14, 'line', undefined]);
  linksTable.addRow([16, 10, 15, 'line', undefined]);
  //KOREN - DEMO SITE
  linksTable.addRow([17, 1, 16, 'moving-arrows', undefined]);
  linksTable.addRow([18, 17, 17, 'line', undefined]);
  linksTable.addRow([19, 17, 18, 'line', undefined]);
  linksTable.addRow([20, 10, 19, 'line', undefined]);
  linksTable.addRow([21, 3, 20, 'line', undefined]);
  linksTable.addRow([22, 21, 21, 'line', undefined]);
  linksTable.addRow([23, 21, 22, 'line', undefined]);
  linksTable.addRow([24, 21, 23, 'line', undefined]);
  linksTable.addRow([25, 21, 24, 'line', undefined]);
  linksTable.addRow([26, 10, 25, 'line', undefined]);
  linksTable.addRow([27, 21, 90, 'line', undefined]);
  ////////////JNU LINK new in 1101
  linksTable.addRow([31, 4, 41, 'line', undefined]);
  linksTable.addRow([32, 31, 42, 'line', undefined]);
  linksTable.addRow([33, 31, 43, 'line', undefined]);
  linksTable.addRow([34, 31, 44, 'line', undefined]);
  linksTable.addRow([35, 31, 45, 'line', undefined]);
  linksTable.addRow([36, 31, 46, 'line', undefined]);
  //////////////////////안 쓰는 sensor 추가부분.
  linksTable.addRow([51, 18, 26, 'line', undefined]);
  linksTable.addRow([52, 18, 27, 'line', undefined]);
  linksTable.addRow([53, 18, 28, 'line', undefined]);
  linksTable.addRow([54, 18, 29, 'line', undefined]);
  linksTable.addRow([55, 18, 30, 'line', undefined]);
  linksTable.addRow([56, 19, 31, 'line', undefined]);
  linksTable.addRow([57, 19, 32, 'line', undefined]);
  linksTable.addRow([58, 18, 33, 'moving-arrows', 'RED']);
  linksTable.addRow([59, 10, 47, 'line', undefined]);
  linksTable.addRow([60, 31, 48, 'line', undefined]);
  linksTable.addRow([61, 21, 49, 'line', undefined]);
  linksTable.addRow([62, 18, 50, 'line', undefined]);
  linksTable.addRow([63, 19, 51, 'moving-arrows', 'RED']);
  ///////////////////////////GIST TYpe C - KOREN
  linksTable.addRow([1, 64, 52, 'moving-arrows', undefined]);
  ////////////////////////////gist datalake
  linksTable.addRow([64, 65, 53, 'moving-arrows', undefined]);
  linksTable.addRow([70, 1, 54, 'moving-arrows', undefined]);
  linksTable.addRow([71, 70, 55, 'line', undefined]);
  linksTable.addRow([72, 71, 56, 'line', undefined]);
  linksTable.addRow([73, 71, 57, 'line', undefined]);
  linksTable.addRow([74, 71, 58, 'line', undefined]);
  linksTable.addRow([75, 71, 59, 'line', undefined]);
  linksTable.addRow([76, 71, 60, 'line', undefined]);
  linksTable.addRow([77, 71, 61, 'line', undefined]);
  //node random position
  //randoms x,y variable
  //nodesTable.setCell(0, 4, cx);
  //nodesTable.setCell(0, 5, cy);
  // specify options
  options = {
    //adjust the frame size
    'width': '1000px',
    'height': '860px',
    'stabilize': true,
    'links': {
      'width': 1.5
    }
  };
  // network ID
  network = new links.Network(document.getElementById('mynetwork'));
  network.draw(nodesTable, linksTable, options); //draw the network topology
  //set the canvas size
  network._setSize("100%", "100%");
  //////////////////노드클릭 -> 그라파나 호출
  // links.events.addListener(network, 'select', function(params) {
  //   var string = JSON.stringify(network.getSelection()).split(':');
  //   var nodeno = string[1].slice(0, -2);
  //   //alert(nodeno);
  //   if (nodeno == 39)
  //     parent.document.getElementById("grafana1").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_drone?refresh=3s&orgId=1&panelId=3&from=1511157321886&to=1511157361886";
  //   if (nodeno == 8)
  //     parent.document.getElementById("grafana1").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_drone?refresh=3s&orgId=1&panelId=1&from=1511157271479&to=1511157311479";
  //   if (nodeno == 9)
  //     parent.document.getElementById("grafana1").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_drone?refresh=3s&orgId=1&panelId=5&from=1511157370888&to=1511157410888";
  //   if (nodeno == 10)
  //     parent.document.getElementById("grafana1").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_drone?refresh=3s&orgId=1&panelId=2&from=1511157298231&to=1511157338231";
  //   if (nodeno == 11)
  //     parent.document.getElementById("grafana").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_drone?refresh=3s&orgId=1&panelId=4&from=1511157344443&to=1511157384443";
  //   if (nodeno == 40)
  //     parent.document.getElementById("grafana2").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_rasp2?orgId=1&from=1511157486095&to=1511157556098&refresh=3s&panelId=3";
  //   if (nodeno == 20)
  //     parent.document.getElementById("grafana2").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_rasp2?orgId=1&from=1511157406186&to=1511157476186&refresh=3s&panelId=1";
  //   if (nodeno == 21)
  //     parent.document.getElementById("grafana2").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_rasp2?orgId=1&from=1511157505240&to=1511157575240&refresh=3s&panelId=5";
  //   if (nodeno == 22)
  //     parent.document.getElementById("grafana2").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_rasp2?orgId=1&from=1511157443775&to=1511157513778&refresh=3s&panelId=2";
  //   if (nodeno == 23)
  //     parent.document.getElementById("grafana2").src = "http://210.114.90.191:3000/dashboard-solo/db/jnu_rasp2?orgId=1&from=1511157462978&to=1511157532981&refresh=3s&panelId=4";
  //   if (nodeno == 28)
  //     parent.document.getElementById("grafana3").src = "210.114.90.176";
  // });
}
