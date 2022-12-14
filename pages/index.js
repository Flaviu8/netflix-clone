import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";

import SectionCards from "../components/card/section-cards";
 import { getVideos, getPopularVideos } from '../lib/videos'


  export async function getServerSideProps(context) {
   const disneyVideos = await getVideos ('disney videos');
   const travelVideos = await getVideos ('travel videos');
   const productivityVideos = await getVideos ('productivity videos');
   const popularVideos = await getPopularVideos ('popular Videos');

   const videoDisney = String(disneyVideos)
   const videoTravel = String(travelVideos)
   const videoProd = String(productivityVideos)
   const videoPopular = String(popularVideos)

   console.log(disneyVideos)
   
return {
  
    props: { videoDisney,
        videoTravel,
        videoProd,
        videoPopular
    }

  }
}


export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavBar username="flavius_flaviu93@yahoo.com" />
        <Banner
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}


