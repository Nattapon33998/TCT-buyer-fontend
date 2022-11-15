import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

import { FaTractor } from "react-icons/fa";
import { GiFarmer, GiBarn } from "react-icons/gi";
import { MdDescription } from "react-icons/md";

import ProductTimeLine from "./ProductTimeLine";

const ProductDetailCard: React.FC<{
  handleTransferProductModalOpen: any;
  handleConsumeProductModalOpen: any;
}> = ({ handleTransferProductModalOpen, handleConsumeProductModalOpen }) => {
  const center = {
    lat: 13.7298941,
    lng: 100.7760436,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxnRRzn_NokG3ngxYWCzcYyiLbr8oB2_E",
  });

  return (
    <div className="flex flex-col items-center w-fit h-fit bg-stone-100 rounded-lg drop-shadow-xl">
      <div className="flex flex-col p-3 lg:p-10 w-full gap-2">
        <div className="flex flex-col lg:grid lg:grid-cols-5  lg:gap-8 gap-4">
          <div className="col-start-1 col-end-3">
            <div className="flex flex-col gap-4">
              <div className="bg-red-300 rounded-lg h-72 lg:w-96 w-full">
                <p>Img</p>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2 text-gray-700">
                  <FaTractor size={26} />
                  <p className="text-md font-bold ">
                    {`เก็บเกี่ยววันที่ ${new Date().toLocaleDateString()}`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 text-gray-700">
                  <MdDescription size={26} />
                  <p className="text-md font-bold">รายละเอียดสินค้า</p>
                </div>
                <div className="ml-8 text-gray-700">
                  <p>ชื่อสินค้า : กล้วยหอม</p>
                  <p>จำนวน : 1</p>
                  <p>หน่วย : หวี</p>
                  <p>รหัสสินค้า : 1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-6 w-full h-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col text-gray-700">
                <div className="flex flex-row items-center gap-2 font-bold text-lg">
                  <GiFarmer size={30} />
                  <p>เกษตรกรผู้รับผิดชอบการปลูก</p>
                </div>
                <div className="ml-10">
                  <p>- นายณัฐพนธ์ สุขถาวร</p>
                </div>
              </div>
              <div className="flex flex-col text-gray-700 lg:w-96 w-full">
                <div className="flex flex-row items-center gap-2 font-bold text-lg">
                  <GiBarn size={30} />
                  <p>สถานที่ผลิต</p>
                </div>
                <div className="ml-10">
                  <p>สวนกล้วยลาดกระบัง</p>
                  <p>
                    1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
                    10520 1 ซอย
                  </p>
                </div>
              </div>
              <div className="h-72 w-full">
                {isLoaded ? (
                  <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    options={{
                      zoomControl: false,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                    }}
                    // onLoad={onLoad}
                    // onUnmount={onUnmount}
                  >
                    <MarkerF position={center} />
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-2 bg-gray-800"></hr>
        <ProductTimeLine />
        <div className="flex flex-row justify-center py-5 gap-4">
          <button
            className="flex flex-row items-center justify-center bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 border-2 hover:border-2 hover:border-emerald-800 font-bold md:w-32 w-28 h-12 rounded-lg ease-in-out duration-200"
            onClick={handleConsumeProductModalOpen}
          >
            <p>Consume</p>
          </button>
          <button
            className="flex flex-row items-center justify-center bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 hover:border-2 hover:border-amber-500 font-bold md:w-32 w-28 h-12 rounded-lg ease-in-out duration-200"
            onClick={handleTransferProductModalOpen}
          >
            <p>Transfer</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
