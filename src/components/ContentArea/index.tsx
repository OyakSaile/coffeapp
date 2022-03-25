import { AllProducts } from "../AllProducts";
import { CoffesInformations } from "../CoffesInformations";
import { Container, Content } from "./styles";

export function ContentArea() {
  return (
    <>
      <Container>
        <Content>
          <CoffesInformations />
        </Content>
        <AllProducts />
      </Container>
    </>
  );
}
