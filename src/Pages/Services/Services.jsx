import React from 'react'
import '../Services/Services.css'
import webImg from '../../Assets/img/11.svg'
import web2Img from '../../Assets/img/22.svg'
import web3Img from '../../Assets/img/33.svg'

export const Services = () => {
  return (
    <div className="Services">
    <div className="skills">
    <div className="about-txt">
        <h2 className="main-txt">
            What I Do
        </h2>
    </div>

    <div className="skill-cards">

        <div className="skill-card">
            <div className="skill-img">
                <img src={webImg} alt="" />
            </div>

            <h2>Web
                     <br /> Development</h2>

        </div>

        <div className="skill-card card2">
            <div className="skill-img">
                <img src={web3Img} alt="" />
            </div>

            <h2>Software <br /> Development</h2>

        </div>


        <div className="skill-card ">
            <div className="skill-img">
                <img src={web2Img} alt="" />
            </div>

            <h2>Web
                <br /> Design</h2>

        </div>

    </div>

</div>


<div className="lang-skill"  >
    <div className="about-txt">
        <h2 className="main-txt">
            My Skills
        </h2>
    </div>

    <div className="percent-card">

        <div className="skill-percent-card">
            <div className="skill-percent">
                <h1>50%</h1>
                <p>HTML</p>
            </div>

            <div className="skill-percent">
                <h1>20%</h1>
                <p>CSS</p>
            </div>

            <div className="skill-percent">
                <h1>10%</h1>
                <p>JS</p>
            </div>

            <div className="skill-percent">
                <h1>2%</h1>
                <p>PHP</p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
