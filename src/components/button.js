function Button(props) {
  const { value, className, onClick, style, loading } = props;
  return (
    <button style={style} onClick={onClick} className={`myBtn ${className}`}>
      {value}{" "}
      {loading ? (
        <div className="spinner-border text-light loader" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
    </button>
  );
}
export default Button;
