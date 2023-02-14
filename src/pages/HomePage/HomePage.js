import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import HomeSvg from "./HomeSvg.svg";
import Advantages from "../../components/Advantages/Advantages";
import Services from "../../components/Services/Services";
import OurServices from "../../components/OurServices/OurServices";

import "./HomePage.scss";
import NewsList from "../../components/News/NewsList";
import ReviewList from "../../components/ReviewList/ReviewList";

import Form from "../../components/Form/Form";
import OurWorks from "../../components/OurWorks/OurWorks";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <section className="hero" aria-labelledby="hero__title">
        <h1 id="hero__title" className="hero__title">
          Современная и&nbsp;надёжная&nbsp;защита
        </h1>
        <div className="hero__description">
          <p>
            Найдите идеальный вариант сами или&nbsp;предоставьте это&nbsp;нам
          </p>
        </div>
        <Button icon={HomeSvg}>заказать ворота</Button>
      </section>

      <section aria-labelledby="about__title" className="about">
        <h2 id="about__title" className="about__title">
          Кто такие Selim trade?
        </h2>
        <div className="about__description">
          <p>Мы являемся официальным представителем DOORHAN.</p>
          <p>
            Производственно-монтажная компания Selim&nbsp;trade основана в 2003
            году.
          </p>
          <p>
            Основа нашей деятельности - это продажа и монтаж ворот, рольставней,
            шлагбаумов, рольштор, жалюзи и многое другое.
          </p>
        </div>
      </section>
      <section>
        <OurServices />
      </section>
      <section aria-labelledby="advantages__title" className="advantages">
        <h2 id="advantages__title" className="advantages__title">
          Наши преимущества
        </h2>
        <Advantages />
      </section>
      <section>
        <NewsList />
      </section>
      <section>
        <OurWorks/>
      </section>
      <section aria-labelledby="services__title" className="services">
        <h2 id="services__title" className="services__title">
          Сервис
        </h2>
        <Services />
      </section>
      <section>
        <ReviewList />
      </section>

      <section>
        <Form />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
