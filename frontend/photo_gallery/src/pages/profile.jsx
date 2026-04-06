import React, { useEffect, useState } from "react";
import Footer from "../components/footer.jsx";
import '../css/profile.css'
function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:1111/profile", {
          method: "GET",
          credentials: "include", // important for cookies/session
        });

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div style={{color:"white"}}>Loading...</div>;

  if (!user) return <div style={{color:"white"}}>No user data found</div>;

  return (
    <>
      <div className="area" style={{ padding: "20px" }}>
        <h2>Profile</h2>

        <div className="box">
          <p className="details"><strong>Usename:</strong> {user.username}</p>
          <p className="details"><strong >Email:</strong> {user.email}</p>

          {/* Add more fields depending on your schema */}
          <p className="details"><strong>User ID:</strong> {user._id}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;