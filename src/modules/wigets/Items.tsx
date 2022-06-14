/* eslint-disable @typescript-eslint/no-unused-vars */
import { DragEvent, useState } from 'react';
import {
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import { WidgetTypes } from '@/types';
import { onDragOver, onDragStart } from '@/utils';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { UIFlexSpaceBox, UIFlexColumnBox } from '@/components/UI';

type Props = {
  item: WidgetTypes.Widget;
};

export const ItemStory = ({ item }: Props) => {
  return (
    <Card
      draggable
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
      component={Box}
      sx={{ width: 80 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="60"
          image="https://picsum.photos/seed/picsum/200/300"
          alt="green iguana"
        />
        <CardContent sx={{ p: 0.5, textAlign: 'center' }}>
          <Typography gutterBottom variant="caption">
            {item.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const ItemConv = ({ item }: Props) => {
  const theme = useTheme();
  return (
    <UIFlexSpaceBox
      sx={{ width: '100%' }}
      draggable
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
    >
      <Box component={AccountCircleOutlinedIcon} fontSize="48px" />
      <Paper
        elevation={0}
        variant="outlined"
        sx={{ p: `${theme.spacing(0.5)} ${theme.spacing(1)}`, flex: 1 }}
      >
        <UIFlexSpaceBox>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Eric Knoll
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            6: 15 PM
          </Typography>
        </UIFlexSpaceBox>
        <Typography variant="caption">I just got back to the year!</Typography>
      </Paper>
    </UIFlexSpaceBox>
  );
};
