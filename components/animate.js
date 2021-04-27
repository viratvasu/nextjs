import {useRef,useEffect } from 'react';
import Image from 'next/image';
import {gsap} from "gsap";
import styles from './animate.module.scss';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// gsap.core.globals('ScrollTrigger', ScrollTrigger);
const Animate = (props)=>{
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        gsap.from(contentRef.current,{
            scrollTrigger: {
                trigger:contentRef.current,
                // toggleActions:"restart none none none",
                start:"top center",
                // scrub:true,
                // pin:true,
            },
            opacity: 0,
            duration:2,
            x:400,
        });
        gsap.from(imageRef.current,{
            scrollTrigger: {
                trigger:imageRef.current,
                // toggleActions:"restart none none none",
                start:"top center",
                // scrub:true,
                // pin:true
            },
            opacity: 0,
            duration:2,
            // x:400,
            scale:0.3,
            delay:2
            // rotate:20,
        });
      }, []);
    return (
        <div className={styles.animatecontainer}>
            <div className={styles.content} ref={contentRef}>
                <h3>{props.heading}</h3>
                <p>{props.paragraph}</p>
            </div>
            <img
                src={props.image}
                alt="Picture of the author"
                width={500}
                height={500}
                ref={imageRef}
            />
        </div>
    )
}
export default Animate;