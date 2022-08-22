import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import "./footer.css"

export default function Footer(){

    return(
        <footer>
            <div className="footer-content">
                <p>Source Code by David Ebschke</p>
                <ul className="socials">
                    <li><a href="https://capstone-sett.herokuapp.com/#/home" target="_blank" rel={"noreferrer"}><i className="HomeBottom"><CottageRoundedIcon/></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100080679306056" target="_blank" rel={"noreferrer"}><i className="Facebook"> <FacebookRoundedIcon/></i></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>copyright &copy;2022 <a href="https://github.com/davidebschke" target="_blank" rel={"noreferrer"}>David Ebschke</a>  </p>
                </div>
            </div>
        </footer>
    )
}
