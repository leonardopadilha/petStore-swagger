import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../suport/constants";
import * as requestCreateUser from "../request/requestCreateUser";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Criar um usuário", () => {
    context("quando informo os dados corretos de um usuário", () => {
        it("então o usuário é criado com sucesso", (done) => {
            request
                .post(constant.USER)
                .send(requestCreateUser.createUser(2, "novoCadastro", "Novo", "Cadastro", "teste@teste.com", "1234", "1199999", 2))
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body.code).to.equals(200)
                    expect(res.body.message).to.equals("2")
                    done();
                })
        })
    })
})