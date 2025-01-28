import FForm from '../../components/form/FForm';
import FInput from '../../components/form/FInput';
import { FieldValues } from 'react-hook-form';
import { useRegisterMutation } from '../../redux/features/auth/authApi';
import { Link } from 'react-router-dom';

interface DrawerSliderProps {
  trigger?: React.ReactNode;
}

const Register: React.FC<DrawerSliderProps> = () => {

  const [register, {data, error}] = useRegisterMutation();

  console.log(data);
  console.log(error);

  const onsubmit = (data: FieldValues) => {
    
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.useremail,
      password: data.password,
    };
    
    register(userInfo);

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
          
          <FInput type="text" name="name" label={"Name"} placeholder={"Enter your name"} />

          <FInput type="text" name="useremail" label={"Email"} placeholder={"Enter your email"} />

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