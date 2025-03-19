import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ user, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });// if user unavailable repalce to page login 
      return;
    }
  }, [user]);
  return children;
};
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(RequireAuth);