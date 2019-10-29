import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, reset, stepChanged } from './counterActions'

import { Typography, TextField, Button } from '@material-ui/core'

const Counter = props => (
  <div>
    <Typography variant='h1' component='h2'>{props.counter.number}</Typography>
    <TextField onChange={props.stepChanged} value={props.counter.step} type="number" />
    <Button onClick={props.dec}>DEC</Button>
    <Button onClick={props.inc}>INC</Button>
    <Button onClick={props.reset}>RESET</Button>
  </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = 
dispatch => bindActionCreators({ 
    inc, 
    dec, 
    reset,
    stepChanged 
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)