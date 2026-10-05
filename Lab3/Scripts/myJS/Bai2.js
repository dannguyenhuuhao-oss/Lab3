// Lấy giá trị textbox
function getValue(id) {
    return document.getElementById(id).value.trim();
}


// Kiểm tra textbox
function kiemTraTextbox(id, tenThongTin) {

    var value = getValue(id);

    if (value == "") {

        document.getElementById(id + "_error").innerHTML =
            tenThongTin + " không được rỗng";

        return false;
    }

    document.getElementById(id + "_error").innerHTML = "";

    return true;
}


// Kiểm tra số điện thoại
function kiemTraSDT() {

    var sdt = getValue("sdt");

    if (sdt.length < 10 || !/^[0-9]+$/.test(sdt)) {

        document.getElementById("sdt_error").innerHTML =
            " Số điện thoại phải có ít nhất 10 chữ số";

        return false;
    }

    document.getElementById("sdt_error").innerHTML = "";

    return true;
}


// Chọn nơi giao hàng
function chonGiaoHang(loai) {

    if (loai == "vanphong") {

        alert("Bạn chọn giao hàng tại văn phòng");

    }
    else if (loai == "nharieng") {

        alert("Bạn chọn giao hàng tại nhà riêng");

    }
}


// Lưu thông tin
function luuThongTin() {

    var hopLe = true;

    if (!kiemTraTextbox("ten", "Tên")) {
        hopLe = false;
    }

    if (!kiemTraTextbox("diachi", "Địa chỉ")) {
        hopLe = false;
    }

    if (!kiemTraTextbox("tinh", "Tỉnh/Thành phố")) {
        hopLe = false;
    }

    if (!kiemTraTextbox("quan", "Quận/Huyện")) {
        hopLe = false;
    }

    if (!kiemTraTextbox("phuong", "Phường/Xã")) {
        hopLe = false;
    }

    if (!kiemTraSDT()) {
        hopLe = false;
    }

    if (hopLe) {

        alert("Lưu thông tin thành công");

    }
    else {

        alert("Thông tin nhập không hợp lệ");

    }
}