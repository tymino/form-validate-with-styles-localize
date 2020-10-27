import './Select.sass';

const Select = ({ data, handleChange }) => {
  return (
    <div>
      <select
        value={data.active}
        onChange={handleChange}
      >
        {data.arrayData.map((elem, index) => (
            <option
              value={elem}
              key={elem + index}
            >
              {elem}
            </option>
          )
        )}
      </select>
    </div>
  )
};

export default Select;