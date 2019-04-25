import React, {Component, Fragment} from 'react';
import SimpleSlider from '../Slide/index';
import Form from './form';


class Footer extends Component {
render(){
  return (
    <Fragment>
    <div className="box-10">
    <SimpleSlider />
    </div>
    <div className="box-11">
    <h1>Pregúntate</h1>
    <p>SI LO QUE HACES HOY TE ACERCA AL LUGAR EN EL QUE QUIERES ESTAR MAÑANA</p>
    </div>
    <div className="box-12">
    <Form />
    </div>
    </Fragment>
  );
}
}
export default Footer;
