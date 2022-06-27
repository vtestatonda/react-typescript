import React, { SetStateAction, useState } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] =
    useState<FormState["inputValues"]>(INITIAL_STATE);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleClear = () => setInputValues(INITIAL_STATE);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">
          {" "}
          Clear the form
        </button>
        <button type="submit"> Save new sub!</button>
      </form>
    </div>
  );
};
export default Form;
