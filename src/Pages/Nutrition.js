import React from 'react';
import Menu from '../Menu';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../img/n1.webp';
import img2 from '../img/n2.jpg';
// import img3 from '../img/n3.jpg';
import img4 from '../img/n4.jpeg';
import img5 from '../img/n5.jpg';
import img6 from '../img/n6.webp';
import img7 from '../img/n7.jpeg';

function App() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: {
          max: 4000, min: 3000
        },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
        <div className='App'>
            <Menu/>
            <h1>VEGAN NUTRITION: WHERE TO BEGIN?</h1>
            <p>While much of this article details specific nutrients vegans should be aware of, people don’t eat nutrients, they eat foods!

Focusing on what foods to eat can be a helpful approach for beginners. I like to group vegan foods into 6 basic food groups:</p>
<ul>
<li>Legumes and other high protein foods: Beans, lentils and soy (including tofu, tempeh and soy milk) are good sources of protein on a vegan diet. They also contain nutrients like fiber, iron and zinc. Other high protein foods, like seitan or mock meat products, can fit into this food group as well.</li>
<li>Grains and other high carbohydrate foods: Whole grains are a great staple for vegan diets and offer healthy carbohydrates along with fiber, B-vitamins, iron, zinc and some plant-based protein. Other high-carbohydrate foods, like starchy vegetables, can fit into this category but don’t offer as much of these nutrients.</li>
<li>Nuts, seeds and other healthy fats: Don’t shy away from healthy fats as they are an important part of a balanced diet. Nuts, seeds, avocados and soy foods are great sources of fat on a vegan diet. Certain cooking oils can also fit into this food group and support a balanced diet.</li>
<li>Vegetables: There’s a wide array of vegetables to choose from and variety is key as different vegetables offer different nutrients. Some are high in calcium, B-vitamins, vitamin A, vitamin K, vitamin C, fiber and antioxidants.</li>
<li>Fruits: While often grouped together with vegetables, I like to keep fruits separate to put a focus on vegetables. While less nutrient dense than vegetables, fruits provide nutrition including vitamin C, fiber and sometimes vitamin A.</li>
<li>Herbs, spices and other flavors: Some people view vegan food as bland and boring. I like to consider herbs, spices and other flavorings (vinegar, sauces, condiments) as a food group to encourage creativity and help people enjoy their vegan meals!</li>
</ul>
  

<Carousel responsive={responsive}>
  
        <div >
          <img src={img1} alt="" width={550}/>

        </div>
        <div  >
          <img src={img2} alt="" width={350}/>

        </div>
        {/* <div >
          <img src={img3} alt=""width={350} />

        </div> */}
        <div >
          <img src={img4} alt="" width={450}/>

        </div>
         <div  >
          <img src={img5} alt="" width={430}/>

        </div>
        <div >
          <img src={img6} alt="" width={450}/>

        </div>
        <div >
          <img src={img7} alt=""width={450} />

        </div>

        </Carousel>
        </div>
        
    );
    
};

export default App;