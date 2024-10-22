export default function CustomerReview() {
  return (
    <div className="flex justify-around p-2 mx-4">
      <div>
        <h1 className="text-5xl text-center ">Our customers say it best</h1>
        <img className=" " src="/duck.jpeg" alt="" />
      </div>
      <div className=" border flex flex-col border-gray-950 rounded-lg px-2 bg-green-500 w-1/2 my-8 mx-2 h-96">
        <div className="h-3/4 py-2 font-medium overflow-y-scroll md:overflow-auto">
          Ente is really cool. End-to-end encrypted photo backup/sync (unlike
          Google Photos), truly multiplatform (unlike iCloud Photos), and fully
          open source (unlike both!) Full disclosure: @symbolicsoft was involved
          in a cinematography audit of Ente.
        </div>
        <div className="text-xl font-semibold">Manoj Vajpai</div>
        <div className="text-gray-600">Cinematographer</div>
      </div>

      <div className=" border border-gray-950 rounded-lg px-2 bg-green-500 w-1/2 my-8mx-2 h-96">
        <div className="h-3/4 py-2 font-medium overflow-y-scroll">
          Ente is really cool. End-to-end encrypted photo backup/sync (unlike
          Google Photos), truly multiplatform (unlike iCloud Photos), and fully
          open source (unlike both!) Full disclosure: @symbolicsoft was involved
          in a cinematography audit of Ente.
        </div>
        <div className="text-xl font-semibold">Manoj Vajpai</div>
        <div className="text-gray-600">Cinematographer</div>
      </div>
    </div>
  );
}
