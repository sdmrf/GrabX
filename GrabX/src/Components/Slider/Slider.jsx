import "./Slider.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";

const data = [
  "https://player.vimeo.com/external/372187755.hd.mp4?s=787da42e82523dd907c26f7eadc3062658871e8a&profile_id=175&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/353239422.hd.mp4?s=cb961ef9a5adc1b4c012b74702a5b86f772359c7&profile_id=172&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/372192428.hd.mp4?s=666a3b32da30e45ebba0c69af6f8cbf28abf18e2&profile_id=175&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/441031857.hd.mp4?s=a6321da021fb9b066e7e727053a71bcd3e809bf5&profile_id=172&oauth2_token_id=57447761",
]


const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide(currSlide > 0 ? currSlide - 1 : data.length - 1);
  };
  const nextSlide = () => {
    setCurrSlide(currSlide < data.length - 1 ? currSlide + 1 : 0);
  };

  return (
    <div className="Slider">
      <div className="Container" style={{transform: `translateX(-${currSlide*100}vw)`}}>
        {data.map((videoUrl, index) => (
          <video key={index} autoPlay muted loop className="VideoBackground">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <div className="Icons">
        <div className="Icon" onClick={prevSlide}>
          <ArrowBackIcon className="Arrow" />
        </div>
        <div className="Icon" onClick={nextSlide}>
          <ArrowForwardIcon className="Arrow" />
        </div>
      </div>
    </div>

  )
}

export default Slider