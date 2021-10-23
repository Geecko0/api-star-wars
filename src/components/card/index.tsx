import React, { memo } from 'react';

// eslint-disable-next-line no-restricted-imports
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
});

export default BasicCard;
