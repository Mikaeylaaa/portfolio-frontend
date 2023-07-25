import BiddingItemsTable from "@/app/common/components/BiddingItemsTable/BiddingItemsTable";
import Header from "@/app/common/components/Header";
import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchBiddingItems } from "../../../../store";
import BiddingItemsDraftTable from "@/app/common/components/BiddingItemsTable/BiddingItemsDraftTable";
import { fetchPublishedItemsRequest } from "../../../../store/actions/fetchPublishedItemAction";

export const BiddingHomePage: React.FC = () => {
  const [showInPublishBiddingPage, setShowInPublishBiddingPage] =
    useState(false);
  const dispatch = useDispatch();
  const createdBidItems = useSelector(
    (state: RootState) => state.createdBidItemsState.biddingItems
  );
  const publishedItems = (useSelector(
    (state: RootState) => state.fetchPublishedItemsState.publishedItems
  )) || createdBidItems.filter((item) => item.state === "published");
  ;

  console.log('createdBidItems',createdBidItems);
  console.log('publishedItems',publishedItems);
  useEffect(() => {
    // Fetch bidding items when the component mounts
    dispatch(fetchBiddingItems());
  }, [dispatch]);

  const handleToggleTable = () => {
    setShowInPublishBiddingPage(!showInPublishBiddingPage);
  };

  useEffect(() => {
    // Fetch 'published' items when showInPublishBiddingPage is true
    if (showInPublishBiddingPage) {
      dispatch(fetchPublishedItemsRequest());
    }
  }, [showInPublishBiddingPage, dispatch]);

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
                <Button
                  color="primary"
                  size="medium"
                  variant="outlined"
                  onClick={handleToggleTable}
                >
                  Ongoing
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Box sx={{ mt: 3 }}>
                <Button
                  color="primary"
                  size="medium"
                  variant="outlined"
                  onClick={handleToggleTable}
                >
                  Completed
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid item xs={12} sx={{ ml: 3, mr: 3 }}>
        <Box sx={{ mt: 2 }}>
          {showInPublishBiddingPage ? (
            <BiddingItemsTable items={publishedItems} />
          ) : (
            <BiddingItemsDraftTable items={createdBidItems} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
