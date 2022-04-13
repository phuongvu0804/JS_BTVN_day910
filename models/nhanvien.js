function NhanVien (
    _taiKhoan,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
) {
    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.loaiNV = '';
    this.tongLuong = 0;

    this.xepLoaiNV = function () {
        if (this.gioLam >= 192) {
            this.loaiNV = 'Xuất sắc';
        } else if (this.gioLam >= 176 && this.gioLam < 192) {
            this.loaiNV = 'Giỏi';
        } else if (this.gioLam >= 160 && this.gioLam < 176) {
            this.loaiNV = 'Khá';
        } else {
            this.loaiNV = 'Trung bình';
        }
    }

    this.tinhLuong = function () {
        console.log(this.chucVu === 'Sếp')
        switch (this.chucVu) {
            case 'Sếp':
                this.tongLuong = parseFloat(this.luongCB) * parseFloat(this.gioLam) * 3;
                break;
            case 'Trưởng phòng':
                this.tongLuong = parseFloat(this.luongCB) * parseFloat(this.gioLam) * 2;
                break;
            case 'Nhân viên':
                this.tongLuong = parseFloat(this.luongCB) * parseFloat(this.gioLam) * 1;
        }
    }
}