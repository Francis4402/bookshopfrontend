/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Control, Controller } from "react-hook-form"

type TInputProps = {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    control?: Control<any>;
}

const FInput = ({ type, name, label, placeholder, control}: TInputProps) => {
    return (
        <div style={{ marginBottom: '20px'}}>
            <Controller name={name} control={control} render={({field, fieldState: {error}}) => (
                <Form.Item label={label}>
                    <Input {...field} type={type} id={name} placeholder={placeholder} />
                    {error && <small style={{color: 'red'}}>{error.message}</small>}
                </Form.Item>
            )} />
        </div>
    )
}

export default FInput;