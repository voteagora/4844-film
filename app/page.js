import { Widget } from "@typeform/embed-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:py-16 py-8 bg-stone-50">
      <div className="uppercase font-mon mb-2 text-stone-400 text-center">
        /*– Coming Soon –*/
      </div>
      <div className="font-serif text-4xl text-center mb-4 lg:mb-0">
        The 4844 short film and NFT drop{" "}
      </div>
      <img
        src="/bg-image.png"
        alt="4844"
        className="max-w-screen-xl w-full relative lg:-top-24 hidden lg:block"
      />
      <img
        src="/bg-image-mobile.png"
        alt="4844"
        className="max-w-screen-xl w-full relative lg:-top-24 lg:hidden"
      />
      <div className="relative lg:top-[-320px] flex flex-col items-center">
        <div className="uppercase font-mon mb-2 text-stone-400 hidden lg:block">
          /*– Coming Soon –*/
        </div>
        <div className="border-l h-12 hidden lg:block"></div>
        <div className="p-4 border rounded-full">
          <a href="https://dn9jodq37pr.typeform.com/to/syAx53dP">
            <div className="py-4 px-6 bg-stone-900 shadow text-white rounded-full font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
              Notify me when the drop is live
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
