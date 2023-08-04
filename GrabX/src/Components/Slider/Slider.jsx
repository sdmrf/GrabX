import "./Slider.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Slider = () => {
  return (
    <div className="Slider">
      <div className="Container">
        Slider
      </div>
      <div className="Icons">
        <div className="Icon">
          <ArrowBackIcon />
        </div>
        <div className="Icon">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>

  )
}

export default Slider