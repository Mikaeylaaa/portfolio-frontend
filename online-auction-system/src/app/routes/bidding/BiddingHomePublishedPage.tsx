import BiddingItemsTable from "@/app/common/components/BiddingItemsTable/BiddingItemsTable";
import Header from "@/app/common/components/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchBiddingItems } from "../../../../store";
import BiddingItemsDraftTable from "@/app/common/components/BiddingItemsTable/BiddingItemsDraftTable";
import { fetchPublishedItemsRequest } from "../../../../store/actions/fetchPublishedItemAction";

export const BiddingHomePublishedPage: React.FC = () => {
  const dispatch = useDispatch();
  const createdBidItems = useSelector(
    (state: RootState) => state.createdBidItemsState.biddingItems,
  );
  const publishedItems = useSelector(
    (state: RootState) => state.fetchPublishedItemsState.publishedItems,
  );

  useEffect(() => {
    dispatch(fetchPublishedItemsRequest());
  }, [dispatch, publishedItems]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12} spacing={2}>
        <Grid container sx={{ ml: 3 }}>
          <Grid item xs={12} sm={1}>
            <Box sx={{ mt: 3 }}>
              <Button color="primary" size="medium" variant="outlined">
                Ongoing
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Box sx={{ mt: 3 }}>
              <Button color="primary" size="medium" variant="outlined">
                Completed
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ ml: 3, mr: 3 }}>
        <Box sx={{ mt: 2 }}>
          {publishedItems.length > 0 ? (
            <BiddingItemsTable items={publishedItems} />
          ) : (
            <Typography variant="h6" component="h6">
              No published items found.
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
