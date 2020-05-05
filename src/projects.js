import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle,CardText, CardActions,Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component{

    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    togglecategories(){
        if(this.state.activeTab === 0){
            return(
                <div>

                <Grid className="projects-grid">    
                    <Card shadow={5} style={{mnWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/2000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}} >1. Todo List Item Project</CardTitle>
                    <CardText>
                    Worked to make a day to day life todo web app for listing the tasks we handle daily.       
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/anjali591/todo-list-item">GitHub</a></Button>
                        <Button colored>Codepen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{mnWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/2000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}} >2. E-portfolio </CardTitle>
                <CardText>
                    Worked on the portfolio which is currently being read.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Codepen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
     
</Grid>
</div>

            )
      /*  }else if(this.state.activeTab === 1){
            return(
                <div>
                <Card shadow={5} style={{mnWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.djangoproject.com/img/logos/django-logo-negative.png) center / cover'}} >1. Project</CardTitle>
            <CardText>
                Lorem ipsum
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Codepen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
                </div>
            ) */
    }else if(this.state.activeTab === 1){
        return(
            <div>
           <Card shadow={5} style={{mnWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '260px', background: 'url(https://images.websitebuilderexpert.com/wp-content/uploads/2018/01/How-to-Build-a-Website_Hero.jpg) center / cover'}} >1. Project</CardTitle>
            <CardText>
                Worked to make an education website for students.
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/anjali591/education.git">GitHub</a></Button>
                <Button colored>Codepen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
            </div>
        )
        
    }}
        render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                <Tab>Html,Css,Bootstrap</Tab>
                </Tabs>
                <section className="projects-grid">
                <Grid className="projects-grid">
                <Cell col={12}>
              <div>  {this.togglecategories()}</div>
                </Cell>
                </Grid>
              
                </section>
            </div>    
        )
    }
}

export default Projects;