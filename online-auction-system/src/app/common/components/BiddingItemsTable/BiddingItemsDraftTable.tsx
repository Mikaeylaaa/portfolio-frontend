import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box, useMediaQuery } from "@mui/material";
import { BiddingItem } from "@/app/routes/bidding/types";
import ItemDeleteButton from "../ItemDeleteButton";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from '@mui/icons-material/Publish';
import AttachMoney from "@mui/icons-material/AttachMoney";
import { useRouter } from "next/router";
import axios from "axios";

interface BiddingItemsTableProps {
  items: BiddingItem[];
}

const BiddingItemsDraftTable: React.FC<BiddingItemsTableProps> = ({
  items,
}) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const router = useRouter();

  const routeToEditBidItemPage = async (editMode: boolean) => {
    await router.push('/bidding/bidding-item-form');
  }

  const handlePublishItem = async (itemId: number) => {
    try {
      // Make an API call to update the bidding item's state to 'published'
      
      await axios.post(`/bidding-items/${itemId}/publish`);

      // Optionally, you can update the state of the bidding item in the frontend to show that it has been published
      // For example, you could remove the item from the draft table or mark it as published.

      // After successful publish, you can perform any necessary UI updates or display a success message.
      console.log("Item published successfully!");
    } catch (error) {
      console.error("Error publishing item:", error);
    }
  };

  return (
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
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box sx={{ ml: 1, cursor: 'pointer'}}>
                    <EditIcon fontSize="small" color="warning" onClick={() => routeToEditBidItemPage(true)}/>
                  </Box>
                  <Box sx={{ ml: 1, cursor: 'pointer'}}>
                    {/* Pass the itemId prop to the ItemDeleteButton */}
                    <ItemDeleteButton itemId={item.id} />
                  </Box>
                  <Box sx={{ ml: 1, cursor: 'pointer' }}>
                    <PublishIcon fontSize="small" color="success"/>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BiddingItemsDraftTable;
