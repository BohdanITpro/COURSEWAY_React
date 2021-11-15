import facebook_blue from '../../assets/img/footer/blue/facebook_blue.png'
import google_blue from '../../assets/img/footer/blue/google_blue.png'
import twitter_blue from '../../assets/img/footer/blue/twitter_blue.png'
import facebook_red from '../../assets/img/footer/red/facebook_red.png'
import google_red from '../../assets/img/footer/red/google_red.png'
import twitter_red from '../../assets/img/footer/red/twitter_red.png'

function Footer () {
    return(
    <footer>
        <div className="container2">
            <p>Made with love by <span className="red">Alex Kuzmenko</span></p>
            <p>Inspired by <span className="red">PROMETHEUS</span></p>
            <div className="links-wrap">
                <div className="footer-links">
                    <a href="#"><img src={twitter_blue} alt="twitter"/></a>
                    <a href="#"><img src={facebook_blue} alt="facebook"/></a>
                    <a href="#"><img src={google_blue} alt="google"/></a>
                </div>
                <div className="footer-links">
                    <a href="#"><img src={twitter_red} alt="twitter"/></a>
                    <a href="#"><img src={facebook_red} alt="facebook"/></a>
                    <a href="#"><img src={google_red} alt="google"/></a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;