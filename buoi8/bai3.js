// Tạo một số ngẫu nhiên từ 1 đến 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Hàm để kiểm tra số người dùng nhập
function guessNumber() {
    const userInput = document.getElementById('userInput').value;
    const userGuess = Number(userInput);
    
    // Kiểm tra xem người dùng đã nhập đúng số hay chưa
    if (userGuess < 1 || userGuess > 10) {
        document.getElementById('result').innerText = 'Vui lòng nhập số từ 1 đến 10!';
        return;
    }

    if (userGuess !== randomNumber) {
        document.getElementById('result').innerText = 'Bạn đã đoán sai. Hãy thử lại!';
    } else {
        document.getElementById('result').innerText = 'Chúc mừng! Bạn đã đoán đúng số!';
    }
}