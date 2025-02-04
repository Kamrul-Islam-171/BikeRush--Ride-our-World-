import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  label?: string;
  name: string;
  type: string;
  disabled?: boolean;
  rules?: object;
};

const BSInput = ({ name, label, type, disabled, rules }: TInputProps) => {
  return (
    <div >
      <Controller
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            
            label={label}
            labelCol={{ span: 6 }}
            // validateStatus={error ? "error" : ""}
            // help={error ? error.message : ""}
          >
            <Input type={type} id={name} {...field} disabled={disabled} />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BSInput;
