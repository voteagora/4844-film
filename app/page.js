import { Widget } from "@typeform/embed-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-stone-50">
      <div className="uppercase font-mon mb-2 text-stone-400">
        /*– Coming Soon –*/
      </div>
      <div className="font-serif text-4xl">
        The 4844 short film and NFT drop{" "}
      </div>
      <img
        src="/bg-image.png"
        alt="4844"
        className="max-w-screen-xl relative -top-24"
      />
      <div className="relative top-[-320px] flex flex-col items-center">
        <div className="uppercase font-mon mb-2 text-stone-400">
          /*– Coming Soon –*/
        </div>
        <div className="border-l h-12"></div>
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
