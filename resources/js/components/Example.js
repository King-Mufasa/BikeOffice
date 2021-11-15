import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import HomePage from './pages/user/home';
import LandingPage from './pages/landing';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import PercursosPage from './pages/user/percursos';
import PercursoPage from './pages/user/Percurso';
import TypologyPage from './pages/admin/typology';
import CityPage from './pages/admin/cities';
import CoursePage from './pages/admin/course';

function Example() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/percursos" element={<PercursosPage />} />
          <Route path="/percurso" element={<PercursoPage />} />
          <Route path="/admin.typology" element={<TypologyPage />} />
          <Route path="/admin.city" element={<CityPage />} />
          <Route path="/admin.course" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Example;

if (document.getElementById('root')) {
  ReactDOM.render(<Example />, document.getElementById('root'));
}
