import { dummyImg } from '../data/dummyImages';

export default function Gallery() {
  const items = [
    dummyImg.gallery(1),
    '/images/pre-wedding/NBT09637-0d216f65-b02c-4121-814d-6cd6bd49a1ca.png',
    '/images/pre-wedding/NBT09304-e3d58c31-b55d-4734-ac24-60aab047c5eb.png',
    '/images/pre-wedding/NBT09725-9dae22b9-802b-4b6c-9711-dfb36593fde1.png',
    '/images/pre-wedding/NBT09687-5508ceaf-45a3-44d9-b99d-4699bda0bef0.png',
    '/images/pre-wedding/NBT09583-216f6b65-fe26-451e-8954-9c3998dc94fd.png',
    dummyImg.gallery(7),
    '/images/pre-wedding/NBT09803-64fd6a6f-5d82-47b7-900a-c375dc60d98f.png',
    '/images/pre-wedding/NBT09429-0ac2779d-e10c-4ae7-a7cb-1877640fe8d0.png',
  ];

  return (
    <section id="gallery" className="bg-white px-3 py-10 pb-16 md:px-6">
      <p className="heading-script mb-8 text-center text-4xl text-primary md:mb-10 md:text-5xl">
        Journey of Love
      </p>
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2 md:gap-3">
        {items.map((src, idx) => (
          <div key={`${idx}-${src}`} className="fade-in aspect-square overflow-hidden rounded-2xl">
            <img
              src={src}
              alt=""
              loading="lazy"
              className="size-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
