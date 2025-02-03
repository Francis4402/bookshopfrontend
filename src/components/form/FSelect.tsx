/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { Control, Controller } from "react-hook-form";


type TSelectProps = {
    label: string;
    name: string;
    options: {value: string | boolean, label: string, disabled?: boolean}[];
    control?: Control<any>;
}

const FSelect = ({label, name, options, control}: TSelectProps) => {
    return (
        <Controller name={name} control={control} render={({ field, fieldState: {error} }) => (
            <Form.Item label={label}>
                <Select
                    placeholder="Select a options"
                    style={{ width: "100%" }}
                    {...field}
                    options={options}
                />
                {error && <small style={{color: 'red'}}>{error.message}</small>}
            </Form.Item>
        )}
        />
    )
}

export default FSelect;