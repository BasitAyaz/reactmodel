function Button(props) {
  const { value, className, onClick, style } = props;
  return (
    <button style={style} onClick={onClick} className={`myBtn ${className}`}>
      {value}
    </button>
  );
}
export default Button;
