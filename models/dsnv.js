function Dsnv () {
    this.array = [];
    this.themNV = function (nhanVien) {
        this.array.push(nhanVien);
    },

    this.suaNV = function () {

    },
    this.xoaNV = function (taiKhoanXoa) {
        var isDeleted = false;
        var deletedIndex;
        for (var i = 0; i < this.array.length; i++) {
            var nhanVien = this.array[i];
            if (nhanVien.taiKhoan === taiKhoanXoa) {
                isDeleted = true;
                deletedIndex = i;
                break
            }
        }
        if (isDeleted) {
            this.array.splice(i, 1);
        }
    },

    this.capNhapNV = function () {

    },
    
    this.timLoaiNV = function (keyword) {
        var danhSach = [];
        
        for (var nhanVien of this.array) {
            if (nhanVien.loaiNV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                danhSach.push(nhanVien);
            }
        }

        return danhSach;

    }
    console.log(this.array);

}