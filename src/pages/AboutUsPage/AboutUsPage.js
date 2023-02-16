import stbISO from "../../images/stbIso.png"
import stbManagement from "../../images/stbManagement.jpg"
import "./AboutUsPage.css"


const AboutUsPage = () => {
return ( <div className="about">
<aside className="slogan"> О компании  </aside>
<div> 
<p>
На ОАО «Гомельский ЭМЗ» сертифицирована система менеджмента здоровья и безопасности при профессиональной деятельности применительна к разработке, производству и ремонту нестандартизированного оборудования для железнодорожного транспорта на соответствие требованиям СТБ ISO 45001-2020.
</p>
<img src={stbISO} alt = "stb ISO" />
</div>

<div> 
<p> На  ОАО «Гомельский ЭМЗ»  сертифицирована система менеджмента качества применительна  к разработке, производству и ремонту нестандартизированного оборудования для железнодорожного транспорта на соответствие требованиям ГОСТ ISO 9001-2011(ISO 9001:2008) которая охватывает весь спектр деятельности предприятия.
</p>
<img src={stbManagement} alt="stb Management" />
</div>



</div>)

}
export default AboutUsPage