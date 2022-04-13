function Validation () {
    this.isRequired = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);

        if (value === "") {
            errorBlock.style.display = "block"
            errorBlock.innerText = message;
            return false;
        }

        errorBlock.innerText = ''
        return true;

    }

    this.minMaxLength = function (value, selector, message, min, max) {
        var errorBlock = document.querySelector(selector);
        if (value.trim().length >= min && value.trim().length <= max) {
            errorBlock.innerText = ''
            return true;
        } 
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
        
    }

    this.minMaxAmount = function (value, selector, message, min, max) {
        var errorBlock = document.querySelector(selector);
        value *= 1
        console.log(value)
        if (value >= min && value <= max) {
            errorBlock.innerText = ''
            return true;
        } 
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
        
    }

    this.isNumber = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);
        value = value.trim();
        var regex = /^[0-9]+$/;
        var isNumber = value.match(regex)
        if (isNumber) {
            errorBlock.innerText = ''
            return true;
        }
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
    }

    this.isString = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);
        var regex = '^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$'
        ;
        var isString = value.match(regex)
        if (isString) {
            errorBlock.innerText = ''
            return true;
        }
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
    }

    this.isEmail = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var isEmail = value.match(regex)
        if (isEmail) {
            errorBlock.innerText = ''
            return true;
        }
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
    }

    this.isValidPassword = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        var isPassword = value.match(regex)
        if (isPassword) {
            errorBlock.innerText = ''
            return true;
        }
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
    }

    this.isValidDate = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);
        var regex = /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/
        var isDate = value.match(regex)
        if (isDate) {
            errorBlock.innerText = ''
            return true;
        }
        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;
    }

    this.isChosen = function (value, selector, message) {
        var errorBlock = document.querySelector(selector);
        var isValid = true;
        switch (value) {
            case 'Chọn chức vụ':
                isValid = false;
                break;
            default:
                isValid = true;
        }

        if (isValid) {
            errorBlock.innerText = ''
            return true;
        }

        errorBlock.style.display = "block"
        errorBlock.innerText = message;
        return false;

    } 
}