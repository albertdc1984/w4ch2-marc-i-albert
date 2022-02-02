const Lletra = ({ text, actionOnClick }) => {
  return (
    <li className="letter">
      <a href={text.text} onClick={actionOnClick}>
        {text.text.toUpperCase()}
      </a>
    </li>
  );
};

export default Lletra;
