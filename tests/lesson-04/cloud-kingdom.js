// Khai báo:
// ○ Biến playerName có giá trị là “Mario”.
// ○ Biến currentLives có giá trị là 3.
// ○ Các hằng số lưu coins theo level:
// ■ Level 1: 25;
// ■ Level 2: 30;
// ■ Level 3: 45;
// ○ Tính giá trị trung bình coin của 3 level và in ra console.
// ○ In ra số coin dư khi chia cho 3
const playerName = "Mario";
const currentLives = 3;
const coins = [
    { level: 1, coin: 25 },
    { level: 2, coin: 30 },
    { level: 3, coin: 45 }
];

const total = coins.reduce((sum, { coin }) => sum + coin, 0);
const average = total / coins.length; // tính trung bình
const remainder = total % 3; // tính số dư

console.log(`average: ${average}`);
console.log(`average: ${average.toFixed(2)}`);
console.log(`remainder: ${remainder}`);

