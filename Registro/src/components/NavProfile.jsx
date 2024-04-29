import { Link } from "react-router-dom";
import "./NavProfile.css";
import { useDeleteUser } from "../hooks";
import { useAuth } from "../context/authContext";

export const NavProfile = () => {
  const { setUser, setDeleteUser } = useAuth();
  return (
    <div className="containerNavProfile">
      <Link to="/forgotpassword">
      
        <img
          src="https://res.cloudinary.com/dikiljqbn/image/upload/v1713984782/lock_reset_FILL0_wght400_GRAD0_opsz24_eywtoq.svg"
          alt="go to ChangePassword"
          className="iconNav"
          
        /><span className="tooltip-text">Cambio de contraseña</span>
      </Link>

      <Link to="/profile/">
        <img
          src="https://res.cloudinary.com/dikiljqbn/image/upload/v1713984711/account_circle_FILL0_wght400_GRAD0_opsz24_yyrfnp.svg"
          alt="go to change data profile"
          className="iconNav"
        /><span className="tooltip-text">Profile</span>
      </Link>
      <img
        src="https://res.cloudinary.com/dikiljqbn/image/upload/v1713984572/person_remove_FILL0_wght400_GRAD0_opsz24_vp7v6g.svg"
        alt="user delete button"
        className="iconNav"
        onClick={() => useDeleteUser(setUser, setDeleteUser)}
        // customhook que hace la peticion al servicio de delete User y setea el usuario a null en el contexto
      /><span className="tooltip-text">Eliminar usuario</span>
    </div>
  );
};
