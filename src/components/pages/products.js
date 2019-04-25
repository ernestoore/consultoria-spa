import React, {Component, Fragment} from 'react';

class Products extends Component {
render(){
  return (
    <Fragment>
    <div className="banner-2">
    <h3>NUESTROS SERVICIOS</h3>
    </div>
    <div className="box-6">
    <h2>Coaching organizacional</h2>
    <p>Con Nuestra metodología de Gestión Integral, potenciamos el valor de las personas, creando una coherencia dinámica que alinee las creencias, pensamientos y acciones, con sus objetivos y con los objetivos de la organización</p>
    <p className="readmore"> + Leer mas</p>
    </div>
    <div className="box-7">
    <h2>Evaluación psicológica</h2>
    <p>La dinámica con la que el mercado profesional se mueve en la era del Potencial Humano es demasiado rápida por ende se necesita una acertada evaluación psicológica para así contribuir al éxito de la organización.</p>
    <p className="readmore"> + Leer mas</p>
    </div>
    <div className="box-8">
    <h2>Diagnóstico</h2>
    <p>La OIT en 1986 definió los riesgos psicosociales como aquellos riesgos resultantes de la interacción entre el contenido del puesto la organización y gestión del trabajo, así como el resto de condiciones ambientales y organizacionales.</p>
    <p className="readmore"> + Leer mas</p>
    </div>
    <div className="box-9">
      <a href="#three" className="goto-next">Contáctanos</a>
    </div>
    </Fragment>
  );
}
}
export default Products;
