import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LeftNavButton from "../Button/LeftNavButton";
import RightNavButton from "../Button/RightNavButton";

import Box from "@mui/material/Box";

const Carousel = ({ items, renderItem, uniqueId }) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.custom-prev-${uniqueId}`,
          nextEl: `.custom-next-${uniqueId}`,
        }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 6 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Left & Right Nav Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          mt: 2,
          px: 2,
        }}
      >
        <LeftNavButton uniqueId={uniqueId} />
        <RightNavButton uniqueId={uniqueId} />
      </Box>
    </div>
  );
};

export default Carousel;
