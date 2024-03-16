import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const swiperData = [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis exercitationem amet beatae dolores tempora accusamus totam sequi, laborum similique eius commodi sed soluta quia aperiam, sit quasi deserunt! Atque!",
      button: <Button onClick={() => alert("Clicked")}>Click Me!</Button>
    },
    {
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis exercitationem amet beatae dolores tempora accusamus totam sequi, laborum similique eius commodi sed soluta quia aperiam, sit quasi deserunt! Atque!",
      button: <Button onClick={() => alert("Clicked")}>Click Me!</Button>
    },
    {
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis exercitationem amet beatae dolores tempora accusamus totam sequi, laborum similique eius commodi sed soluta quia aperiam, sit quasi deserunt! Atque!",
      button: <Button onClick={() => alert("Clicked")}>Click Me!</Button>
    }
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <Button
        onClick={() =>
          i18n.language === "ka"
            ? i18n.changeLanguage("en")
            : i18n.changeLanguage("ka")
        }
      >
        {t("ChangeLanguage")}
      </Button>
      <br />
      <Button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        {t("ChangeTheme")}
      </Button>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
      >
        {swiperData?.map((slideData, i) => (
          <SwiperSlide key={i}>
            <h2>{slideData.title}</h2>
            <p>{slideData.content}</p>
            {slideData.button}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HomePage;
