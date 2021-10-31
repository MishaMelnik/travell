import React from 'react';
import s from './Slider.module.css'
import {useInView} from "react-intersection-observer";

const Slider = ({imageSrc, title, subtitle, flipped}) => {
    const { ref, inView } = useInView({
        threshold:0.4,
    });

    const renderContent = () => {
        if(!flipped){
            return(
                <>
                    <img src={imageSrc} alt="Travel" className={s.image}/>
                    <div className={s.content}>
                        <h1 className={s.title}>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className={s.content}>
                        <h1 className={s.title}>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt="Travel" className={s.image}/>
                </>
            )
        }
    }
    return (
        <div className={inView ? s.slider&s.zoom : s.slider } ref={ref}>
            {renderContent()}
        </div>
    );
};

export default Slider;
