import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, useMediaQuery } from "@mui/material";
import { BiddingItem } from "@/app/routes/bidding/types";
import ItemDeleteButton from "../ItemDeleteButton";
import PublishIcon from "@mui/icons-material/Publish";
import { useDispatch } from "react-redux";
import { publishItemRequest } from "../../../../../store";
import Toaster from "../Toaster";
import { useRouter } from "next/router";

interface BiddingItemsTableProps {
  items: BiddingItem[];
}

const BiddingItemsDraftTable: React.FC<BiddingItemsTableProps> = ({
  items,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();
  const [toasterOpen, setToasterOpen] = useState(false);
  const router = useRouter();

  const handlePublishItem = async (itemId: number) => {
    try {
      dispatch(publishItemRequest(itemId));
      console.log("Item publish request dispatched successfully!");
      setToasterOpen(true);
      await router.push("/bidding");
    } catch (error) {
      console.error("Error dispatching publish item request:", error);
    }
  };

  const handleToasterClose = () => {
    setToasterOpen(false);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="bidding items table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Item Name</TableCell>
              {!isMobile && (
                <TableCell sx={{ fontWeight: 700 }}>Current Price</TableCell>
              )}
              {!isMobile && (
                <TableCell sx={{ fontWeight: 700 }}>Duration</TableCell>
              )}
              <TableCell sx={{ fontWeight: 700 }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.itemName}</TableCell>
                {!isMobile && <TableCell>${item.itemPrice}</TableCell>}
                {!isMobile && (
                  <TableCell>
                    {`${item.timeWindowHours} hrs ${item.timeWindowMinutes} mins`}
                  </TableCell>
                )}
                <TableCell align="right">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box sx={{ ml: 1, cursor: "pointer" }}>
                      <ItemDeleteButton itemId={item.id} />
                    </Box>
                    <Box sx={{ ml: 1, cursor: "pointer" }}>
                      <PublishIcon
                        fontSize="small"
                        color="success"
                        onClick={() => handlePublishItem(item.id)}
                      />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toaster
        message="Item publish request dispatched successfully!" // Message to display in the toaster
        open={toasterOpen}
        onClose={handleToasterClose}
      />
    </Box>
  );
};

export default BiddingItemsDraftTable;
