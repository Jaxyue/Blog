window.onload =showAll();
function showAll() {
    //标题
    var title = "<h2>";
    $.ajax({
        type: "get",
        url: "Title",
        success: function (data) {
            console.log(data);
            var jstr = JSON.parse(data);
            for (var i = 0; i < jstr.length; i++) {
                title += "" + jstr[i].h2 + "";
                title += "<br />" + jstr[i].br + "</h2 >";
                title += "<p class='banp mt - 5'>" + jstr[i].p + "</p>";
                title += "<a class='btn btn-primary mt-lg-5 mt-3 agile-link-bnr' href=#services' role='button'>Learn More</a>";
            }
            
            $(".mx-auto").empty().append(title);
        },
        error: function () { }
    })
    //相册
    var Album = "";
    $.ajax({
        type: "get",
        url: "Album",
        success: function (data) {
            console.log(data);
            var jstr = JSON.parse(data);
            for (var i = 0; i < jstr.length; i++) {
                Album += "<div class='pimg'>";
                Album += "<a href = '#gal1' ><img src=" + jstr[i].Picurl + " class='img - fluid' style='width:100%; height:100%;'></a>";
                Album +="</div>";
            }
            $(".img-pro").empty().append(Album);
        },
        error: function () { }
    })
    //日记
    var news=""
    $.ajax({
        type: "get",
        url: "news",
        success: function (data) {
            console.log(data);
            var jstr = JSON.parse(data);
            for (var i = 0; i < jstr.length; i++) {
                news += "<div class='ManNews'>";
                news += "<div class='pic'>";
                news += "<img src = " + jstr[i].Picurl + " style ='width:100%; height:100%; '/></div>";
                news += "<div class='pText'>";
                news += "<h4>" + jstr[i].h4+"</h4>";
                news += "<p class='newsp'>" + jstr[i].Text + "</p></div></div>";
            }
            news += "<a class='btn btn - primary mt - lg - 5 mt - 3 agile - link - bnr' href='#about' role='button'>The End</a>";
            news += "<div style ='clear:both;'></div>";
            $(".NewsBox").empty().append(news);
        },
        error: function () { }
    })
}