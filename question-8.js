// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
     return fetch("https://jsonplaceholder.typicode.com/users");
}

async function handleResponse(response) {
     return response.json();
}

async function getUsersName() {
     let result = [];
     try {
          const users = await handleResponse(await getUsers());
          for(let user of users) {
               result.push(user.name);
          }
     } catch(error) {
          console.log(error);
     }
     return result;
}

const newUsers = await getUsersName();
console.log(newUsers);
