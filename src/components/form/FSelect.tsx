import { Form, Select } from "antd";
import { Controller } from "react-hook-form";


type TSelectProps = {
    label: string;
    name: string;
    options: {value: string, label: string, disabled?: boolean}[];
}

const FSelect = ({label, name, options}: TSelectProps) => {
    return (
        <Controller name={name} render={({ field, fieldState: {error} }) => (
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