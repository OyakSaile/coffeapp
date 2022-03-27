import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, FormContainer, FormData } from "./styles";

export function LoginPage() {
  return (
    <>
      <Container>
        <FormContainer>
          <Link to="/" className="arrowBack">
            <FiArrowLeft />
            <p>Voltar ao menu Principal</p>
          </Link>

          <h1>
            Bem vindo ao <span>CoffeAPP</span>
          </h1>
          <p>O seu delivery de cafés = )</p>

          <FormData>
            <p>E-mail</p>
            <input type="text" placeholder="seuemail@email.com.br" />
            <p>Password</p>
            <input type="password" placeholder="******" />
            <Link to="/dashboard">
              <button onClick={(e) => {}}>Ir ao DashBoard</button>
            </Link>
          </FormData>
        </FormContainer>
      </Container>
    </>
  );
}
