import "./component.css";
function Input(props) {
  const { placeholder, onChange, min, max, className, onBlur, type, value } =
    props;
  return (
    <input
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      min={min}
      max={max}
      type={type}
      className={`inp ${className}`}
      value={value}
    />
  );
}
export default Input;
