import BiddingItemsTable from "@/app/common/components/BiddingItemsTable/BiddingItemsTable";
import Header from "@/app/common/components/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiddingItem } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchBiddingItems } from "../../../../store";
import BiddingItemsDraftTable from "@/app/common/components/BiddingItemsTable/BiddingItemsDraftTable";

export const BiddingHomePage: React.FC = () => {
  const [showInPublishBiddingPage, setShowInPublishBiddingPage] =
    useState(false);
    const dispatch = useDispatch();
  const createdBidItems = useSelector(
    (state: RootState) => state.createdBidItemsState.biddingItems
  );

  useEffect(() => {
    // Fetch bidding items when the component mounts
    dispatch(fetchBiddingItems());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      {showInPublishBiddingPage && (
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
      )}

      <Grid item xs={12} sx={{ ml: 3, mr: 3 }}>
        <Box sx={{ mt: 2 }}>
          {!showInPublishBiddingPage ? (
            <BiddingItemsDraftTable items={createdBidItems} />
          ) : (
            <BiddingItemsTable items={[]} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
