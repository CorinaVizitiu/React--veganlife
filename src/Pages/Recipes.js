import React from 'react';
import Menu from '../Menu';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../img/th1.jpeg';
import img2 from '../img/th2.jpeg';
import img3 from '../img/th3.jpeg';
import img4 from '../img/th4.jpeg';
import img5 from '../img/th5.jpeg';
import img6 from '../img/th6.jpeg';
import img7 from '../img/th7.jpeg';
import img8 from '../img/th8.jpeg';
import img9 from '../img/th9.jpeg';

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
            <Menu />
            <h1>Recipes</h1>
            <Carousel responsive={responsive}>

                <div >

                    <img src={img1} alt="" width={450} ></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.52c1a1447ac918780d3e3eb5d7cd1273&idpbck=1&sim=4&pageurl=https%3a%2f%2ftheprettybee.com%2fbasic-vegan-pancake-recipe%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div  >
                <div>
                    <img src={img2} alt="" width={450} height={450}></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.29a7ff6e48b8e2c0f593d8c50b64f953&idpbck=1&sim=4&pageurl=https%3a%2f%2fwww.veganricha.com%2fvegan-omelet-with-mung-bean-egg%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img3} alt="" width={450} height={450} ></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=vegan+recipes&imgurl=https://bing.com/th?id=OSK.bd3c052a07911ffd779171174bcceb04&idpbck=1&sim=4&pageurl=https%3a%2f%2fwww.acouplecooks.com%2feasy-vegan-recipes-for-beginners%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img4} alt="" width={450} height={450}></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.a6c0de1a7a538b4e9e4f98242373a6fa&idpbck=1&sim=4&pageurl=https%3a%2f%2fminimalistbaker.com%2fvegan-singapore-noodles%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img5} alt="" width={450} ></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.6a356a364412c03c4a2cd9e93a219152&idpbck=1&sim=4&pageurl=https%3a%2f%2fveganheaven.org%2frecipe%2fcreamy-vegan-one-pot-pasta-asian-style%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img6} alt="" width={450} ></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.445910c33f1d4b052ec05203097e04f9&idpbck=1&sim=4&pageurl=https%3a%2f%2ftasty.co%2frecipe%2fvegan-pulled-jackfruit&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img7} alt="" width={450} height={450} ></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.fe9883c1c6e1746d24e6c97dd37a1e42&idpbck=1&sim=4&pageurl=https%3a%2f%2fsimpleveganblog.com%2fsimple-vegan-jambalaya%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img8} alt="" width={450} height={450}></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.fcc738cd17d287f72d1eeb8a42d84e81&idpbck=1&sim=4&pageurl=https%3a%2f%2fwww.veganricha.com%2fvegan-chocolate-chip-cake-recipe%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
                <div>
                    <img src={img9} alt="" width={450} height={450} ></img>
                    <p>
                        <a href="https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=Recipes&imgurl=https://bing.com/th?id=OSK.2926007c0ade544c65c0ed50628c82fa&idpbck=1&sim=4&pageurl=https%3a%2f%2fwww.noracooks.com%2fvegan-chocolate-cake%2f&idpp=recipe&ajaxhist=0&ajaxserp=0">Recipes</a>
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default App;