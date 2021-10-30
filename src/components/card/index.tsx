import React, { memo } from 'react';

// eslint-disable-next-line no-restricted-imports
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const useStyle = makeStyles({
  root: {
    minWidth: 235,
    marginBottom: 17
  }
});

const BasicCard = memo(({ title, children }: IProps) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
});

export default BasicCard;
