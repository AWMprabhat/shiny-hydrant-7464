import "./App.css";
import CompanyStore from "./Pages/Companies/CompanyStore";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Naukributton from "./Pages/Homepage/Naukributton.jsx";
import { SliderBox } from "./Pages/Homepage/SliderBox.jsx";



import AllRoutes from "./Routes/AllRoutes.jsx";

function App() {
	return (
		<div className="App">
			<AllRoutes />
			{/* <SliderBox /> */}
			{/* <Homepage /> */}
			{/* <Naukributton /> */}
			{/* <CompanyStore/> */}
		</div>
	);
}

export default App;
