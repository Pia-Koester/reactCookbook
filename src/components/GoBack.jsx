import { useNavigate } from "react-router-dom";

// create Go back button for navigation to the previous page
const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="return-btn">
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default GoBack;
