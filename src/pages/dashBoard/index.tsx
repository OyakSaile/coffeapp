import { Link } from "react-router-dom";
import { Container, Menu, ContentDashBoardArea } from "./styles";

export function DashBoard() {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <Link to="#">Menu</Link>
          </li>

          <li>
            <Link to="#">Menu</Link>
          </li>

          <li>
            <Link to="#">Menu</Link>
          </li>

          <li>
            <Link to="#">Menu</Link>
          </li>
        </ul>
      </Menu>

      <ContentDashBoardArea></ContentDashBoardArea>
    </Container>
  );
}
