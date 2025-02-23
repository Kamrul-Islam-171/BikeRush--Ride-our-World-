import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  label?: string;
  name: string;
  type: string;
  disabled?: boolean;
  rules?: object;
  accept?: string; // Add accept prop for file inputs
};

const BSInput = ({ name, label, type, disabled, rules, accept }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        rules={rules}
        render={({ field: { onChange, value}, fieldState: { error } }) => (
          <Form.Item label={label} labelCol={{ span: 6 }}>
            {type === "file" ? (
              <input
                type="file"
                id={name}
                accept={accept} // Apply accept prop
                onChange={(e) => onChange(e.target.files)} // Handle file selection
                disabled={disabled}
              />
            ) : (
              <Input type={type} id={name} value={value ?? ""} onChange={onChange} disabled={disabled} />
            )}
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BSInput;
