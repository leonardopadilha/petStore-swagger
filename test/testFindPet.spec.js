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

    context("quando pesquiso por um pet que não existe", () => {
        it("então o sistema deverá retornar mensagem de erro", (done) => {
            request
                .get(constant.PET + "/" + 0)
                .end((err, res) => {
                    expect((err, res) => {
                        expect(res).to.has.status(404)
                        expect(res.body.type).to.equals("error")
                        expect(res.body.message).to.equals("Pet not found")
                        done();
                    })
                })
        })
    })
})