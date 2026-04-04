import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-skyscraper3.jpg" alt="Modern Skyscraper Architecture"
          className="w-full h-full object-cover object-top opacity-80" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px]">
          <h1
            className="!font-serif text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6">
            Focused. Aligned. Disciplined.
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
            Built on learning, growth, alignment, and quality - turning conviction into long-term wealth.
          </p>
          <div className="h-[1px] w-24 bg-white mb-6 sm:mb-8"></div>
          <div
            className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-md text-white leading-relaxed font-light max-w-[800px]">
            <p>
              Trivantage Capital is a SEBI-registered boutique portfolio manager with a single mission: to
              help investors participate in India's long-term growth story.
            </p>
            <p>
              By combining deep research, sectoral insights, and uncompromising compliance and execution
              standards, we build high-conviction portfolios with disciplined execution. Aligned with our
              clients through meaningful co-investment, we focus on creating wealth that endures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero