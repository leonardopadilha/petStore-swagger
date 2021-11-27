import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../suport/constants";
import * as requestCreatePet from "../request/requestCreatePet";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Criar um pet com sucesso", () => {
    context("quando informo os dados corretos de um pet", () => {
        it("então o pet é criado com sucesso", (done) => {
            request
                .post(constant.PET)
                .send(requestCreatePet.createPet(1, "Cachorro", "Doguinho",
                    "http://www.teste.com",
                    "animais domésticos",
                    "available"
                ))
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body.id).to.equals(1)
                    expect(res.body.category.name).to.equals("Cachorro")
                    expect(res.body.name).to.equals("Doguinho")
                    done();
                })

        })
    })
})