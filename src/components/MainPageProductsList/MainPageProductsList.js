import React from "react";
import { useNavigate } from "react-router-dom";
import imgZBY from "../../images/ZBY.png"
import imgVAUZ from "../../images/VAUZ.jpg"
import imgMOP from "../../images/MOP.jpg"
import imgREM from "../../images/REMONT.jpg"
import { v4 as uuidv4 } from 'uuid';
import {MainPageProduct} from "./MainPageProduct"
import {BsArrowUpRight} from "react-icons/bs"
import "./MainPageProductsList.css"


const MainPageProductsList = () => {
    const navigate = useNavigate()
    const productsList = [
        {id:uuidv4(), name:"Замедлитель вагонный универсальный", image: { src:imgZBY, alt:"ЗВУ"}},
        {id:uuidv4(), name:"Воздухосборник с аппаратурой управления ВАУЗ-1Э", image: { src:imgVAUZ, alt:"Воздухосборник"}},
        {id:uuidv4(), name:"Вкладыши моторноосевых подшипников", image: { src:imgMOP, alt:"Вкладыши"}},
        {id:uuidv4(), name:"Капитальный ремонт оборудования", image: { src:imgREM, alt:"Ремонт"}},

    ]
    return( 
        <div className="productsList">  
        {productsList.map((item)=> <MainPageProduct product={item} key = {item.id}  />)}
        <div className="product" id="product-pointer"  onClick={()=> navigate("catalogue")}>
        Вся продукция
         <BsArrowUpRight className="product-arrow"/>
        </div> 
       
        </div>
     
  
       
     
        
    )
}
export default MainPageProductsList