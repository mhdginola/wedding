import { dummyImg } from '../data/dummyImages';

function Tile({ seed, className }) {
  return (
    <div className={`fade-in overflow-hidden rounded-2xl ${className}`}>
      <img
        src={dummyImg.gallery(seed)}
        alt=""
        loading="lazy"
        className="size-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-3 py-10 pb-16 md:px-6">
      <div className="mx-auto flex max-w-xl gap-2 md:max-w-3xl md:gap-3">
        <div className="flex w-1/3 flex-col gap-2 md:gap-3">
          <Tile seed={1} className="min-h-[200px] flex-1 md:min-h-[260px]" />
        </div>
        <div className="flex w-1/3 flex-col gap-2 md:gap-3">
          <Tile seed={2} className="h-[120px] md:h-[160px]" />
          <Tile seed={4} className="min-h-[100px] flex-1 md:min-h-[140px]" />
          <Tile seed={6} className="h-[110px] md:h-[140px]" />
        </div>
        <div className="flex w-1/3 flex-col gap-2 md:gap-3">
          <Tile seed={3} className="min-h-[200px] flex-1 md:min-h-[260px]" />
          <Tile seed={5} className="h-[130px] md:h-[170px]" />
          <Tile seed={7} className="min-h-[90px] flex-1 md:min-h-[120px]" />
        </div>
      </div>
    </section>
  );
}
