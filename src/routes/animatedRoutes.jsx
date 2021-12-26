import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './home';
import Photography from './photography';
// const Photography = lazy(() => import('./routes/photography'));

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route exact path='/photography' element={<Photography />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
