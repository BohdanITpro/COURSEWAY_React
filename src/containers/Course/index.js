import algoritms from '../../assets/img/course/course_1.png'
import code from '../../assets/img/course/course_2.png'
import economy from '../../assets/img/course/course_3.png'
import history from '../../assets/img/course/course_4.png'

function Course () {
    return(
        <section className="course">
        <div className="container2">
            <h1 className="main-title">доступні курси</h1>
            <h3 className="sub-title">Запишіться прямо зараз на безкоштовні курси</h3>
            <div className="course-wrap">
                <div className="course-item">
                    <div class="course-left">
                        <h2 className="title">Основи програмування</h2>
                        <p className="text">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</p>
                        <a href="#" className="link link-red">Read more...</a>
                        <a href="#" className="course-btn">Зареєструватись на курс!</a>
                    </div>
                    <div className="course-right">
                        <img src={algoritms} alt=""/>
                    </div>
                </div>
                <div className="course-item">
                    <div className="course-left">
                        <h2 className="title">Розробка та <br/> аналіз алгоритмів</h2>
                        <p className="text">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</p>
                        <a href="#" className="link">Read more...</a>
                        <a href="#" className="course-btn">Зареєструватись на курс!</a>
                    </div>
                    <div className="course-right">
                        <img src={code} alt=""/>
                    </div>
                </div>
                <div className="course-item">
                    <div className="course-left">
                        <h2 className="title">Економіка <br/> для всіх</h2>
                        <p className="text">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</p>
                        <a href="#" className="link">Read more...</a>
                        <a href="#" className="course-btn">Зареєструватись на курс!</a>
                    </div>
                    <div className="course-right">
                        <img src={economy} alt=""/>
                    </div>
                </div>
                <div className="course-item">
                    <div className="course-left">
                        <h2 className="title">Історія <br/> України</h2>
                        <p className="text">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</p>
                        <a href="#" className="link">Read more...</a>
                        <a href="#" className="course-btn">Зареєструватись на курс!</a>
                    </div>
                    <div className="course-right">
                        <img src={history} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Course;