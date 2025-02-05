import { Button, Form, Input, Modal } from "antd"
import FForm from "../../components/form/FForm";
import { useUpdateUserMutation } from "../../redux/features/auth/authApi";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import FInput from "../../components/form/FInput";
import FInputNumber from "../../components/form/FInputNumber";
import FSelect from "../../components/form/FSelect";
import { genderOptions } from "../constants/BookCategoryOptions";
import FDatePicker from "../../components/form/FDatePicker";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";


type TUpdateProfileModelProps = {
    modal1Open: boolean;
    setModal1Open: (open: boolean) => void;
}

const UpdateProfileModel = ({modal1Open, setModal1Open}: TUpdateProfileModelProps) => {


    const user = useAppSelector(selectCurrentUser);
    
    const [updateUser] = useUpdateUserMutation();

    const handleUpdateprofile: SubmitHandler<FieldValues> = async (data) => {
        const formData = new FormData();

        formData.append('data', JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            dateofbirth: data.dateOfBirth,
            address: data.address,
        }));

        if (data.profileImage) {
            formData.append('file', data.profileImage);
        }

        try {
            const res = await updateUser({id: user?._id, data: formData}).unwrap();
            console.log('user updated', res);

            
            setModal1Open(false);
            toast.success('User updated Successfully');
        } catch (error) {
            console.error('Failed to update user:', error);
            toast.error('Failed to update user');
        }
    }

  return (
    <div>
        <Button type="primary" onClick={() => setModal1Open(true)}>
            Update Your Profile
        </Button>
        <Modal
            title=""
            centered
            footer={false}
            open={modal1Open}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
        >
            <FForm onSubmit={handleUpdateprofile}>
                <Controller name="profileImage" render={({field: {onChange, value, ...field}, fieldState: {error}}) => (
                    <Form.Item label={"Profile Image"}>
                        <Input type="file" value={value?.filename} {...field} placeholder={""} onChange={(e) => onChange(e.target.files?.[0])} />
                        {error && <small style={{color: 'red'}}>{error.message}</small>}
                    </Form.Item>
                    )} />

                <FInput type="text" name="name" label={"Name"} placeholder={user?.name} />

                <FInput type="text" name="email" label={"Email"} placeholder={user?.email} />

                <FInputNumber name="phone" label={"Phone Number"} placeholder={"Enter your phone number"} />

                <FInput type="text" name="address" label={"Address"} placeholder={user?.address} />

                <FSelect label={"Gender"} name={"gender"} options={genderOptions} />

                <FDatePicker name="dateofbirth" label={"Date Of Birth"} placeholder={user?.dateofbirth} />

                <div className="flex justify-center">
                    <Button
                    htmlType="submit"
                    type="primary"
                    style={{width: '50%'}}
                    >
                        Update
                    </Button>
                </div>
            </FForm>
        </Modal>
    </div>
  )
}

export default UpdateProfileModel