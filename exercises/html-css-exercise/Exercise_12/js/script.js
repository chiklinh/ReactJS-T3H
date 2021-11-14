$(document).ready(function () {

    var url_str = window.document.URL.toString();
    var url_obj = new URL(url_str);
    if (url_str.indexOf('?') > 0) {
        var model = {
            fullname: url_obj.searchParams.get("full-name"),
            address: url_obj.searchParams.get("address"),
            phonenumber: url_obj.searchParams.get("phone-number"),
            sex: url_obj.searchParams.get("sex"),
            job: url_obj.searchParams.get("job"),
            product: url_obj.searchParams.get("product"),
            numjob: url_obj.searchParams.get("num-job"),
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
    $('input[name$="full-name"').val(model.fullname);
    $('input[name$="address"').val(model.address);
    $('input[name$="phone-number"').val(model.phonenumber);
    $('input[name$="sex"').val(model.sex);
    $('input[name$="job"').val(model.job);
    $('input[name$="product"').val(model.product);
    $('input[name$="num-job"').val(model.numjob);
}
