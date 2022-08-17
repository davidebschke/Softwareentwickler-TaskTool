import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import "./footer.css"
export default function Footer(){


    return(



        <footer>

            <div className="footer-content">
                <p>Source Code by David Ebschke</p>
                <ul className="socials">
                    <li><a href="https://facebook.com"><i className="fa fa-facebook"><FacebookRoundedIcon/> </i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>copyright &copy;2022 <a href="https://github.com/davidebschke">David Ebschke</a>  </p>
                </div>
            </div>

        </footer>
    )



}