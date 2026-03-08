import React from 'react'

const page = () => {
  return (
    <>
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
              help investors participate in India’s long-term growth story.
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
      <section id="philosophy" class="bg-primary/5 dark:bg-white/5 py-24 md:py-32 scroll-mt-24">
        <div class="max-w-[1200px] mx-auto px-6 lg:px-10">
      
          <div class="max-w-[800px] mb-20 text-center md:text-left">
            <p class="text-primary/60 dark:text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Investment Philosophy</p>
            <h2 class="serif-heading text-primary dark:text-white text-4xl md:text-5xl lg:text-6xl mb-6 italic">
              Research. Conviction. Growth.
            </h2>
            <p class="text-xl text-primary/80 dark:text-white/80 mb-8 font-light">
              Turning insights into high-conviction investments that compound over time.
            </p>
            <p class="text-primary/70 dark:text-white/70 max-w-[600px] leading-relaxed">
              At Trivantage Capital, our investment philosophy is more than a framework — it is a mindset.
              Four principles guide everything we do:
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <span
                  class="material-symbols-outlined text-primary dark:text-white opacity-40">auto_stories</span>
                <div class="h-[1px] flex-1 bg-primary/10 dark:bg-white/10"></div>
              </div>
              <h3 class="text-2xl font-bold tracking-tight text-primary dark:text-white">Intense Focus on
                Learning</h3>
              <div
                class="text-primary/70 dark:text-white/70 leading-relaxed font-light text-base max-w-[480px]">
                <p class="mb-4">We constantly evolve to remain relevant in a rapidly changing investment
                  landscape.</p>
                <p>Our research process is iterative, curious, and open-minded — ensuring we are always
                  ahead of change, not behind it.</p>
              </div>
            </div>
    
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <span
                  class="material-symbols-outlined text-primary dark:text-white opacity-40">trending_up</span>
                <div class="h-[1px] flex-1 bg-primary/10 dark:bg-white/10"></div>
              </div>
              <h3 class="text-2xl font-bold tracking-tight text-primary dark:text-white">Growth Mindset</h3>
              <div
                class="text-primary/70 dark:text-white/70 leading-relaxed font-light text-base max-w-[480px]">
                <p class="mb-4">Just as we adopt a growth mindset ourselves, we seek it in the businesses we
                  invest in.</p>
                <p>Consistent, industry-leading growth is a key filter in identifying tomorrow’s leaders.
                </p>
              </div>
            </div>
       
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <span
                  class="material-symbols-outlined text-primary dark:text-white opacity-40">handshake</span>
                <div class="h-[1px] flex-1 bg-primary/10 dark:bg-white/10"></div>
              </div>
              <h3 class="text-2xl font-bold tracking-tight text-primary dark:text-white">Strong Alignment with
                Investors</h3>
              <div
                class="text-primary/70 dark:text-white/70 leading-relaxed font-light text-base max-w-[480px]">
                <p class="mb-4">We invest alongside our clients. Both the company and its founders have
                  co-invested meaningfully in investment approaches we manage.</p>
                <p>This ensures complete alignment, true skin in the game, and shared conviction in every
                  decision we make.</p>
              </div>
            </div>
     
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <span
                  class="material-symbols-outlined text-primary dark:text-white opacity-40">verified_user</span>
                <div class="h-[1px] flex-1 bg-primary/10 dark:bg-white/10"></div>
              </div>
              <h3 class="text-2xl font-bold tracking-tight text-primary dark:text-white">Premium on Quality
              </h3>
              <div
                class="text-primary/70 dark:text-white/70 leading-relaxed font-light text-base max-w-[480px]">
                <p class="mb-4">We are willing to pay a premium for quality of management and governance in
                  our investable companies.</p>
                <p>We believe leadership integrity and governance standards are as important as financial
                  performance in driving long-term wealth creation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    
  )
}

export default page