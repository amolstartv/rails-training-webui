import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import SignIn from './SignIn'

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="sign_in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};
