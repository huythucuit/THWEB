// Khai báo biến lưu trữ dữ liệu đang hiển thị trên màn hình
let displayValue = "";
// Hàm xóa ký tự cuối cùng trên màn hình
function remove() {
    displayValue = displayValue.toString().slice(0, -1);
    document.getElementById("result").textContent = displayValue;
}
function refresh() {
    displayValue = "";
    document.getElementById("result").textContent = displayValue;
}
// Hàm kiểm tra tính hợp lệ của biểu thức
function isValidExpression(expression) {
// Sử dụng biểu thức chính quy để tìm các trường hợp có hai dấu tính liên tiếp
    const regex = /[+\-*/][+\-*/]+/;
    if (regex.test(expression)) {
        return false;
    }

    try {
        eval(expression);
        return true;
    } catch (error) {
        return false;
    }
}

// Hàm thực hiện phép tính khi người dùng nhấn "="
function equal() {
    if (isValidExpression(displayValue)) {
        try {
            const result = eval(displayValue);
            if (isFinite(result)) {
                displayValue = result;
            } else {
                displayValue = "Invalid error!";
            }
        } catch (error) {
            document.getElementById("result").textContent = "Invalid error!";
        }
    } else {
        document.getElementById("result").textContent = "Invalid error!";
    }
}
// Hàm thêm các số và phép tính vào màn hình
function addToDisplay(value) {
    displayValue += value;
    document.getElementById("result").textContent = displayValue;
}
// Lắng nghe sự kiện khi người dùng nhấn các nút số và phép tính
document.querySelectorAll(".btn").forEach(function(button) {
    button.addEventListener("click", function() {
        let buttonValue = button.getAttribute("value");
        addToDisplay(buttonValue);
    });
});