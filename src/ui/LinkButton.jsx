import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";

  if (to === "-1") {
    return (
      <button to={to} onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
