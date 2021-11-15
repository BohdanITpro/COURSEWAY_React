
import slide1 from '../../assets/img/slider/slide1.png'
import slide2 from '../../assets/img/slider/slide2.png'
import slide3 from '../../assets/img/slider/slide3.png'
import slide4 from '../../assets/img/slider/slide4.png'
import Slider from 'react-slick'
import React, { Component } from 'react'

export default class PartnersSlider extends Component{
    render() {
        const settings = {
            arrows:true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            speed: 700,
            autoplay:true,
            autoplaySpeed:3000,
            responsive: [
                {
                    breakpoint: 1190,
                    settings:{
                        arrows: false,
                        slidesToShow: 3,
                    },
                    
                },
                {
                    breakpoint: 900,
                    settings:{
                        arrows: false,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings:{
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 540,
                    settings:{
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <section className="partners">
                <div className="container2">
                    <h1 className="main-title">партнери - освітні заклади</h1>
                    <div className="slider">
                        <Slider {...settings}>
                            <div className="slider__item">
                                <img src={slide1} alt=""/>
                                <a href="#" className="slide-title">Cambridge</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide2} alt=""/>
                                <a href="#" className="slide-title">Harvard</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide3} alt=""/>
                                <a href="#" className="slide-title">MIT</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide4} alt=""/>
                                <a href="#" className="slide-title">UCLA</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide1} alt=""/>
                                <a href="#" className="slide-title">Cambridge</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide2} alt=""/>
                                <a href="#" className="slide-title">Harvard</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide3} alt=""/>
                                <a href="#" className="slide-title">MIT</a>
                            </div>
                            <div className="slider__item">
                                <img src={slide4} alt=""/>
                                <a href="#" className="slide-title">UCLA</a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
    
} 

