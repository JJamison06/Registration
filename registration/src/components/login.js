import React from "react";
import Grid from "@mui/material/Grid";
import { Paper,TextField,Button, Typography, Link,Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
const Login=()=> {
    const paperStyle={
        padding: "40px",
        height: "140vh",
        width: 600,
        margin: "25px auto"
    }
    const btnstyle={
        margin:"8px 0",
        borderRadius:25
    }
    const textfield={
        margin:"10px"
    }

    return(
    <Paper style={paperStyle}>
    <Grid align="center">
    <img src="https://th.bing.com/th/id/OIP.Ip8HLLLK7WwcEo2qP4f-QgHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="NCC2" width="300" height="200"/>

    <p></p>
         Registration Page
         


    <TextField label="First Name" placeholder="First Name" fullWidth required><Grid align="center"></Grid></TextField>       
        
    
    <TextField label="Last Name" placeholder="Last name" fullWidth required><Grid align="center"></Grid></TextField>
    
               
    <TextField label="Email Address(case sensitive)" placeholder="Email Address" fullWidth required><Grid align="center"></Grid></TextField>
    
            
    <TextField label="Phone Number" placeholder="Phone Number"fullWidth required><Grid align="center"></Grid></TextField>
                     
                
    <TextField label="Password *Use letters with spaces,numbers,or symbols ex:(!@#$%^&*)" placeholder="Password"fullWidth required><Grid align="center"></Grid></TextField>


    <TextField label="Confirm Password" placeholder="Confirm Password" fullWidth required><Grid align="center"></Grid></TextField>

           
    <FormControlLabel
            control={
                <Checkbox
                    name="Checked"
                    color="primary"
            />}
            label="Show Password"
            />
            <Typography style={textfield}>
                    <Link href="#">
                         <Grid align="center"></Grid>
                   </Link>
                      
                    <h5><Button
                    type="Submit"
                    Variant="contained"
                    style={btnstyle}
                    fullWidth
                    >
                        Donor
                    </Button>
                    
                    </h5>

                <h6><Button
                    type="Submit"
                    Variant="contained"
                    style={btnstyle}
                    fullWidth
                    >
                        NCC Staff
                    </Button></h6>


                    <h7><Button
                    type="Submit"
                    Variant="contained"
                    style={btnstyle}
                    fullWidth
                    >
                        Case Manager
                    </Button></h7>




                    <Button
               type="Submit"
               variant="contained"
               style={btnstyle}
               fullWidth
               > 
                 Next
                </Button>
                   
                   

        </Typography>
        </Grid>
        </Paper>
  )
}
export default Login;