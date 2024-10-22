export default function Hero() {
  return (
    <div className="flex justify-around border border-black rounded-lg bg-green-400 mx-5 my-5">
      {/* className=" text-center" */}
      <div className="p-2">
        <div className="text-white text-xl ">Safe Home</div>
        <div>
          <span className="text-black font-bold">for your photos</span>
        </div>
        <div>
          Store, share, and discover your memories with absolute privacy
        </div>
        <div>
          <button className="bg-black rounded-lg text-white px-1 my-2">
            Download
          </button>
        </div>
      </div>
      <div>
        <img src="/phone.jpeg" alt="" />
      </div>
    </div>
  );
}
