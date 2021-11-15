import dev1 from '../../assets/img/developers/dev1.png'
import dev2 from '../../assets/img/developers/dev2.png'
import dev3 from '../../assets/img/developers/dev3.png'
import dev4 from '../../assets/img/developers/dev4.png'
import facebook_link from '../../assets/img/developers/links/icon-facebook.png'
import google_link from '../../assets/img/developers/links/icon-google.png'
import twitter_link from '../../assets/img/developers/links/icon-twitter.png'

function Developers () {
    return(
        <section className="developers">
            <div className="container2">
                <h1 className="main-title">розробники</h1>
                <div className="developers-wrap">
                    <div className="wrap-item">
                        <img src={dev1} alt="" className="wrap-img"/>
                        <h4 className="developer-name">Daniel Raynolds</h4>
                        <p className="dev-text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                        <div className="developer-links">
                            <a href="#" className="dev-facebook"><img src={facebook_link} alt="facebook"/></a>
                            <a href="#" className="dev-twitter"><img src={twitter_link} alt="twitter"/></a>
                            <a href="#" className="dev-google"><img src={google_link} alt="google"/></a>
                        </div>
                    </div>
                    <div class="wrap-item">
                        <img src={dev2} alt="" class="wrap-img"/>
                        <h4 className="developer-name">Nick Parson</h4>
                        <p className="dev-text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                        <div className="developer-links">
                            <a href="#" className="dev-facebook"><img src={facebook_link} alt="facebook"/></a>
                            <a href="#" className="dev-twitter"><img src={twitter_link} alt="twitter"/></a>
                            <a href="#" className="dev-google"><img src={google_link} alt="google"/></a>
                        </div>
                    </div>
                    <div className="wrap-item">
                        <img src={dev3} alt="" className="wrap-img"/>
                        <h4 className="developer-name">William Stanley</h4>
                        <p className="dev-text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                        <div class="developer-links">
                            <a href="#" className="dev-facebook"><img src={facebook_link} alt="facebook"/></a>
                            <a href="#" className="dev-twitter"><img src={twitter_link} alt="twitter"/></a>
                            <a href="#" className="dev-google"><img src={google_link} alt="google"/></a>
                        </div>
                    </div>
                    <div className="wrap-item">
                        <img src={dev4} alt="" class="wrap-img"/>
                        <h4 className="developer-name">Sarah Noel</h4>
                        <p className="dev-text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                        <div className="developer-links">
                            <a href="#" className="dev-facebook"><img src={facebook_link} alt="facebook"/></a>
                            <a href="#" className="dev-twitter"><img src={twitter_link} alt="twitter"/></a>
                            <a href="#" className="dev-google"><img src={google_link} alt="google"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Developers;