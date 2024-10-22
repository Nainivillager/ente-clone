export default function Features() {
  const data = [
    {
      img: "phone.jpeg",
      data_: "Rediscover your memories",
      para: "The best place to preserve your perfect photo collection",
      subdata:
        "Seach powered by on-device machine learning keeps your data and search history end-to-end encrypted",
    },
    {
      img: "phone.jpeg",
      data_: "Share and collaborate",
      para: "Privately share your albums",
      subdata:
        "Collect photos and collaborate with your friends. Everything end-to-end encrypted.",
    },
    {
      img: "phone.jpeg",
      data_: "Organize and protect",
      para: "Favorite your best clicks, archive the noisy ones and lock those special moments away from prying eyes.",
      subdata: "",
    },
    {
      img: "phone.jpeg",
      data_: "Together with family",
      para: "Share your subscription with your family, for free.",
      subdata:
        "Sync specific albums and your entire library with your partner.",
    },
  ];

  return (
    <div className="text-center ">
      <div>
        <h1 className="text-4xl px-4 font-bold">
          The best place to preserve your perfect photo collection
        </h1>
        <h3 className="text-xl px-4">
          A sharp focus on security and privacy, combined with all of the
          features you expect.
        </h3>
      </div>

      {/* {data.map((val) => {
        return (
          
          <div className="py-3 md:flex md:items-center">
            <div className="flex justify-center ">
              <img className="rounded-lg" src={val.img} alt="img" />
            </div>
            <div className="px-4 pb-4">
              <p className="text-xl font-bold pt-2 pb-2">{val.data_}</p>
              <p>{val.para}</p>
              <p>{val.subdata}</p>
            </div>
          </div>
        );
      })} */}
      {data.map((val, idx) => (
        <div
          key={idx}
          className={`flex flex-col mx-8 ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 py-6`}
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={val.img}
              alt="img"
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl font-bold py-2">{val.data_}</h2>
            <p className="text-gray-700 mb-3">{val.para}</p>
            <p className="text-gray-600">{val.subdata}</p>
          </div>
        </div>
      ))}

      <button className="border border-black rounded-xl p-2 text-white bg-black px-2">
        See All Features
      </button>
    </div>
  );
}
