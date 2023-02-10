import React, { useState, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUpload, FiPlus } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import info from "../../../assets/Union (1).png";
import EventQR from "./EventQR";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {
  openEvent,
  closeEvent,
} from "../../../Redux/features/createEventSlice";
import Arrow from "../../../assets/SVG/Arrow.svg";
import DownArrow from "../../../assets/Arrow.png";
import { baseURL } from "../../../Redux/Api/api";
import { useMutation } from "@tanstack/react-query";

const NewEvent = () => {
  const open = useSelector((state) => state.crtEvent.open);

  const dispatch = useDispatch();

  const API_URL = `${baseURL}/user/event/create`;
const { token } = useSelector((state) => state.user);
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: ` ${token}`,
  },
  };
  const registerEvent = async (formData) => {
    const response = await axios.post(API_URL, config, formData);

    return response.formData;
  };
  const { mutate, isLoading, isError } = useMutation(registerEvent, {
    onSuccess: (successData) => {
      console.log(successData);
    },
  });

 
  // image Upload
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  const [eventTitle, setEventTitle] = useState("");
  const [eCategory, setECategory] = useState("");
  // const [eType, setEType] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [venue, setVenue] = useState("");

  const [showMonetize, setShowMonetize] = useState("");
  // const [waterMark, setWaterMark] = useState([]);

  const [selected, setSelected] = useState(null);

  // To open the click Event
  const [openEvent, setOpenEvent] = useState(false);

  // To show the hover
  const [privateHover, setPrivateHover] = useState(false);
  const [generalHover, setGeneralHover] = useState(false);
  const [bothHover, setBothHover] = useState(false);
  const [monetizehover, setMonetizeHover] = useState(false);

  const handleMonetizeChange = (e) => {
    const getValue = e.target.value;
    // console.log(getValue)
    setShowMonetize(getValue);
  };

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
  });

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

  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFiles = e.dataTransfer.files;
    const selectedFilesArray = Array.from(selectedFiles);

    setSelectedImage((previousImage) =>
      previousImage.concat(selectedFilesArray)
    );
  };
  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedImage((previousImage) =>
      previousImage.concat(selectedFilesArray)
    );
  };
  const uploadImage = (e) => {
    e.preventDefault();
    document.getElementById("selectFile").click();
  };

  const [people, setPeople] = useState([]);

  // To submit the form
  const formSubmit = (e) => {
    e.preventDefault();
    const person = {
      title: eventTitle,
      monetize: 1,
      amount: price,
      date: date,
      venue: venue,
      category_id: 1,
      type_id: 1,
      cover_photo:selectedImage,
      watermark: files,
    };
    //  mutate({
    //    title: "vince",
    //    monetize: 1,
    //    amount: "price",
    //    date: "date",
    //    venue: "venue",
    //    category_id: 1,
    //    type_id: 1,
    //    cover_photo: "selectedImage",
    //    watermark: "files",
    //  });
    setPeople(person);
    console.log(people);
  };

  if (open) return null;
   if (isLoading) {
     return "Loading...";
   }

   if (isError) {
     return <>something went wrong</>;
   }
  return (
    <section
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[70%] rounded-lg mt-[79px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex justify-between">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Create Event
            </h2>
            <IoIosCloseCircleOutline
              onClick={() => dispatch(closeEvent())}
              size={24}
              className="text-[#7C7B7B] cursor-pointer"
            />
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
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Enter tittle of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
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
                <div className="w-[100%] h-[50px] bg-[#F9F9F9] rounded-lg">
                  <select
                    name=""
                    id=""
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9]  h-[50px] pl-[20px] w-[100%] "
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                    onChange={(e) => setECategory(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value={"private"}>Private</option>
                    <option value={"public"}>Public</option>
                    <option value={"both"}>Private & Public</option>
                  </select>
                </div>
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
                <div
                  onClick={() => setOpenEvent(!openEvent)}
                  className="flex items-center justify-between w-[100%] border-[1px] border-[#E5E5E5] pl-[20px] h-[50px] rounded-lg bg-[#F9F9F9] "
                >
                  <p className="text-[14px] leading-[20.58px] ">
                    {selected == null ? " select" : selected}
                  </p>
                  <BiChevronDown className="text-[grey] text-[20px]" />
                </div>
                <div onClick={() => setOpenEvent(false)} className="w-[100%]">
                  <ul
                    onClick={() => setOpenEvent(false)}
                    className={`w-[306px] flex flex-col justify-center  rounded-[4px] mt-[-4px] z-[1] cursor-pointer bg-[#FFFFFF] ${
                      openEvent ? "max-h-[166px] absolute" : "max-h-0 hidden"
                    }`}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
                    }}
                  >
                    <li
                      className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative "
                      onClick={() => {
                        setSelected("Private");
                        setOpenEvent(false);
                      }}
                    >
                      <p
                        onMouseEnter={() => setPrivateHover(true)}
                        onMouseLeave={() => setPrivateHover(false)}
                        className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                      >
                        Private
                      </p>
                      <div
                        className={` ${
                          privateHover ? "z-[1] absolute" : " hidden"
                        }`}
                      >
                        <img
                          src={DownArrow}
                          alt=""
                          className="ml-[35.5px] mb-[-1px]"
                        />
                        <div className="w-[200px] bg-white shadow-lg rounded-sm ml-[34.5px] ">
                          <p className="w-[90%] mx-auto py-[6px] text-[10px] font-normal leading-4">
                            Only pictures the event attenders appear in will be
                            shown to them for download.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative"
                      onClick={() => {
                        setSelected("General");
                        setOpenEvent(false);
                      }}
                    >
                      <p
                        onMouseEnter={() => setGeneralHover(true)}
                        onMouseLeave={() => setGeneralHover(false)}
                        className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                      >
                        General
                      </p>
                      <div
                        className={` ${
                          generalHover ? "z-[1] absolute" : " hidden"
                        }`}
                      >
                        <img
                          src={DownArrow}
                          alt=""
                          className="ml-[35.5px] mb-[-1px]"
                        />
                        <div className="w-[200px] bg-white shadow-lg rounded-sm ml-[34.5px] ">
                          <p className="w-[90%] mx-auto py-[6px] text-[10px] font-normal leading-4">
                            All pictures taken at the event is available for
                            download.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] pt-[4px] relative"
                      onClick={() => {
                        setSelected("Both");
                        setOpenEvent(false);
                      }}
                    >
                      <p
                        onMouseEnter={() => setBothHover(true)}
                        onMouseLeave={() => setBothHover(false)}
                        className="text-[#181818] pl-[34.5px] with hover:py-[8px] hover:text-[black]"
                      >
                        Both
                      </p>
                      <div
                        className={` ${
                          bothHover ? "z-[1] absolute" : " hidden"
                        }`}
                      >
                        <img
                          src={DownArrow}
                          alt=""
                          className="ml-[35.5px] mb-[-1px]"
                        />
                        <div className="w-[200px] bg-white shadow-lg rounded-sm ml-[34.5px] ">
                          <p className="w-[90%] mx-auto py-[6px] text-[10px] font-normal leading-4">
                            Your Event attenders are giving the option to pick
                            their preference.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Date
                </label>
                <br />
                <div className="flex items-center bg-[#EDEDED] rounded-lg">
                  <div className="h-[50px]  w-[50px] flex items-center ">
                    <AiOutlineCalendar
                      size={16}
                      className="text-[#7C7B7B] mx-auto"
                    />
                  </div>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter tittle of the event"
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-r-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%] pr-5"
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] flex gap-[26px] mt-6 flex-wrap relative">
              {monetizehover && (
                <div className="w-[200px] bg-white py-[6px] rounded-[2px] absolute right-[52%] top-[-46px]">
                  <p className="text-[10px] font-normal leading-[14.5px] w-[90%] mx-auto ">
                    If wish to monetize your photos Select the "Yes" option then
                    input the desired amount.
                  </p>
                  <img
                    src={Arrow}
                    alt=""
                    className="absolute bottom-[-6px] right-2 width-[20px]"
                  />
                </div>
              )}
              <div className="w-[48%] smDesktop:w-[48%] smDesk:w-[47.7%] tabletAir:w-[47%] tablet:w-[47.4%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal flex justify-between items-center mb-[4px]"
                >
                  Monetize Photos
                  <img
                    src={info}
                    alt="info"
                    onMouseEnter={() => setMonetizeHover(true)}
                    onMouseLeave={() => setMonetizeHover(false)}
                    className="w-[14px] h-[14px]"
                  />
                </label>
                {/* <br /> */}
                <div className="w-[100%] h-[50px] bg-[#F9F9F9] rounded-lg">
                  <select
                    name="cars"
                    id="cars"
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9]  h-[50px] pl-[20px] w-[100%]"
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                    onChange={(e) => handleMonetizeChange(e)}
                  >
                    <option value={"no"}>No</option>
                    <option value={"yes"}>Yes</option>
                  </select>
                </div>
              </div>
              {showMonetize === "yes" && (
                <div className="w-[48%] smDesktop:w-[47.7%] tablet:w-[47%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Price
                  </label>
                  <br />
                  <div className="flex items-center bg-[#EDEDED] rounded-lg">
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter Monetize Price"
                      className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%] pr-5"
                      style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                    />
                  </div>
                </div>
              )}
              <div className="w-[48%] smDesktop:w-[47.7%] tablet:w-[47%]">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 text-[#333333] font-normal"
                >
                  Venue
                </label>
                <br />
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Enter the venue of the event"
                  className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                  style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                />
              </div>
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

                <div className="mt-[15px]">
                  <input
                    type="file"
                    id="selectFile"
                    ref={fileInputRef}
                    name="image"
                    multiple
                    draggable
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  {selectedImage.length === 0 ? (
                    <div
                      className=" mt-[15px] h-[280px] border-[1px] border-dashed border-[#E0E0E0] rounded-lg w-[100%] mx-auto pt-[105px] pb-[105px] "
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={uploadImage}
                    >
                      <div className="cursor-pointer">
                        <FiUpload
                          size={20}
                          className="text-[#EE2339] mx-auto"
                        />
                        <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                          Drag and drop files or click upload
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[100%] h-[280px] mx-auto rounded-lg border-[1px] border-dashed border-[#E0E0E0] py-[12px]">
                      <img
                        src={URL.createObjectURL(
                          selectedImage[selectedImage.length - 1]
                        )}
                        alt=""
                        className="w-[250px] h-[250px] cover mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* button */}
            <button
              onClick={formSubmit}
              className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5"
            >
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
