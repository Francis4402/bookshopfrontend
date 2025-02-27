import { ReactNode } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { logout, selectCurrentUser, useCurrentToken } from "../../redux/features/auth/authSlice"
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

type TProtectedRouteProps = {
    children: ReactNode;
    role: string | undefined;
}

const ProtectedRoute = ({children, role}: TProtectedRouteProps) => {


    const token = useAppSelector(useCurrentToken);
    const user = useAppSelector(selectCurrentUser);
    
    const dispatch = useAppDispatch();

    if (role !== undefined && role !== user?.role) {
        dispatch(logout());

        if(!user) {
            toast.error("You are not authorized to access this page");
        }
        return <Navigate to={`/`} replace={true} />
    }

    if(!token) {
        return <Navigate to={'/login'} replace={true} />
    }

  return children;
}

export default ProtectedRoute