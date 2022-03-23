import { Container, Content } from "./styles";
import { CoffesInformations } from "../CoffesInformations";
import { AllProducts } from "../AllProducts";

export function ContentArea() {
  return (
    <Container>
      <Content>
        <CoffesInformations />
      </Content>
      <AllProducts />
    </Container>
  );
}
