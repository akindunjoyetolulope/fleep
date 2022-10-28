import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Rectangle from "../assets/Rectangle 2 (1).png";
import Rectangle2 from "../assets/Rectangle 3.png";
import Rectangle3 from "../assets/Rectangle 4.png";
import GroupImage from "../assets/Group 17382.png";
import Event from "../assets/Group 17384.png";
import Face from "../assets/Group 17384 (1).png";
import Algorithm from "../assets/Group 17384 (2).png";
import vector from "../assets/Vector 1.png";
import GroupMemories from "../assets/Group 17390.png";
import AmazingMemories from "../assets/Rectangle 25.png";

const Memories = () => {
  return (
    <main className="mt-[116px]">
      {/* memories */}
      <section className="w-[90%] mx-auto flex justify-between">
        {/* text */}
        <div className="w-[50%] smDesktop:w-[55%]">
          <h2 className="text-[80px] smDesk:text-[60px]  tablet:text-[50px]  tablet:leading-[70px] smDesktop:text-[70px] font-extrabold leading-[90px] tracking-[-1%] text-[#333333] ">
            Shared Memories Stay Forever
          </h2>
          <p className="text-[#6F6681] text-[18px] leading-8 tracking-[-1%] w-[83%] mt-[30px] ">
            One thing is for sure, sharing parts of moments has a “feel-good”
            sensation about it. Go ahead, create!
          </p>

          <button className="mt-[100px] bg-[#EE2339] hover:bg-transparent hover:text-[#EE2339] hover:border-[1px] hover:border-[#EE2339] text-[#FFFFFF] flex items-center gap-2 px-12 py-6 rounded-[35px]">
            Get Started
            <IoIosArrowForward
              size={20}
              className=" border-[1px] rounded-[50%] text-[white] border-[#F14F61] bg-[#F14F61] p-[2px]"
            />
          </button>
        </div>
        {/* images */}
        <div className="w-[70%] smDesk:w-[60%]">
          <img
            src={Rectangle}
            alt="memories"
            className="h-[380px] rounded-[20px]  tablet:h-[300px]"
          />
          <div className="grid grid-cols-1 grid-flow-col">
            <img
              src={Rectangle2}
              alt="memories"
              className="h-[270px] rounded-[20px] object-fill"
            />
            <img
              src={Rectangle3}
              alt="memories"
              className="h-[270px] w-[415px] rounded-[20px] object-fill smDesktop:w-[300px] smDesk:w-[270px] tabletAir:w-[240px]  tablet:w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* occassion */}
      <section className="flex w-[94%] mx-auto gap-[70px]">
        <div className="w-[60%] pt-[98px] smDesktop:w-[70%] tabletAir:w-[80%]">
          <img
            src={GroupImage}
            alt="important memories"
            className="ml-[-20px] smDesktop:h-[400px] object-fill tabletAir:h-[440px]"
          />
        </div>
        <div className="pt-[133px]">
          <p className="text-[16px] leading-5 tracking-[-1%] text-[#6A6A6A] font-semibold ">
            USE CASES
          </p>
          <h2 className="text-[50px] smDesktop:text-[45px] smDesk:text-[40px] tabletAir:text-[36px] text-[#1A1941] leading-[60px] tracking-[-1%] font-extrabold ">
            What’s Your Occasion?
          </h2>
          <p className="text-[16px] leading-6 tracking-[-1%] text-[#6F6681] w-[52%] smDesktop:w-[60%] font-medium mt-[7px] text-left ">
            We built ‘this’ for you. Your Event, Your theme, Your venue, Your
            vision, Your colors, and anything else you would like.
          </p>
          <button className="mt-[90px] flex items-center text-[16px] font-bold leading-[19.2px] gap-[20px] text-[#EE2339] border-[1px] border-[#EE2339] px-12 py-6 rounded-[35px] hover:bg-[#EE2339] hover:text-[#FFFFFF] ">
            Learn more
            <IoIosArrowForward className="border-[1px] bg-[#FCD3D7] p-[2px] rounded-[50%] " />
          </button>
        </div>
      </section>

      {/* Features */}

      <section className="w-[90%] mx-auto pb-[20px]">
        <div>
          <h2 className="text-center pt-[104px] text-[50px] leading-[60px] tracking-[-1%] text-[#1A1941] font-extrabold ">
            Features
          </h2>
          <div className="relative">
            <img
              src={vector}
              alt=""
              className="absolute mx-auto w-[834px] ml-[178px] mt-[30px] smDesktop:ml-[100px] smDesktop:w-[718px]  smDesk:w-[600px] tabletAir:w-[550px] tablet:w-[480px]"
            />
            <div className="flex gap-[81px] relative">
              <div className="w-[33%]">
                <img src={Event} alt="event" className="w-[90px] mx-auto" />

                <div className="mt-[58px]">
                  <h3 className="text-[24px] smDesk:text-[20px] tablet:text-[18px] tabletAir:text-[18px] leading-[28.8px] font-semibold text-center tracking-[-1%] text-[#1A093F]">
                    Event & Barcode
                  </h3>
                  <p className="text-center text-[#6F6681] text-[16px] leading-[30px] font-medium tracking-[-1%] ">
                    Create an event, theme, watermark your events and so much
                    more then have a barcode generated that you can share with
                    everyone.
                  </p>
                </div>
              </div>
              <div className="w-[33%]">
                <img
                  src={Face}
                  alt="Facial Recognition"
                  className="w-[90px] mx-auto"
                />

                <div className="mt-[58px]">
                  <h3 className="text-[24px] smDesk:text-[20px] tabletAir:text-[18px] tablet:text-[18px] leading-[28.8px] font-semibold text-center tracking-[-1%] text-[#1A093F]">
                    Facial Recognition(AI)
                  </h3>
                  <p className="text-center text-[#6F6681] smDesk:text-[14px] text-[16px] leading-[30px] font-medium tracking-[-1%] ">
                    Harnessing the power of AI to match your selfie with
                    pictures you appear in an event created with 99.9% accuracy.
                  </p>
                </div>
              </div>
              <div className="w-[33%]">
                <img
                  src={Algorithm}
                  alt="matching Algorithm"
                  className="w-[90px] mx-auto"
                />

                <div className="mt-[58px]">
                  <h3 className="text-[24px] smDesk:text-[20px] tabletAir:text-[18px] tablet:text-[18px] leading-[28.8px] font-semibold text-center tracking-[-1%] text-[#1A093F]">
                    Matching Algorithm
                  </h3>
                  <p className="text-center text-[#6F6681] smDesk:text-[14px] text-[16px] leading-[30px] font-medium tracking-[-1%] ">
                    Real-time separation and selection of pictures you only
                    appear in an event is done solely by our smart technology,
                    all you need to do is provide a selfie and download all your
                    pictures afterwards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RElive Every Movement */}
      <section className="">
        <div className="w-[90%] flex pt-[100px] gap-[90px]">
          <div className="">
            <img
              src={GroupMemories}
              alt="Amazing memories"
              className="h-[600px] smDesktop:h-[550px] smDesk:h-[500px] object-fill tablet:h-[400px]"
            />
          </div>
          <div className="w-[40%] smDesktop:w-[60%] tablet:w-[70%]">
            <h2 className="text-[50px] smDesktop:text-[40px] tabletAir:text-[30px] tablet:text-[28px] smDesk:text-[35px] leading-[60px] tracking-[-1%] text-[#1A1941] font-extrabold tabletAir:leading-[40px] ">
              Relive Every Moment of Each Event.
            </h2>
            <p className="text-[#6F6681] text-[16px] tabletAir:text-[14px] font-normal leading-[30px] tracking-[-1%] mt-[20px] ">
              We have envisioned how it is sometimes difficult to get your
              desired moments from an event you attended. True, we just want to
              only get to see the times we appear in events at times and this
              can be difficult while sieving through a lot of pictures. We
              intend to make the process easier for you and is this why w
              created “…..”
            </p>
          </div>
        </div>

        {/* uploads Counter */}
        <div
          className="flex gap-[54px] h-[320px] items-center justify-end pr-[10%] mt-[-250px]  smDesk:h-[200px] tabletAir:h-[140px] smDesk:mt-[-110px] tabletAir:mt-[-120px] tablet-[-90px]"
          style={{ background: "rgba(245, 245, 250, 1)" }}
        >
          <span>
            <p className="text-[50px]  smDesktop:text-[40px] tabletAir:leading-[60px] tabletAir:text-[32px] text-[#1A1941] font-medium leading-[75px] text-font ">
              45+
            </p>
            <p className="text-[16px] font-medium text-font leading-[24px]  tracking-[-1%] ">
              Events
            </p>
          </span>
          <span>
            <p className="text-[50px] smDesktop:text-[40px] tabletAir:leading-[60px] text-[#1A1941] tabletAir:text-[32px] font-medium leading-[75px] text-font ">
              109K+
            </p>
            <p className="text-[16px] font-medium text-font leading-[24px] tracking-[-1%] ">
              Uploads & Downloads
            </p>
          </span>
          <span>
            <p className="text-[50px] smDesktop:text-[40px] tabletAir:leading-[60px] text-[#1A1941] tabletAir:text-[32px] font-medium leading-[75px] text-font ">
              20k
            </p>
            <p className="text-[16px] font-medium text-font leading-[24px] tracking-[-1%] ">
              Users
            </p>
          </span>
        </div>
      </section>

      {/* How it Works */}

      <section className="" style={{ background: "rgba(245, 245, 250, 1)" }}>
        <div className="w-[90%] mx-auto pb-[117px]">
          <h2 className="text-[50px]  smDesktop:text-[42px] tablet:text-[40px] leading-[60px] tracking-[-1%] font-extrabold ">
            How It Works
          </h2>

          <div className="mt-[100px] flex gap-[64px]">
            <div className="w-[60%]">
              <img
                src={AmazingMemories}
                alt="Amazing memories"
                className="smDesktop:h-[500px] smDesktop:object-fill"
              />
            </div>
            <div className="w-[40%]">
              <span className="flex  gap-[40px]">
                <p
                  className="text-[70px] font-black italic text-[#14181F] leading-[84px] w-[41px] mt-[-6px]"
                  style={{ color: "rgba(20, 24, 31, 1)" }}
                >
                  1
                </p>
                <p
                  className="text-[16px]smDesk:text-[14px] smDesk:leading-[26px] leading-[30px] font-medium w-[60%]
                 "
                >
                  Register as a user then create an event of your choice{" "}
                </p>
              </span>
              <span className="flex items-center gap-[40px] mt-[123px] smDesktop:mt-[110px] smDesk:mt-[80px]">
                <p
                  className="text-[70px] font-black italic text-[#14181F] leading-[84px] w-[41px] mt-[-16px]"
                  style={{ color: "rgba(20, 24, 31, 1)" }}
                >
                  2
                </p>
                <p
                  className="text-[16px] smDesk:text-[14px] smDesk:leading-[26px] leading-[30px] font-medium w-[60%]
                 "
                >
                  Upload all the pictures of the event and generate a barcode to
                  share to attendees
                </p>
              </span>
              <span className="flex items-center gap-[40px] mt-[93px] smDesktop:mt-[60px]">
                <p
                  className="text-[70px] font-black italic text-[#14181F] leading-[84px] w-[41px] mt-[-40px] smDesktop:mt-[-120px] "
                  style={{ color: "rgba(20, 24, 31, 1)" }}
                >
                  3
                </p>
                <p
                  className="text-[16px] smDesk:text-[14px] smDesk:leading-[26px] leading-[30px] font-medium w-[90%] smDesktop:w-[100%]
                 "
                >
                  Attendees (other users) can go ahead to download the app with
                  the help of the event barcode from either Google Playstore or
                  iOS store, provide a selfie and then download the pictures
                  they appear in.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Memories;
