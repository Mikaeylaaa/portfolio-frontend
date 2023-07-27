import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export interface BiddingItemFormValues {
  itemName: string;
  itemPrice: number;
  timeWindowHours: number;
  timeWindowMinutes: number;
  state: "draft" | "published"; // Add the state field with the possible values of 'draft' or 'published'
}

interface BiddingItemFormProps {
  initialValues: BiddingItemFormValues;
  onSubmit: (values: BiddingItemFormValues) => void;
  onCancel: () => void;
}

const validationSchema = yup.object({
  itemName: yup.string().required("Item name is required"),
  itemPrice: yup
    .number()
    .required("Starting price is required")
    .positive("Starting price must be positive"),
  timeWindowHours: yup
    .number()
    .min(0, "Hours must be greater than or equal to 0")
    .required("Hours is required"),
  timeWindowMinutes: yup
    .number()
    .min(0, "Minutes must be greater than or equal to 0")
    .required("Minutes is required"),
  state: yup.string().required("State is required"), // Validate that the state field is required
});

const BiddingItemForm: React.FC<BiddingItemFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  // Set the default value to 'draft' if the initial state is not provided
  const defaultState = initialValues.state || "draft";

  const formik = useFormik<BiddingItemFormValues>({
    initialValues: {
      ...initialValues,
      state: defaultState, // Set the default state value
    },
    validationSchema,
    onSubmit: (values: BiddingItemFormValues) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="itemName"
            name="itemName"
            label="Item Name"
            fullWidth
            autoFocus
            value={formik.values.itemName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemName && Boolean(formik.errors.itemName)}
            helperText={formik.touched.itemName && formik.errors.itemName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="itemPrice"
            name="itemPrice"
            label="Starting Price"
            fullWidth
            type="number"
            value={formik.values.itemPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemPrice && Boolean(formik.errors.itemPrice)}
            helperText={formik.touched.itemPrice && formik.errors.itemPrice}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="timeWindowHours"
            label="Time Window (Hours)"
            name="timeWindowHours"
            type="number"
            fullWidth
            value={formik.values.timeWindowHours}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.timeWindowHours &&
              Boolean(formik.errors.timeWindowHours)
            }
            helperText={
              formik.touched.timeWindowHours && formik.errors.timeWindowHours
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="timeWindowMinutes"
            label="Time Window (Minutes)"
            name="timeWindowMinutes"
            type="number"
            fullWidth
            value={formik.values.timeWindowMinutes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.timeWindowMinutes &&
              Boolean(formik.errors.timeWindowMinutes)
            }
            helperText={
              formik.touched.timeWindowMinutes &&
              formik.errors.timeWindowMinutes
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              name="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled
            >
              <MenuItem value="draft">Draft</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 3 }} spacing={2}>
        <Grid item>
          <Button
            onClick={onCancel}
            color="primary"
            variant="contained"
            startIcon={<CloseIcon fontSize="small" />}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon fontSize="small" />}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BiddingItemForm;
