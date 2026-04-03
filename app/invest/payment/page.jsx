import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">
      <section className="max-w-[900px] mx-auto px-6 lg:px-10 pt-24 pb-20">

        <Link
          href="/invest"
          className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors mb-10"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Invest With Us
        </Link>

        <h1 className="serif-heading text-primary text-4xl md:text-5xl leading-[1.1] mb-4 font-normal !font-serif">
          Payment FAQ & UPI QR Code
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>

        <p className="text-base text-primary/70 max-w-[600px] leading-relaxed mb-12">
          Scan the QR code of your preferred bank to make a payment directly to Trivantage Capital's account.
          Please ensure you enter the correct amount and share the payment confirmation with your advisor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div className="bg-background-light border border-primary/10 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-4">
              Kotak Mahindra Bank
            </p>
            <Image
                src="/invest/QRKotakMahindraBank-crop.jpg"
                alt="Kotak Mahindra Bank QR Code"
                height={260}
                width={260}
                className="mx-auto"
              />
           
          </div>

          <div className="bg-background-light border border-primary/10 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-4">
              IndusInd Bank
            </p>
            <Image
                src="/invest/QRIndusIndBank-crop.jpg"
                alt="IndusInd Bank QR Code"
                height={260}
                width={260}
                className="mx-auto"
              />
           
          </div>

        </div>

      </section>
    </main>
  );
};

export default Page;
