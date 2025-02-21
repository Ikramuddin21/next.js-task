"use client";
import { BpRadio } from "@/helper/customRadio";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const OnboardingForm = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("handle change");

    // setState({
    //   ...state,
    //   [event.target.name]: event.target.checked,
    // });
  };
  return (
    <Box sx={{ maxWidth: "720px", mx: "auto" }}>
      <Box
        sx={{
          py: "24px",
          borderRadius: "16px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box sx={{ px: "24px", pb: "24px" }}>
          <Typography variant="h3" fontWeight="600">
            Create Offer
          </Typography>
          <Typography sx={{ color: "secondary.main", mt: "4px" }}>
            Send onboarding offer to new user
          </Typography>
        </Box>

        <Divider />

        {/* form */}
        <Box
          component="form"
          sx={{
            p: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* radio */}
          <FormControl>
            <FormLabel
              id="demo-customized-radios"
              sx={{
                color: "primary.main",
                fontWeight: "600",
                lineHeight: "22px",
                mb: "8px",
              }}
            >
              Plan Type
            </FormLabel>
            <RadioGroup
              row
              defaultValue="monthly"
              aria-labelledby="demo-customized-radios"
              name="plan_type"
              sx={{ pl: "12px" }}
            >
              <FormControlLabel
                value="pay_as"
                control={<BpRadio />}
                label="Pay As You Go"
              />
              <FormControlLabel
                value="monthly"
                control={<BpRadio />}
                label="Monthly"
              />
              <FormControlLabel
                value="yearly"
                control={<BpRadio />}
                label="Yearly"
              />
            </RadioGroup>
          </FormControl>

          {/* checkbox */}
          <FormControl>
            <FormLabel
              id="demo-checkbox"
              sx={{
                color: "primary.main",
                fontWeight: "600",
                lineHeight: "22px",
                mb: "8px",
              }}
            >
              Additions
            </FormLabel>
            <FormGroup
              row
              sx={{
                pl: "12px",
              }}
            >
              <FormControlLabel
                sx={{ "& .Mui-checked": { color: "#00A76F !important" } }}
                control={
                  <Checkbox
                    // checked={false}
                    defaultChecked
                    // onChange={handleChange}
                    name="refundable"
                  />
                }
                label="Refundable"
              />
              <FormControlLabel
                sx={{ "& .Mui-checked": { color: "#00A76F !important" } }}
                control={
                  <Checkbox
                    // checked={true}
                    // onChange={handleChange}
                    name="on_demand"
                  />
                }
                label="On demand"
              />
              <FormControlLabel
                sx={{ "& .Mui-checked": { color: "#00A76F !important" } }}
                control={
                  <Checkbox
                    // checked={false}
                    // onChange={handleChange}
                    name="negotiable"
                  />
                }
                label="Negotiable"
              />
            </FormGroup>
          </FormControl>

          {/* user */}
          <FormControl>
            <FormLabel
              sx={{
                color: "primary.main",
                fontWeight: "600",
                lineHeight: "22px",
                mb: "8px",
              }}
            >
              User
            </FormLabel>
            <Autocomplete
              options={[
                { label: "John", id: 1 },
                { label: "Karim", id: 2 },
              ]}
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": { pr: "16px !important" } }}
              renderInput={(params) => (
                <TextField {...params} placeholder="User" />
              )}
            />
          </FormControl>

          {/* expired */}
          <FormControl>
            <FormLabel
              sx={{
                color: "primary.main",
                fontWeight: "600",
                lineHeight: "22px",
                mb: "8px",
              }}
            >
              Expired
            </FormLabel>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </FormControl>

          {/* price */}
          <FormControl>
            <FormLabel
              sx={{
                color: "primary.main",
                fontWeight: "600",
                lineHeight: "22px",
                mb: "8px",
              }}
            >
              Price
            </FormLabel>
            <TextField
              placeholder="Price"
              // sx={{ }}
              type="number"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                },
              }}
            />
          </FormControl>
        </Box>
      </Box>
      {/* send button */}
      <Box sx={{ mt: "24px", textAlign: "right" }}>
        <Button
          sx={{
            bgcolor: "primary.main",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "700",
            p: "11px 16px",
            textTransform: "capitalize",
          }}
        >
          Send Offer
        </Button>
      </Box>
    </Box>
  );
};

export default OnboardingForm;
