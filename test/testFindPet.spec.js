import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../suport/constants";
import * as requestCreatePet from "../request/requestCreatePet";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Pesquisar por um pet", () => {
    context("quando altero um pet com sucesso", () => {
        before((done) => {
            request
                .put(constant.PET)
                .send(requestCreatePet.createPet(6, "Cachorro", "New Dog III",
                    "http://www.teste.com",
                    "animais domésticos",
                    "available"
                ))
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body.id).to.equals(6)
                    expect(res.body.category.name).to.equals("Cachorro")
                    expect(res.body.name).to.equals("New Dog III")
                    done();
                })
        })

        it("e realizo a pesquisa desse PET, então o pet é exibido com sucesso", (done) => {
            request
                .get(constant.PET + "/" + 6)
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body.id).to.equals(6)
                    expect(res.body.category.name).to.equals("Cachorro")
                    expect(res.body.name).to.equals("New Dog III")
                    done();
                })
        })
    })

    context("quando pesquiso por um pet que não existe", () => {
        it("então o sistema deverá retornar mensagem de erro", (done) => {
            request
                .get(constant.PET + "/" + 0)
                .end((err, res) => {
                    expect(res).to.has.status(404)
                    expect(res.body.type).to.equals("error")
                    expect(res.body.message).to.equals("Pet not found")
                    done();
                })
        })
    })
})