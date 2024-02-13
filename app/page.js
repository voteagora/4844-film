import { Widget } from "@typeform/embed-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:py-16 py-8 bg-stone-50">
      <div>
        <div className="uppercase font-mon mb-2 text-stone-400 text-center text-sm">
          /*– Coming Soon –*/
        </div>
        <div className="font-serif text-stone-950 text-4xl text-center mb-4 lg:mb-0">
          The 4844 short film and NFT drop{" "}
        </div>
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
      <div className="relative lg:top-[-340px] flex flex-col items-center">
        <div className="uppercase font-mono text-sm mb-2 text-stone-400 hidden lg:block max-w-sm text-center">
          Get notified when the NFT drop is live, plus behind the scenes
          production updates!
        </div>
        <div className="border-l h-8 hidden lg:block"></div>
        <div className="p-4 border rounded-full">
          <a href="https://stateful.mirror.xyz/subscribe">
            <div className="py-4 px-6 bg-stone-900 shadow text-white rounded-full font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
              Get updates
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
