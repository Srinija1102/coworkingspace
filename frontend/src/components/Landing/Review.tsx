import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../../node_modules/swiper/swiper-bundle.min.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const reviews = [
  {
    text: "Remote work can sometimes feel isolating, but thanks to 603 The Coworking Space, I've regained that sense of community. The open layout encourages collaboration, and the diverse range of professionals here sparks fresh ideas. The cozy lounges and well-stocked kitchenette make breaks enjoyable, and I've found it easier to strike a work-life balance. Joining this space was a fantastic decision for my productivity and well-being",
    author: "Maira"
  },
  {
    text: "603 The Coworking Space embodies professionalism and convenience. As a consultant, I often meet clients here, and the modern meeting rooms are impressive. The staff is attentive and always ready to assist with any needs. Plus, the location is central, making it easy for my clients to access. If you're looking for a polished and productive workspace, this is the place to be.",
    author: "Rajiv"
  },
  {
    text: "Creativity flows freely at 603 The Coworking Space. As a content creator, I find the ambiance truly inspiring. The natural light, comfortable workstations, and collaborative vibe have boosted my productivity. Being surrounded by fellow creatives has led to unexpected collaborations and projects. It's like working in a hub of innovation, and I couldn't be happier with my choice.",
    author: "Tushar"
  },
  {
    text: "Remote work can sometimes feel isolating, but thanks to 603 The Coworking Space, I've regained that sense of community. The open layout encourages collaboration, and the diverse range of professionals here sparks fresh ideas. The cozy lounges and well-stocked kitchenette make breaks enjoyable, and I've found it easier to strike a work-life balance. Joining this space was a fantastic decision for my productivity and well-being",
    author: "Me"
  },
  {
    text: "603 The Coworking Space embodies professionalism and convenience. As a consultant, I often meet clients here, and the modern meeting rooms are impressive. The staff is attentive and always ready to assist with any needs. Plus, the location is central, making it easy for my clients to access. If you're looking for a polished and productive workspace, this is the place to be.",
    author: "you"
  },
  {
    text: "Creativity flows freely at 603 The Coworking Space. As a content creator, I find the ambiance truly inspiring. The natural light, comfortable workstations, and collaborative vibe have boosted my productivity. Being surrounded by fellow creatives has led to unexpected collaborations and projects. It's like working in a hub of innovation, and I couldn't be happier with my choice.",
    author: "us"
  }
];

const Review: React.FC = () => {
  return (
    <div className="bg-yellow-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-600 mb-8">What are People saying...</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-200 text-6xl mb-4">“</div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <p className="font-bold text-gray-900">{review.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
