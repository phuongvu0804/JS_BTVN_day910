function getEle(id) {
    return document.getElementById(id);
}

var dsnv = new Dsnv(); 
var validation = new Validation();
getLocalStorage();


function layThongTinNhanVien () {
    var _taiKhoan = getEle('tknv').value;
    var _tenNV = getEle('name').value;
    var _email = getEle('email').value;
    var _matKhau = getEle('password').value;
    var _ngayLam = getEle('datepicker').value;
    var _luongCB = getEle('luongCB').value;
    var _chucVu = getEle('chucvu').value;
    var _gioLam = getEle('gioLam').value;

    var isValid = true;

    if (getEle('tknv').disabled) {
        isValid &= validation.isRequired(_taiKhoan, '#tbTKNV','Vui lòng nhập trường này') 
        && validation.minMaxLength(_taiKhoan, '#tbTKNV','Vui lòng nhập tối thiểu 4 kí tự và tối đa 6 kí tự.',4, 6)
        && validation.isNumber(_taiKhoan, '#tbTKNV','Trường này phải là số.')
    } else {
        isValid &= validation.isRequired(_taiKhoan, '#tbTKNV','Vui lòng nhập trường này') 
        && validation.minMaxLength(_taiKhoan, '#tbTKNV','Vui lòng nhập tối thiểu 4 kí tự và tối đa 6 kí tự.',4, 6)
        && validation.isNumber(_taiKhoan, '#tbTKNV','Trường này phải là số.')
        && validation.isExisted(_taiKhoan, '#tbTKNV','Tài khoản này đã tồn tại', dsnv.array)
    }



    isValid &= validation.isRequired(_tenNV,'#tbTen','Vui lòng nhập trường này') 
    && validation.isString(_tenNV,'#tbTen', 'Trường này phải là chữ')
    isValid &= validation.isRequired(_email, '#tbEmail','Vui lòng nhập trường này') 
    && validation.isEmail(_email, '#tbEmail', 'Trường này phải là email')



    isValid &= validation.isRequired(_matKhau, '#tbMatKhau','Vui lòng nhập trường này') 
    && validation.minMaxLength(_matKhau, '#tbMatKhau','Vui lòng nhập tối thiểu 6 kí tự và tối đa 10 kí tự.', 6, 10) 
    && validation.isValidPassword(_matKhau, '#tbMatKhau','Vui lòng nhập mật khẩu có chứa ít nhất 1 ký tự số, 1 ký tự in hoa và 1 ký tự đặc biệt')


    isValid &= validation.isRequired(_ngayLam, '#tbNgay','Vui lòng nhập trường này') 
    && validation.isValidDate(_ngayLam, '#tbNgay','Vui lòng nhập ngày làm theo cú pháp tháng/ngày/năm')


    isValid &= validation.isRequired(_luongCB, '#tbLuongCB','Vui lòng nhập trường này') 
    && validation.isNumber(_luongCB, '#tbLuongCB','Trường này phải là số.') 
    && validation.minMaxAmount(_luongCB, '#tbLuongCB','Vui lòng nhập mức lương cơ bản trong khoảng 1 000 000 đến 20 000 000', 1000000, 20000000)


    isValid &= validation.isChosen(_chucVu,'#tbChucVu', 'Vui lòng nhập trường này')

    isValid &= validation.isRequired(_gioLam, '#tbGiolam','Vui lòng nhập trường này') 
    && validation.minMaxAmount(_gioLam, '#tbGiolam','Vui lòng nhập số giờ làm trong khoảng 80 đến 200 giờ', 80, 200)


    if (isValid) {
        var nhanVien = new NhanVien(
            _taiKhoan,
            _tenNV,
            _email,
            _matKhau,
            _ngayLam,
            _luongCB,
            _chucVu,
            _gioLam
        );
        nhanVien.xepLoaiNV();
        nhanVien.tinhLuong();
        return nhanVien;
    }
    return null
}

//Them nhan vien
getEle('btnThem').onclick = function () {
    clearInput()
}

getEle('btnThemNV').onclick = function () {
    var nhanVien = layThongTinNhanVien();
    if (nhanVien) {
        dsnv.themNV(nhanVien);
        taoBang(dsnv.array);
        setLocalStorage();
    }
}

//Tim nhan vien theo xep loai 
getEle('searchName').oninput = function (e) {
    var mangKQ = dsnv.timLoaiNV(e.target.value);
    taoBang(mangKQ)
}


//Dong log in modal 
getEle('btnDong').onclick = function () {
    document.querySelector('body').classList.remove('modal-open') 
    getEle('myModal').style.display = 'none';
    getEle('myModal').classList.remove('show');
}

//Cap nhap nhan vien
getEle('btnCapNhat').onclick = function () {
    var nhanVien = layThongTinNhanVien()
    dsnv.capNhapNV(nhanVien)
    taoBang(dsnv.array)
    setLocalStorage()
}


//clear input
function clearInput () {
    getEle('tknv').value = null;
    getEle('tknv').disabled = false;
    getEle('name').value = null;
    getEle('email').value = null;
    getEle('password').value = null;
    getEle('datepicker').value = null;
    getEle('luongCB').value = null;
    getEle('chucvu').value = null;
    getEle('gioLam').value = null;

}



//Tao bang
function taoBang (array) {
    var noiDung = '';
    for (var i = 0; i < array.length; i++) {
        var nhanVien = array[i];
        noiDung += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.tenNV}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.loaiNV}</td>
                <td>
                    <button class="btn btn-danger" onclick='xoa("${nhanVien.taiKhoan}")'>Xoá</button>
                    <button class="btn btn-success" onclick='sua("${nhanVien.taiKhoan}")'>Sửa</button>
                </td>
            </tr>
        `
    }
    getEle('tableDanhSach').innerHTML = noiDung;
}



//Sua NV 
function sua(taiKhoan) {
    document.querySelector('body').classList.add('modal-open') 
    getEle('myModal').style.display = 'block';
    getEle('myModal').classList.add('show');

    var nhanVien = dsnv.hienThiThongTinSua(taiKhoan);
    getEle('tknv').value = nhanVien.taiKhoan;
    getEle('tknv').disabled = true;

    getEle('name').value = nhanVien.tenNV;
    getEle('email').value = nhanVien.email;
    getEle('password').value = nhanVien.matKhau;
    getEle('datepicker').value = nhanVien.ngayLam;
    getEle('luongCB').value = nhanVien.luongCB;
    getEle('chucvu').value = nhanVien.chucVu;
    getEle('gioLam').value = nhanVien.gioLam;

}

//Xoa NV
function xoa (taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    setLocalStorage();
    taoBang(dsnv.array);
}


//Local storage
function setLocalStorage () {
    var stringifiedData = JSON.stringify(dsnv.array);
    localStorage.setItem('DSNV', stringifiedData);
}

function getLocalStorage () {
    var localStoreData =localStorage.getItem('DSNV');
  if(localStoreData) {
    var parsedData = JSON.parse(localStoreData);
    dsnv.array = parsedData;
    taoBang(dsnv.array);
    }   
}

