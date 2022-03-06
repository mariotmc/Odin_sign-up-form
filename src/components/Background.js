import logo from "../media/logo.png";

const Background = () => {
  return (
    <div className="background-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-image" />
        <h1 className="logo-title">ODIN</h1>
      </div>
    </div>
  );
};

export default Background;
