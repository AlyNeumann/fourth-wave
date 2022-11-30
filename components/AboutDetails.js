import { useTrail, animated as a } from "react-spring";
import React, { useState, useEffect } from "react"
import styles from '../styles/Home.module.css'

export default function AboutDetails() {

    let [windowHeight, setWindowHeight] = useState(60)
    
    useEffect(()=> {
        if(window.innerWidth > 1000){
            setWindowHeight(60)
        }
        if(window.innerWidth < 1000 && window.innerWidth > 370){
            setWindowHeight(100)
        }
        if(window.innerWidth < 370){
            setWindowHeight(150)
        }
        window.addEventListener('resize', ()=> {
            if(window.innerWidth > 1000){
                setWindowHeight(60)
            }
            if(window.innerWidth < 1000 && window.innerWidth > 370){
                setWindowHeight(100)
            }
            if(window.innerWidth < 370){
                setWindowHeight(150)
            }
        })
     }, [])

    const items = [
        "We are growing a network of anonymous people across North America, who will serve as an underground railroad for women accessing reproductive health services.",
        "The DAO will be launching a mobile app that allows simple access to the best of DeFi, and DAO members will own this app together.",
        "Our innovative governance model will be a breath of fresh air to the DeFi ecosystem.",
        "Read more about Fourth Wave below!"]

    const config = { mass: 5, tension: 2000, friction: 300 };

    const trail = useTrail(items.length, {
        config,
        opacity: 0,
        x: 20,
        height: windowHeight,
        from: { opacity: 0, x: 20, height: 0 }
    });
    return (
        <div className={styles.descriptionsm}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={items[index]}
                    >
                        <a.div style={{ height }}>{items[index]}</a.div>
                    </a.div>
                ))}
        </div>
    )
}