import { BrowserRouter as Browser, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import History from "./pages/History"
import Plans from "./pages/Plans"
import Contact from "./pages/Contact"
import Container from "./components/Container"
import MenuBar from "./components/MenuBar"
import Footer2 from "./components/Footer2"

function App() {
	return (
		<Browser >
			<MenuBar style="menu" />

			<Container customClass='min-height'>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/history" element={<History />} />
					<Route path="/plans" element={<Plans/>} />
					<Route path="/contact" element={<Contact/>} />
				</Routes>
			</Container>

      <Footer2/>
		</Browser>
  )
}

export default App
