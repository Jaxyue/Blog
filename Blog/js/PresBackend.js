window.onload = function () {
    $.ajax({
        type: "get",
        url: "/Presblog/Title",
        success: function (data) {
            var tbStr = "<tr><th>标题</th>";
            tbStr += "<th>换行后标题</th>";
            tbStr += "<th>内容</th>"
            tbStr += "<th>操作</th>"
            var jstr = JSON.parse(data);


            for (var i = 0; i < jstr.length; i++) {
                tbStr += "<tr><td>" + jstr[i].h2 + "</td>";
                tbStr += "<td>" + jstr[i].br + "</td>";
                tbStr += "<td>" + jstr[i].p + "</td>";
                tbStr += "<td><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#tModi'onclick='tModify(this)'>修改</button></td></tr>";
            }
            $("#tTb").empty().append(tbStr);
        },
        error: function () { }
    })

    $.ajax({
        type: "get",
        url: "/Presblog/Album",
        success: function (data) {
            var tbStr = "<tr><th>图片编号</th>";
            tbStr += "<th>图片</th>"
            tbStr += "<th>操作</th>"
            var jstr = JSON.parse(data);


            for (var i = 0; i < jstr.length; i++) {
                tbStr += "<tr><td>" + jstr[i].aId + "</td>";
                tbStr += "<td><img src=" + jstr[i].Picurl + " style='width:200px;height:100px;' /></td>";
                tbStr += "<td><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal'onclick='aModify(this)'>修改</button></td></tr>";
            }
            $("#pTb").empty().append(tbStr);
        },
        error: function () { }
    })
    $.ajax({
        type: "get",
        url: "/Presblog/news",
        success: function (data) {
            console.log(data);
            var tbStr = "<tr><th>编号</th>";
            tbStr += "<th>图片</th>";
            tbStr += "<th>标题</th>";
            tbStr += "<th>内容</th>"
            tbStr += "<th>操作</th>"
            var jstr = JSON.parse(data);


            for (var i = 0; i < jstr.length; i++) {
                tbStr += "<tr><td>" + jstr[i].nId + "</td>";
                tbStr += "<td><img  src="+jstr[i].Picurl+" style='width:200px;height:100px;'/></td>";
                tbStr += "<td>" + jstr[i].h4 + "</td>";
                tbStr += "<td>" + jstr[i].Text + "</td>";
                tbStr += "<td><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal'onclick='nModify(this)'>修改</button></td></tr>";
            }
            $("#nTb").empty().append(tbStr);
        },
        error: function () { }
    })
}

function tModify(bt) {

    var trs = bt.parentNode.parentNode.childNodes;
    var input = $(".tText");
    for (var i = 0; i < input.length; i++) {
        input[i].value = trs[i].innerHTML;
    }
    
}
