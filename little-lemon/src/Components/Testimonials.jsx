import ratings from "../Assets/Icons/rating.png";
import profile1 from "../Assets/Images/profile1.jpg";
import profile2 from "../Assets/Images/profile2.jpg";
import profile3 from "../Assets/Images/profile3.jpg";
import profile4 from "../Assets/Images/profile4.jpg";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonialHeader">
          <h1>Testimonials</h1>
        </div>

        <div className="reviewContainer">
          <div className="review">
            <img id="rating" src={ratings} t="ralatings" />
            <img id="profile" src={profile1} alt="Customer Pic" />
            <h2>Jaime Oliver</h2>
            <p>"Really enjoyed the atmosphere."</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile2} alt="Customer Pic" />
            <h2>Briana Hanson</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile3} alt="Customer Pic" />
            <h2>Frankie Bergstein</h2>
            <p>"You have to try the Greek Salad!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile4} alt="Customer Pic" />
            <h2>Grace Galdof</h2>
            <p>"Awesome place peaceful atmosphere with delicious food"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;