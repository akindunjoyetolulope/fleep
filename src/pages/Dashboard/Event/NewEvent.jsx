import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import EventQR from "./EventQR";

const NewEvent = () => {
  const [files, setFiles] = useState([]);
  const [waterMark, setWaterMark] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      
      },
    //   onDrop: (acceptedFiles) => { 
    //       setWaterMark(
    //         acceptedFiles.map((files) =>
    //           Object.assign(files, {
    //             preview: URL.createObjectURL(files),
    //           })
    //         )
    //       );
    //   }
  });

  const images = waterMark.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="preiew"
          className="w-[250px] h-[250px] cover"
        />
      </div>
    </div>
  ));
  const imagesf = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="preiew"
          className="w-[250px] h-[250px] cover"
        />
      </div>
    </div>
  ));
  return (
    <section
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[70%] rounded-lg mt-[79px] ml-[10%]  pb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex justify-between">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Create Event
            </h2>
            <IoIosCloseCircleOutline size={24} className="text-[#7C7B7B]" />
          </div>
          <p className="text-[#959595] text-[14px] font-normal mt-4 ">
            Fill the form to create an event
          </p>

          <form className="mt-[40px]">
            <div className="flex gap-[24px]">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Tittle
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter tittle of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#E5E5E5] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Category
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter tittle of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#E5E5E5] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>
            </div>
            <div className="flex gap-[24px] mt-6">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Type
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter tittle of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#E5E5E5] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Date
                </label>
                <br />
                <div className="flex items-center bg-[#E5E5E5] rounded-lg">
                  <div className="h-[50px]  w-[50px] flex items-center ">
                    <AiOutlineCalendar
                      size={16}
                      className="text-[#7C7B7B] mx-auto"
                    />
                  </div>
                  <input
                    type="date"
                    placeholder="Enter tittle of the event"
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#E5E5E5] h-[50px] pl-[20px] w-[100%] pr-5"
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                  />
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6">
              <label
                htmlFor=""
                className="text-[14px] leading-5 text-[#333333] font-normal"
              >
                Venue
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter the venue of the event"
                className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#E5E5E5] h-[50px] pl-[20px] w-[100%]"
                style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
              />
            </div>

            {/*  input file*/}
            <div className="flex gap-[24px] mt-6">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Brand Watermark
                </label>
                <br />
                <div
                  className="mt-[15px] h-[280px] rounded-lg border-dashed border-[1px] flex justify-center items-center"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {imagesf.length === 0 ? (
                    <div className="cursor-pointer">
                      <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                      <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                        Drag and drop files or click upload
                      </p>
                      <p className="text-[13px] font-normal leading-5 text-center text-[#8A8A8A] mt-[6px]">
                        250X250 px
                      </p>
                    </div>
                  ) : (
                    <>{imagesf}</>
                  )}
                </div>
              </div>

              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Event Custom Cover Photo
                </label>
                <br />
                <div
                  className="mt-[15px] h-[280px] rounded-lg border-dashed border-[1px] flex justify-center items-center"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />

                  <div className="cursor-pointer">
                    <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                    <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                      Drag and drop files or click upload
                    </p>

                    <>{images}</>
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5">
              Create Event
            </button>
          </form>
        </div>
      </div>
      {/* <EventQR /> */}
    </section>
  );
};

export default NewEvent;
