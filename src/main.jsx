import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <div  className='max-w-[93%] mx-auto'>
     <RouterProvider router={router} />
  
   </div>
)
