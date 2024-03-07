import React from 'react'
import { tasksSelector } from '../state/todoSlice'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { Form } from './Form/Form'
import { FilteredButtons } from './FilteredButtons/FilteredButtons'
import { Tasks } from './Tasks/Tasks'

export const ToDoComponent: React.FC = () => {
  const tasks = useSelector(tasksSelector)

  return (
    <Grid margin={'30px 30px'} container maxWidth={'300px'} gap={'10px'}>
      <Grid item xs={12}>
        <Form />
      </Grid>
      <Grid
        marginTop={'30px'}
        display={'flex'}
        justifyContent={'space-between'}
        item
        xs={12}
      >
        <FilteredButtons />
      </Grid>
      <Grid item xs={12}>
        <Tasks />
      </Grid>

      <div>
        <p>Completed: {tasks.filter((task) => task.status).length}</p>
        <p>Uncompleted: {tasks.filter((task) => !task.status).length}</p>
      </div>
    </Grid>
  )
}
