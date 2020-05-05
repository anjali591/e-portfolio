import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component{

    render(){
        return(
            <div>
           <Grid  style={{background: 'black', color:'white'}}>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png"
    
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Anjali Batra</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Started programming to get good results with the help of language machine can understand and makes human efforts faster. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1957 third floor, multani mohalla, Rani bagh</p>
            <h5>Phone</h5>
            <p>(+91) 8860460272 </p>
            <h5>Email</h5>
            <p>anjalibatra591@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2017}
              schoolName="Delhi University"
              schoolDescription="Studied in Shyama Prasad Mukherji College, Delhi University and holder of degree of B.tech Computer Science"
               />

               <Education
                 startYear={2009}
                 endYear={2011}
                 schoolName="Kulachi Hansraj Model School"
                 schoolDescription="Passed 10th and 12th class from Kulachi Hans Raj Model School, Ashok Vihar Delhi"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Tech trainee"
              jobDescription="Worked in start up, Wardrogue Holdings Pvt Ltd for 6 months"
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Technical Writing (fresher)"
                jobDescription="Worked in Rio Technologies for 3 months and explored writing skills. Worked for 3 months in Aglasem edutech pvt ltd in writing itself."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Wordpress"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
            </div>
        )
    }
}

export default Resume;