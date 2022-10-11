import request from "supertest";
import { Express } from 'express-serve-static-core';
import app from "../src/app";
let server: Express;

describe('Should say server is up and running', () => {
    beforeAll(() => {
        server = app;
    });

    it('should return 200', (done) => {
        request(server)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ 'message': `Demo credit server is up and running!...` });
                done();
            })
    });
});