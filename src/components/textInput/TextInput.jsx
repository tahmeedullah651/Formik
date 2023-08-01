import "./textinput.css";
const TextInput = (props) => {
  return (
    <div className="textWrapper">
      <input {...props} />
      {props.error && <p className="errorMessage">{props.errormessage}</p>}
    </div>
  );
};

export default TextInput;
