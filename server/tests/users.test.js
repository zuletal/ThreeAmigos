const { expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");
const pool = require("../db");
describe("User Tests", () => {
    afterAll(() => {
        pool.end()
      });
    describe("Test the root path", () => {
        test("It should return an array", async (done) => {
            const response = await request(app).get("/api/users");
            expect(Array.isArray(response.body)).toBe(true);
            done();
        });
    });
    describe("Test create user", () => {
        test("It should return the new user", async (done) => {
            const body = {
                email: "testemail@email.com",
                password: "testpassword",
            };
            const response = await request(app)
                .post("/api/users/create")
                .send(body);
            expect(response.status).toBe(200);
            expect(response.body.email).toBe(body.email);
            expect(response.body.id).toBeGreaterThan(0);
            done();
        });
    });
    describe("Test create user without email", () => {
        test("It should return code 500", async (done) => {
            const body = { password: "testpassword" };
            const response = await request(app)
                .post("/api/users/create")
                .send(body);
            expect(response.status).toBe(500);
            done();
        });
    });
    describe("Test create user without password", () => {
        test("It should return code 500", async (done) => {
            const body = { email: "testemail@email.com" };
            const response = await request(app)
                .post("/api/users/create")
                .send(body);
            expect(response.status).toBe(500);
            done();
        });
    });
});
