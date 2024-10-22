import PricingToggle from "./toggle";

export default function Pricing() {
  return (
    <div>
      <div className="flex flex-col items-center p-0 m-0">
        <img className="h-15 object-cover " src="/price.jpg" alt="" />
        <h1 className=" text-4xl text-black font-bold text-center">
          Pricing <span className="text-green-500 font-bold ">Plans</span>
        </h1>
        <h3 className="text-center pb-4">
          Every plan can be shared with your family.
        </h3>
      </div>
      <div>
        <PricingToggle />
      </div>
    </div>
  );
}
