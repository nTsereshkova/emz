import { useNavigate } from "react-router-dom"
import { MainPageProductsList } from "../../components/MainPageProductsList"
import {BsArrowUpRight} from "react-icons/bs"
import "./MainPage.css"

const MainPage = () => {
    const navigate = useNavigate()

const redirectToContactsHandler = () => {
navigate("contacts")
}


return (<div className="main">

<aside className="slogan"> Надежный партнер </aside>
<div className="first-section-div">
<div className="first-section-button-div" onClick={redirectToContactsHandler}> 
<div className="first-section-button" > Связаться с  нами </div> 
<BsArrowUpRight className="first-section-button-arrow"/>
</div>

<section  className="section first-section"> 
Открытое акционерное общество «Гомельский электромеханический завод » имеет 20-летний опыт на рынке ремонта и изготовления замедлителей вагонных различных типов и исполнений ( по числу звеньев, по высоте,по ширине колеи).

Замедлители производства ОАО «Гомельский ЭМЗ» выгодно отличаются надежностью, качеством и ценой от аналогов , выпускаемых на территории СНГ. Имеется опыт полной реконструкции и модернизации сортировочных горок.

Одной из главных задач является освоение и серийный выпуск новых видов продукции, в том числе и такой сложной как замедлители вагонные универсальные, домкраты тепловозные, домкраты путейные установки УДС, виброрыхлители, торцевателя леса, а также производит ремонт изготавлиемой и применяемой на железной дороге продукции. Также ОАО «Гомельский электромеханический завод» производит оборудование для оснащения локомотивных и вагонных депо, детали и запасные части для ремонта вагонов и локомотивов, детали верхнего строения пути, широкий спектр резинотехнических изделий (кольца,манжеты,амортизаторы),средства малой механизации для ремонта железнодорожных путей. Имеется собственное литейное производство цветных и черных металлов,оборудование для переработки пластмасс всех типов.
</section>
</div>

<section className="dark-section"> 
<aside className="slogan">  Наши компетенции  </aside>
<ul> 
<li>Открытое акционерное общество «Гомельский электромеханический завод » имеет 20-летний опыт на рынке ремонта и изготовления замедлителей вагонных различных типов и исполнений ( по числу звеньев, по высоте,по ширине колеи). </li>
<li>ОАО Гомельский ЭМЗ» предлагает Установку домкратную (УДС–120, УДС-160), включающую в себя четыре домкрата и пульт управления, либо домкрат ДТ–30, ДТ-40.</li>
<li>ОАО «Гомельский электромеханический завод» изготавливает и производит капитальный ремонт фрез для обточки без выкатки колёсных пар из-под тягового подвижного состава разных профилей.</li>
<li>Осуществляем капитальный ремонт следующего оборудования: замедлитель вагонный клещевидно – весовой типа КВ-3, замедлитель вагонный рычажно – нажимной РНЗ-2 и др.</li>
<li> Материалы верхнего строения пути</li>
</ul>
</section>

<aside className="slogan">  Замедлители вагонные универсальные  </aside>
<section  className="section"> 
ОАО «Гомельский электромеханический завод» выпускает замедлители вагонные универсальные (тип ЗВУ), предназначенные для механизации и автоматизации процесса регулирования скорости вагонных отцепов на сортировочных горках, по конструкции клещевидно-нажимные с пневматическим приводом.

Открытое акционерное общество «Гомельский электромеханический завод » имеет 20-летний опыт на рынке ремонта и изготовления замедлителей вагонных различных типов и исполнений ( по числу звеньев, по высоте,по ширине колеи).
<ul> 
Название	Кол-во звеньев, шт.	Шпальное основание	Высота, мм
<li className="li-ZBY"> ЗВУ-00	5	деревянное	900+5 </li>
<li className="li-ZBY"> ЗВУ-01	4	деревянное	900+5 </li>
<li className="li-ZBY"> ЗВУ-02	3	деревянное	900+5 </li>
<li className="li-ZBY"> ЗВУ-03	5	деревянное	600+5 </li>
<li className="li-ZBY"> ЗВУ-04	4	деревянное	600+5 </li>
<li className="li-ZBY"> ЗВУ-05	3	деревянное	600+5</li>
<li className="li-ZBY"> ЗВУ-06	3	деревянное	1130+5</li>
<li className="li-ZBY"> ЗВУ-07	1	деревянное	600+5</li>
<li className="li-ZBY"> ЗВУ-08	5	металлическое	900+5</li>
<li className="li-ZBY"> ЗВУ-09	4	металлическое	900+5</li>
<li className="li-ZBY"> ЗВУ-10	3	металлическое	900+5</li>
<li className="li-ZBY"> ЗВУ-11	5	металлическое	600+5</li>
<li className="li-ZBY"> ЗВУ-12	4	металлическое	600+5</li>
<li className="li-ZBY"> ЗВУ-13	3	металлическое	600+5</li>
<li className="li-ZBY"> ЗВУ-14	3	металлическое	1130+5</li>
<li className="li-ZBY"> ЗВУ-14	3	металлическое	1130+5</li>
<li className="li-ZBY"> ЗВУ-15	1	металлическое	600+5</li>

</ul>
</section>

<section className="dark-section technologies"> 
<aside className="slogan" id="slogan-technologies">  Технологии  </aside>
<ul>
ОАО «Гомельский ЭМЗ»  внедрила такие прогрессивные технологии, как:
    <li> резка металла на портальной машине газовой и плазменной резкой с ЧПУ на детали домкрата ДГ-25 и плит вибрационных, что уменьшило затраты на энергоносители, снизило трудоемкость технологического процесса, сократило время на изготовление и повысило точность изделия; </li>
    <li> фторопластовое напыление на резинотехнических изделиях, что на 25 – 30% повысило их стойкость, прочность и время в эксплуатации; </li>
    <li> термообработка деталей из пластмасс, в результате чего снизятся энергозатраты и улучшится их качество;</li>
    <li> восстановление изделий из цветных металлов – таких, как: вкладыши моторноосевых подшипников тяговых электродвигателей локомотивов и электровозов из бронзы и латуни, алюминиевое литье – крышка катушки АЛСН.</li>
</ul>

</section>

<aside className="slogan">  Наша продукция </aside>
<section className="section"> 
<MainPageProductsList/>

</section>

<section  className="dark-section"> 
<div className="section-description-div"> 
<div className="section-description"> 
Открытое акционерное общество
«ГОМЕЛЬСКИЙ ЭЛЕКТРОМЕХАНИЧЕСКИЙ ЗАВОД» (ОАО «Гомельский ЭМЗ»)
<br/>

Юридический адрес:
246014, г. Гомель, ул. Калинина, 22
<br/>

E-mail: emz-gomel@yandex.by
<br/>
Приемная:
Тел: +375 (232) 95-25-13
Факс: +375 (232) 32-92-69
</div>
<div className="section-description"> 

OPEN JOINT STOCK COMPANY GOMEL ELECTROMECHANICAL PLANT
<br/>
Legal address:
246014, Gomel, st. Kalinina, 22
<br/>
E-mail: emz-gomel@yandex.by
<br/>
Tel: +375 (232) 95-25-13
Fax: +375 (232) 71-72-69
<br/>

</div>
</div>

</section>
</div>)

}
export default MainPage