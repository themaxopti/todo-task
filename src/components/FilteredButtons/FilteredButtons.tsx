import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import { FilterMode, changeMode } from "../../state/todoSlice";

export const FilteredButtons = () => {
  const dispatch = useAppDispatch();
  const filterRecords = (title: FilterMode) => {
    dispatch(changeMode(title));
  };

  return (
    <>
      <Button variant="contained" onClick={() => filterRecords("ALL")}>
        All
      </Button>
      <Button variant="contained" onClick={() => filterRecords("COMPLETED")}>
        Completed
      </Button>
      <Button variant="contained" onClick={() => filterRecords("CURRENT")}>
        Current
      </Button>
    </>
  );
};
