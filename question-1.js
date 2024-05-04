// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
//1.แก้จำนวนสินค้า Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;

//2.เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.orange = {price: 20, quantity: 300};

//3. และ 4.
function getTotalAmountOfInventory(inventory) {
  let sum = 0;
  for(let item in inventory) {
    sum = sum + (inventory[item].quantity * inventory[item].price);
  }
  console.log(`Total inventory value: ${sum} baht`);
}

getTotalAmountOfInventory(inventory);
