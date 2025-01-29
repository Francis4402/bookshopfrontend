import FForm from '../../components/form/FForm';
import FInput from '../../components/form/FInput';
import { Controller, FieldValues } from 'react-hook-form';
import { useLoginMutation, useRegisterMutation } from '../../redux/features/auth/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Form, Input } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/auth/authSlice';

interface DrawerSliderProps {
  trigger?: React.ReactNode;
}

const Register: React.FC<DrawerSliderProps> = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [register] = useRegisterMutation();

  const [login] = useLoginMutation();


  const onsubmit = async (data: FieldValues) => {
    
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    
    formData.append('data', JSON.stringify(data));
    formData.append('file', data.profileImage);

    console.log(Object.fromEntries(formData));
    
    try {
      await register(formData).unwrap();
      toast.success("Registration Successful");

      const loginRes = await login({email: data.email, password: data.password}).unwrap();
      
      dispatch(setUser({user: loginRes.data.user, token: loginRes.data.accessToken}));

      navigate('/');
      
    } catch (error) {
      toast.error("Something went wrong");
    }

  }


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FForm onSubmit={onsubmit}>
          <Controller name="profileImage" render={({field: {onChange, value, ...field}}) => (
            <Form.Item label={"Profile Image"}>
              <Input type="file" value={value?.fileName} {...field} placeholder={"Enter your bookimage"} onChange={(e) => onChange(e.target.files?.[0])} />
            </Form.Item>
          )} />
          <FInput type="text" name="name" label={"Name"} placeholder={"Enter your name"} />

          <FInput type="text" name="email" label={"Email"} placeholder={"Enter your email"} />

          <FInput type="password" name="password" label={"Password"} placeholder={"Enter your password"} />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </FForm>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member? {' '}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register