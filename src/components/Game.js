import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GameClock from './GameClock/GameClock';
import FinishedButtons from './PlayFriendMode/FinishedButtons';
import FinishedDialogs from './PlayFriendMode/FinishedDialogs';
import InvitedButtons from './PlayFriendMode/InvitedButtons';
import InvitedDialogs from './PlayFriendMode/InvitedDialogs';
import MoveValidatorTable from './Table/MoveValidatorTable.js';
import SecondaryButtons from './SecondaryButtons.js';
import SecondaryDialogs from './SecondaryDialogs';
import History from './History';

const useStyles = makeStyles({
  gameBox: {
    background: '#f6f6f6',
  },
  pgn: {
    height: 195,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Game = ({ props }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.gameBox}>
        <Grid item xs={12} className={classes.pgn}>
          <Grid item xs={12} className={classes.centered}>
            <History />
          </Grid>
          <Grid item xs={12}>
            <MoveValidatorTable />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.centered}>
          <SecondaryButtons />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.centered}>
        <GameClock />
      </Grid>
      <Grid item xs={12}>
        <InvitedButtons />
        <FinishedButtons />
      </Grid>
      <SecondaryDialogs />
      <InvitedDialogs />
      <FinishedDialogs />
    </Grid>
  );
};

export default Game;