import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: "src/assets/img/menu1.jpg",
      title: "Margherita Pizza",
      price: "16.99",
      description:"Margherita pizza is a typical Neapolitan pizza, roundish in shape with a raised edge and garnished with hand-crushed peeled tomatoes, mozzarella, fresh basil leaves, and extra virgin olive oil. The dough is made by mixing water, salt and yeast with flour."
    },
    {
      id: 2,
      img: "src/assets/img/menu2.jpg",
      title: "Pesto Paradise",
      price: "18.99",
      description:"If you love authentic Italian pizza you can not find a better pizza in Daytona. They make their own dough. The pesto is outstanding. We also had half cheese and pepperoni. Amazing!"
    },
    {
      id: 3,
      img: "src/assets/img/menu3.jpg",
      title: "Hawaiian Pizza",
      price: "14.99",
      description:"Hawaiian pizza is a pizza originating in Canada, traditionally topped with pineapple, tomato sauce, mozzarella cheese, and either ham or bacon."
    },
    {
      id: 4,
      img: "src/assets/img/menu4.jpg",
      title: "Black Truffle Pizza",
      price: "15.99",
      description:"This truffle pizza is a delicious combination of sweet and savory! Juicy pears, creamy ricotta, pecorino, honey and fresh black truffles take our best pizza dough to the next level."
    },
    {
      id: 5,
      img: "src/assets/img/menu5.jpg",
      title: "Farmhouse Pizza",
      price: "18.99",
      description:"The farmhouse pizza is loaded with various fresh vegetarian toppings. Crunchy and crisp capsicum, juicy tomatoes, and succulent mushrooms are the prime toppings in a farmhouse pizza."
    },
    {
      id: 6,
      img: "src/assets/img/menu6.jpg",
      title: "Cheese Pizza",
      price: "13.99",
      description:"Sometimes all you want at the end of the day is a simple cheese pizza. This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese, and an easy to make tomato sauce that hits all of the right sweet and savory notes to marry all of the flavors in this pie. A simple garnish of fresh herbs, and you've got perfection on a plate."
    },
    {
      id: 7,
      img: "src/assets/img/menu7.jpg",
      title: "Sandwich Fries",
      price: "16.99",
      description:"A sandwich is a dish typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type."
    },
    {
      id: 8,
      img: "src/assets/img/menu8.jpg",
      title: "Spaghetti",
      price: "18.99",
      description:"Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum-wheat semolina."
    },
    {
      id: 9,
      img: "src/assets/img/menu9.jpg",
      title: "Tomato Basil Pasta",
      price: "14.99",
      description:"Juicy ripe tomatoes, sweet basil, garlic and fresh parmesan cheese make up this deliciously simple Tomato Basil Pasta recipe."
    },
  ];
  return (
<>
<div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center pt-24">
        Our Speciality
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
</>
  );
};

export default Menu;