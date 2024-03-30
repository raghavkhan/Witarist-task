import "./App.css";
import DisplayInfo from "./containers/DisplayInfo";
// import Form from "./containers/Form";
const styles = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%,-50%)",
  top: "10%",
};
function App() {
  return (
    <>
      <div className='container'>
        <h2 style={styles}>Task Management Application</h2>
        {/* <Form /> */}
        <DisplayInfo />
      </div>
    </>
  );
}

export default App;
