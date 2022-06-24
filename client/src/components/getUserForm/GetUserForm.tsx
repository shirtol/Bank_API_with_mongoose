import React, { useState } from "react";
import Input from "../input/Input";

const GetUserForm = () => {
    const [term, setTerm] = useState("");

    return (
        <Input
            placeholder="enter user id"
            value={term}
            onInputChange={setTerm}
        ></Input>
    );
};

export default GetUserForm;
