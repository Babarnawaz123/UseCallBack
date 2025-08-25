import "./App.css";
import UseCallBack from "./UseCallBack";
import UpdatedUseCallBack from "./UpdatedUsecallBack";
function App() {
  return (
    <>
      <div>
        <h2>With UseCallBack hook</h2>
        <UseCallBack />
        <hr />
        <h2>Without UseCallBack hook</h2>
        <UpdatedUseCallBack />
      </div>
    </>
  );
}

export default App;
