const Lletra = ({ text }) => {
  return (
    <li className="letter">
      <a href={text.text}>{text.text.toUpperCase()}</a>
    </li>
  );
};

export default Lletra;
