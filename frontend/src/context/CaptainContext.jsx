import React, { useState, useEffect } from "react";

export const CaptainDataContext = React.createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);

  const updateCaptain = (captain)=>{setCaptain(captainData)}

  const value = { captain, setCaptain, isLoading, setIsLoading, error, setError,updateCaptain };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetch("http://localhost:4000/captain/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => setCaptain(data.captain));
//     }
//   }, []);

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};
export default CaptainContext;
