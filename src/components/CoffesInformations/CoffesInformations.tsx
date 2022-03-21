import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  Container,
  ImageContainer,
  Informations,
  RadioBox,
  TransactionTypeContainer,
} from "./styles";
import arrowRightImg from "../../assets/arrowright.svg";
import arrowLeftImg from "../../assets/arrowleft.svg";
import { api } from "../../services/api";
import Modal from "react-modal";

interface CoffesProps {
  coffeDescription: string;
  coffeName: string;
  id: number;
  price: number;
  coffeImage: string;
}

export function CoffesInformations() {
  const [coffes, setCoffes] = useState<CoffesProps[]>([]);
  const [modalUserInfoIsOpen, setModalUserInfoIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [indexCoffe, setIndexCoffe] = useState(0);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    api.get("/coffes").then((response) => {
      setCoffes(response.data);

      if (coffes) {
        setIsLoading(true);
      }
    });
  }, []);

  function handleChangeCoffe(prevOrNextIndex: string) {
    if (indexCoffe <= coffes.length && prevOrNextIndex === "next") {
      setIndexCoffe(indexCoffe + 1);
    }
    if (indexCoffe > 0 && prevOrNextIndex === "previous") {
      setIndexCoffe(indexCoffe - 1);
    }
  }

  function HandleOpenModal() {
    setModalUserInfoIsOpen(true);
  }
  function HandleCloseModal() {
    setModalUserInfoIsOpen(false);
  }

  function handleSendData() {
    const numberWhatsappEnterprise = `5511976396430`
    const { price, coffeName } = coffes[indexCoffe];
    const user = {
      userName,
      userTelephone,
      userAdress,
    };
    const messageToWhatsapp = `Olá, me chamo *${user.userName}*, fiz um pedido na Loja *coffeAPP*\n\n*Café desejado:* ${coffeName}\n*Endereço:* ${user.userAdress}\n*Telefone:* ${user.userTelephone}\n*Total:* ${new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL",}).format(price)}\n`;

    console.log(messageToWhatsapp);
    const url = `https://wa.me/${numberWhatsappEnterprise}/?text=${encodeURI(
      messageToWhatsapp
    )}`;

    window.open(url, "_blank");

    HandleCloseModal();
  }

  return (
    <>
      <Informations>
        <span>${loading && coffes[indexCoffe].price}</span>
        <p>For You!</p>
        <h1>{loading && coffes[indexCoffe].coffeName}</h1>
        <p>{loading && coffes[indexCoffe].coffeDescription}</p>
        <ButtonContainer>
          <button className="orderButton" onClick={HandleOpenModal}>
            Order
          </button>
          <button>NUTRITION INFORMATION</button>
        </ButtonContainer>
      </Informations>

      <ImageContainer>
        <button
          onClick={() => {
            handleChangeCoffe("previous");
          }}
        >
          <img src={arrowLeftImg} alt="" />
        </button>
        {loading && (
          <img
            className="cupImg"
            src={coffes[indexCoffe].coffeImage}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}

        <button
          onClick={() => {
            handleChangeCoffe("next");
          }}
        >
          <img src={arrowRightImg} alt="" />
        </button>
      </ImageContainer>
      <Modal
        isOpen={modalUserInfoIsOpen}
        onRequestClose={HandleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={handleSendData}>
          <h2>Ordem de Pedido: </h2>
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
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
