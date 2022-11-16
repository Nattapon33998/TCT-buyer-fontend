import React from "react";

const ProductTimeLine: React.FC = () => {
  return (
    <div className="w-full h-fit">
      <p className="font-bold text-xl text-emerald-800 left-0 w-full">
        Time line
      </p>
      <ol className="relative border-l border-gray-300 ml-4 py-4">
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-emerald-200 rounded-full ring-8 ring-white ">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-emerald-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">
            0x8f04...11ec{" "}
            <span className="bg-amber-200 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
            Delivered on December 8th, 2021
          </time>
          <p className="text-base font-normal text-gray-400">
            รับผลผลิตทางการเกษตรจาก Big C ลาดกระบัง
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-emerald-200 rounded-full ring-8 ring-white ">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-emerald-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
            Big C ลาดกระบัง
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
            Delivered on December 4th, 2021
          </time>
          <p className="text-base font-normal text-gray-400">
            รับผลผลิตทางการเกษตรจาก โรงงานบรรจุผลผลิต
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-emerald-200 rounded-full ring-8 ring-white ">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-emerald-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
            โรงงานบรรจุผลผลิต
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
            Delivered on December 2nd, 2021
          </time>
          <p className="text-base font-normal text-gray-400">
            รับผลผลิตทางการเกษตรจาก สวนกล้วยลาดกระบัง
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ProductTimeLine;
