import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const About: React.FC = () => {
  return (
    <>
      <Seo
        title="About – My Story and Why I Built Acrylis"
        description="Learn why I built Acrylis — a free ingredient analyzer for acrylates allergies and fungal acne. My personal journey with an acrylates allergy from gel nail polish, and how I turned my frustration into a tool that helps others."
        keywords="about acrylis, skincare safety, acrylates allergy story, personal skincare journey, gel polish allergy, ingredient checker, fungal acne tool"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-acrylis-mist/70 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-2xl font-extrabold text-acrylis-deep tracking-tight mb-8 text-center md:text-left">
            Hey, I'm Val! 👋
          </h1>

          <div className="prose prose-acrylis max-w-none prose-headings:font-bold prose-headings:text-acrylis-deep prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-800 prose-a:text-acrylis prose-a:no-underline hover:prose-a:underline space-y-8 leading-relaxed">
            <div className="bg-acrylis-warning-light border-l-4 border-acrylis-warning p-4 mb-8 rounded-r-lg not-prose">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-acrylis-warning" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-acrylis-warning-deep italic">
                    <strong>A quick heads up:</strong> I'm a software engineer, not a doctor! The info here is based on my personal experience and research. Always talk with a healthcare professional (like a dermatologist or allergist) for medical advice.
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <p className="text-xl text-gray-800 font-medium leading-snug">
                I'm a software engineer, but more importantly for why you're here—I'm someone who had to learn the hard way about living with an acrylates allergy.
              </p>

              <p>
                My story started about two years ago. I started doing my own gel nails at home, but a few months later, I started getting an itchy patch on my wrist every time I did my nails. I didn't think much of it and kept doing my nails, but as I kept going, it got so much more severe, more itchy and more flaky. I thought my skin was just dry from the nail lamp so I started using more lotion (which only made it worse).
              </p>

              <p>
                Every time I did my nails I had a new symptom, my eyelids started to get itchy and swollen. My breathing started feeling a bit strange, and I was taking antihistamines every single day just to function. My body was clearly trying to tell me something, but I just didn't know what it was. The breaking point was when I put on a new set and had to remove them the very same day—I was so incredibly itchy and felt so dizzy that I knew something was seriously wrong. I didn't go to the doctor because I didn't know to what extent I was being a hypochondriac (like they had many times led me to believe while seeking treatment for endometriosis).
              </p>

              <p>
                At first, I figured it was just HEMA (the most common trigger), so I carried on using my usual skincare and makeup, and normal nail polish. But I kept getting these small bumps around my jawline, and my wrist would flare up in the exact same spot as it did with the gel nails.
              </p>

              <p>
                Around that same time, I was also struggling with <strong>fungal acne</strong>. Which started around the time I was put on a very high dose of birth control to help with my endometriosis. It felt like my skin was just constantly reacting to <em>something</em>, which is why I eventually wanted this tool to check for both. It felt that products were either free of acrylates or fungal acne safe, but never both.
              </p>

              <p>
                Eventually, I made the connection: almost every product I was putting on my face had some kind of "acry" on the ingredient list. Once I started removing them—and the fungal acne triggers—I felt so much better.
              </p>

              <p>
                <strong>Carbomer</strong> was one of the last ones I learned about because it doesn't obviously sound like an acrylate. I actually had a total love-hate relationship with the iUNIK Beta Glucan serum—my skin kind of liked it, but only when I was on antihistamines! Otherwise, it would give me those tiny bumps. After a lot of deep-diving, I realized I had to let it go.
              </p>

              <p>
                Looking back, the allergy was probably brewing for a while. I remember my optometrist and ophthalmologist suggesting I try a different brand of "eye shadow" (they actually meant eyeliner lol) because I had a reaction in my waterline. Surprise, surprise—it contained acrylates!
              </p>

              <p>
                On top of the acrylates and fungal acne triggers, I'm also <strong>allergic to lavender!</strong> (Which is in *so* many "natural" products, unfortunately). It makes shopping for skincare feel like an impossible task. I'm actually considering whether to include support for other common allergens like lavender or fragrance if people would find that useful?
              </p>

              <p>
                I created Acrylis mostly for myself at first, just to make my own life easier because it's so easy to miss ingredients like carbomer, octocrylene, or various patented names. Then I found the <a href="https://www.reddit.com/r/acrylatesallergy/" target="_blank" rel="noopener noreferrer" className="text-acrylis hover:underline">r/acrylatesallergy</a> subreddit and realized so many other people were in the same spot.
              </p>

              <p>
                Acrylates allergies are so tricky because they are in <em>everything</em>—from paint and lotions to bandaids, dental fillings, surgical glue, and anything with adhesives. It's really hard to navigate!
              </p>
            </section>

            <hr className="border-gray-100" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-acrylis-deep">What Acrylis Does</h2>
              <p>
                Acrylis is a free, privacy-first ingredient analyzer that checks skincare and cosmetic products for <strong>acrylates</strong> and acrylate-related compounds that can cause allergic contact dermatitis.
              </p>
              <p>
                As an added bonus, it also checks for <strong>fungal acne triggers</strong>! While fungal acne is in no way related to acrylates allergies, I know first-hand how frustrating it is to deal with both at once, so I wanted a tool that could handle them both in one go.
              </p>
              <p>
                Everything runs entirely in your browser — no servers, no accounts, no data collection. Just paste, analyze, and get instant results.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-acrylis-deep">How I Built the Database</h2>
              <p>
                The ingredient databases behind Acrylis are compiled from peer-reviewed scientific literature, established dermatological resources (like the AAD and NACDG), and community-driven databases validated by healthcare professionals.
              </p>
              <p>
                I review and update the databases approximately quarterly, incorporating new research findings and community feedback. For a full list of sources, including research on Malassezia lipid metabolism and clinical contact dermatitis guidelines, visit the {" "}
                <Link to="/references" className="text-acrylis hover:underline font-medium">References page</Link>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-acrylis-deep">Privacy Matters</h2>
              <p>
                I believe your skincare data is personal and sensitive. Acrylis runs entirely in your browser — your ingredient lists are never sent to any server, stored in any database, or shared with anyone. The tool requires no account, no sign-up, and collects no personal information. I don't think you should have to trade your privacy for convenience, especially when it comes to your health.
              </p>
            </section>

            <div className="bg-acrylis-light p-6 rounded-xl border border-acrylis-lilac mt-10 text-center not-prose">
              <p className="text-gray-800 mb-4 font-medium italic">
                Help me keep Acrylis free! 💖
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                I want to keep this tool free for everyone, but if you'd like to help me keep improving it, feel free to donate or buy any of my recommendations (which I genuinely use and love!).
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/recommendations" className="bg-acrylis text-white px-6 py-2 rounded-full font-semibold hover:bg-acrylis-deep transition-colors shadow-sm text-sm">
                  View My Favorites
                </Link>
                <a href="https://www.buymeacoffee.com/acrylis" target="_blank" rel="noopener noreferrer" className="bg-acrylis text-white px-6 py-2 rounded-full font-semibold hover:bg-acrylis-deep hover:scale-105 transition-all shadow-sm flex items-center gap-2 text-sm">
                  <span>☕</span> Buy me a coffee
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Full disclosure: Some of my recommendations use affiliate links, which helps me keep the lights on!
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center not-prose">
              <Link
                to="/"
                className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                Try the Ingredient Analyzer
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
