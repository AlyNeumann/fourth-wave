import { useTrail, animated as a } from "react-spring";
import React, { useState, useEffect } from "react"
import { Box } from '@chakra-ui/react';

export default function AboutDetails() {

    let [windowHeight, setWindowHeight] = useState(60)
    
    useEffect(()=> {
        console.log(window.innerWidth)
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
        "We are growing a network of anonymous Aunties across North America, and will be providing them with the funding they require to support women.",
        "We will offer education as well as services required for women to stay anonymous while using the internet.",
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
    console.log(windowHeight)
    return (
        <div>
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