import Link from "react-dom";
import * as Icons from "../../assets/icons/";
import * as Images from "../../assets/images/";




const Navbar = () => {
    return(
    <>
        <nav>
            <div>
                {/* <div>
                    <img src ={Images.Hotcoffee} className="" alt="" />

                </div> */}
                <div>
                    <input type="text" className="" placeholder="Search...."/>
                    <Link to="/">Home</Link>
                    <Link to="/article">Articles</Link>
                    <img src={Icons.Instagram} className="instagram" alt=""/>
                </div>
            </div>
        </nav>
    </>
    );
};
export default Navbar;