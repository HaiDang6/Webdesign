function findMinMax() {
    // Lấy giá trị từ input
    const input = document.getElementById('numberInput').value;
    
    // Chia tách chuỗi thành mảng và chuyển đổi thành số
    const numbers = input.split(',').map(Number);
    
    // Tìm số lớn nhất và nhỏ nhất
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);
    
    // Hiển thị kết quả
    document.getElementById('result').innerText = `Số lớn nhất: ${maxNumber}, Số nhỏ nhất: ${minNumber}`;
}
