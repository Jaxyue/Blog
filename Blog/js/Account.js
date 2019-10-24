window.onload = showAll();
    function showAll() {
    $.ajax({
        type: "get",
        url: "showAccount",
        success: function (data) {
            showTable(data);
        },
        error: function () { }
    })
}

function showTable(data) {
    var tbStr = "<tr><th>用户编号</th>";
    tbStr += "<th>用户姓名</th>";
    tbStr += "<th>用户密码</th>";
    tbStr+="<th>用户类型</th>"
    tbStr += "<th>操作</th>"
    var jstr = JSON.parse(data);


    for (var i = 0; i < jstr.length; i++) {
        tbStr += "<tr><td>" + jstr[i].uId + "</td>";
        tbStr += "<td>" + jstr[i].userName + "</td>";
        tbStr += "<td>" + jstr[i].Pwd + "</td>";
        tbStr += "<td>" + jstr[i].intor + "</td>";
        tbStr += "<td><button type='button' class='btn btn-danger' data-toggle='modal' data-target='#myModal'onclick='Remove(this)'>删除</button></td></tr>"
    }
    $("#table").empty().append(tbStr);
}

function Remove(bt) {
    var trs = bt.parentNode.parentNode.childNodes[0].innerHTML;
    $.ajax({
        type: "get",
        url: "uAccount",
        data: {
            "uId": trs
        },
        success: function (data) {
            showAll();
        },
        error: function () { }
    })
}