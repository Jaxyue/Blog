function Login() {
    var userName = $(".username").val();
    var Pwd = $(".password").val();
    console.log(userName);
    console.log()
    $.ajax({
        type: "post",
        url: "res/?userName="+userName + "&&pwd=" + Pwd + "",
        //data: {
        //    "userName": userName,
        //    "Pwd": Pwd
        //},
        success: function (res) {
            if (res == "") {

                alert("用户名或密码错误,请重新输入!");
            }
            else if (res=="普通用户") {
                window.location = "/Presblog/Main";
            }else
            {
                window.location = "/Backend/Backend";
            }

        },
        error: function () { }
    })
}