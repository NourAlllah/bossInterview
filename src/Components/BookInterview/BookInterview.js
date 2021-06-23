import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import{
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import './book.css';
import './Animation.css';
import Typewriter from "typewriter-effect";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
      MuiPickersToolbar: {
          toolbar: {
              backgroundColor: "#FB9224",
              selectedDateColor: "#FB9224",
          },
      },
      MuiPickersCalendarHeader: {
          switchHeader: {
              backgroundColor: "white",
              color: "#FB9224",
          },
      },
  },
});




function BookInterview() {
  const [selectedDate, setSelectedDate] = React.useState(
    )
  const handleDateChange = (date) => {
      setSelectedDate(date)
    }

        /*book Interview
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2021-05-25T12:00:00")
      )
      const handleDateChange = (date) => {
        setSelectedDate(date)
      }*/
/*<img src="BookInterview.jpg" alt="BookInterview.jpg"/>*/
  return ( 
    
    <div style={styles.container} className='book-Con'>
      <br></br>
      <br></br>
        <div className="Animation">
        <Typewriter
          onInit={(typewriter)=>{
              typewriter
                .typeString("Hello Nancy!")
                .callFunction(()=>{
                    alert("Don't miss your appointment")
                })
                .pauseFor(1000)
                .deleteAll()
                .typeString("Book Your Interview Now!!")
                .start();
          }}
        />
        </div> 
        <br></br>
        <br></br>       
    <div className="Book" >
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <ThemeProvider theme={materialTheme}>
              <Grid container justify='space-around' >
                <KeyboardDatePicker 
                  disableToolbar
                  style={{width:"100%", marginTop:"15px" }}
                  variant='dialog'
                  format='MM/dd/yyy'
                  minDate={new Date()}
                  margin='normal'
                  id='date-picker'
                  label='Select a date'
                  value={selectedDate}
                  onChange={handleDateChange}
                  keyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
                </Grid>
                <Grid container justify='space-around'>
                <KeyboardTimePicker
                  style={{width:"100%", marginTop:"15px"}}
                  minutesStep='15'
                  margin='normal'
                  id='time-picker'
                  label='Select a time'
                  value={selectedDate}
                  onChange={handleDateChange}
                  keyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </Grid>
              </ThemeProvider>
            </MuiPickersUtilsProvider>
                    <button className='book-but' variant="primary" type="submit">
                        Book
                    </button>
        </div> 
        </div> 
  );
}

const styles = {
  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  }}



export default BookInterview;


