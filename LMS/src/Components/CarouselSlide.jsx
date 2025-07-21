function CarouselSlide({ image, title, description, slideNumber, totalSlide }) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full px-4">
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-xl text-white text-center transition-all duration-500">

        {/* Avatar Image */}
        <img
          src={image}
          alt="carousel user"
          className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
        />

        {/* Title */}
        <h3 className="text-3xl font-bold tracking-wide">{title}</h3>

        {/* Description */}
        <p className="text-lg italic text-gray-200 max-w-xl">
          “{description}”
        </p>

        {/* Navigation Arrows */}
        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
          <a
            href={`#slide${slideNumber === 1 ? totalSlide : slideNumber - 1}`}
            className="btn btn-circle bg-cyan-600 text-white hover:scale-110 hover:bg-cyan-500 transition shadow-lg"
          >
            ❮
          </a>
          <a
            href={`#slide${(slideNumber % totalSlide) + 1}`}
            className="btn btn-circle bg-cyan-600 text-white hover:scale-110 hover:bg-cyan-500 transition shadow-lg"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
