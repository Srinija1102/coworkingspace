import React from "react";

import Offer from "./offer";
import Footer from "../Footer/footer";
import Explore from "./explore";
const Top: React.FC = () => {
  return (
    <div className="min-h-[450px] border-2 border-black  w-full   ">
      <div
        className="bg-cover bg-center h-[14%] w-full border-2 border-black sm:h-[23%]"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "100% 100%", // Ensures the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image within the container
        }}
      >
        <div className="m-20        sm:m-44 absolute  ">
          <h1 className="text-7xl sm:text-8xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-gray-300  font-semibold mt-4 sm:text-2xl">
            Everywhere your Buisness should be
          </p>
        </div>
      </div>
      <div className="min-h-[650px] border-2 border-red-700 flex flex-col    sm:flex-row">
        <div className="   border-2 border-green-500   w-full p-4 sm:mt-14 pt-20">
          <img src="bg.jpg" alt="" />
        </div>
        <div className="min-h-[200px] w-full border-2 border-blue-500 p-6  sm:pt-48 ">
          <h1 className="text-4xl font-bold">
            Join thousand of people who are part of the 603 space.
          </h1>
          <p className="mt-6 font-Raleway">
            At 603 The Coworking Space, we're dedicated to redefining the way
            you work. Our range of thoughtfully designed services is tailored to
            empower professionals, entrepreneurs, and freelancers to thrive in a
            dynamic and collaborative environment.
          </p>
        </div>
      </div>
      <div className="min-h-[650px] border-2 border-red-700">
        <h1 className="text-5xl font-bold flex justify-center">
          Here's what we Offer
        </h1>
        <div className="min-h-11 w-full border-2 border-yellow-400 flex flex-col  justify-center items-center  md:flex-row p-5">
          <div className="min-h-10 min-w-10 border-2 border-purple-500">
            {" "}
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>
          <div className="min-h-10 min-w-10 border-2 border-purple-500">
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>
          <div className="min-h-10 min-w-10 border-2 border-purple-500">
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
            <Offer
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>

          {/* <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg"
          />
          <Offer
            title="Stylish Hat"
            description="A hat that makes you stand out."
            imagesrc="bg.jpg" */}
          {/* /> */}
        </div>
      </div>
      <div className="min-h-[650px] border-2 border-red-700">
        <h1 className="text-5xl font-bold flex justify-center mt-10 ml-12 sm:ml-0">
          Explore Our Services
        </h1>

        <div className="border-2 border-amber-400 min-h-12 mt-10 flex flex-wrap justify-between gap-6 mx-10   ">
          <div className="min-w-10 min-h-10">
            <Explore
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>
          <div className="min-w-10 min-h-10">
            <Explore
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>
          <div className="min-w-10 min-h-10">
            <Explore
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>
          <div>
            <Explore
              title="Stylish Hat"
              description="A hat that makes you stand out."
              imagesrc="bg.jpg"
            />
          </div>
        </div>
      </div>
      <div className="min-h-10 border-2 border-red-700">
        <p className="m-16 ">
          Navigating the Future of Work: Exploring Flexible Workspaces for Rent
          in Mumbai & Thane In the ever-evolving landscape of work, the demand
          for flexibility has become a defining characteristic for professionals
          and businesses alike. Mumbai and Thane, bustling metropolises known
          for their vibrant business communities, have witnessed a significant
          rise in the popularity of flexible workspaces for rent. Our adaptive
          environments cater to the diverse needs of a dynamic workforce,
          offering a range of benefits that redefine the traditional office
          experience. One of the primary advantages of opting for flexible
          coworking office spaces in Mumbai and Thane is the freedom they
          provide in terms of location. Strategically positioned in key business
          districts, Our workspaces offer professionals the opportunity to
          choose an office that aligns with their preferences and minimizes
          commute times. Whether nestled in the heart of Mumbai’s financial hub
          or within the rapidly expanding landscape of Thane, Our flexible
          workspaces ensure accessibility and convenience for all. The
          collaborative nature of flexible workspaces fosters an environment
          conducive to innovation and networking. By bringing together
          professionals from various industries under one roof, our spaces
          create dynamic communities that encourage knowledge exchange and
          collaboration. Networking events, workshops, and shared areas within
          pur workspaces facilitate interactions, providing opportunities for
          individuals to connect, share ideas, and forge valuable partnerships.
          Moreover, the amenities offered in our flexible workspaces contribute
          to a seamless and efficient work experience. High-speed internet,
          games room, meeting rooms, ergonomic furniture, and well-equipped
          kitchens are standard features. This attention to detail ensures that
          professionals have access to the tools and resources necessary to work
          effectively and comfortably.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Top;
