import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AdbRoundedIcon from '@mui/icons-material/AdbRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import "./footer.css"

export default function Footer(){

    return(
        <footer>
            <div className="footer-content">
                <p>Source Code by David Ebschke</p>
                <ul className="socials">
                    <li><a href="https://google.de"><i className="HomeBottom"></i><CottageRoundedIcon/></a></li>
                    <li><a href="https://facebook.com"><i className="Facebook"> <FacebookRoundedIcon/></i></a></li>
                    <li><a href="https://google.de"><i className="BugReport"><AdbRoundedIcon/></i></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>copyright &copy;2022 <a href="https://github.com/davidebschke">David Ebschke</a>  </p>
                </div>
            </div>
        </footer>
    )
}
