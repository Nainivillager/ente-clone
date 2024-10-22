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
        <h1 className="text-4xl">
          The best place to preserve your perfect photo collection
        </h1>
        <h3>
          A sharp focus on security and privacy, combined with all of the
          features you expect.
        </h3>
      </div>

      {data.map((val) => {
        return (
          <div className="py-3">
            <div className="flex justify-center">
              <img src={val.img} alt="img" />
            </div>
            <div className="text-xl">{val.data_}</div>
            <p>{val.para}</p>
            <p>{val.subdata}</p>
          </div>
        );
      })}

      <button className="border border-black rounded-xl text-white bg-black px-2">
        See All Features
      </button>
    </div>
  );
}
