import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components here
import HomePage from './Routes/HomePage.tsx'
import FormikPage from './Routes/Formik.tsx';
import ReactFinalFormPage from './Routes/ReactFinalForms.tsx';
import ReactHookFormPage from './Routes/ReactHookForm.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}   >
            <Route path="/formik" element={<FormikPage />} index={true} />
            <Route path="/react-final-form" element={<ReactFinalFormPage />} />
            <Route path="/react-hook-form" element={<ReactHookFormPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
