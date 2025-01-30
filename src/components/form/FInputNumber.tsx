import { Form, InputNumber } from "antd";
import { Controller } from "react-hook-form";

type TInputNumberProps = {
    name: string;
    label: string;
    placeholder?: string;
};

const FInputNumber = ({ name, label, placeholder }: TInputNumberProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <Form.Item label={label} validateStatus={error ? "error" : ""} help={error?.message}>
                        <InputNumber
                            id={name}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                )}
            />
        </div>
    );
};

export default FInputNumber;
