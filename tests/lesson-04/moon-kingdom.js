// Bài 1: Tạo hàm createCharacters:
// ● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
// ● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
// ○ thuộc tính name: UPPERCASE của name gốc
// ○ level: x2 của level gốc
// ○ health: x3 của health gốc
// ● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
// mảng mới lọc được này là “possibleWinners”

function createCharacters() {
    // Tạo mảng nhân vật
    const characters = [
        { name: 'Hien', level: 1, health: 300 },
        { name: 'Hanh', level: 2, health: 600 },
    ];
    // Dùng map tạo mảng mới powerUp
    const charactersPowerUp = characters.map((char) => {
        return {
            name: char.name.toUpperCase(),
            level: char.level * 2,
            health: char.health * 3
        };
    });
    // lọc nhân vật mạnh hơn 1000 với filter
    const possibleWinners = charactersPowerUp.filter((char) => char.health > 1000);

    console.log(`charactersPowerUp: `,charactersPowerUp);
    console.log(`possibleWinners: `,possibleWinners);
};

createCharacters();


//--------
// Bài 2: Tạo hàm printLeaderboard:
// ● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
// 1000}, ...]
// ● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
// ● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
// trước

function printLeaderboard(players) {
    // Sắp xếp từ cao xuống thấp
    players.sort((a, b) => b.score - a.score);
    // thêm huy chương
    const medals = ["🥇", "🥈", "🥉"];
    // in bảng xếp hạng vs huy chương cho 3 vị trí đầu
    players.forEach((player, index) => {
        const medal = medals[index] || "  ";
        // phân hàng ngàn
        const scoreStr = player.score.toLocaleString(); 
        // in bảng xếp hạng
        console.log(`${medal} ${index + 1}. ${player.name} - ${scoreStr} pts`);
    });
}
// Test
const players = [
    { name: 'Mario', score: 1000 },
    { name: 'Luigi', score: 900 },
    { name: 'Peach', score: 850 },
    { name: 'Yoshi', score: 800 },
    { name: 'Phong', score: 500 }
];

printLeaderboard(players);
