import certificate_img from '../../assets/img/certificate/education.png'

function Certificate () {
    return(
        <section className="certificate">
            <div className="certificate-left">
                <img src={certificate_img} alt="certificate"/>
            </div>
            <div className="certificate-right">
                <h2>сертифікат від гарварду</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type.</p>
                <button className="btn-large btn-bgc-red">отримати!</button>
            </div>
    </section>
    );
};

export default Certificate;
