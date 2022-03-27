import {
  ChangeEvent,
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { api } from "../services/api";

interface CreateNewOrderContextProps {
  setUserAdress: Dispatch<SetStateAction<string>>;
  setUserName: Dispatch<SetStateAction<string>>;
  setUserTelephone: Dispatch<SetStateAction<string>>;
  setProductDetail: Dispatch<SetStateAction<productProps | undefined>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  userName: string;
  userTelephone: string;
  userAdress: string;
  modalUserInfoIsOpen: boolean;
  productDetail: productProps | undefined;
  sendOrderToDashBoard: (e: FormEvent<Element>) => void;
}

interface CreateNewOrderProps {
  children: ReactNode;
}

interface orderProps {
  product: string | undefined;
  id: number | undefined;
  total: number | undefined;
  clientName: string;
  adress: string;

  telephone: string;
}

interface productProps {
  coffeDescription: string;
  coffeName: string;
  price: number;
  quantity: number;
  coffeImage: string;
  id: number;
}

export const CreateNewOrderContext = createContext<CreateNewOrderContextProps>({
  userAdress: "",
  userName: "",
  userTelephone: "",
  modalUserInfoIsOpen: false,
  setUserAdress: () => {},
  setUserName: () => {},
  setUserTelephone: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  setProductDetail: () => {},
  productDetail: {
    coffeDescription: "",
    coffeImage: "",
    coffeName: "",
    price: 0,
    quantity: 0,
    id: 0,
  },
  sendOrderToDashBoard: () => {},
});

export function CreateNewOrderProvider({ children }: CreateNewOrderProps) {
  const [userName, setUserName] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [modalUserInfoIsOpen, setModalUserInfoIsOpen] = useState(false);
  const [productDetail, setProductDetail] = useState<productProps>();

  function handleOpenModal() {
    setModalUserInfoIsOpen(true);
  }
  function handleCloseModal() {
    setModalUserInfoIsOpen(false);
  }

  function sendOrderToDashBoard(e: FormEvent) {
    e.preventDefault();
    const data: orderProps = {
      adress: userAdress,
      clientName: userName,
      id: productDetail?.id,
      product: productDetail?.coffeName,
      telephone: userTelephone,
      total: 20,
    };
    console.log(data);
    api.post("/dashboardOrders", { ...data, data });
  }

  function deleteOrder(id: string) {
    api.delete(`/dashboardOrders/${id}`);
  }
  return (
    <CreateNewOrderContext.Provider
      value={{
        setUserAdress,
        setUserName,
        setUserTelephone,
        userName,
        userTelephone,
        userAdress,
        modalUserInfoIsOpen,
        handleCloseModal,
        handleOpenModal,
        productDetail,
        setProductDetail,
        sendOrderToDashBoard,
      }}
    >
      {children}
    </CreateNewOrderContext.Provider>
  );
}
