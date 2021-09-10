import Column from '../Column/Column';
import logo from '../../assets/images/logo.svg';
import './Footer.css';

function Footer(props) {
  return (
    <footer>
      <div>
        <img src={logo} alt="Insure" className="logo" />
        <div className="social">
          <a href="#">
            <div className="facebook"></div>
          </a>
          <a href="#">
            <div className="twitter"></div>
          </a>
          <a href="#">
            <div className="pintrest"></div>
          </a>
          <a href="#">
            <div className="instagram"></div>
          </a>
        </div>
      </div>
      <div>
        <Column
          title="Our company"
          list={['How we work', 'Why Insure?', 'View plans', 'Reviews']}
        />
        <Column
          title="Help me"
          list={['FAQ', 'Terms of use', 'Privacy policy', 'Cookies']}
        />
        <Column title="Contact" list={['Sales', 'Support', 'Live chat']} />
        <Column title="Others" list={['Careers', 'Press', 'Licenses']} />
      </div>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ahmad AlZoubi</a>.
      </div>
    </footer>
  );
}

export default Footer;
