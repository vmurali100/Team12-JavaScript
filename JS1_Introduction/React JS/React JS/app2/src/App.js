import { ChildClassComponent, MainClassComponent, SliblingClassChildComponent } from "./Components/MultipleClassComponents";
import MultipleFunctionaCXomponents from "./Components/MultipleFunctionaComponents";
import { ParentComponent,ChildComponent } from "./Components/MultipleFunctionaComponents";



function App() {
  return (
    <div className="App">
      <h2>We are one family of member </h2>
      <MultipleFunctionaCXomponents />
      <ParentComponent/>
      <ChildComponent/>
      <MainClassComponent/>
     <ChildClassComponent/>
     <SliblingClassChildComponent/>
    </div>
  );
}

export default App;
