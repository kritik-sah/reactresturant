import React ,{ useState } from 'react';
import Menu from "../api/menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar'

const Resturant = () => {
    const uniqueList = [
        ...new Set(Menu.map((curElem) => {
        return( curElem.category);
    })
    ), "all"
];


    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category.toLowerCase() === "all"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} setMenuList={setMenuList}/>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant
