import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { addTask } from "../../state/todoSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

interface Props {}

export const Form: React.FC<Props> = () => {
  const [newRecord, setNewRecord] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newRecord.length === 0) {
      return setError("Length has to be more than 0");
    }
    if (newRecord.length >= 40) {
      return setError("Length has to be less than 40");
    }

    if (newRecord.length < 30) {
      if (error) setError("");

      dispatch(
        addTask({
          id: uuidv4(),
          status: false,
          title: newRecord,
        })
      );
      setNewRecord("");
    }
  };

  const handleChange = (e: any) => {
    setNewRecord(e.target.value);
  };

  useEffect(() => {
    if (newRecord.length > 0 && newRecord.length < 40) {
      setError("");
    }
  }, [newRecord]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        maxWidth: "300px",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Outlined"
        variant="outlined"
        value={newRecord}
        onChange={handleChange}
      />
      {error.length > 0 && <p>{error}</p>}
      <Button variant="contained" type="submit">
        Add Record
      </Button>
    </form>
  );
};
