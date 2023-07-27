import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { User, UserInfo } from "../../../../../store";
import Cancel from "@mui/icons-material/Cancel";
import Payment from "@mui/icons-material/Payment";
import { useRouter } from "next/router";

export interface DepositMoneyFormValues {
  userId: number;
  amount: number;
}

interface DepositMoneyFormProps {
  users: UserInfo[] | User[];
  onSubmit: (values: DepositMoneyFormValues) => void;
}

const validationSchema = yup.object({
  userId: yup.number().required("User is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be positive"),
});

const DepositMoneyForm: React.FC<DepositMoneyFormProps> = ({
  users,
  onSubmit,
}) => {
  const formik = useFormik<DepositMoneyFormValues>({
    initialValues: {
      userId: 0,
      amount: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const router = useRouter();
  const routeBackToBiddingHomePage = async () => {
    await router.push("/bidding");
  };

  const isUserInfoArray = (users: UserInfo[] | User[]): users is UserInfo[] => {
    return (users as UserInfo[]).every((user) => "id" in user);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>User</InputLabel>
            <Select
              labelId="userId-label"
              id="userId"
              {...formik.getFieldProps("userId")}
            >
              {isUserInfoArray(users) &&
                users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.email}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="amount"
            label="Amount"
            fullWidth
            type="number"
            {...formik.getFieldProps("amount")}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<Cancel />}
              onClick={routeBackToBiddingHomePage}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              <Payment fontSize="small" sx={{ mr: 1 }} />
              Deposit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default DepositMoneyForm;
