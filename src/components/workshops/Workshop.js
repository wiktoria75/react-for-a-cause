import { useState } from 'react';
import FormPopup from '../../components/workshops/FormPopup';
import './Workshop.css'

const Workshop = ({ img, title, date, place, duration, description, price }) => {
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    //Potwierdzenie submita - na razie logowanie tekstu
    console.log(
      'Thank you for registering for the workshop!You will soon receive an email from us with with all the details!'
    );
    setModal(false);
  };

  const setWorkshopContent = () => (
      <div className="workshop-content">
        <h1 className="workshop-title">{title}</h1>
        <h3 className="workshop-date">{date}</h3>
        <h3 className="workshop-place">{place}</h3>
        <p className="workshop-description">{description}</p>
        <p className="workshop-duration">{duration}</p>
        <p className="workshop-info">{price}</p>
      </div>
  );


  return (
    <div className="workshop">
      <div className="workshop-wrapper">
        <img className="workshop-img" src={img} alt="{title}" />
      </div>
      <div className="text-wrapper">
        {setWorkshopContent()}
        <button type="submit" className="workshop-btn" onClick={() => setModal({ isOpen: true })}>
          REGISTER
        </button>
      </div>
      <FormPopup
        modal={modal}
        setModal={setModal}
        handleSubmit={handleSubmit}
        workshopTitle={`${title}-${date}-${place}`}
      />
    </div>
  );
};

export default Workshop;
