$(document).ready(function () {

    var url_str = window.document.URL.toString();
    var url_obj = new URL(url_str);
    if (url_str.indexOf('?') > 0) {
        var model = {
            fullname: url_obj.searchParams.get("full-name"),
            address: url_obj.searchParams.get("address"),
            phonenumber: url_obj.searchParams.get("phone-number"),
            isVN: url_obj.searchParams.get("isVN"),
            tour: url_obj.searchParams.get("tour"),
            transfort: url_obj.searchParams.get("transfort"),
            numAdults: url_obj.searchParams.get("num-Adults"),
            numChild: url_obj.searchParams.get("num-child"),
            note: url_obj.searchParams.get("note"),
        }

        if (model) {
            document.getElementById("lbl-result").innerHTML = "Bạn đã đăng ký thành công"
            $("#lbl-result").parent().parent().removeClass("hide");
            $("#lbl-result").parent().parent().addClass("show align-center");

            assignDataForm(model);
        }
    }
});

function assignDataForm(model) {
    console.log(model)
    $('input[name$="full-name"').val(model.fullname);
    $('input[name$="address"').val(model.address);
    $('input[name$="phone-number"').val(model.phonenumber);
    $('input[name$="isVN"').val(model.isVN);
    $('select[name$="tour"').val(model.tour);
    $('input[name$="transfort"').val(model.transfort);
    $('input[name$="num-Adults"').val(model.numAdults);
    $('input[name$="num-child"').val(model.numChild);
    $('textarea[name$="note"').val(model.note);
}
