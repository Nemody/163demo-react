import React, {Component} from 'react';
import BScroll from 'better-scroll';

import HeaderGuide from '../../containers/HeaderGuide/HeaderGuide';
import Split from '../../components/Split';
import HomeSwiper from './components/HomeSwiper/HomeSwiper';
import HomeNav from '../../containers/HomeNav/HomeNav';
import Gift from './components/Gift/Gift';
import Manufacturer from './components/Manufacturer/Manufacturer';
import Popular from './components/Popular/Popular';
import Recommend from '../../containers/Recommend/Recommend';
import FlashSale from '../../containers/FlashSale/FlashSale';
import NewProducts from '../../containers/NewProducts/NewProducts';
import Classify from '../../containers/Classify/Classify';

import './index.styl';
export default class Home extends Component {
    componentDidMount () {
      const height = document.documentElement.clientHeight;
      const recoFindMain = document.querySelector('.home-main');
      recoFindMain.style.height = height + 'px';
      /* eslint-disable no-new */
      if (!this.classScroll) {
        this.classScroll = new BScroll('.home-main', {
          click: true
        });
      }
    };
    render(){
        return ( 
            <div className="home-container">
              <HeaderGuide/>
              <div className="home-main">
               <div style={{paddingBottom: '260px'}}>
                 <HomeSwiper/>
                 <ul className="wangyi-grow">
                   <li>
                     <i className="grow-icon"></i>
                     <span>网易自营品牌</span>
                   </li>
                   <li>
                     <i className="grow-icon"></i>
                     <span>30天无忧退货</span>
                   </li>
                   <li>
                     <i className="grow-icon"></i>
                     <span>48小时快速退款</span>
                   </li>
                 </ul>
                 <HomeNav/>
                 <Gift/>
                 <Split/>
                 <Manufacturer/>
                 <Split/>
                 <Popular/>
                 <Split/>
                 <Recommend/>
                 <Split/>
                 <FlashSale/>
                 <Split/>
                 <NewProducts/>
                 <Split/>
                 <Classify/>
               </div>
              </div>
            </div>
        )
    }
}