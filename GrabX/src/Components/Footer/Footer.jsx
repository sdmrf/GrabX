import Payment from '../../Assets/stripe.png'
import './Footer.scss'

import { Link } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const linkedInURL = 'https://www.linkedin.com/in/syedmarufali/';
const githubURL = 'https://github.com/sdmrf';
const instagramURL = 'https://www.instagram.com/sdmrfa/';
const twitterURL = 'https://twitter.com/sdmrfa';


const Footer = () => {
  return (
    <div className="Footer">
      <div className="Top">
        <div className="Item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>

        <div className="Item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="Item">
          <h1>About Me</h1>
          <span>
            Hello! I&apos;m Syed Maruf Ali, a highly motivated developer with a deep passion for web development and software engineering. With a focus on continuous learning and improvement, I have honed my expertise in various programming languages, including Python and Java. Moreover, my hands-on experience with React JS enables me to craft dynamic and intuitive web applications.
          </span>
        </div>
        <div className="Item">
          <h1>Contact Me</h1>
          <span>
            If you have any questions, collaboration proposals, or simply want to say hello, I&apos;d love to hear from you! Feel free to reach out through any of the following means:
          </span>
          <div className="Icons">
            <div className="Icon">
              {/* LinkedIn Icon */}
              <Link href={linkedInURL} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </Link>
            </div>
            <div className="Icon">
              {/* GitHub Icon */}
              <Link href={githubURL} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </Link>
            </div>
            <div className="Icon">
              {/* Instagram Icon */}
              <Link href={instagramURL} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </Link>
            </div>
            <div className="Icon">
              {/* Twitter Icon */}
              <Link href={twitterURL} target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="Left">
          <span className="Logo">GrabX</span>
          <span className="Copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="Right">
          <img src={Payment} alt="Payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer