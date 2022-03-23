import React, { useEffect, useState, MouseEvent } from "react";
import {
  ButtonContainer,
  Container,
  ImageContainer,
  Informations,
  TransactionTypeContainer,
  ButtonsModalContainer,
} from "./styles";
import arrowRightImg from "../../assets/arrowright.svg";
import arrowLeftImg from "../../assets/arrowleft.svg";
import { api } from "../../services/api";
import Modal from "react-modal";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toBrlNumber } from "../../utils/number";

import { usePalette } from "react-palette";
// const { data, loading, error } = usePalette(IMAGE_URL)

interface CoffesProps {
  coffeDescription: string;
  coffeName: string;
  id: number;
  price: number;
  coffeImage: string;
  estoque: number;
}

export function CoffesInformations() {
  const [coffes, setCoffes] = useState<CoffesProps[]>([]);
  const [modalUserInfoIsOpen, setModalUserInfoIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [indexCoffe, setIndexCoffe] = useState(0);
  const [loadingComponent, setIsLoadingComponent] = useState(true);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    api.get("/featured").then((response) => {
      setCoffes(response.data);

      if (coffes) {
        setIsLoadingComponent(false);
      }
    });
  }, []);

  function handleChangeCoffe(prevOrNextIndex: string) {
    if (indexCoffe + 1 < coffes.length && prevOrNextIndex === "next") {
      console.log(coffes.length);
      console.log(indexCoffe);
      setIndexCoffe(indexCoffe + 1);
    }
    if (indexCoffe > 0 && prevOrNextIndex === "previous") {
      setIndexCoffe(indexCoffe - 1);
    }
  }

  function handleOpenModal() {
    setModalUserInfoIsOpen(true);
  }
  function handleCloseModal() {
    setModalUserInfoIsOpen(false);
  }

  function handleSendData() {
    const numberWhatsappEnterprise = `5521986572835`;
    const { price, coffeName, estoque } = coffes[indexCoffe];
    const user = {
      userName,
      userTelephone,
      userAdress,
    };

    const messageToWhatsapp = `Olá, me chamo *${
      user.userName
    }*, fiz um pedido na Loja *coffeAPP*\n\n*Café desejado:* ${coffeName}\n*Quantidade:* ${quantity}\n*Endereço:* ${
      user.userAdress
    }\n*Telefone:* ${user.userTelephone}\n*Total:* ${toBrlNumber(
      price * quantity
    )}\n`;

    console.log(messageToWhatsapp);
    const url = `https://wa.me/${numberWhatsappEnterprise}/?text=${encodeURI(
      messageToWhatsapp
    )}`;

    window.open(url, "_blank");

    handleCloseModal();
  }

  function handleSetQuantity(
    event: MouseEvent,
    conditionToAddOrRemove: string
  ) {
    const { estoque } = coffes[indexCoffe];
    event.preventDefault();
    if (conditionToAddOrRemove === "add" && quantity < estoque) {
      setQuantity(1 + quantity);
    }
    if (conditionToAddOrRemove === "remove" && quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <>
      {!loadingComponent && (
        <>
          <Informations>
            {/* <div style={{ color: data.lightVibrant }}>
              Text with the vibrant color
            </div> */}

            <p>For You!</p>
            <h1>{coffes[indexCoffe].coffeName}</h1>
            <span>{toBrlNumber(coffes[indexCoffe].price)}</span>
            <p>{coffes[indexCoffe].coffeDescription}</p>
            <ButtonContainer>
              <button className="orderButton" onClick={handleOpenModal}>
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

            <img
              className="cupImg"
              src={coffes[indexCoffe].coffeImage}
              alt=""
              style={{ maxHeight: "100%", width: "100%", objectFit: "fill" }}
            />

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
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <Container onSubmit={handleSendData}>
              <h2>
                Pedido: <span>{coffes[indexCoffe].coffeName} </span>
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
                <button
                  onClick={(e) => {
                    handleSetQuantity(e, "remove");
                  }}
                >
                  <FaMinus />
                </button>
                <button
                  onClick={(e) => {
                    handleSetQuantity(e, "add");
                  }}
                >
                  <FaPlus />
                </button>
              </ButtonsModalContainer>

              <p>Total: {toBrlNumber(coffes[indexCoffe].price * quantity)}</p>
              <p>Quantidade: {quantity}</p>
              <button type="submit">Cadastrar</button>
            </Container>
          </Modal>
        </>
      )}
    </>
  );
}
