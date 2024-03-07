import React from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from '../../hooks/hooks'
import { FilterMode, changeMode } from '../../state/todoSlice'

export const FilteredButtons: React.FC = () => {
  const dispatch = useAppDispatch()
  const filterRecords = (title: FilterMode): void => {
    dispatch(changeMode(title))
  }

  return (
    <>
      <Button variant="contained" onClick={(): void => filterRecords('ALL')}>
        All
      </Button>
      <Button
        variant="contained"
        onClick={(): void => filterRecords('COMPLETED')}
      >
        Completed
      </Button>
      <Button
        variant="contained"
        onClick={(): void => filterRecords('CURRENT')}
      >
        Current
      </Button>
    </>
  )
}
