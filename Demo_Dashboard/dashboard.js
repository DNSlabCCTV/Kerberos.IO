$(document).ready(function() {

//kerberos의 메인 페이지를 가져오기 위하여
//로그인 api를 통한 세션을 획득하고
//이후 메인페이지로 접근을 시도한다.

  var url_ = "http://127.0.0.1:81" //kerberos의 web url
  var login_api = "/api/v1/login/login"// kerberos의 로그인 api 주소이다.
  var data_ = "username=root&password=root"//로그인 api를 사용하기위한 POST변수로 username과 password값을 설정하여야 한다.

  //ajax를 통한 request
  $.ajax({
    type: "POST", //Post방식
    url: url_ + login_api, //login API url
    crossDomain: true, //크로스 도메인 허용
    data: data_, //Post data설정

    //request 성공시
    success: function(result) {
      console.log(result)
      console.log("success to login")

      //각각의 iframe 엘리먼트의 src 값 수정
      document.getElementById('activity').src = url_;
      document.getElementById('overview').src = url_;
      document.getElementById('hour').src = url_;
      document.getElementById('weekday').src = url_;

    },

    error: function(result) {
      console.log(result)
      alert('fail to login');
      return false;
    },
  })

})
