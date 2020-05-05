import React, {Component} from 'react'
import { Grid, Cell, ListItem, ListItemContent, List } from 'react-mdl'

class Contact extends Component{

    render(){
        return(

            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h2>Anjali Batra</h2>
                 
                <img src='https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png'
                alt="avatar"
                style={{height: '250px'}}/>
                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                  Lorem ipsum </p>
                </Cell>
                <Cell col={6}>
                <h2>Contact Me</h2>
                <hr />
                <div className="contact-list">
                <List>
  <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}><i className="fa fa-fax" aria-hidden="true" /> (011) 47065721</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}><i className="fa fa-phone-square" aria-hidden="true" /> 8860460272</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}><i className="fa fa-envelope" aria-hidden="true" /> anjalibatra591@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}><i className="fa fa-skype" aria-hidden="true" /> live:392a2cf67125e474</ListItemContent>
  </ListItem>
</List>
</div>



                </Cell>
                </Grid>            
                </div>
        )
    }
}

export default Contact;