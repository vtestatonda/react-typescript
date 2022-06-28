import useNewSubForm from "../hook/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    dispatch({ type: "clear" });
  };
  //when clic

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  //   setInputValues({
  //     ...inputValues,
  //     [evt.target.name]: evt.target.value,
  //   });
  // };

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
