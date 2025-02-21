import React from "react";

const LocationSearchPanel = (props) => {
  //Sample Array of Locations
  console.log(props)
  const location = [
    "261 k-Block Yashoda Nagar Kanpur, Uttar Pradesh",
    "365 G-Block Kidwai Nagar Kanpur, Uttar Pradesh",
    "241 k-Block Saket Nagar Kanpur, Uttar Pradesh",
    "261 k-Block Yashoda Nagar Kanpur, Uttar Pradesh",
  ];
  return (
    <div>
      {location.map((loc,idx) => {
        return (
          <div key = {idx} className="flex border-2 p-3 border-gray-100 active:border-black gap-4 rounded-xl items-center my-2 space-x-2 justify-start" onClick={()=>{
            console.log(props)
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}>
            <h2 className="h-8 w-8 bg-[#eee] rounded-full flex justify-center items-center">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="text-lg font-medium ">
              {loc}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
