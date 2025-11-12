import "./InfiniteScroll.css";
import { BrandsSlider } from "../Data";

export default function BrandScroll() {
  const duration = 30;
  const itemWidth = 200;

  const industries = [
    { name: "Power industry", brands: BrandsSlider[0] },
    { name: "Cement industry", brands: BrandsSlider[1] },
    { name: "Steel industry", brands: BrandsSlider[2] },
    { name: "Mining industry", brands: BrandsSlider[3] },
  ];

  return (
    <>
      <div className="TrustPatners">
        <h1>Our Trusted Clients</h1>
      </div>

      {industries.map((industry, industryIndex) => {
        const count = industry.brands.length;
        return (
          <div key={industryIndex}>
            <p className="BrandScrollCategory">{industry.name}</p>

            {/* Forward scroll */}
            <div className="wrapper">
              {industry.brands.map((brand, index) => (
                <div
                  key={index}
                  className="item"
                  style={{
                    backgroundImage: brand.img
                      ? `url(/assets/${brand.img})`
                      : "none",
                    animationDuration: `${duration}s`,
                    left: `max(calc(${itemWidth * count}px), 100%)`,
                    animationDelay: `calc(${duration}s / ${count} * (${count} - ${
                      index + 1
                    }) * -1)`,
                  }}
                />
              ))}
            </div>

            {/* Reverse scroll */}
            <div className="wrapper">
              {industry.brands.map((brand, index) => (
                <div
                  key={index}
                  className="item item-reverse"
                  style={{
                    backgroundImage: brand.img
                      ? `url(/assets/${brand.img})`
                      : "none",
                    animationDuration: `${duration}s`,
                    right: `max(calc(${itemWidth * count}px), 100%)`,
                    animationDelay: `calc(${duration}s / ${count} * (${count} - ${
                      index + 1
                    }) * -1)`,
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
