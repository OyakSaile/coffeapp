import { Link } from "react-router-dom";

import coffeImg from "../../assets/coffe.svg";
import { Container, ContentHeader } from "./styles";

export function Header() {
  return (
    <Container>
      <ContentHeader>
        <ul>
          <Link to="/dashboard">Home</Link>
          <li>
            <a href="#">Rewards</a>
          </li>
          <li>
            <a href="#">
              <img src={coffeImg} alt="" />
            </a>
          </li>

          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          <li className="login">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </ContentHeader>
    </Container>
  );
}
