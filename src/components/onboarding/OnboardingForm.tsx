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
import { ChangeEvent, useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import axiosApi from "@/lib/axiosInstance";
import dayjs from "dayjs";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

interface IFormInput {
  type?: string;
}

const OnboardingForm = () => {
  const { register, handleSubmit, control, setValue, reset } = useForm({
    defaultValues: {
      plan_type: "",
      additions: [],
      user_id: null,
      expired: null,
      price: "",
    },
  });

  const [users, setUsers] = useState([]);

  const fetchUsersData = async () => {
    const { data } = await axiosApi.get("/users");
    setUsers(data?.data);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  // select field users data
  const usersData = users?.map((item: any) => ({
    label: item?.name,
    id: item?.id,
  }));

  const onSubmit = async (fValue: any) => {
    const payload = {
      ...fValue,
      expired: dayjs(fValue.expired).format("YYYY-MM-DD"),
    };
    // login post
    try {
      const { data } = await axiosApi.post("/offers", {
        ...fValue,
      });

      if (data?.data?.user_id) {
        toast.success(data?.message || "Offer Successfuly Send!");
        // router.push("/");
        reset();
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error))
        toast.error(error.response?.data?.error || "Submit failed!");
      else toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ToastContainer />
      <Box sx={{ maxWidth: "720px", mx: "auto" }}>
        <Box
          sx={{
            py: "24px",
            borderRadius: "16px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          {/* Header */}
          <Box sx={{ px: "24px", pb: "24px" }}>
            <Typography variant="h3" fontWeight="600">
              Create Offer
            </Typography>
            <Typography sx={{ color: "secondary.main", mt: "4px" }}>
              Send onboarding offer to new user
            </Typography>
          </Box>

          <Divider />

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              p: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Radio Group (Plan Type) */}
            <FormControl>
              <FormLabel
                sx={{ color: "primary.main", fontWeight: "600", mb: "8px" }}
              >
                Plan Type
              </FormLabel>
              <Controller
                name="plan_type"
                control={control}
                defaultValue="monthly"
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    row
                    sx={{
                      color: "primary.main",
                      fontWeight: "600",
                      lineHeight: "22px",
                      mb: "8px",
                    }}
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
                )}
              />
            </FormControl>

            {/* Checkbox Group (Additions) */}
            <FormControl>
              <FormLabel
                sx={{
                  color: "primary.main",
                  fontWeight: "600",
                  lineHeight: "22px",
                  mb: "8px",
                }}
              >
                Additions
              </FormLabel>
              <FormGroup row sx={{ pl: "12px" }}>
                {["refundable", "on_demand", "negotiable"].map((item) => (
                  <Controller
                    key={item}
                    name="additions"
                    control={control}
                    render={({ field }: any) => (
                      <FormControlLabel
                        sx={{
                          "& .Mui-checked": { color: "#00A76F !important" },
                        }}
                        control={
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onChange={(e) =>
                              setValue(
                                "additions",
                                e.target.checked
                                  ? [...(field.value || []), item]
                                  : field.value.filter(
                                      (v: string) => v !== item
                                    )
                              )
                            }
                          />
                        }
                        label={item.charAt(0).toUpperCase() + item.slice(1)}
                      />
                    )}
                  />
                ))}
              </FormGroup>
            </FormControl>

            {/* User Select (Autocomplete) */}
            <FormControl>
              <FormLabel
                sx={{ color: "primary.main", fontWeight: "600", mb: "8px" }}
              >
                User
              </FormLabel>
              <Controller
                name="user_id"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={[...usersData]}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, value) => field.onChange(value?.id || null)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="User" />
                    )}
                  />
                )}
              />
            </FormControl>

            {/* Expired Date Picker */}
            <FormControl>
              <FormLabel
                sx={{ color: "primary.main", fontWeight: "600", mb: "8px" }}
              >
                Expired
              </FormLabel>
              <Controller
                name="expired"
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      onChange={(date) => field.onChange(date)}
                      // renderInput={(params: any) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                )}
              />
            </FormControl>

            {/* Price Field */}
            <FormControl>
              <FormLabel
                sx={{ color: "primary.main", fontWeight: "600", mb: "8px" }}
              >
                Price
              </FormLabel>
              <TextField
                placeholder="Price"
                {...register("price")}
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </FormControl>

            {/* Submit Button */}
            <Box sx={{ mt: "24px", textAlign: "right" }}>
              <Button
                type="submit"
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
        </Box>
      </Box>
    </>
  );
};

export default OnboardingForm;
