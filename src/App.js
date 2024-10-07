import React from "react";
  
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Home from './home'
import Blog from './blog'
  
// function BlogPost() {
//   let { id } = useParams();
//   return <div style={{ fontSize: "50px" }}>
//            Now showing post {id}
//          </div>;
// }
  
// function Home() {
//   return <h3>home page </h3>;
// }
  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page/:id"  element={<Blog />} />
          {/* <BlogPost /> */}
        {/* </Route> */}
        <Route path="/"   element={<Home />}  />
          {/* <Home /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;
// import React from "react";
// import Blog from "./blog";
// import Home from "./home";
// import {BrowserRouter, Route, Routes} from "react-router-dom";



// const App = () => {
//   return (
//       <BrowserRouter>
//         <Routes>  
//           <Route path="/page/:id">
//            <Blog />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//   );
// }

// export default App