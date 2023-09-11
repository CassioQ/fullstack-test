import styled from '@emotion/styled';
import {
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const StatName = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  color: colors.black,
  lineHeight: '14.06px',
  marginTop: '8px',
  marginBottom: '8px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  width: '100%',
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));
