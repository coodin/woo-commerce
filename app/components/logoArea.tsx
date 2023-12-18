import Slider from "react-slick";

const LogoArea = () => {
  return (
    <div className="px-[15px] pt-[80px] pb-[110px]">
      <div className="w-full px-[15px] mx-auto">
        <div className="mx-[-15px]">
          <Slider
            slidesToShow={5}
            slidesToScroll={1}
            infinite={true}
            className="center"
            centerMode={true}
            centerPadding="0px"
            appendDots={(dots) => (
              <ul
                style={{
                  display: "none",
                }}
              >
                {dots}
              </ul>
            )}
            responsive={[
              {
                breakpoint: 580,
                settings: {
                  dots: true,
                  speed: 500,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 770,
                settings: {
                  dots: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 990,
                settings: {
                  dots: true,
                  speed: 500,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
            ]}
          >
            {[
              {
                imageUrl:
                  "https://tunatheme.com/tf/html/autixir-preview/autixir/img/brand-logo/3.png",
              },
              {
                imageUrl:
                  "https://tunatheme.com/tf/html/autixir-preview/autixir/img/brand-logo/2.png",
              },
              {
                imageUrl:
                  "https://tunatheme.com/tf/html/autixir-preview/autixir/img/brand-logo/4.png",
              },
              {
                imageUrl:
                  "https://tunatheme.com/tf/html/autixir-preview/autixir/img/brand-logo/5.png",
              },
              {
                imageUrl:
                  "https://tunatheme.com/tf/html/autixir-preview/autixir/img/brand-logo/1.png",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="opacity-50 hover:opacity-100 grayscale-[1] hover:grayscale-0 my-[10px]
              transition-all duration-300 ease-in-out outline-none group"
                >
                  <img
                    className="outline-none group-hover:scale-110 transition-all duration-300 ease-in-out"
                    src={item.imageUrl}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LogoArea;
