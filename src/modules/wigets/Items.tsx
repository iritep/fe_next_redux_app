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
  SvgIcon,
} from '@mui/material';
import { WidgetTypes } from '@/types';
import { onDragStart } from '@/utils';
import {
  ArticleOutlined as ArticleOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  NoteAltOutlined as NoteAltOutlinedIcon,
} from '@mui/icons-material';
import { UIFlexSpaceBox, UIFlexColumnBox } from '@/components/UI';

type Props = {
  draggable?: boolean;
  item: WidgetTypes.Widget;
};

export const MiniItemStory = ({ draggable, item }: Props) => {
  return (
    <Box
      draggable={draggable}
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
      sx={{ cursor: 'pointer' }}
    >
      <Card sx={{ width: 80 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="60"
            image={item.avatar}
            alt="green iguana"
          />
          <CardContent sx={{ p: 0.5, textAlign: 'center' }}>
            <Typography gutterBottom variant="caption">
              {item.text && item.text?.length > 8
                ? `${item.text?.substring(0, 8)}...`
                : item.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export const MiniItemConv = ({ draggable, item }: Props) => {
  const theme = useTheme();
  return (
    <UIFlexSpaceBox
      sx={{ width: '100%', cursor: 'pointer' }}
      draggable={draggable}
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
    >
      <Box component={AccountCircleOutlinedIcon} fontSize="48px" />
      <Paper
        elevation={0}
        variant="outlined"
        sx={{ p: `${theme.spacing(0.5)} ${theme.spacing(1)}`, flex: 1 }}
      >
        <UIFlexSpaceBox>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: 13, fontWeight: 600 }}
          >
            Eric Knoll
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: 13, fontWeight: 600 }}
          >
            6: 15 PM
          </Typography>
        </UIFlexSpaceBox>
        <Typography variant="caption">I just got back to the year!</Typography>
      </Paper>
    </UIFlexSpaceBox>
  );
};

export const MiniItemDoc = ({ draggable, item }: Props) => {
  const theme = useTheme();

  return (
    <UIFlexSpaceBox
      draggable={draggable}
      sx={{ width: '100%', cursor: 'pointer' }}
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
    >
      <Box component={AccountCircleOutlinedIcon} fontSize="48px" />
      <Paper
        elevation={0}
        sx={{ p: `${theme.spacing(0.5)} ${theme.spacing(1)}`, flex: 1 }}
      >
        <Typography variant="subtitle2" sx={{ fontSize: 13, fontWeight: 800 }}>
          Eric Knoll
        </Typography>
        <Box>
          <ArticleOutlinedIcon fontSize="large" />
          <ArticleOutlinedIcon fontSize="large" />
          <ArticleOutlinedIcon fontSize="large" />
          <ArticleOutlinedIcon fontSize="large" />
        </Box>
      </Paper>
    </UIFlexSpaceBox>
  );
};

export const MiniItemNote = ({ draggable, item }: Props) => {
  return (
    <UIFlexColumnBox
      draggable={draggable}
      onDragStart={(e: DragEvent<HTMLSpanElement>) => onDragStart(e, item)}
      component={Box}
      sx={{ width: 80, position: 'relative', pb: 2, cursor: 'pointer' }}
    >
      <NoteAltOutlinedIcon sx={{ fontSize: '56px' }} />
      <Typography
        gutterBottom
        variant="caption"
        sx={{ position: 'absolute', bottom: -4, fontWeight: 600 }}
      >
        {item.text}
      </Typography>
    </UIFlexColumnBox>
  );
};
