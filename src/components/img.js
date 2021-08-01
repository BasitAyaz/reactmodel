function Img(props) {
  const { src, className, width, height, alt, style } = props;
  return (
    <img
      src={src}
      className={className}
      width={width}
      height={height}
      alt={`${alt}`}
      style={style}
    />
  );
}
export default Img;
