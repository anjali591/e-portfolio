import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{

    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img src={require('./img.jpg')}
                alt="avatar"
                className="avatar-img" />
                <div className="banner-text">
                    <h1>Front-end Developer</h1>
                <hr />
                            <p>
                    Html/css|Javascript|React|Node js|Bootstrap
                </p>
                <div className="social-links">
                    <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />

                    </a>
                    <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true" />

                    </a>
                    <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp"  aria-hidden="true" />

                    </a>
                    <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square"  aria-hidden="true" />

                    </a>
                    </div>
                </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landing;