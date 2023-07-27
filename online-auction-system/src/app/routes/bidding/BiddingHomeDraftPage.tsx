import BiddingItemsTable from "@/app/common/components/BiddingItemsTable/BiddingItemsTable";
import Header from "@/app/common/components/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchBiddingItems } from "../../../../store";
import BiddingItemsDraftTable from "@/app/common/components/BiddingItemsTable/BiddingItemsDraftTable";
import { fetchPublishedItemsRequest } from "../../../../store/actions/fetchPublishedItemAction";

export const BiddingHomeDraftPage: React.FC = () => {
  const dispatch = useDispatch();
  const createdBidItems = useSelector(
    (state: RootState) => state.createdBidItemsState.biddingItems,
  ).filter(({ state }) => ["draft"].includes(state));

  useEffect(() => {
    dispatch(fetchBiddingItems());
  }, [dispatch, createdBidItems]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12} sx={{ ml: 3, mr: 3 }}>
        <Box sx={{ mt: 2 }}>
          {createdBidItems.length > 0 ? (
            <BiddingItemsDraftTable items={createdBidItems} />
          ) : (
            <Typography variant="h6" component="h6">
              No items found.
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
