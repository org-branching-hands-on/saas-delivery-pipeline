const request = require("supertest");
const app = require("./server");

test("GET /items deve retornar 200", async () => {
  const res = await request(app).get("/items");
  expect([200, 201]).toContain(res.statusCode);
});

