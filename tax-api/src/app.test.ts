import request from "supertest";

import app from "./app";

describe("GET: '/'", function () {
  it("レスポンスが返ってくること", async function () {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("レスポンスはHello, Worldであること", async function () {
    const response = await request(app).get("/");
    expect(response.text).toBe('Hello World!');
  });
});
