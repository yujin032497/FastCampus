import { useState } from "react";

const IMAGE_1_URL = 
    "https://images.unsplash.com/photo-1522747776116-64ee03be1dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTkyJThEJUVBJUIyJUJEfGVufDB8fDB8fHww"

const IMAGE_2_URL =
    "https://images.unsplash.com/photo-1707007694363-b8afb46ed639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVEJTkyJThEJUVBJUIyJUJEfGVufDB8fDB8fHww"

const IMAGE_3_URL=
    "https://images.unsplash.com/photo-1707007785777-9324ce8cf42d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVFRCU5MiU4RCVFQSVCMiVCRHxlbnwwfHwwfHx8MA%3D%3D"

export default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);
    
    return (
        <div>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 1}
                        readOnly 
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img alt="scenry 1" src={IMAGE_1_URL} />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(3)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(2)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-2"
                        checked={activeImage === 2}
                        readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img alt="scenry 2" src={IMAGE_2_URL} />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(1)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(3)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-3"
                        checked={activeImage === 3}
                        readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img alt="scenry 3" src={IMAGE_3_URL} />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(2)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(1)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label
                            onClick={() => setActiveImage(1)}
                            className="carousel__dot"
                            id="img-dot-1"
                        ></label>
                        <label
                            onClick={() => setActiveImage(2)}
                            className="carousel__dot"
                            id="img-dot-2"
                        ></label>
                        <label
                            onClick={() => setActiveImage(3)}
                            className="carousel__dot"
                            id="img-dot-3"
                        ></label>
                    </div>
                </ul>
            </div>
        </div>
    );
}