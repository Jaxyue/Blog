function Mess() {
   
    var inpt = document.getElementsByClassName("form-control");
    var Message = {
        "mName": inpt[0].value,
        "mEmail": inpt[1].value,
        "mText": inpt[2].value
    }
    console.log(Message);
    var str = JSON.stringify(Message);
    $.ajax({
        type: "post",
        url: "Messagebox",
        data: str,
        success: function (data) {
            if (data) {
                alert("留言成功!");
            }
        },
        error: function () {
        }
    })
}