import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
function Header(){
    return(
        <div className="header">
            <div className="row d-flex justify-content-center pt-2">
                <img src = "./FPTimg.png" alt="img" className="banner-img"/>    
            </div>
            <nav class="custom-nav d-flex justify-content-center mt-3 mb-3 gap-4 ">
                <a className="text-white custom">Home</a>
                <a className="text-white custom">About</a>
                <a className="text-white custom">Contact</a>
            </nav>
        </div>
    )
}

export default Header;
