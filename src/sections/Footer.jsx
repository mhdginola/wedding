import { dummyImg } from '../data/dummyImages';

export default function Footer() {
  return (
    <footer id="thanks" className="bg-white px-4 pb-20 pt-4 md:px-8">
      <div className="mx-auto mt-16 max-w-lg text-center">
        <h2 className="heading-serif text-4xl md:text-5xl">Thank You.</h2>
        <div className="relative mx-auto mt-10 aspect-square max-w-md overflow-hidden rounded-sm">
          <img src={dummyImg.thankYou} alt="" className="size-full object-cover" />
        </div>
        <p className="mx-auto mt-10 max-w-md text-left font-sans text-sm leading-relaxed text-text">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan
          hadir dan memberikan doa serta restu.
        </p>
        <p className="mt-12 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-text-light">
          Wedding e-invitation
        </p>
      </div>
    </footer>
  );
}
