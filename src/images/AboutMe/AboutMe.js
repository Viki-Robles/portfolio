import React from 'react';
import './AboutMe.css';
import vikipeki from '../../MyPic/vikipeki.png';



export default function AboutMe() {



    return (
        <>
            <div className="hexagon">
                <div className="hexagon-inside">
                    <div className="hexagon-content">
                        <h2 className="questionMark">?</h2>
                        <h1>Hi, my name is</h1><br /> <h2>Vasiliki Vasilopoulou</h2>and I
                            am a web developer with passion for front-end development and design.
                            I recently finished the Bootcamp called Kodiri
                            and currently I am aspired towards a career that will alow
                            me to channel my creativity through crafting
                            beautiful software and engaging experiences.
                </div>

                </div>
            </div>

            <div className="hexagonPic">
                <div className="hexagon_insidePic">
                    <div className="hexagon-contentPic">
                            
                    </div>

                </div>
            </div>

        </>
    );
}

/**<img src={vikipeki} />*/