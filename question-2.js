// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
//1.เพิ่ม task ใหม่
userTaskList.push({id: 5, task: "Walk the dog"});
// console.log(userTaskList);


//2.แก้ไข task id:4
userTaskList.map((item) => {
  if(item.id === 4) {
    item.task = "Go to the gym"
  }
});
// console.log(userTaskList);

//3. pop array
userTaskList.pop();
// console.log(userTaskList);

//4.log last task
console.log(userTaskList[userTaskList.length-1]);

