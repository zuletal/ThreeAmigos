const { expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../server/app");

describe("Test the root path", () => {
    test.skip("It should return an array", async (done) => {
        const response = await request(app).get("/api/stations");
        expect(Array.isArray(response.body)).toBe(true);
        done();
    });
});
describe("Test create station", () => {
    test.skip("It should return the new station", async (done) => {
        const body = {
            name: "test",
            latitude: 1,
            longitude: 1,
        };
        const response = await request(app)
            .post("/api/stations/create")
            .send(body);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(body.name);
        expect(response.body.id).toBeGreaterThan(0);
        done();
    });
});
describe("Test create station without latitude", () => {
    test.skip("It should return 500", async (done) => {
        const body = {
            name: "test",
            longitude: 1,
        };
        const response = await request(app)
            .post("/api/stations/create")
            .send(body);
        expect(response.status).toBe(500);
        done();
    });
});
describe("Test create station without longitude", () => {
    test.skip("It should return 500", async (done) => {
        const body = {
            name: "test",
            latitude: 1,
        };
        const response = await request(app)
            .post("/api/stations/create")
            .send(body);
        expect(response.status).toBe(500);
        done();
    });
});
describe("Test create station without name", () => {
    test.skip("It should return 500", async (done) => {
        const body = {
            longitude: 1,
            latitude: 1,
        };
        const response = await request(app)
            .post("/api/stations/create")
            .send(body);
        expect(response.status).toBe(500);
        done();
    });
});
