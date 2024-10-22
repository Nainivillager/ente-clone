import Marquee from "react-fast-marquee";

export default function CustomMarquee() {
  return (
    <Marquee speed={150}>
      <div className="flex gap-14 ">
        <img
          className="h-12 px-5"
          src=" /airbnb-2-logo-svgrepo-com.svg"
          alt="airbnb"
        />

        <img
          className="h-12 px-5"
          src=" /coca-cola-logo-svgrepo-com.svg"
          alt="coca-cola"
        />

        <img
          className="h-12 px-5"
          src=" creative-cloud-cc-logo-svgrepo-com.svg"
          alt="creative-cloud"
        />
        <img
          className="h-12 px-5"
          src=" /intrax-logo-svgrepo-com.svg"
          alt="intrax"
        />

        <img
          className="h-12 px-5"
          src=" /spotify-1-logo-svgrepo-com.svg"
          alt=""
        />

        <img
          className="h-12 px-5"
          src=" /twitter-logo-svgrepo-com.svg"
          alt="twitter"
        />

        <img
          className="h-12 px-5"
          src=" /xbox-one-logo-svgrepo-com.svg"
          alt="xbox"
        />
      </div>
    </Marquee>
  );
}
