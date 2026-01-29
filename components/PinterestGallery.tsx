"use client";

import Script from "next/script";

export default function PinterestGallery() {
  // Replace with your real board link
  const boardUrl = "https://in.pinterest.com/gk779866/screen-saver/";

  return (
    <section id="photography" className="py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Photography</h2>
        <p className="text-[#A1A6B3] mt-2">
          My hobby: Vancouver, nature, and mobile photography curated on Pinterest.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
        {/* Pinterest script */}
        <Script
          async
          defer
          src="https://assets.pinterest.com/js/pinit.js"
          strategy="afterInteractive"
        />

        {/* Board embed */}
        <a
          data-pin-do="embedBoard"
          data-pin-board-width="1030"
          data-pin-scale-height="520"
          data-pin-scale-width="160"
          href={boardUrl}
        >
          Pinterest Board
        </a>
      </div>
    </section>
  );
}
