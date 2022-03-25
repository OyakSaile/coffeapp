import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Modal from "react-modal";

import { CreateNewOrderContext } from "../../contexts/CreateNewOrderModal";
import { ButtonsModalContainer, Container } from "./styles";

export function CreateNewOrderModal() {
  const {
    modalUserInfoIsOpen,
    handleCloseModal,
    userAdress,
    handleOpenModal,
    setUserAdress,
    setUserName,
    setUserTelephone,
    userName,
    userTelephone,
  } = useContext(CreateNewOrderContext);
  return (
    <Modal
      isOpen={modalUserInfoIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>
          Pedido: <span></span>
        </h2>
        <input
          type="text"
          placeholder="Nome"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={userTelephone}
          onChange={(e) => {
            setUserTelephone(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Endereço"
          value={userAdress}
          onChange={(e) => {
            setUserAdress(e.target.value);
          }}
        />

        <ButtonsModalContainer>
          <button onClick={(e) => {}}>
            <FaMinus />
          </button>
          <button onClick={(e) => {}}>
            <FaPlus />
          </button>
        </ButtonsModalContainer>

        <p>Total:</p>
        <p>Quantidade:</p>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
