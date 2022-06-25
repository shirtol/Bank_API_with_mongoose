import bankApi from "../apis/bankApi";
import { InputObj } from "../components/inputBar/InputBar";
import { User } from "../types/types";

export const getAllUsers = async (): Promise<User[]> => {
    const { data } = await bankApi.get("/users");

    return data;
};

export const getUser = async (id: string): Promise<User> => {
    const { data } = await bankApi.get(`/user`, {
        headers: { "user-id": id },
    });
    console.log(data);

    return data;
};

export const fetchData = async (
    endpoint: string,
    method: string,
    reqBody: Partial<InputObj>
) => {
    const adaptedReqBody = {
        ...reqBody,
        amount: parseInt(reqBody.amount ?? "0"),
    };
    const { data } = await bankApi.request({
        url: endpoint,
        method: method.toLowerCase(),
        headers: {
            "user-id": reqBody["user id"] ?? "",
        },
        data: adaptedReqBody,
    });

    return data;
};
