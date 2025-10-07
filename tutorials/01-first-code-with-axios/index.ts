import axios from "axios";

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

axios.get("https://jsonplaceholder.typicode.com/posts/1").then(function (resp) {
  console.log(resp.data);

  const userData = resp.data as User;

  const id = userData.id;
  const title = userData.title;
  const userId = userData.userId;
  const body = userData.body;

  logUser(id, title, body, userId);
});

function logUser(id: number, title: string, body: string, userId: number) {
  console.log(`
    id: ${id}, title: ${title}, userId: ${userId}, body: ${body}
    `);
}
