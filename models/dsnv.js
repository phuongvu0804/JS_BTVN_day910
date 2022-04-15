function Dsnv () {
    this.array = [];
    this.themNV = function (nhanVien) {
        this.array.push(nhanVien);
    },

    this.timViTriNv = function (taiKhoan) {
        var index = -1
        for (var i = 0; i < this.array.length; i++) {
            var nhanVien = this.array[i]
            if (nhanVien.taiKhoan === taiKhoan) {
                index = i;
                break;
            }

        }
        return index;

    },

    this.hienThiThongTinSua = function (taiKhoan) {
        var index = this.timViTriNv(taiKhoan)
        if (index !== -1) {
            var nhanVien = this.array[index]
            return nhanVien
        }

        return null;
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

    this.capNhapNV = function (nhanVien) {
        var index = this.timViTriNv(nhanVien.taiKhoan)
        if (index !== -1) {
            this.array[index] = nhanVien
        }
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


}