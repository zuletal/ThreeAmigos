const { expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");
const pool = require("../db");

afterAll(() => {
    pool.end()
  });
describe("Test the root path", () => {
    test.skip("It should return an array", async (done) => {
        const response = await request(app).get("/api/reports");
        expect(Array.isArray(response.body)).toBe(true);
        done();
    });
});
describe("Test create report", () => {
    test.skip("It should return the new report", async (done) => {
        const body = {
            station_id: 1,
        };
        const response = await request(app)
            .post("/api/reports/create")
            .send(body);
        expect(response.status).toBe(200);
        expect(response.body.id).toBeGreaterThan(0);
        done();
    });
});
describe("Test create report without station_id", () => {
    test.skip("It should return code 500", async (done) => {
        const body = { };
        const response = await request(app)
            .post("/api/reports/create")
            .send(body);
        expect(response.status).toBe(500);
        done();
    });
});
describe("Test create report without login", () => {
    test.skip("It should return Please Authenticate", async (done) => {
        const body = { station_id:1 };
        const response = await request(app)
            .post("/api/reports/create")
            .send(body);
        expect(response.status).toBe(500);
        done();
    });
});
describe("Test get latest reports", () => {
    test("It should return an array", async (done) => {
        const response = await request(app)
            .get("/api/reports/latest")
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
        for (station of response.body) {
            expect(station.station_id).toBeGreaterThan(0)
            expect(typeof station.station_name).toBe('string')
        }
        done();
    });
});

