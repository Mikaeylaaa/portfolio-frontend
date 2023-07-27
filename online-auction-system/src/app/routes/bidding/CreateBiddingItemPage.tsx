import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { BiddingItem } from "@/app/routes/bidding/types";
import BiddingItemForm, {
  BiddingItemFormValues,
} from "@/app/common/components/BiddingItem/BiddingItemForm";
import { addBiddingItem, fetchExistingItems } from "../../../../store";
import { useRouter } from "next/router";
import Toaster from "@/app/common/components/Toaster";
import { updateBiddingItemRequest } from "../../../../store/actions/updateItemAction";

const CreateBiddingItemPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialBiddingItem: BiddingItemFormValues = {
    itemName: "",
    itemPrice: 0,
    timeWindowHours: 0,
    timeWindowMinutes: 0,
    state: "draft",
  };

  const [toasterOpen, setToasterOpen] = useState(false);

  const handleSave = async (bidItem: BiddingItemFormValues) => {
    // Perform any additional validation or logic before saving the item
    if (
      !bidItem.itemName ||
      !bidItem.itemPrice ||
      !bidItem.timeWindowHours ||
      !bidItem.timeWindowMinutes
    ) {
      // Dispatch an action to set the error message in the Redux store
      dispatch({
        type: "CREATE_BIDDING_ITEM_ERROR",
        payload: "Please fill in all fields.",
      });
      return;
    }

    dispatch(
      addBiddingItem({
        ...bidItem,
        id: 0, // Since the 'id' field is auto-generated on the backend, set it to 0 or null here
      }),
    );
    setTimeout(async () => {
      setToasterOpen(true); // Show the toaster on successful addition of new bid item
      await router.push("/bidding/bidding-home-draft");
    }, 2000);
  };

  const handleToasterClose = async () => {
    setToasterOpen(false);
    await router.push("/bidding/bidding-home-draft");
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography component="h1" variant="h4">
            {`Create Bidding Item`}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {/* Use the BiddingItemForm component with Formik */}
          <BiddingItemForm
            initialValues={initialBiddingItem}
            onSubmit={handleSave}
            onCancel={handleToasterClose} // Navigate to "/bidding" on cancel
          />
        </Grid>
      </Grid>
      {/* Rest of the component */}
      <Toaster
        message={"Successfully added bid item!"}
        open={toasterOpen}
        onClose={handleToasterClose}
      />
    </Box>
  );
};

export default CreateBiddingItemPage;
