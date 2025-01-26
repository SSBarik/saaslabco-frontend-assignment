import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Highly Rated <span className="underline-text">Kickstarter</span>{" "}
        Projects &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
