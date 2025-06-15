import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';
import EditJob from './pages/EditJob';
import JobPage , {jobLoader} from './pages/JobPage';
import AddJob from './pages/AddJob';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path="/jobs" element={<Jobs/>}></Route>
      <Route path="/add-job" element={<AddJob/>}></Route>
      <Route path="*" element={<NotFound/>} />
      <Route path='/job/:id' element={<JobPage/>} loader={jobLoader} hydrateFallbackElement={<h1>Loading...</h1>}></Route>
      <Route path='/job/edit/:id' element={<EditJob/>} loader={jobLoader} hydrateFallbackElement={<h1>Loading...</h1>}></Route>
    </Route>
  )
);


function App() {
  return (<RouterProvider router={router}/>)
}

export default App

