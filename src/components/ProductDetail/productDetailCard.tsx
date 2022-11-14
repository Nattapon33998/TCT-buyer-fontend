import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

import { FaTractor } from "react-icons/fa";
import { GiFarmer, GiBarn } from "react-icons/gi";
import { MdDescription } from "react-icons/md";

const ProductDetailCard: React.FC = () => {
  const remaining = 30;
  const quantity = 1000;
  const productSetName = "กล้วยหอม 1 หวี";
  const productSetId = 1;

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
      <div className="grid grid-cols-5 p-10 w-full gap-8">
        <div className="col-start-1 col-end-3">
          <div className="flex flex-col gap-3">
            <div className="bg-red-300 rounded-lg h-72 w-96">
              <p>Img</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-full bg-stone-200 rounded-full h-4 dark:bg-stone-300">
                <div
                  className="bg-amber-600 h-4 rounded-full"
                  style={{ width: "30%" }}
                />
              </div>
              {remaining > 0 ? (
                <p className="text-xs font-bold text-amber-600">{`${remaining}/${quantity}`}</p>
              ) : (
                <p className="text-xs font-bold text-amber-600">Sold out</p>
              )}
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
              <div className="ml-8">
                <p>ชื่อสินค้า : กล้วยหอม</p>
                <p>จำนวน : 1</p>
                <p>หน่วย : หวี</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-6 w-full h-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between mt-2">
              <p className="text-3xl font-bold text-gray-800">
                {productSetName}
              </p>
              <p className="text-3xl font-bold text-gray-500">{`#${productSetId}`}</p>
            </div>

            <div className="flex flex-col text-gray-700">
              <div className="flex flex-row items-center gap-2 font-bold text-lg">
                <GiFarmer size={30} />
                <p>เกษตรกรผู้รับผิดชอบการปลูก</p>
              </div>
              <div className="ml-10">
                <p>- นายณัฐพนธ์ สุขถาวร</p>
              </div>
            </div>
            <div className="flex flex-col text-gray-700 w-96">
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
    </div>
  );
};

export default ProductDetailCard;
