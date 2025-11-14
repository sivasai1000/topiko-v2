"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import VisitButton from "@/components/VisitButton";
import SectionContainer from "@/components/ui/globals/section-container";
import Text from "@/components/ui/globals/test";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Grid from "@/components/ui/globals/grid";
import Box from "@/components/ui/globals/box";
import SolutionCard from "@/components/SolutionCard";
import LottieWithImages from "@/components/LottieWithImages";
import FeatureCard from "@/components/FeatureCard";
import StoryCard from "@/components/StoryCard";
import tailorcard from "@/public/assets/images/tailorcard.svg";
import personalcard from "@/public/assets/images/personalcard.svg";
import futureproof from "@/public/assets/images/futureproofcard.svg";
import disblayimg from "@/public/assets/images/disblay.svg";
import topikoimg from "@/public/assets/images/topiko.svg";
import fleximg from "@/public/assets/images/flex.svg";
import hebt from "@/public/assets/images/hebt.svg";
import Brandpreneuring from "@/public/assets/images/Brandpreneuring.svg";
import marketing from "@/public/assets/images/marketing.svg";
import disblayicon from "@/public/assets/images/disblayicon.svg";
import flexicon from "@/public/assets/images/flexicon.svg";
import hebticon from "@/public/assets/images/hebticon.svg";
import topikoicon from "@/public/assets/images/topikoicon.svg";
import plusIcon from "@/public/assets/images/plus.svg";
import minusIcon from "@/public/assets/images/minus.svg";
import pinkarrow from "@/public/assets/images/pinkarrow.svg";
import twitter from "@/public/assets/images/twitter.svg";
import linkedin from "@/public/assets/images/linkedin.svg";
import insta from "@/public/assets/images/instagram.svg";
import topiko1 from "@/public/assets/images/topiko1.png";
import topiko2 from "@/public/assets/images/topiko3.svg";
import hebt2 from "@/public/assets/images/hebt2.svg";
import flex2 from "@/public/assets/images/flex2.svg";
import marketing2 from "@/public/assets/images/marketing2.svg";
import brand from "@/public/assets/images/brand.svg"


export default function Home() {
  const [activeSolution, setActiveSolution] = useState(null);
  const scrollRef = React.useRef(null);

 


  function handleSolutionToggle(index) {
    setActiveSolution(activeSolution === index ? null : index);
  }
  const tabNames = {
    products: "About Topiko Products",
    ecosystem: "About Ecosystem",
    hebt: "About Agencies (HEBT)",
    marketing: "For Businesses(Marketing Suite)",
    partners: "For Partners",
  };

  const faqs = {
    products: [
      {
        q: "What is Disblay, and how is it different from Topiko?",
        a: "Disblay is a quick, link-based mini-site builder that lets businesses share products or services instantly with no website setup required. It’s ideal for micro or home businesses starting online for the first time, and can later evolve into a full Topiko or Flex platform when they’re ready for more features.",
      },
      {
        q: "Who is Topiko best suited for?",
        a: "Topiko is designed for small to medium businesses looking to create a digital presence quickly and efficiently without heavy technical work.",
      },
      {
        q: "Do I need technical skills to use Topiko?",
        a: "No technical skills are required. Topiko is designed for anyone to use with simple tools and guided setup.",
      },
      {
        q: "How quickly can I launch?",
        a: "Most users can set up and launch within a day — it’s that easy.",
      },
      {
        q: "What support do you provide after launch?",
        a: "We provide continuous support, updates, and guidance through your dashboard or support center.",
      },
    ],
    ecosystem: [
      {
        q: "Why does Topiko have different products like Disblay, Topiko, Flex, and HEBT?",
        a: "Topiko’s ecosystem is designed to meet you where you are — and take you forward with your next growth steps, from quick link-based presence with Disblay to full-scale platforms like HEBT.",
      },
    ],
    hebt: [
      {
        q: "What kind of projects can I build with HEBT?",
        a: "HEBT supports websites, e-commerce, subscription, and service booking apps with complete web and mobile delivery.",
      },
      {
        q: "Do I get source code or full customization options with HEBT?",
        a: "Yes. HEBT offers full code access for customization, making it ideal for developers and agencies who want to extend or rebrand the platform.",
      },
    ],
    marketing: [
      {
        q: "Does Topiko Marketing Suite include social media or ad campaigns?",
        a: "Yes. It includes integrated tools for social media, WhatsApp marketing, and ad tracking — helping businesses reach and retain more customers effortlessly.",
      },
      {
        q: "Can I use Marketing Suite even if my website isn’t on Topiko?",
        a: "Absolutely. Our Marketing Suite works independently or integrates with Topiko for better analytics and automation.",
      },
    ],
    partners: [
      {
        q: "How do I become a Topiko partner?",
        a: "You can apply directly through our Partner Program page. After onboarding, you’ll receive training, sales materials, and backend access to manage your clients.",
      },
      {
        q: "What’s the difference between HEBT Partner and Topiko Business Partner programs?",
        a: "HEBT Partners are agencies or developers who use our technology to serve clients. Topiko Business Partners focus on helping local businesses go online using our ecosystem and earn recurring income.",
      },
    ],
  };
   const allFaqs = Object.values(faqs).flat();
  const [activeTab, setActiveTab] = useState("products");
 const [openIndexes, setOpenIndexes] = useState(
  // open the first item of the current active tab by default
  faqs[activeTab].map((_, i) => i === 0)
);

const handleToggle = (index) => {
  setOpenIndexes(prev =>
    // toggle the clicked index; close every other index
    prev.map((v, i) => (i === index ? !v : false))
  );
};


  const cards = [
    {
      image: topiko1.src,
      title: "Disblay",
      description: "Share your products or services instantly with a beautiful, easy-to-use digital link.",
      button_title: "disblay",
    },
    {
      image: topiko2.src,
      title: "Topiko",
      description: "Create your complete digital presence — website, engagement tools, and CRM in one platform.",
      button_title: "topiko",
    },
    {
      image: hebt2.src,
      title: "HEBT Platform",
      description: "For businesses ready to scale — powerful, AI-driven systems built for performance.",
      button_title: "hebt",
    },
    {
      image: flex2.src,
      title: "Topiko Flex",
      description: "Your brand, your app, your domain — we build it your way, fully customized.",
      button_title: "flex",
    },
    {
      image: marketing2.src,
      title: "Topiko Marketing Suite",
      description: "Reach new customers and grow faster with digital marketing that fits your goals.",
      button_title: "link",
    },
    {
      image: brand.src,
      title: "Brandpreneuring",
      description: "Build your story, visuals, and identity into a brand that stands out.",
      button_title: "link",
    },
  ];
  const pricecards = [
    {
      image: disblayicon.src,
      title: "Disblay",
      description: "Quick digital catalog and link-based mini-site.",
      button_title: "disblay",
      icon: disblayicon,
      price: "₹1,499",
      bgClass: "bg-gradient-to-r from-[#f7f7f7] to-[#80BAFF]",
    },
    {
      image: topikoicon.src,
      title: "Topiko",
      description: "Complete digital presence with engagement tools and CRM.",
      button_title: "topiko",
      icon: topikoicon,
      price: "₹4,999",
      bgClass: "bg-gradient-to-r from-[#FAE8FF] to-[#F8EFFF]",
    },
    {
      image: flexicon.src,
      title: "Flex",
      description: "Fully branded web + app setup with your own domain and branding.",
      button_title: "flex",
      icon: flexicon,
      price: "Starts ₹19,999",
      bgClass: "bg-gradient-to-r from-[#FFF8E1] to-[#FFF3C4]",
    },
    {
      image: hebticon.src,
      title: "HEBT",
      description: "AI-powered app and web builder for agencies and enterprises.",
      button_title: "hebt",
      icon: hebticon,
      price: "Fully Customized ",
      bgClass: "bg-gradient-to-r from-[#EAE8FF] to-[#E6E8FF]",
    },
  ];

const stories = [
  {
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ramesh Kumar",
    role: "Bejawada Tiffins",
    city: "Vijayawada",
    text: "Topiko is working great for me… regular check my tiffin menu there now.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Mahesh Selvaraj",
    role: "Mahesh Auto Spares",
    city: "Coimbatore",
    text: "Everything in one place with Topiko, makes my day easier.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Aravind Pillai",
    role: "AutoZone Auto Spares",
    city: "Kochi",
    text: "I just share the Disblay link… customers understand everything from that.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Keerthi Shankar",
    role: "KS Designer Boutique",
    city: "Tirupati",
    text: "Much cleaner than sending ten photos… Disblay is best.",
  },

  {
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Manoj Sharma",
    role: "Raj Décor & Interiors",
    city: "Nagpur",
    text: "Updating items is fast on Disblay, that’s why I’m sticking to it.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Harini Nair",
    role: "MyHome Handcrafts",
    city: "Mysuru",
    text: "Simple tool… Disblay made my daily product sharing easier.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Dinesh Jain",
    role: "Jain Digital Agency",
    city: "Pune",
    text: "Almost tripled our team productivity using HEBT, Happy Customers.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Vinay R",
    role: "Rao Home Furnitures",
    city: "Kolkata",
    text: "Ads worked perfect… got genuine calls.",
  },

  {
    image: "https://randomuser.me/api/portraits/women/99.jpg",
    name: "Savitha Mohan",
    role: "Trends Beauty Parlour",
    city: "Bhopal",
    text: "Topiko dashboard is top class… I can check orders and update items quickly.",
  },

  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Pradeep Varma",
    role: "Varma Mobile Store",
    city: "Visakhapatnam",
    text: "I liked the themes in Topiko… changed it twice till my shop look felt right.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/69.jpg",
    name: "Joseph Samuel",
    role: "Samuel’s Food Corner",
    city: "Chennai",
    text: "The branding session made me rethink how I present my business… Much needed",
  },
  
  // Duplicates to reach total 12
  {
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Duplicate — Vinay R",
    role: "Rao Home Furnitures",
    city: "Kolkata",
    text: "Topiko ads gave us verified leads — very helpful.",
  },
];
const storiesCol1 = stories.slice(0, 4);
const storiesCol2 = stories.slice(4, 8);
const storiesCol3 = stories.slice(8, 12);

  return (
    <div >
      <SectionContainer sectionClassName="bg-home md:rounded-b-[44px]  rounded-b-[24px]">
        <Navbar />
        <Box
          as="header"
          id="home"
          className="
      flex items-center justify-center
      min-h-[80vh] sm:min-h-[90vh] md:min-h-screen
      pt-20 md:pt-20 pb-10
      w-full
    "
        >
          <Box className="w-full px-4 sm:px-6 ">


            <Grid sm={1} lg={12} className="items-center gap-8 text-center lg:text-left">


              <Grid.Col className="lg:col-span-7 px-2 sm:px-3 flex flex-col items-center lg:items-start">

                <Text as="h1">
                  Powering Businesses in the Digital Era
                </Text>

                <Text as="p_guiest">
                  Topiko is where innovation meets simplicity — helping businesses
                  of every size build their digital identity, connect with customers,
                  and grow without limits.
                </Text>

                <Box className="flex justify-center lg:justify-start mt-6">
                  <Button asChild variant="gradient" size="gradient">
                    <a href="#solutions">Get Started</a>
                  </Button>
                </Box>
              </Grid.Col>

              {/* RIGHT SIDE */}
              <Grid.Col className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0">
                <Box className="w-[240px] sm:w-[300px] md:w-[380px] lg:w-[440px] xl:w-[500px] flex items-center justify-center">
                  <LottieWithImages
                    width={400}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Box>
              </Grid.Col>

            </Grid>

          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer sectionClassName="bg-[#f9f7fc] py-16 text-center">
        <Box >

          <Text as="h2" className="!text-center  md:w-[800px]">
            Digital isn’t one size fits all and, neither is Topiko.
          </Text>


          {/* Subtext */}
          <Text
            as="h3"
            className="!text-center mx-auto md:w-[800px] mb-15 "
          >
            Every business has a unique story. Whether you run a shop, a startup, or a large
            enterprise, <strong>Topiko adapts to your specific journey.</strong>
            Our tools, onboarding, and support are designed to fit your goals,
            your pace, and your scale.
          </Text>

          {/* Cards Grid */}
          <Grid sm={1} md={2} lg={3} className="gap-8 justify-center ">

            <Grid.Col>
              <FeatureCard
                image={tailorcard.src}
                title="Tailor-made Platforms"
                description="We design around your business type, ensuring your platform is a custom solution — not just another rigid template."
              />
            </Grid.Col>

            <Grid.Col>
              <FeatureCard
                image={personalcard.src}
                title="Personalized Onboarding"
                description="Our experts offer dedicated setup and design assistance, guaranteeing you go live smoothly and confidently."
              />
            </Grid.Col>

            <Grid.Col>
              <FeatureCard
                image={futureproof.src}
                title="Future-Proof Scaling"
                description="Start small, expand anytime. Our system grows features and capacity automatically as your business demands increase."
              />
            </Grid.Col>

          </Grid>

        </Box>

      </SectionContainer>
      <SectionContainer id="solutions" sectionClassName="bg-[#F4F5F8] py-5  text-center">
        <Box>
          <Text as="h2" className="!text-center  md:w-[874px] ">
            Solutions for Every Stage of Growth
          </Text>

          <Text as="h3" className="!text-center mx-auto md:w-[800px] mb-15">
            From your first online launch to full-scale enterprise operations Topiko grows with you.
            Our adaptive platform evolves to match your business needs, ensuring every phase feels
            seamless, scalable, and future-ready.
          </Text>

          {/* Solutions Cards Grid */}
          <Grid sm={1} md={2} lg={3} className="gap-8 justify-center items-stretch ">

            {cards.map((card, index) => (
              <Grid.Col key={index} className="h-full">
                <SolutionCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  showButtons={true}
                  learnMoreLink="#"
                  visitLabel={`Visit ${card.button_title}`}
                  isOn={activeSolution === index}
                  onToggle={() => handleSolutionToggle(index)}
                />
              </Grid.Col>
            ))}

          </Grid>

        </Box>
      </SectionContainer>
   <SectionContainer
  id="stories"
  sectionClassName="bg-white py-10 relative overflow-hidden text-center"
>
  <Box>
    <Text as="h2" className="!text-center">
      Stories of Growth
    </Text>
    <Text as="h3" className="!text-center mx-auto md:w-[800px] mb-15">
      Real businesses. Real results — what our customers say about Topiko.
    </Text>

    <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 relative h-[660px] overflow-hidden px-4">

      {/* Column 1 */}
      <Box
        className="flex flex-col gap-6"
        style={{ animation: "scrollLoop 90s linear infinite" }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {storiesCol1.map((story, j) => (
              <StoryCard key={`c1-${i}-${j}`} {...story} />
            ))}
          </React.Fragment>
        ))}
      </Box>

      {/* Column 2 */}
      <Box
        className="flex flex-col gap-6"
        style={{ animation: "scrollLoop 55s linear infinite" }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {storiesCol2.map((story, j) => (
              <StoryCard key={`c2-${i}-${j}`} {...story} />
            ))}
          </React.Fragment>
        ))}
      </Box>

      {/* Column 3 */}
      <Box
        className="flex flex-col gap-6"
        style={{ animation: "scrollLoop 40s linear infinite" }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {storiesCol3.map((story, j) => (
              <StoryCard key={`c3-${i}-${j}`} {...story} />
            ))}
          </React.Fragment>
        ))}
      </Box>

      {/* Gradient masks */}
      <Box className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <Box className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </Box>

    {/* Stats Row */}
    <Box className="flex justify-center w-full mt-16">
      <Box className="w-full rounded-[28px] bg-gradient-to-r from-[#6738E81A] to-[#BBA4FF1A] 
        flex flex-col md:flex-row items-stretch text-center px-6 md:px-12 py-5 gap-6 md:gap-0">

        {/* Stat 1 */}
        <Box className="flex-1 flex flex-col items-center justify-start px-2">
          <Text as="h2">10k<span className="text-[#6738E8]">+</span></Text>
          <Text as="p" className="text-[#0E091F99] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px]">
            Deployed 10k+ digital assets and experiences
          </Text>
        </Box>

        {/* Stat 2 */}
        <Box className="flex-1 flex flex-col items-center justify-start px-2">
          <Text as="h2">7–14<span className="text-[#6738E8]"> Days</span></Text>
          <Text as="p" className="text-[#0E091F99] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px]">
            Average time to launch from brief to live — faster than ever
          </Text>
        </Box>

        {/* Stat 3 */}
        <Box className="flex-1 flex flex-col items-center justify-start px-2">
          <Text as="h2">98<span className="text-[#6738E8]">%</span></Text>
          <Text as="p" className="text-[#0E091F99] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px]">
            Customer satisfaction — businesses recommend Topiko to others
          </Text>
        </Box>

      </Box>
    </Box>
  </Box>
</SectionContainer>


   <SectionContainer id="pricing">
  <Box className="container">
     <Text as="h2" className="!text-center  md:w-[874px] ">
      Pricing Built to Suit all Types of Business
    </Text>

   

   <Text as="h3" className="!text-center mx-auto md:w-[800px] mb-8">
      Choose the plan that fits your stage. Start small, scale anytime.
    </Text>

    {/* Pricing Grid */}
    <Grid sm={1} md={2} lg={2} className="gap-8">
      {pricecards.map((card, index) => (
        <Grid.Col key={index}>
          <div
            className={`relative rounded-2xl border border-gray-200 p-6 sm:p-7 flex flex-col justify-between ${card.bgClass}`}
          >
            {/* Header */}
            <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="tp-icon-wrapper">
                  <img src={card.image} alt={`${card.title} Icon`} className="w-14 h-14" />
                </div>
                <Text  as="h5" className="!text-start  ">
                  {card.title}
                </Text>
              </div>

              {/* Desktop Price */}
              <div className="hidden sm:flex flex-row items-end gap-1 text-right">
                <span className="text-2xl font-bold text-[#0E091F]">{card.price}</span>
                {card.title !== "HEBT" && (
                  <span className="text-sm font-normal text-gray-600">/year</span>
                )}
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

              {/* Description */}
              <p className="text-base text-gray-700 flex-1">
                {card.description}
              </p>

              {/* Desktop Button */}
              <div className="hidden sm:flex">
                <VisitButton
                  isOn={activeSolution === index}
                  onToggle={() => handleSolutionToggle(index)}
                  label="Get Started"
                />
                
              </div>

              {/* MOBILE: Price + Button in one row */}
              <div className="flex sm:hidden w-full justify-between items-center">

                {/* Mobile Price */}
                <span className="text-md font-bold text-[#0E091F]">
                  {card.price}
                  {card.title !== "HEBT" && (
                    <span className="text-sm font-normal text-gray-600"> /year</span>
                  )}
                </span>

                {/* Mobile Button */}
                <VisitButton
                  isOn={activeSolution === index}
                  onToggle={() => handleSolutionToggle(index)}
                  label="Get Started"
                />

              </div>

            </div>
          </div>
        </Grid.Col>
      ))}
    </Grid>
  </Box>
</SectionContainer>

      <SectionContainer id="faq" sectionClassName=" w-full mx-auto px-6 md:px-12 py-20 md:py-24 md:rounded-t-[44px]  rounded-t-[24px] bg-gradient-to-b from-[#1e2227] to-[#14181e] text-center text-white">
        <Box className="container">
          <Text as="h2" className="font-['Anek_Latin'] text-white font-bold text-[32px] md:text-[52px] mb-4">
            Frequently Asked Questions
          </Text>
          <Text as="p" className="font-['Inter'] text-[16px] md:text-[18px] text-white/60 mb-12 max-w-[780px] mx-auto">
            We're here to help you make the right decision. Explore our frequently asked questions and find answers below.
          </Text>
          <div
  ref={scrollRef}
  className="flex items-center justify-start md:justify-center gap-3 md:gap-5 
  bg-[#e9e9e9] rounded-full px-3 sm:px-4 py-2 overflow-x-auto 
  whitespace-nowrap no-scrollbar mx-auto mb-12 w-full sm:w-fit"
>
  {Object.keys(faqs).map((tab) => (
    <button
      key={tab}
      onClick={(e) => {
        setActiveTab(tab);
        setOpenIndexes(faqs[tab].map((_, i) => i === 0));

        // ⭐ Auto-center selected tab in mobile
        if (window.innerWidth < 768) {
          e.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }}
      className={`flex-shrink-0 font-[Anek_Latin] font-semibold text-[14px] sm:text-[16px] md:text-[18px] 
        px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300
        ${
          activeTab === tab
            ? "bg-[#0e091f] text-white"
            : "text-[#0e091f] bg-transparent hover:bg-[#d8d8d8]"
        }`}
    >
      {tabNames[tab]}
    </button>
  ))}
</div>

          {/* FAQ List */}
          <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">
            {faqs[activeTab]
.map((item, index) => (
              <div
                key={index}
                className={`rounded-[24px] bg-[#242933] p-6 text-left transition-all duration-300 ${openIndexes[index] ? "shadow-lg" : ""}`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h6 className="font-[Anek_Latin] text-[20px] md:text-[24px] font-medium text-white leading-[30px]">
                    {item.q}
                  </h6>
                  <img
                    src={openIndexes[index] ? minusIcon.src : plusIcon.src}
                    alt="toggle"
                    className="w-6 h-6"
                  />
                </div>

                {openIndexes[index] && (
                  <div className="bg-[#1c2028] rounded-[16px] p-4 mt-3 transition-all duration-300">
                    <p className="font-[Inter] text-[15px] text-[#e0e0e0]">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Section */}
          <div className="mt-16 flex flex-col items-center">
            <h4 className="font-[Anek_Latin] font-semibold text-[22px]">Still have a question?</h4>
            <p className="font-[Inter] text-white/80 mt-2 mb-6">
              Contact us! We will be happy to help you
            </p>
            <VisitButton
             variant="pink"
              isOn={activeSolution === 'faq-call'}
              onToggle={() => handleSolutionToggle('faq-call')}
              label="Schedule a Call"
            />

          </div>
        </Box>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Object.values(faqs).flat()
.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          },
        })),
      }),
    }}
  />
      </SectionContainer>
      <SectionContainer id="partners" sectionClassName="bg-white py-16">
        <Box className="mx-auto  px-2">

          <Grid sm={1} md={2} lg={2} className="gap-12 items-start">

            {/* LEFT COLUMN */}
            <Grid.Col>

              <Text
                as="h2"
                className="!text-start font-['Anek_Latin'] font-bold text-[40px] md:text-[52px] leading-[62px] text-[#0E091F]"
              >
                Partner with Topiko
              </Text>

              <Text
                as="p"
                className="font-['Inter'] text-[18px] leading-[28px] text-[#383247] mt-5"
              >
                Join India’s growing digital transformation network. Whether you’re an agency building custom
                solutions or an entrepreneur starting a local business, Topiko offers partnership paths to match
                your expertise and goals.
              </Text>

              <Text
                as="p"
                className="font-['Anek_Latin'] text-[24px] font-medium text-[#0E091F] mt-6"
              >
                Your expertise. Our platform. Endless possibilities.
              </Text>

              {/* CTA BUTTON (same VisitButton toggle UI) */}
              <Box className="mt-8">
                <VisitButton
                 variant="pink"
                  isOn={activeSolution === 'partner-call'}
                  onToggle={() => handleSolutionToggle('partner-call')}
                  label="Schedule a Call"
                />
              </Box>

            </Grid.Col>

            {/* RIGHT COLUMN */}
            <Grid.Col>

              {/* CARD 1 */}
              <Box
                className="
            w-full bg-gradient-to-r from-[#E4FAF1] to-[#E4FAF100]
            rounded-2xl border-[6px] border-white p-6 mb-6
            shadow-[0_83px_111px_rgba(0,0,0,0.03),0_3px_6px_rgba(81,82,86,0.14),0_22px_22px_rgba(97,97,97,0.05)]
            backdrop-blur-[55px]
          "
              >
                <Box className="flex items-center gap-4 mb-3">
                  <img src={hebticon.src} alt="HEBT" className="w-[60px]" />

                  <Text
                    as="h3"
                    className="font-['Anek_Latin'] text-[24px] md:text-[28px] font-medium text-[#0E091F] leading-[34px]"
                  >
                    HEBT Partner Program
                  </Text>
                </Box>


                <Text as="p" className="font-['Inter'] text-[18px] leading-[26px] text-[#0E091FB2] mb-4">
                  For digital agencies and tech teams: access HEBT’s AI-driven development tools, priority
                  support, and white-label delivery to build web & mobile apps faster.
                </Text>

                <a href="#" className="text-[#6738E8] font-medium text-[16px]">
                  Learn more
                </a>
              </Box>

              {/* CARD 2 */}
              <Box
                className="
                 w-full 
    bg-[linear-gradient(99.82deg,#EFFAE4_-21.85%,rgba(239,250,228,0)_100.56%)]
    rounded-2xl border-[6px] border-white p-6
    shadow-[0_83px_111px_rgba(0,0,0,0.03),0_3px_6px_rgba(81,82,86,0.14),0_22px_22px_rgba(97,97,97,0.05)]
    backdrop-blur-[55px]
               

           
          "
              >
                <Box className="flex items-center gap-4 mb-3">
                  <img src={topikoicon.src} alt="Topiko" className="w-[60px]" />
                  <Text
                    as="h3"
                    className="font-['Anek_Latin'] text-[24px] md:text-[28px] font-medium text-[#0E091F] leading-[34px]"
                  >
                    Topiko Business Partner Program
                  </Text>
                </Box>

                <Text as="p" className="font-['Inter'] text-[18px] leading-[26px] text-[#0E091FB2] mb-4">
                  For entrepreneurs and local leaders: start a digital services business using the Topiko
                  ecosystem — onboard local SMBs, earn recurring revenue, and grow your presence.
                </Text>

                <a href="#" className="text-[#6738E8] font-medium text-[16px]">
                  Learn more
                </a>
              </Box>

            </Grid.Col>

          </Grid>

        </Box>
      </SectionContainer>

      <SectionContainer sectionClassName="w-full  bg-white">
        <Box className="w-full  text-center bg-[#f4f5f8] rounded-[36px] p-3 md:p-16 flex flex-col items-center justify-center gap-6">
          <Text as="h2" className="!text-center  md:w-[874px] ">
            Let’s Build Something That Fits You
          </Text>

            <Text as="h3" className="!text-center mx-auto md:w-[800px] ">
            Get your tailor-made digital solution, simple to start, designed to grow.
          </Text>

          <Grid sm={1} md={2} lg={2} className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Start Now Button */}
            <Grid.Col>
              <VisitButton
               variant="blue"
                isOn={activeSolution === 'start'}  
                onToggle={() => handleSolutionToggle('start')} 
                label={`Start Now`}
              />
            </Grid.Col>

           
            <Grid.Col>
              <VisitButton
               variant="pink"
                isOn={activeSolution === 'expert'} 
                onToggle={() => handleSolutionToggle('expert')} 
                label={`Talk to Expert`}
              />
            </Grid.Col>
          </Grid>
        </Box>
      </SectionContainer>
      <footer className="bg-white text-[#0E091F] py-10 px-10">
        <div className=" mx-auto  sm:px-6">
          {/* ---------- Top Section ---------- */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
            {/* Left Column */}
            <div className="w-full lg:max-w-[460px]">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={topikoicon.src}
                  alt="Topiko Logo"
                  className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px]"
                />
                <h3 className="font-['Anek_Latin'] font-medium text-[18px] sm:text-[20px] uppercase tracking-[-0.02em]">
                  TOPIKO TECHNOLOGIES PVT. LTD.
                </h3>
              </div>

              <div className="mb-6">
                <p className="font-['Inter'] font-medium text-[14px] text-[#0E091F]">
                  Address (we work globally)
                </p>
                <p className="font-['Inter'] text-[14px] sm:text-[15px] text-[#0E091FB2] mt-1">
                  Hyderabad, Bangalore, Chennai
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                {[twitter, insta, linkedin].map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt="Social Icon"
                    className="w-[22px] sm:w-[24px] h-[22px] sm:h-[24px] transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* ---------- Right Column ---------- */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full lg:w-auto">
              {/* Column 1 */}
              <div>
                <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
                  Company
                </h4>
                <ul className="space-y-2">
                  {["Home", "Work", "About", "Careers"].map((item) => (
                    <li
                      key={item}
                      className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
                  Products
                </h4>
                <ul className="space-y-2">
                  {["Topiko", "Disblay", "Flex", "HEBT"].map((item) => (
                    <li
                      key={item}
                      className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
                  Services
                </h4>
                <ul className="space-y-2">
                  {["Mobile development", "Web development"].map((item) => (
                    <li
                      key={item}
                      className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {["Insights", "FAQ"].map((item) => (
                    <li
                      key={item}
                      className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ---------- Bottom Section ---------- */}
          <div
            className="
        flex flex-col sm:flex-row items-center justify-center sm:justify-between
        border-t border-[#eaeaea] pt-6 gap-4 text-center sm:text-left
      "
          >
            <p className="font-['Anek_Latin'] text-[14px] sm:text-[16px] text-[#0E091FB2]">
              © 2025 TOPIKO. All rights reserved.
            </p>

            <p className="font-['Anek_Latin'] text-[14px] sm:text-[16px] text-[#0E091FB2]">
              Building the future of Indian commerce.
            </p>

            <div
              className="
          flex flex-wrap justify-center sm:justify-end
          gap-4 text-[#0E091FB2] text-[13px] sm:text-[14px]
        "
            >
              <a
                href="#"
                className="font-['Inter'] hover:text-[#6738E8] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-['Inter'] hover:text-[#6738E8] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-['Inter'] hover:text-[#6738E8] transition-colors"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
}
