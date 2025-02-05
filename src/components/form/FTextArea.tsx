/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Control, Controller } from "react-hook-form"

type TInputProps = {
    rows: number
    name: string;
    label: string;
    placeholder?: string;
    control?: Control<any>;
}

const FTextArea = ({ name, label, placeholder, control}: TInputProps) => {
    return (
        <div style={{ marginBottom: '20px'}}>
            <Controller name={name} control={control} render={({field, fieldState: {error}}) => (
                <Form.Item label={label}>
                    <TextArea {...field} rows={4} id={name} placeholder={placeholder} />
                    {error && <small style={{color: 'red'}}>{error.message}</small>}
                </Form.Item>
            )} />
        </div>
    )
}

export default FTextArea;