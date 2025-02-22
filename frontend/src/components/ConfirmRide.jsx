import React from "react";
import Loader from '../components/Loader'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Your Vehicle</h3>
      <div className="border-2 active:border-black  p-3 w-full rounded-lg flex flex-col gap-2 items-center justify-between">
        <img
          className="h-20 w-25"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_203/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex gap-5 items-center p-3  border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 ">
          <i className="ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => {props.setVehicleFoundPanel(true)
          props.setConfirmRidePanel(false);
        }} className="w-full mt-5 bg-black text-white font-semibold p-3 rounded-lg">
          Confirm
        </button>
        
      </div>
    </div>
  );
};

export default ConfirmRide;
