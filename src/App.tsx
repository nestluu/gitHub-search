import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Favorites } from './pages/Favotites'
import { HomePage } from './pages/HomePage'

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</>
	)
}

export default App
