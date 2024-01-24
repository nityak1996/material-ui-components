import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  age,
  FormLabel,
  RadioGroup,
  Radio
} from "@mui/material";
import { useState } from "react";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subsribe: false,
    age: undefined,
    gender: ""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          name="name"
          value={inputs.name}
          type={"text"}
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="email"
          value={inputs.email}
          type={"email"}
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          name="password"
          value={inputs.password}
          type={"password"}
          sx={{ margin: 3 }}
          placeholder="Password"
          variant="filled"
          onChange={handleChange}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subsribe: !inputs.subsribe,
                  }))
                }
              />
            }
            label="Subscribe to Newletter"
          />
        </FormGroup>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={handleChange} defaultValue="female" name="gender">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Test;
