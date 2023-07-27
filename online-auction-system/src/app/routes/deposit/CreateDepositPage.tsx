import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { RootState, UserInfo } from "../../../../store";
import { useRouter } from "next/router";
import Toaster from "@/app/common/components/Toaster";
import DepositMoneyForm, {
  DepositMoneyFormValues,
} from "@/app/common/components/Deposit/DepositMoneyForm";
import {
  createDepositRequest,
  fetchUsersRequest,
} from "../../../../store/actions/depositAction";

const CreateDepositPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedInUserInfo = useSelector(
    (state: RootState) => state.loginAuth.user,
  ) as UserInfo | null;
  console.log("loggedInUserInfo", loggedInUserInfo);
  const userId = loggedInUserInfo?.id; // Access the 'id' property from the 'UserInfo' interface
  const auctionUsers = useSelector(
    (state: RootState) => state.usersState.user,
  ) as UserInfo | null;
  const bidUsers: UserInfo[] = auctionUsers ? [auctionUsers] : [];

  const initialDeposit: DepositMoneyFormValues = {
    userId: userId || 0,
    amount: 0,
  };

  const [toasterOpen, setToasterOpen] = useState(false);

  const handleDeposit = async (deposit: DepositMoneyFormValues) => {
    // Perform any additional validation or logic before saving the item
    if (!deposit.userId || !deposit.amount) {
      // Dispatch an action to set the error message in the Redux store
      dispatch({
        type: "ADD_DEPOSIT_MONEY_ERROR",
        payload: "Please fill in all fields.",
      });
      return;
    }

    const depositData = { ...deposit, userId };
    dispatch(createDepositRequest(depositData));

    setTimeout(async () => {
      setToasterOpen(true); // Show the toaster on successful addition of new bid item
      await router.push("/bidding");
    }, 2000);
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
            {`Create Deposit`}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <DepositMoneyForm users={bidUsers} onSubmit={handleDeposit} />
        </Grid>
      </Grid>
      {/* Rest of the component */}
      <Toaster
        message={"Successfully deposited money!"}
        open={toasterOpen}
        onClose={handleToasterClose}
      />
    </Box>
  );
};

export default CreateDepositPage;
