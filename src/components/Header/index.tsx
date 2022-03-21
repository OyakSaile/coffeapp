import { Container, ContentHeader } from "./styles";
import coffeImg from "../../assets/coffe.svg";

export function Header() {
  return (
    <Container>
      <ContentHeader>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Rewards</a>
          </li>
          <li>
            <a href="#">
              <img src={coffeImg} alt="" />
            </a>
          </li>

          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </ContentHeader>
    </Container>
  );
}
