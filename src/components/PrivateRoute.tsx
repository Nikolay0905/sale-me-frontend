import { Route, RouteProps, Navigate} from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants";
import { LOGIN_PATH } from "../routes";

export default function PrivateRoute({ ...rest }: RouteProps) {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token ? <Route {...rest} /> : <Navigate to={LOGIN_PATH} />
}
