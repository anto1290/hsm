import { Controller } from "react-hook-form";
import { without } from "lodash";

export const MultiCheckbox = ({ name, items, values = [], onChange }) => {
  const handleChange = (v) => {
    return values.includes(v)
      ? onChange(without(values, v))
      : onChange([...values, v]);
  };
  return (
    <div>
      {items.map((i) => (
        <div key={i.value}>
          <label>{i.label}</label>
          <input
            type="checkbox"
            onChange={() => handleChange(i.value)}
            name={name}
            checked={values.includes[i]}
          />
        </div>
      ))}
    </div>
  );
};

export const ControlledMultiCheckbox = ({ items, name, control, values }) => {
  console.log(items);
  return (
    <Controller
      items={items}
      name={name}
      valueName="values"
      control={control}
      as={MultiCheckbox}
      onChange={([values]) => values}
    />
  );
};
