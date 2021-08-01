function DropDown(props) {
  const { dataSource, onChange, label, className } = props;
  return (
    <select onChange={onChange} className={`dropDown ${className}`}>
      <option>Select {label}</option>
      {dataSource.map((e, i) => {
        return (
          <option value={e} key={i}>
            {e}
          </option>
        );
      })}
    </select>
  );
}
export default DropDown;
