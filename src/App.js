import React, {useState, useEffect, useRef} from 'react';
import { gsap, Expo} from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Menu_Eng from "./Menu";
import Categories from "./Categories";
import items from "./data"
import logo from "./logo.jpg"
import './App.css';

gsap.registerPlugin(CSSRulePlugin);
const engCategories = ["all", ...new Set(items.map((item) => item.category))]
const rusCategories = ["Все", ...new Set(items.map((item) => item.category_rus))]
const geoCategories = ["ყველა", ...new Set(items.map((item) => item.category_geo))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] =useState("");
  const [categories, setCategories] = useState(engCategories);
  const [langId, setLang] = useState("eng");
  const transition_overlay = useRef(null);




  const filterItems = (category, langId) => {

    

    setActiveCategory(category);

    const newItems = items.filter((item) => item.category === category);
    const newItems_rus = items.filter((item) => item.category_rus === category)
    const newItems_geo = items.filter((item) => item.category_geo === category)

    if (category === "all") {
      setMenuItems(items);
      return;
    }
    if (category === "Все") {
      setMenuItems(items);
      return;
    }
    if (category === "ყველა") {
      setMenuItems(items);
      return;
    }
    if (langId === "rus") {
      setMenuItems(newItems_rus);
      console.log(menuItems)
      return;
    } 
    if (langId === "eng") {
      setMenuItems(newItems);
      console.log(menuItems)
      return;
    }
    if (langId === "geo") {
      setMenuItems(newItems_geo);
      console.log(menuItems)
      return;
    } else return (null)

  };


  
  useEffect(() => {
    gsap.to(
      transition_overlay.current,
      3,
      {
          delay: 2,
          opacity: 1, 
          top: "-270%", 
          ease: Expo.easeInOut
      },

  )
  })

  const setRus = () => {
    setLang("rus")
    setCategories(rusCategories)
  }
  const setEng= () => {
    setLang("eng")
    setCategories(engCategories)
  }
  const setGeo = () => {
    setLang("geo")
    setCategories(geoCategories)
  }

  

  const MenuList = 
  langId === "eng" ? "Menu List" : 
  langId === "rus" ? "Меню" : 
  langId === "geo" ? "Menu List" : (null)

  return (
    <div className="main_back">
      <div className="backpic_1"></div>
      <div className="backpic_2"></div>
      <div className="backpic_3"></div>
      {/* // Site_Enter_gif */}
      <div className="transition" ref={transition_overlay}>
        <div className="logo_gif"></div>
      </div>

      <section className="menu section">
          <div className="title">
            <img src={logo} alt="logo" className="logo" />
            <h2 className="title_text">{MenuList}</h2>
            <div className="lang_container">
                <button className=
                {langId === "rus" ? "active_lang" : "lang_button"} 
                onClick={() => setRus()}>rus</button>
                <button className=
                {langId === "eng" ? "active_lang" : "lang_button"} 
                onClick={() => setEng()}>eng</button>
                <button className=
                {langId === "geo" ? "active_lang" : "lang_button"} 
                onClick={() => setGeo()}>geo</button>
            </div>
            <div className="underline"></div>
          </div>
        <Categories categories={categories} activeCategory={activeCategory}
        filterItems={filterItems} langId={langId}/>
        <Menu_Eng items={menuItems} langId={langId}/>

      </section>
      <div className="credit_container">
            <div className="underline_bottom">
              <a className="credit_text" href="https://github.com/justmaster?tab=repositories"> 
                justmaster
              </a>
            </div>
      </div>

    </div>
  );

}
export default App;

