import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dovuciSalu } from "../store/counter/slice";
import { selectSetJokes } from "../store/counter/selectors";

const Chuck = () => {
  const dispatch = useDispatch();
  const chuckJokes = useSelector(selectSetJokes);

  useEffect(() => {
    dispatch(dovuciSalu());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(dovuciSalu())}>Get new joke</button>

      <h2>{chuckJokes.value}</h2>
    </div>
  );
};
export default Chuck;
