import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams(); // Get user ID from URL
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Showing profile of user ID: {id}</p>
    </div>
  );
};

export default Profile;
