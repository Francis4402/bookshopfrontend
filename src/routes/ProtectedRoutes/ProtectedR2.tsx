import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type TProtectedR2Props = {
  children: ReactNode;
}

const ProtectedR2 = ({children}: TProtectedR2Props) => {
  
    const token = useAppSelector(useCurrentToken);

    if(!token) {
        return <Navigate to={'/login'} replace={true} />
    }

    return children;
}

export default ProtectedR2