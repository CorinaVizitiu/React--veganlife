import React from 'react';
import Menu from '../Menu';
import "./Home.css";
import img1 from "../img/logo.jpg";
import img2 from "../img/p3.jpeg";
const Accueil = (props) => {
    return (
        <div>
            <Menu />
            <img src={img1} alt="" width={150} ></img>
            <h1 class="col-sm-6"> What Is a Vegan? </h1>
            <p class="col-sm-9">
                Though veganism is often thought of as a diet that excludes all animal products, choosing to be vegan can also mean more far-reaching lifestyle changes. Living a vegan lifestyle means abstaining, as far as is possible and practical, from anything that requires the exploitation of another living being. Of course, this includes abstaining from consuming animal products, but also requires attention to clothes, makeup, and many other facets of life.
            </p>
            {/* <img src={img2} alt="" width={150} ></img>     */}
            <h1 class="col-sm-6">What Is a Vegan Lifestyle?</h1>
            <p class="col-sm-9">Though a vegan diet might be adhered to for a variety of reasons such as for personal health or preference, a vegan lifestyle requires empathy and compassion due to the ideology of doing no harm that it represents. </p>
            <h1 class="col-sm-6" > Embracing the Idea of “Do No Harm” </h1>
            <p class="col-sm-9">

                A key pillar of a vegan lifestyle is to do no harm. Adherents seek to minimize as much as is practicable the harm that they cause to the environment and animals. Another key facet of doing no harm is seeking to reduce the harm caused to other people, including those working in animal agriculture. The precarious employees of factory farms and slaughterhouses often endure dangerous working conditions and can have their injuries ignored.

            </p>
        </div>
    );
};

export default Accueil;