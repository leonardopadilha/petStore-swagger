import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../suport/constants";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Pesquisar por um pet", () => {
    context("quando pesquiso por um pet existente", () => {
        it("então o pet é exibido com sucesso", (done) => {
            request
                .get(constant.PET + "/" + 1)
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body.category.name).to.equals("Cachorro")
                    done();
                })
        })
    })
})