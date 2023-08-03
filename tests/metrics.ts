import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../server";

chai.use(chaiHttp);

describe("/Metrics", function () {
  describe("200", function () {
    it("Should return a plaintext metrics file", (done) => {
      chai
        .request(app)
        .get("/metrics")
        .set("authorization", process.env.SECRET as string)
        .end((err, res) => {
          expect(res.status).to.be.eq(200);
          expect(res.text).to.be.a("string");
          done();
        });
    });
    it("Should include the default metrics", (done) => {
      chai
        .request(app)
        .get("/metrics")
        .set("authorization", process.env.SECRET as string)
        .end((err, res) => {
          expect(res.status).to.be.eq(200);
          expect(res.text).to.include("process_cpu_seconds_total");
          done();
        });
    });
    it("Should include the garbage collection metrics", (done) => {
      chai
        .request(app)
        .get("/metrics")
        .set("authorization", process.env.SECRET as string)
        .end((err, res) => {
          expect(res.status).to.be.eq(200);
          expect(res.text).to.include("nodejs_gc_runs_total");
          done();
        });
    });
  });
  describe("403", function () {
    it("Should return a 403 without a token", (done) => {
      chai
        .request(app)
        .get("/metrics")
        .end((err, res) => {
          expect(res.status).to.be.eq(403);
          done();
        });
    });
    it("Should return a 403 with an incorrect token", (done) => {
      chai
        .request(app)
        .get("/metrics")
        .set("authorization", "wrongtoken")
        .end((err, res) => {
          expect(res.status).to.be.eq(403);
          done();
        });
    });
  });
});
