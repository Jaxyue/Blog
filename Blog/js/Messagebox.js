window.onload = showAll();

    function showAll() {
    $.ajax({
        type: "get",
        url: "Message",
        success: function (data) {
            showTable(data);
        },
        errpr: function () { }
    })
}
function showTable(data) {
    var tbStr = "<tr><th>用户编号</th>";
    tbStr += "<th>用户姓名</th>";
    tbStr += "<th>用户邮件地址</th>"
    tbStr += "<th>留言内容</th>"
    tbStr += "<th>操作</th>"
    var jstr = JSON.parse(data);


    for (var i = 0; i < jstr.length; i++) {
        tbStr += "<tr><td>" + jstr[i].mId + "</td>";
        tbStr += "<td>" + jstr[i].mName + "</td>";
        tbStr += "<td>" + jstr[i].mEmail + "</td>";
        tbStr += "<td>" + jstr[i].mText + "</td>";
        tbStr += "<td><button type='button' class='btn btn-danger' data-toggle='modal' data-target='#myModal'onclick='Rader(this)'>已读</button></td></tr>"
    }
    $("#table").empty().append(tbStr);
}
function Rader(bt) {
    var trs = bt.parentNode.parentNode.childNodes[0].innerHTML;
    $.ajax({
        type: "get",
        url: "Rader",
        data: {
            "id": trs
        },
        success: function (data) {
            showAll();
        },
        error: function () { }
    })

}
