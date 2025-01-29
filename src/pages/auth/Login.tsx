import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { verifyToken } from '../../utils/verifyToken';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import FInput from '../../components/form/FInput';
import FForm from '../../components/form/FForm';

interface DrawerSliderProps {
  trigger?: React.ReactNode;
}

const Login: React.FC<DrawerSliderProps> = () => {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onsubmit = async (data: FieldValues) => {
    
    try {
      const userInfo = {
        email: data.useremail,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken);

      dispatch(setUser({user: {}, token: res.data.accessToken}));

      toast.success("Login Successful");

      if(user.role === 'admin') {
        navigate(`/${user.role}/dashboard`);
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Invalid Credentials');
    }
  };



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <FForm onSubmit={onsubmit}>
          <FInput type="text" name="useremail" label={"Email"} placeholder={"Enter your email"} />

          <FInput type="password" name="password" label={"Password"} placeholder={"Enter your password"} />

          <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
          </button>
        </FForm>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member? {' '}
          <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login