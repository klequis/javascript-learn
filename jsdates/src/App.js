import React from 'react';
import './App.css';

const styles = {
  padding: '15px 0 15px 0'
}

const App = () => {

    const d01 = new Date()
    console.log('d01', d01)

    const d02 = new Date(2018, 11, 24, 10, 33, 30, 0)
    console.log('d02', d02)

    const d03 = new Date('December 17, 1995 03:24:00')
    console.log('d03', d03)

    const toISOStr = d01.toISOString()
    const toJson = d01.toJSON()
    const toLocaleDateString = d01.toLocaleDateString()
    const toLocaleString = d01.toLocaleString()
    const toLocaleTimeString = d01.toLocaleTimeString()
    const toString = d01.toString()
    const toUTCString = d01.toUTCString()
    const valueOf = d01.valueOf()

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    const hourAmPm = (date) => {
      const h = date.getHours()
      const m = date.getMinutes()
      console.log('h', h)
      console.log('m', m)
      return (h > 12)
      ? `${h-12}:${m} PM`
      : `${h}:${m} AM`
    }
    // DDD, MMM dd ?h:mm am/pm
    const MMM = monthNames[d01.getMonth()]
    const DDD = dayNames[d01.getDay()]
    const dd = d01.getDate()
    const hour = hourAmPm(d01)
    const currentDateTime = `${DDD}, ${MMM} ${dd} ${hour}`

    return (
      <div className="App">
        <h1>new Date()</h1>
        <h2>Current time is</h2>
        <div>{currentDateTime}</div>
        <table>
          <tbody>
            <tr>
              <td>ISO date format</td>
              <td>YYYY-MM-DDTHH:MM:SS</td>
            </tr>
            <tr>
              <td>toISOString</td>
              <td>{toISOStr}</td>
            </tr>
            <tr>
              <td>toJSON</td>
              <td>{toJson}</td>
            </tr>
            <tr>
              <td>toLocaleDateString</td>
              <td>{toLocaleDateString}</td>
            </tr>
            <tr>
              <td>toLocaleString</td>
              <td>{toLocaleString}</td>
            </tr>
            <tr>
              <td>toLocaleTimeString</td>
              <td>{toLocaleTimeString}</td>
            </tr>
            <tr>
              <td>toString</td>
              <td>{toString}</td>
            </tr>
            <tr>
              <td>toUTCString</td>
              <td>{toUTCString}</td>
            </tr>
            <tr>
              <td>valueOf</td>
              <td>{valueOf}</td>
            </tr>
            <tr>
              <td>getDate (day of month)</td>
              <td>{d01.getDate()}</td>
            </tr>
            <tr>
              <td>getDay</td>
              <td>{d01.getDay()}</td>
            </tr>
            <tr>
              <td>getFullYear</td>
              <td>{d01.getFullYear()}</td>
            </tr>
            <tr>
              <td>getHours</td>
              <td>{d01.getHours()}</td>
            </tr>
            <tr>
              <td>getMinutes</td>
              <td>{d01.getMinutes()}</td>
            </tr>
            <tr>
              <td>getMonth</td>
              <td>{d01.getMonth()}</td>
            </tr>
            <tr>
              <td>getTime</td>
              <td>{d01.getTime()}</td>
            </tr>
            <tr>
              <td>getYear</td>
              <td>{d01.getYear()}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>

          </tbody>
        </table>



      </div>
    )
}

export default App;
