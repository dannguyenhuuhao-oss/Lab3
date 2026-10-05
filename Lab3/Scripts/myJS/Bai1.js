// ===============================
// Lấy giá trị của textbox
// ===============================
function getValue(id) {

    return document.getElementById(id).value.trim();

}


// ===============================
// Hiển thị sở trường
// ===============================
function hienThiSoTruong() {

    var chuyenNganh =
        document.getElementById("chuyennganh").value;

    var soTruong =
        document.getElementById("sotruong");


    // Hệ thống
    if (chuyenNganh == "hethong") {

        soTruong.value =
            "Phân tích và thiết kế";

    }


    // Phần mềm
    else if (chuyenNganh == "phanmem") {

        soTruong.value =
            "Lập trình";

    }


    // Mạng máy tính
    else if (chuyenNganh == "mang") {

        soTruong.value =
            "Quản lý mạng";

    }

}


// ===============================
// Xóa tất cả thông báo lỗi
// ===============================
function xoaLoi() {

    document.getElementById("loi_masv").innerHTML = "";

    document.getElementById("loi_hoten").innerHTML = "";

    document.getElementById("loi_tuoi").innerHTML = "";

    document.getElementById("loi_ngoaingu").innerHTML = "";

    document.getElementById("ketqua").innerHTML = "";

}


// ===============================
// Kiểm tra đăng ký
// ===============================
function dangKy() {

    xoaLoi();

    var hopLe = true;


    // ===========================
    // 1. Kiểm tra mã sinh viên
    // ===========================

    var masv = getValue("masv");

    if (masv.length != 10) {

        document.getElementById("loi_masv").innerHTML =
            "Mã sinh viên gồm 10 ký tự";

        hopLe = false;

    }


    // ===========================
    // 2. Kiểm tra họ tên
    // ===========================

    var hoten = getValue("hoten");

    if (hoten == "") {

        document.getElementById("loi_hoten").innerHTML =
            "Họ tên không rỗng và < 30 ký tự";

        hopLe = false;

    }

    else if (hoten.length >= 30) {

        document.getElementById("loi_hoten").innerHTML =
            "Họ tên không rỗng và < 30 ký tự";

        hopLe = false;

    }


    // ===========================
    // 3. Kiểm tra tuổi
    // ===========================

    var tuoi = getValue("tuoi");

    if (tuoi == "") {

        document.getElementById("loi_tuoi").innerHTML =
            "Tuổi phải 18 trở lên";

        hopLe = false;

    }

    else if (isNaN(tuoi) || parseInt(tuoi) < 18) {

        document.getElementById("loi_tuoi").innerHTML =
            "Tuổi phải 18 trở lên";

        hopLe = false;

    }


    // ===========================
    // 4. Kiểm tra ngoại ngữ
    // ===========================

    var checkbox =
        document.getElementsByName("ngoaingu");

    var coChon = false;

    for (var i = 0; i < checkbox.length; i++) {

        if (checkbox[i].checked == true) {

            coChon = true;

        }

    }

    if (coChon == false) {

        document.getElementById("loi_ngoaingu").innerHTML =
            "Vui lòng chọn ngoại ngữ";

        hopLe = false;

    }


    // ===========================
    // 5. Kết quả
    // ===========================

    if (hopLe == true) {

        document.getElementById("ketqua").innerHTML =
            "Bạn đã đăng ký thành công";

        document.getElementById("ketqua").className =
            "thanhcong";

    }

    else {

        document.getElementById("ketqua").innerHTML =
            "Bạn phải nhập lại cho đúng";

        document.getElementById("ketqua").className =
            "loi";

    }


    // Không reload trang
    return false;

}