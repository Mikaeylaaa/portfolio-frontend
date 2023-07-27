import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { BiddingItem } from "@/app/routes/bidding/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import AttachMoney from "@mui/icons-material/AttachMoney";

interface BiddingItemsTableProps {
  items: BiddingItem[];
}

const BiddingItemsTable: React.FC<BiddingItemsTableProps> = ({ items }) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="auction items table">
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
              Bid
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.itemName}</TableCell>
              {!isMobile && <TableCell>${item.itemPrice}</TableCell>}
              {!isMobile && (
                <TableCell>{`${item.timeWindowHours} hrs ${item.timeWindowMinutes} mins`}</TableCell>
              )}
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<AttachMoney fontSize="small" />}
                >
                  Bid
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BiddingItemsTable;
