import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="border-2 active:border-black  p-3 w-full rounded-lg flex items-center justify-between"
      >
        <img
          className="h-12 w-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="text-sm font-base">
            UberGo{" "}
            <span>
              <i className="ri-user-2-fill"></i>
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 mins away</h5>
          <p className="text-xs text-gray-600 font-medium">
            Affordable, Compact Rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">$193.20</h2>
      </div>
      <div className="border-2 active:border-black  p-3 w-full rounded-lg flex items-center justify-between">
        <img
          className="h-12 w-15 mx-4"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="text-sm font-base">
            UberGo{" "}
            <span>
              <i className="ri-user-2-fill"></i>3
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 mins away</h5>
          <p className="text-xs text-gray-600 font-medium">
            Affordable, Compact Rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">$150.40</h2>
      </div>
      <div className="border-2 active:border-black  p-3 w-full rounded-lg flex items-center justify-between">
        <img
          className="h-12  -mx-1"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="text-sm font-base">
            UberGo{" "}
            <span>
              <i className="ri-user-2-fill"></i> 1
            </span>
          </h4>
          <h5 className="text-sm font-medium">3 mins away</h5>
          <p className="text-xs text-gray-600 font-medium">
            Affordable, MotorCycle Rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">$65</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
