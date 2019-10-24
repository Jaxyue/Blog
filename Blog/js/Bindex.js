window.onload = findll();

var id;
 function findll() {
    $.ajax({
        type: "get",
        url: "Hslider",
        success: function (data) {
            showTable(data);
        },
        error: function () { }
    })

}
function Modify(bt) {
    var trs = bt.parentNode.parentNode.childNodes;
    id = trs[0].innerHTML;
    var input = document.getElementsByClassName("form-control");
    input[0].value = trs[2].innerHTML;
    input[1].value = trs[3].innerHTML;
    input[2].value = trs[4].innerHTML;
    input[3].value = trs[5].innerHTML;
}
function Update() {
    var input = document.getElementsByClassName("form-control");
    var item = {
        "hId":id,
        "Etitle": input[0].value,
        "Ctitle": input[1].value,
        "EPicdescribe": input[2].value,
        "CPicdescribe":input[3].value
    }
    var str = JSON.stringify(item);
    $.ajax({
        type: "post",
        url: "updata",
        data: str,
        success: function (data) {
            alert("修改成功!");
            location.reload();

        },
        error: function () { }
    })
}

function showTable(data) {
    var tbStr = "<tr><th>图片编号</th>";
    tbStr += "<th>图片</th>";
    tbStr += "<th>标题</th>"
    tbStr += "<th>标题</th>"
    tbStr += "<th>图片描述</th>"
    tbStr += "<th>图片描述</th>"
    tbStr+="<th>操作</th>"
    var jstr = JSON.parse(data);


    for (var i = 0; i < jstr.length; i++) {
        tbStr += "<tr><td>" + jstr[i].hId + "</td>";
        tbStr += "<td><img src='/img/slide_"+(i+1)+".jpg' style='width:100px;heigth:50px;' /></td>";
        tbStr += "<td>" + jstr[i].Etitle + "</td>";
        tbStr += "<td>" + jstr[i].Ctitle + "</td>";
        tbStr += "<td>" + jstr[i].EPicdescribe + "</td>";
        tbStr += "<td>" + jstr[i].CPicdescribe + "</td>";
        tbStr += "<td><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal'onclick='Modify(this)'>修改</button></td></tr>"
    }
    $("#table").empty().append(tbStr);
}