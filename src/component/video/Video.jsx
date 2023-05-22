
const Video = () => {
  return (
    <div className="container mx-auto p-4 mt-7 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Some Awesome Learning Toy Videos</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/GkQmkZNLCeM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
