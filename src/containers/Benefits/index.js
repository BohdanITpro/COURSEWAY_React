import clock from '../../assets/img/benefits/Clock.svg';
import globe from '../../assets/img/benefits/Globe.svg';
import lyre from '../../assets/img/benefits/Lyre_Filled.svg';
import iphone from '../../assets/img/benefits/iPhone.svg';
import man from '../../assets/img/benefits/Man.svg';

function Benefits() {
  return (
    <section className="benefits">
      <div className="container2">
        <h1 className="main-title">переваги</h1>
        <div className="benefits-wrap">
          <div className="benefits-column">
            <div className="benefits-item benefits-clock">
              <img className="benefits-img" src={clock} alt="clock" />
                <h3 className="benefits-title">Будь-коли</h3>
                <p className="benefits-text">Навчайтесь у зручний для Вас час. Відеолекції, тести та форум доступні
                  цілодобово.</p>
            </div>
            <div className="benefits-item benefits-globe">
              <img className="benefits-img" src={globe} alt="globe" />
                <h3 className="benefits-title">Будь-де</h3>
                <p className="benefits-text">Проходьте курси, не виходячи з дому чи в дорозі. Все, що Вам знадобиться, –
                  це доступ до інтернету.</p>
            </div>
          </div>
          <div className="benefits-center-img">
            <img src={lyre} alt="" />
          </div>
          <div className="benefits-column">
            <div className="benefits-item benefits-iPhone">
              <img className="benefits-img" src={iphone} alt="iPhone" />
                <h3 className="benefits-title">Будь-який пристрій</h3>
                <p className="benefits-text">Навчайтесь на комп’ютері, планшеті чи телефоні: сайт підлаштується під Ваш
                  пристрій.</p>
            </div>
            <div className="benefits-item benefits-man">
              <img className="benefits-img" src={man} alt="man" />
                <h3 className="benefits-title">Будь-хто</h3>
                <p className="benefits-text">Наші курси абсолютно безкоштовні – захмарні ціни більше ніколи не стануть
                  на заваді найкращій освіті.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Benefits;
