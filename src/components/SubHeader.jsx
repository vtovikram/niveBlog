import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

export default function SubHeader(props) {
    return (<Carousel autoplay effect="fade" style={{margin: 'auto',marginTop: '-65px', width: '100vw', height:'500px', backgroundColor: 'transparent'}}>
        <div>
            <img src='/assets/niveBlog1.png' alt='test' style={{margin: 'auto', height:'500px', width: '100vw'}}/>
        </div>
        <div>
        <img src='/assets/niveBlog2.png' alt='test' style={{margin: 'auto', height:'500px', width: '100vw'}}/>
        </div>
        <div>
        <img src='/assets/niveBlog3.png' alt='test' style={{margin: 'auto', height:'500px', width: '100vw'}}/>
        </div>
        <div>
        <img src='/assets/niveBlog4.png' alt='test' style={{margin: 'auto', height:'500px', width: '100vw'}}/>
        </div>
    </Carousel>);
};