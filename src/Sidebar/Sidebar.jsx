import './Sidebar.css';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import Category from './Category/Category';

function Sidebar({ handleRadioChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleRadioChange={handleRadioChange} />
      <Price handleRadioChange={handleRadioChange} />
      <Colors handleRadioChange={handleRadioChange} />
    </section>
  );
}

export default Sidebar;
