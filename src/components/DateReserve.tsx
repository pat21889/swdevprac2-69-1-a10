'use client'

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(dayjs());
  const [venue, setVenue] = useState("Bloom");

  return (
    <div className="flex flex-col gap-4 w-fit">
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
      />
      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
      />
      <Select
        id="venue"
        variant="standard"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
      >
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={reserveDate}
          onChange={(value) => setReserveDate(value)}
        />
      </LocalizationProvider>
    </div>
  );
}
