import Button from "./button";

function Form(props) {
  const { submitButtonLabel } = props;
  function submitForm(e) {
    e.preventDefault();
    let model = {};
  }
  function checkText(params) {}
  return (
    <form onSubmit={(e) => submitForm(e)}>
      {props.children}
      <Button value={submitButtonLabel} />
    </form>
  );
}

export default Form;
