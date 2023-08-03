import assert from "assert";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../server";

chai.use(chaiHttp);

describe("/Times", function () {
  describe("200", function () {
    it("Should return an epoch time", (done) => {
      chai
        .request(app)
        .get("/time")
        .set("authorization", process.env.SECRET as string)
        .end((err, res) => {
          expect(res.status).to.be.eq(200);
          expect(res.body).to.be.a("object");
          expect(res.body.epoch).to.be.a("number");
          done();
        });
    });
    it("Should return the current time", (done) => {
      chai
        .request(app)
        .get("/time")
        .set("authorization", process.env.SECRET as string)
        .end((err, res) => {
          const currentTime = Date.now();
          // Adding a 4 second threshold to account for network times
          expect(res.body.epoch).to.be.greaterThan(currentTime - 2);
          expect(res.body.epoch).to.be.lessThan(currentTime + 2);
          done();
        });
    });
  });
  describe("403", function () {
    it("Should return a 403 without a token", (done) => {
      chai
        .request(app)
        .get("/time")
        .end((err, res) => {
          expect(res.status).to.be.eq(403);
          done();
        });
    });
    it("Should return a 403 with an incorrect token", (done) => {
      chai
        .request(app)
        .get("/time")
        .set("authorization", "wrongtoken")
        .end((err, res) => {
          expect(res.status).to.be.eq(403);
          done();
        });
    });
  });
});
