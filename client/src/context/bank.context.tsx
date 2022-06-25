import React, {
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { User } from "../types/types";

interface BankProviderProps {
    children: ReactNode;
}

interface BankContextValue {
    currResult: User | User[];
    setCurrResult: (user: User | User[]) => void;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    selectedUser: User;
    setSelectedUser: (selectedUser: User) => void;
    requestedData: string[];
    setRequestedData: (requestedData: string[]) => void;
    currEndpoint: string;
    setCurrEndpoint: (currEndpoint: string) => void;
    currReqType: string;
    setCurrReqType: (currReqType: string) => void;
}

const emptyBankContextValue: BankContextValue = {
    currResult: [],
    setCurrResult: function (user: User | User[]): void {},
    isModalOpen: false,
    setIsModalOpen: function (isOpen: boolean): void {},
    selectedUser: {
        userId: "",
        userName: "",
        accounts: [],
        phone: "",
        email: "",
    },
    setSelectedUser: function (selectedUser: User): void {},
    requestedData: [],
    setRequestedData: function (requestedData: string[]): void {},
    currEndpoint: "",
    setCurrEndpoint: function (currEndpoint: string): void {},
    currReqType: "",
    setCurrReqType: function (currReqType: string): void {},
};

const BankContext = React.createContext<BankContextValue>(
    emptyBankContextValue
);

export const useBank = () => useContext(BankContext);

const BankProvider = ({ children }: BankProviderProps) => {
    const [currResult, setCurrResult] = useState<User | User[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User>({
        userId: "",
        userName: "",
        accounts: [],
        phone: "",
        email: "",
    });
    const [requestedData, setRequestedData] = useState<string[]>([]);
    const [currEndpoint, setCurrEndpoint] = useState("");
    const [currReqType, setCurrReqType] = useState("");

    const value: BankContextValue = {
        currResult,
        setCurrResult,
        isModalOpen,
        setIsModalOpen,
        selectedUser,
        setSelectedUser,
        requestedData,
        setRequestedData,
        currEndpoint,
        setCurrEndpoint,
        currReqType,
        setCurrReqType,
    };
    return (
        <BankContext.Provider value={value}>{children}</BankContext.Provider>
    );
};

export default BankProvider;
