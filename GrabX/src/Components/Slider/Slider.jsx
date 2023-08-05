import "./Slider.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";

const data = [
  "https://player.vimeo.com/external/372187755.hd.mp4?s=787da42e82523dd907c26f7eadc3062658871e8a&profile_id=175&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/353239422.hd.mp4?s=cb961ef9a5adc1b4c012b74702a5b86f772359c7&profile_id=172&oauth2_token_id=57447761",
  "https://vod-progressive.akamaized.net/exp=1691245979~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4438%2F14%2F372192428%2F1546321399.mp4~hmac=a97382425066c890035aedfdf2dfa2261cfc6b83bbf8514773b1abb2b56b3f0e/vimeo-prod-skyfire-std-us/01/4438/14/372192428/1546321399.mp4",
  "https://vod-progressive.akamaized.net/exp=1691248442~acl=%2Fvimeo-transcode-storage-prod-us-west1-h264-2160p%2F01%2F3206%2F17%2F441031857%2F1928921612.mp4~hmac=8cfbeecc09ebcdcfd3583f6f2d46af78a11009af1f935a8b2868df97d594aeb0/vimeo-transcode-storage-prod-us-west1-h264-2160p/01/3206/17/441031857/1928921612.mp4",
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
          <ArrowBackIcon />
        </div>
        <div className="Icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>

  )
}

export default Slider