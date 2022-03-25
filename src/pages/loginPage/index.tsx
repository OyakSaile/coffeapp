import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import image from "../../assets/bgLogin.png";
import facebookLogo from "../../assets/facebookIcon.svg";
import googleLogo from "../../assets/googleIcon.svg";
import { Header } from "../../components/Header";
import { Container, FormContainer, FormData, SocialLogin } from "./styles";

export function LoginPage() {
  return (
    <>
      <Container>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <FormContainer>
            <Link to="/" className="arrowBack">
              <FiArrowLeft />
              <p>Voltar ao menu Principal</p>
            </Link>

            <h1>
              Bem vindo ao <span>CoffeAPP</span>
            </h1>
            <p>O seu delivery de cafés quentinhos = )</p>

            <FormData>
              <p>E-mail</p>
              <input type="text" placeholder="seuemail@email.com.br" />
              <p>Password</p>
              <input type="password" placeholder="******" />
              <button type="submit">Logar</button>
              <p>or sign up with</p>
              <SocialLogin>
                <button>
                  <img src={googleLogo} alt="" />
                </button>
                <button>
                  <img src={facebookLogo} alt="" />
                </button>
              </SocialLogin>
            </FormData>
          </FormContainer>
        </div>
      </Container>
    </>
  );
}
