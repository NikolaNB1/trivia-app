import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectSetTrivia } from "../store/trivia/selectors";
import { dovuciTriviu } from "../store/trivia/slice";

const Trivia = () => {
  const dispatch = useDispatch();
  const trivias = useSelector(selectSetTrivia);
  const [showAnswers, setShowAnswers] = useState([]);

  useEffect(() => {
    dispatch(dovuciTriviu());
  }, []);

  return (
    <div>
      <div>
        {trivias && trivias.length > 0 ? (
          <ul className="list-group container">
            {trivias.map((trivia, id) => (
              <li
                className="list-group-item list-group-item-secondary"
                key={id}
                onClick={() =>
                  setShowAnswers((prevState) => [...prevState, id])
                }
              >
                {trivia.question}
                {showAnswers.includes(id) && <p>Answer: {trivia.answer}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="container">No trivia available.</p>
        )}
      </div>
    </div>
  );
};

export default Trivia;
