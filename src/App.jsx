import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path="/jobs" element={<Jobs/>}></Route>
      <Route path="*" element={<NotFound/>} />
      <Route path='/job/:id' element={<JobPage/>}></Route>
    </Route>
  )
);


function App() {
  return (<RouterProvider router={router}/>)
}

export default App

