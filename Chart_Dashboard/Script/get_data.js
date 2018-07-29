var url_ = "http://127.0.0.1:81/" //kerberos의 web url
var login_api = "api/v1/login/login" // kerberos의 로그인 api 주소이다.
var data_ = "username=root&password=root" //로그인 api를 사용하기위한 POST변수로 username과 password값을 설정하여야 한다.

var json_data

//ajax를 통한 request
var get_data = function(api_url) {

  $.ajax({
    type: "POST", //Post방식
    url: url_ + login_api, //login API url
    crossDomain: true, //크로스 도메인 허용
    data: data_, //Post data설정
    async: false,
    //request 성공시
    success: function(result) {
      $.ajax({
        type: "GET", //Post방식
        url: url_ + api_url, //login API url
        crossDomain: true, //크로스 도메인 허용
        async: false,
        success: function(data) {
          json_data = data;
          console.log(data);
        }
      });
    },
    error: function(result) {
      console.log(result)
      alert('fail to login');
    }
  })

  return json_data
}
