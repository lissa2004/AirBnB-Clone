import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-54008219/original/68f049b1-c05a-4df0-b83f-866d9156b6f0.jpeg?im_w=960" title="Entire serviced apartment in Dolphin Coast, South Africa" description="4 guests2 bedrooms3 beds2 baths" price="R8,165 ZAR 
night"/>
        <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-922912718753360940/original/403da94e-b84f-4ae9-828a-ae280d62431f.jpeg?im_w=720" title="Lagoon Drive Luxury Beachfront Nest" description="2 guests1 bedroom1 bed1.5 baths" price="R1,300 ZAR 
nigh"/>
        <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=960" title="Casa Bentley, Maker Drive, Simbithi Estate" description="10 guests5 bedrooms6 beds5.5 baths" price="R7,480 ZAR 
night" />
        <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/00bbbf39-9135-401a-b699-5bea5de420b6.jpeg?im_w=720" title="Entire home in Simbithi Eco Estate, South Africa" description="2 guests1 bedroom1 bed1 bath" price="R1,950 ZAR 
night" />
      </div>
      <div className="home_section_footer">
      <Cards src="https://a0.muscache.com/im/pictures/2dcc522c-eeb4-4dc8-a7e4-b58afe37b57c.jpg?im_w=720" title="Entire villa in Zimbali Coastal Resort Durban , South Africa" description="12 guests6 bedrooms6 beds6 baths" price="R8,165 ZAR 
night"/>
      </div>
    </div>
  );
};

export default Home;
