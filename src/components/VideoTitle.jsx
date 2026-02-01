const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video pt-[20%] px-12 text-white absolute bg-gradient-to-r from-black/50">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:text-lg py-6 w-1/2">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black md:px-4 px-2 py-1 md:py-2 rounded-lg cursor-pointer hover:bg-opacity-50">
          ► Play
        </button>
        <button className="bg-white text-black md:px-4 px-2 py-1 md:py-2 rounded-lg opacity-75 cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
