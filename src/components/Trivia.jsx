import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectSetCategory, selectSetTrivia } from "../store/trivia/selectors";
import { dovuciTriviaKategorije, dovuciTriviu } from "../store/trivia/slice";

const Trivia = () => {
  const dispatch = useDispatch();
  const trivias = useSelector(selectSetTrivia);
  const [showAnswers, setShowAnswers] = useState([]);
  const categories = useSelector(selectSetCategory);

  useEffect(() => {
    dispatch(dovuciTriviaKategorije());
    dispatch(dovuciTriviu());
  }, [dispatch]);

  const handleCategorySelect = (event) => {
    const categoryId = parseInt(event.target.value);
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );
    dispatch(dovuciTriviu(selectedCategory.id));
  };

  return (
    <div>
      <div className="container w-25">
        <h4>Select category: </h4>
        <select className="form-control" onChange={handleCategorySelect}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="m-3">
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
          <p className="container" style={{ textAlign: "center" }}>
            No content available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Trivia;
