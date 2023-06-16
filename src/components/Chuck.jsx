import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dovuciKategorije, dovuciSalu } from "../store/chuck/slice";
import { selectSetCategories, selectSetJokes } from "../store/chuck/selectors";

const Chuck = () => {
  const dispatch = useDispatch();
  const chuckJokes = useSelector(selectSetJokes);
  const categories = useSelector(selectSetCategories);

  useEffect(() => {
    dispatch(dovuciSalu());
    dispatch(dovuciKategorije());
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(dovuciSalu())}
        >
          Get new joke
        </button>
      </div>

      <h4 className="m-5">{chuckJokes.value}</h4>

      {categories.map((category, id) => {
        return (
          <button
            style={{ margin: "5px" }}
            className="btn btn-secondary"
            onClick={() => dispatch(dovuciSalu(category))}
            key={id}
          >
            Get {category} joke
          </button>
        );
      })}
    </div>
  );
};
export default Chuck;
