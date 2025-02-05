/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form } from "antd"
import { Control, Controller } from "react-hook-form"

type TDateInputProps = {
    name: string;
    label: string;
    placeholder?: string;
    control?: Control<any>;
}

const FDatePicker = ({name, label, placeholder, control}: TDateInputProps) => {
  return (
    <div style={{marginBottom: '20px'}}>
        <Controller name={name} control={control} render={({field, fieldState: {error}}) => (
                <Form.Item label={label}>
                    <DatePicker {...field} id={name} placeholder={placeholder} />
                    {error && <small style={{color: 'red'}}>{error.message}</small>}
                </Form.Item>
            )} />
    </div>
  )
}

export default FDatePicker