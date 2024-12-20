import { Link } from "react-router-dom";

const LinkButton = ({ link, text }) => {
  return (
    <Link to={link}>
      <button className="text-white mt-5 rounded bg-gradient-to-r from-blue-500 to-purple-500">
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
