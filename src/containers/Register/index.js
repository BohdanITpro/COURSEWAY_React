function Register () {
    return(
    <section className="register">
        <div className="container2">
            <h1 className="main-title-white">зареєструйся зараз</h1>
            <p>Та отримуй задоволення від навчання</p>
            <form className="reg-form" action="">
                <input className="input" type="text" placeholder="Name:" required/>
                <input className="input" type="email" placeholder="Email:" required/>
                <button className="btn-large btn-bgc-red">Submit</button>
            </form>
        </div>
    </section>
    );
}

export default Register;
