import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface CreateNewOrderContextProps {
  setUserAdress: Dispatch<SetStateAction<string>>;
  setUserName: Dispatch<SetStateAction<string>>;
  setUserTelephone: Dispatch<SetStateAction<string>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  userName: string;
  userTelephone: string;
  userAdress: string;
  modalUserInfoIsOpen: boolean;
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
});

interface CreateNewOrderProps {
  children: ReactNode;
}

export function CreateNewOrderProvider({ children }: CreateNewOrderProps) {
  const [userName, setUserName] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [modalUserInfoIsOpen, setModalUserInfoIsOpen] = useState(false);

  function handleOpenModal() {
    setModalUserInfoIsOpen(true);
    console.log("teste");
  }
  function handleCloseModal() {
    setModalUserInfoIsOpen(false);
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
      }}
    >
      {children}
    </CreateNewOrderContext.Provider>
  );
}
