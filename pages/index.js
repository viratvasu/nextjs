import {useEffect} from 'react';
import styles from '../styles/Home.module.scss'
import {Fragment} from 'react';
import Header from '../components/Header';
import Animate from '../components/animate';
import PinAnimate from '../components/pinAnimate';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Home = ()=>{
  useEffect(()=>{
    gsap.utils.toArray(".customsection").forEach((panel,i)=>{
      ScrollTrigger.create({
        trigger:panel,
        start:"top top",
        pin:true,
        end:"+=100%",
        pinSpacing:false
      })
    })
  },[])
  return (
    <Fragment>
      <Header />
      <div className={styles.header}>
        <div className={styles.contanier}>
          <h1 className={styles.heading}>We will Take care of Everything</h1>
          <p className={styles.subheading}>You just stay at home and do work..will do everythink for you</p>
        </div>
      </div>
      <a href="#scroll"><center><svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path className={styles.downarrow} d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
      </svg></center></a>
      <div className={styles.section+ " container"} id="scroll">
          <Animate image="/first.jpg" heading="If you are Musalithatha" paragraph="Then nee avasaralu motham meme chusukuntam.Don't worry will take care of everything"/>
      </div>
      <div className={styles.section+" container"}>
          <Animate image="/second.jpg" heading="If you are Musalithatha" paragraph="Then nee avasaralu motham meme chusukuntam.Don't worry will take care of everything"/>
      </div>
      {/* <div className={styles.section}> 

      </div> */}
      <PinAnimate bgcolor="red" fgcolor="white" text="Slide One"/>
      <PinAnimate bgcolor="pink" fgcolor="white" text="Slide Two"/>
      <PinAnimate bgcolor="green" fgcolor="white" text="Slide Three"/>
      <PinAnimate bgcolor="grey" fgcolor="white" text="Slide Four"/>
    </Fragment>
  )
}
export default Home;
