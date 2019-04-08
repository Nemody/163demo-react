import React, {Component} from 'react';

import HeaderLogin from '../../containers/HeaderLogin/HeaderLogin';
import FooterGuide from '../../components/FooterGuide';

export default class Home extends Component {
    render(){
        return (
            <div>
              <HeaderLogin/>
              <FooterGuide/>
            </div>
        )
    }
}