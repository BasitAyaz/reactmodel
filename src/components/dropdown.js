function DropDown(props) {
  const { dataSource, onChange, label, className } = props;
  return (
    <select onChange={onChange} className={`dropDown ${className}`}>
      <option>Select {label}</option>
      {dataSource && Array.isArray(dataSource)
        ? dataSource.map((e, i) => {
            return (
              <option value={e} key={i}>
                {e}
              </option>
            );
          })
        : null}
    </select>
  );
}
export default DropDown;
