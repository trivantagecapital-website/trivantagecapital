import React from 'react'

const Hero = () => {
  return (
    <section class="relative w-full pt-32 pb-24 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/hero-skyscraper.png" alt="Modern Skyscraper Architecture"
          class="w-full h-full object-cover opacity-20" />
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/60 to-background">
        </div>
      </div>

      <div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div class="max-w-[900px]">
          <h1
            class="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
            Focused. Aligned. Disciplined.
          </h1>
          <p class="text-primary/70 text-lg md:text-xl mb-8 font-medium italic">
            Built on learning, growth, alignment, and quality — turning conviction into long-term wealth.
          </p>
          <div class="h-[1px] w-24 bg-primary/20 mb-8"></div>
          <div
            class="space-y-6 text-base md:text-lg text-primary/80 leading-relaxed font-light max-w-[800px]">
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