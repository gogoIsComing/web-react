import Feature from '../Feature/Feature';
import './Features.css';

function Features(props) {
  return (
    <section className="features-section">
      <div className="line"></div>
      <h1>We’re different</h1>
      <div className="features">
        <Feature
          title="Snappy Process"
          text="Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms."
          name="process"
        />
        <Feature
          title="Affordable Prices"
          text="We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible."
          name="prices"
        />
        <Feature
          title="People First"
          text="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it."
          name="people"
        />
      </div>
    </section>
  );
}

export default Features;
