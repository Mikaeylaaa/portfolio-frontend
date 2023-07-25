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
    state: 'draft'
  };

  const [toasterOpen, setToasterOpen] = useState(false);
  const [existingBiddingItems, setExistingBiddingItems] = useState<
    BiddingItem[]
  >([]);

  // Determine if the page is in Edit mode based on whether an item ID is provided via query parameters
  const editMode = !!router.query.itemId;

  // Assume you have a way to get the existingBiddingItem from the backend based on the ID
  // For example, you can pass the item ID through query parameters and fetch it here.
  const [existingBiddingItem, setExistingBiddingItem] =
    useState<BiddingItem | null>(null);

  const emptyBiddingItem: BiddingItemFormValues = {
    itemName: "",
    itemPrice: 0,
    timeWindowHours: 0,
    timeWindowMinutes: 0,
    state: 'draft'
  };

  // useEffect(() => {
  //   // Fetch the existing bidding items when the component mounts
  //   const fetchExistingBiddingItems = async () => {
  //     try {
  //       // Assuming your API call to fetch bidding items returns an array of BiddingItem
  //       const API_URL = process.env.API_BASE_URL;
  //       const response = await fetch(`${API_URL}/existing-items`);
  //       const data: BiddingItem[] = await response.json();
  //       setExistingBiddingItems(data);
  //     } catch (error) {
  //       console.error("Error fetching existing bidding items:", error);
  //     }
  //   };
  //   // If in Edit mode, fetch the existing item data based on the item ID from query parameters
  //   if (editMode) {
  //     const itemId = parseInt(router.query.itemId as string);
  //     const existingItem = existingBiddingItems.find(
  //       (item) => item.id === itemId
  //     );
  //     if (existingItem) {
  //       setExistingBiddingItem(existingItem);
  //     } else {
  //       // Handle the case when the item with the specified ID is not found
  //       console.error("Existing item not found.");
  //     }
  //   }

  //   fetchExistingBiddingItems();
  // }, []);

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

    // Check if the new item already exists in the list of existing items
    // const itemExists = existingBiddingItems.some(
    //   (item) =>
    //     item.itemName === bidItem.itemName &&
    //     item.itemPrice === bidItem.itemPrice &&
    //     item.timeWindowHours === bidItem.timeWindowHours &&
    //     item.timeWindowMinutes === bidItem.timeWindowMinutes
    // );

    // if (itemExists) {
    //   // Display an error message or handle the duplication case here
    //   console.log("Item already exists.");
    //   return;
    // }

    if (editMode && existingBiddingItem) {
      // Handle the Edit functionality here
      const updatedItem = {
        ...bidItem,
        id: existingBiddingItem.id,
      };
      dispatch(updateBiddingItemRequest(updatedItem.id, updatedItem));
    } else {
      dispatch(
        addBiddingItem({
          ...bidItem,
          id: 0, // Since the 'id' field is auto-generated on the backend, set it to 0 or null here
        })
      );
      setTimeout(async () => {
        setToasterOpen(true); // Show the toaster on successful addition of new bid item
        await router.push("/bidding");
      }, 2000);
    }
  };

  const handleToasterClose = async () => {
    setToasterOpen(false);
    await router.push("/bidding");
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
            {editMode ? "Edit Bidding Item" : "Create Bidding Item"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {/* Use the BiddingItemForm component with Formik */}
          <BiddingItemForm
            initialValues={
              editMode
                ? existingBiddingItem || emptyBiddingItem
                : initialBiddingItem
            }
            onSubmit={handleSave}
            onCancel={handleToasterClose} // Navigate to "/bidding" on cancel
            editMode={editMode}
          />
        </Grid>
      </Grid>
      {/* Rest of the component */}
      <Toaster
        message={
          editMode
            ? "Successfully updated bid item!"
            : "Successfully added bid item!"
        }
        open={toasterOpen}
        onClose={handleToasterClose}
      />
    </Box>
  );
};

export default CreateBiddingItemPage;
