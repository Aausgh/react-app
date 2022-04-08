import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import layout from "./components/layout/layout";
import {Button,IconButton,Card,PageNotFound} from "./components/shared";
import ArticlePage from "./components/article/ArticlePage";
import homepage from "./components/home/homepage";


const App = () => {
    return(
        <>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<layout/>}>
                        <Route index element={<homepage/>}/>
                        <Route path ="/article" element={<ArticlePage/>}/>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            <h1>Hello</h1>
            <Button/>
            <Card/>
            <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;