import { FiCheck, FiCoffee, FiCommand } from "react-icons/fi";
import { Link } from "react-router-dom";

import restaurantImage from "../../assets/dashboardEn.png";
import { EndNavButtons, Menu } from "./styles";

export function SideBar() {
  return (
    <Menu>
      <img src={restaurantImage} alt="" />
      <ul>
        <li>
          <FiCoffee />
          <Link to="#">Pedidos</Link>
        </li>
        <li>
          <FiCommand />
          <Link to="#">Relatório</Link>
        </li>
        <li>
          <FiCheck />
          <Link to="#">Concluídos</Link>
        </li>
      </ul>

      <EndNavButtons>
        <Link to="/">Logout</Link>
        <Link to="/">Settings</Link>
      </EndNavButtons>
    </Menu>
  );
}
