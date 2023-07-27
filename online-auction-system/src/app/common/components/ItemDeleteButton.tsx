import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { deleteItemRequest } from "../../../../store/actions/deleteItemAction";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { useState } from "react";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import Toaster from "./Toaster";

interface ItemDeleteButtonProps {
  itemId: number; // Pass the itemId as a prop
}

const ItemDeleteButton: React.FC<ItemDeleteButtonProps> = ({ itemId }) => {
  const dispatch = useDispatch();
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [toasterOpen, setToasterOpen] = useState(false);
  const loading = useSelector(
    (state: RootState) => state.deleteItemsState.loading,
  );
  const error = useSelector((state: RootState) => state.deleteItemsState.error);
  const router = useRouter();

  const handleDeleteItem = () => {
    setConfirmationDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    setConfirmationDialogOpen(false);
    dispatch(deleteItemRequest(itemId));
    setTimeout(async () => {
      setToasterOpen(true); // Show the toaster on successful deletion of bid item
      await router.reload();
    }, 1500);
  };

  const handleCancelDelete = () => {
    setConfirmationDialogOpen(false);
  };

  const handleToasterClose = async () => {
    setToasterOpen(false);
    await router.push("/bidding");
  };

  return (
    <Box>
      <DeleteIcon fontSize="small" onClick={handleDeleteItem} color="error" />
      <Typography>{loading ? "Deleting..." : ""}</Typography>
      {/* <Button
        onClick={handleDeleteItem}
        disabled={loading}
        startIcon={<DeleteIcon />}
      >
        {loading ? "Deleting..." : "Delete Item"}
      </Button> */}

      <DeleteConfirmationDialog
        open={confirmationDialogOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        loading={loading}
      />
      <Toaster
        message="Successfully deleted bid item!" // Message to display in the toaster
        open={toasterOpen}
        onClose={handleToasterClose}
      />
    </Box>
  );
};

export default ItemDeleteButton;
