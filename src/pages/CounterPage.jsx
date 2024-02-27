import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";

const CounterPage = () => {
  const dispatch = useDispatch();

  const count = useSelector((store) => store.counterReducer.count);

  return (
    <div className="d-flex justify-content-center  align-items-center w-full vh-100">
      <div className="d-flex justify-content-center gap-4 align-items-center ">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Decrease
        </button>
        <span className="lead fw-bols">{count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Increase
        </button>
        <input
          type="number"
          className="w-25 rounded-3"
          onChange={(e) => dispatch(setCount(+e.target.value))}
        />
      </div>
    </div>
  );
};

export default CounterPage;
