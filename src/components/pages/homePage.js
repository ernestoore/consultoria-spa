import React, {Component, Fragment} from 'react';
import img from '../../images/office.jpeg';
import Products from  './products';
import Footer from '../footerComponent/footer';



class HomePage extends Component {
render(){
  return (
    <React.Fragment>
    <section id="one">
    <div className = "box-1">
    <img src={img} alt="empty office"/>
    </div>
    <div className = "box-2">
    <h3>Quienes Somos</h3>
    <br />
    <br />
    <p>Somos una empresa dedicada a satisfacer las necesidades de consultoría en recursos humanos, orientados a facilitar procesos de cambio dentro de las organizaciones y a transformar los actuales modelos de gestión para posibilitar niveles de productividad y rentabilidad muy superiores.
    <br />
    <br />
Nuestro Gerente General, Fernando Alarcón Soriano, es psicólogo y coach certificado, con estudios en la escuela existencialista, ha sido un aliado estratégico en grandes empresas, ofreciendo soluciones que ha garantizado su posicionamiento en el mercado, para esto cuenta con un equipo de profesionales destacados en gestión del capital humano.
<br />
<br />
En Alarcón y Asociados contamos con varias líneas de trabajo orientadas a conseguir resultados muy satisfactorios en el ámbito laboral, buscando la eficiencia y eficacia en todo momento y cuidando conservar y mejorar el clima laboral teniendo en cuenta la cultura organizacional inherente a cada empresa a la que atendemos.
</p>
    </div>
    <div className="box-3">
    <h4>Misión</h4>
    <p>Ser una solución òptima para atender las necesidades vinculadas con las personas de su organización, siendo prácticos y directos y buscando soluciones concretas cuidando el buen clima laboral.</p>
    </div>
    <div className="box-4">
    <h4>Visión</h4>
    <p>Generar espacios de confianza y compromiso con nuestros clientes, resolviendo las inquietudes de sus procesos de capital humano con eficacia y rapidez para contribuir con el logro de sus objetivos.</p>
    </div>
    <div className="box-5">
    <a href="#two" className="goto-next">Ver Servicios</a>
    </div>
    </section>
    <section id="two">
    <Products />
    </section>
    <section id="three">
    <Footer />
    </section>
    </React.Fragment>
  );
}
}
export default HomePage;
