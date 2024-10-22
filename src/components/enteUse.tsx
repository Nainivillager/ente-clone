export default function EnteUse() {
  const data = [
    {
      img: "/birds.avif",
      cardNum: "01",
      cardHeading: "Private",
      cardData:
        "We are end-to-end encrypted. This means, we have zero knowledge of your data and only you can see your photos. Our source code has been audited by reputed cryptographers.",
    },
    {
      img: "/bird2.avif",
      cardNum: "02",
      cardHeading: "Durable",
      cardData:
        "We are an open source company designed to outlive its creators. We use our revenue to store 3 copies of your data in 3 clouds. One of them is in an underground fallout shelter.",
    },
    {
      img: "/birds.avif",
      cardNum: "03",
      cardHeading: "Reliable",
      cardData:
        "You can reliably view, share, organize and download your data, in original quality, on all platforms. Last, but not least, you can always talk to a human@ente.io.",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center font-black text-2xl">Why Use Ente?</h1>
      </div>
      <div className="text-center px-2">
        End-to-end encryption, durable storage and simple sharing. We have
        packed these and much more into our beautiful open source apps.
      </div>
      <div className="flex justify-center gap-3 mx-5">
        {data.map((val) => {
          return (
            <div className=" bg-green-200 rounded-lg">
              <div className="bg-blend-multiply mix-blend-multiply">
                <img src={val.img} alt="photo bird" />
              </div>
              <h2 className="font-bold text-xl">
                <span
                  className="text-red-600
                  "
                >
                  {val.cardNum}
                </span>{" "}
                {val.cardHeading}
              </h2>

              <div>{val.cardData}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
