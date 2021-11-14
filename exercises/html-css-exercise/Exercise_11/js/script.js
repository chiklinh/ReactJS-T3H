$(document).ready(function () {

    var url_str = window.document.URL.toString(); //window.location.href
    if (url_str.indexOf("user-name") > 0) {
        var url_obj = new URL(url_str);
        var username = url_obj.searchParams.get("user-name");
        if (username.length > 0) {
            document.getElementById("lbl-result").innerHTML = username;
            $("#user-name").val(username);
            $("#lbl-result").parent().parent().removeClass("hide");
            $("#lbl-result").parent().parent().addClass("show align-center");
            $("#lbl-result").parent().attr("colspan", "2")
        }
    }
});