import { Container, Content } from "./styles";
import { CoffesInformations } from "../CoffesInformations/CoffesInformations";

export function ContentArea() {
  return (
    <Container>
      <Content>
        <CoffesInformations />
      </Content>
    </Container>
  );
}
