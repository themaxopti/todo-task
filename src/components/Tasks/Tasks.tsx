import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Task,
  completeTask,
  tasksSelectorNew,
  unCompleteTask,
} from '../../state/todoSlice'
import { Button, Grid, Box } from '@mui/material'

export const Tasks: React.FC = () => {
  const tasks = useSelector(tasksSelectorNew)
  const dispatch = useDispatch()

  const changeStatus = (task: Task): void => {
    if (task.status) {
      dispatch(unCompleteTask(task))
    } else {
      dispatch(completeTask(task))
    }
  }


  return tasks!.map(task => <Box
    sx={{
      background: task.status
        ? 'rgba(23, 207, 47, 0.2);'
        : 'rgba(201, 52, 52, 0.2);',
    }}
    border={'1px solid black'}
    padding={'5px'}
    textAlign={'center'}
    key={task.id}
  >
    <Grid container>
      <Grid
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        item
        xs={6}
        style={{
          textDecoration: task.status ? 'line-through' : 'none',
        }}
      >
        <p>{task.title}</p>
      </Grid>
      <Grid
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        item
        xs={6}
      >
        <Button onClick={(): void => changeStatus(task)} variant="contained">
          {task.status ? 'DONE' : 'NOT DONE'}
        </Button>
      </Grid>
    </Grid>
  </Box>
  ) as any
}
