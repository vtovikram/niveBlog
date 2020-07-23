import React from 'react';
import {
    useParams
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'antd/dist/antd.css';
import BackToTop from './Header';
import SubHeader from './SubHeader';
import BodyContainer from './BodyContainer';
import BodyNav from './BodyNav';

export default function Wrapper(props) {
    let { id } = useParams();

    return (
        <div className="App">
            <header className="App-header">
                <BackToTop />
            </header>
            <SubHeader />
            <CssBaseline />
            <BodyNav/>
            <Container maxWidth="md">
            
          ID: {id}
            <BodyContainer />
            </Container>
        </div>
    );
};