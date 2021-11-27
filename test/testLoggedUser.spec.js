import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../suport/constants";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Consultar usuário logado", () => {
    context("quando confiro o loggin de um usuário cadastrado", () => {
        it("então as informações são exibidas corretamente", (done) => {
            request
                .get(constant.USER + constant.LOGIN)
                .send({
                    "username": "novoCadastro",
                    "password": "1234"
                })
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body.message).to.contains("logged in user session")
                    done();
                })
        })
    })
})