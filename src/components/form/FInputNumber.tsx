/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, InputNumber } from "antd";
import { Control, Controller } from "react-hook-form";

type TInputNumberProps = {
    name: string;
    label: string;
    placeholder: string | number;
    control?: Control<any>;
};

const FInputNumber = ({ name, label, placeholder, control }: TInputNumberProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <Form.Item label={label} validateStatus={error ? "error" : ""} help={error?.message}>
                        <InputNumber
                            id={name}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder.toString()}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                )}
            />
        </div>
    );
};

export default FInputNumber;
