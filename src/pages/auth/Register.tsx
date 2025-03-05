import FForm from '../../components/form/FForm';
import FInput from '../../components/form/FInput';
import { Controller, FieldValues } from 'react-hook-form';
import { useLoginMutation, useRegisterMutation } from '../../redux/features/auth/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/auth/authSlice';
import FInputNumber from '../../components/form/FInputNumber';
import FSelect from '../../components/form/FSelect';
import { genderOptions } from '../constants/BookCategoryOptions';
import FDatePicker from '../../components/form/FDatePicker';

interface DrawerSliderProps {
  trigger?: React.ReactNode;
}

const Register: React.FC<DrawerSliderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register, {data, error}] = useRegisterMutation();
  const [login] = useLoginMutation();

  console.log(data, error);

  const onSubmit = async (data: FieldValues) => {

    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('gender', data.gender);
    formData.append('dateofbirth', data.dateOfBirth);
    formData.append('address', data.address);
    formData.append('city', data.city);

    formData.append('data', JSON.stringify(data));

    formData.append('file', data.profileImage);


    try {
      await register(formData).unwrap();
      toast.success("Registration Successful");

      const loginRes = await login({email: data.email, password: data.password}).unwrap();

      dispatch(setUser({user: loginRes.data.user, token: loginRes.data.accessToken}));

      navigate('/');

    } catch (error) {
      console.error('Registration error:', error);
      toast.error("Something went wrong during registration");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FForm onSubmit={onSubmit}>
          <Controller
            name="profileImage"
            render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
              <Form.Item label={"Profile Image"}>
                <Input
                  type="file"
                  value={value?.filename}
                  {...field}
                  placeholder={""}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
                {error && <small style={{ color: 'red' }}>{error.message}</small>}
              </Form.Item>
            )}
          />

          <FInput type="text" name="name" label={"Name"} placeholder={"Enter your name"} />
          <FInput type="text" name="email" label={"Email"} placeholder={"Enter your email"} />
          <FInput type="password" name="password" label={"Password"} placeholder={"Enter your password"} />
          <FInputNumber name="phone" label={"Phone Number"} placeholder={"Enter your phone number"} />
          <FInput type="text" name="address" label={"Address"} placeholder={"Enter your address"} />
          <FInput type="text" name="city" label={"City"} placeholder={"Enter your city"} />
          <FSelect label={"Gender"} name={"gender"} options={genderOptions} />
          <FDatePicker name="dateofbirth" label={"Date Of Birth"} placeholder={"Enter your birthday"} />

          <div>
            <Button htmlType="submit" type="primary">
              Register
            </Button>
          </div>
        </FForm>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;