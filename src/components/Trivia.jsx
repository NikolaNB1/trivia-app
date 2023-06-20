import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectSetCategory,
  selectSetTrivia,
  selectSetValue,
} from "../store/trivia/selectors";
import {
  dovuciTriviaKategorije,
  dovuciTriviaValue,
  dovuciTriviu,
} from "../store/trivia/slice";

const Trivia = () => {
  const dispatch = useDispatch();
  const trivias = useSelector(selectSetTrivia);
  const [showAnswers, setShowAnswers] = useState([]);
  const categories = useSelector(selectSetCategory);
  const values = useSelector(selectSetValue);

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
    setShowAnswers([]);
  };

  const handleSearchValue = (event) => {
    const value = parseInt(event.target.value);
    if (value) {
      return dispatch(dovuciTriviaValue(value));
    }
  };

  return (
    <div>
      <div className="container w-25">
        <div>
          Search question by value:
          <input
            className="form-control"
            type="number"
            onChange={handleSearchValue}
          />
        </div>
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
        <ul className="list-group container">
          {values?.map((value, id) => (
            <li
              className="list-group-item list-group-item-success"
              key={id}
              onClick={() => setShowAnswers((prevState) => [...prevState, id])}
            >
              {value.question}
              {showAnswers.includes(id) && <p>Answer: {value.answer}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="m-3">
        {trivias && values.length === 0 && trivias.length > 0 ? (
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
            {values.length > 0 ? null : <p>No content available.</p>}
          </p>
        )}
      </div>
    </div>
  );
};

export default Trivia;
