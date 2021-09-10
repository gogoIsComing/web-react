import Button from '../Button/Button';
import introMobile from '../../assets/images/image-intro-mobile.jpg';
import introDesktop from '../../assets/images/image-intro-desktop.jpg';
import './Banner.css';

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div>
          <img
            srcSet={introMobile + ' 480w, ' + introDesktop + ' 800w'}
            sizes="(max-width: 600px) 480px, 800px"
            src={introDesktop}
            alt="People"
          />
        </div>
        <div className="content">
          <div className="line"></div>
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button text="View plans" />
        </div>
      </div>
      <div className="left-intro"></div>
      <div className="right-intro"></div>
    </div>
  );
}

export default Banner;
