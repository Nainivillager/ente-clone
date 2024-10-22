export default function Footer() {
  return (
    <div className="text-white bg-black rounded-lg h-30 px-4 mt-4">
      <div className="text-3xl font-bold"> ente </div>
      <div>
        Ente is a beautiful, private cloud for your memories, with apps for
        mobile, desktop and web.
      </div>
      <div className="flex gap-4">
        <div className="border-2 border-gray-400 flex gap-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
      <ul className="flex gap-4">
        <li>Help</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Compare</li>
        <li>Articles</li>
        <li>Shop</li>
        <li>Press Kit</li>
      </ul>
      <div className="flex gap-4 ">
        <div className="text-gray-300 hover:text-white">Privacy</div>
        <div className="text-gray-300 hover:text-white">Terms</div>
      </div>
    </div>
  );
}
