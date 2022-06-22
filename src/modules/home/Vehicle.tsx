import { VehicleJSON } from '@/types';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

type Props = {
  data: VehicleJSON.Vehicle;
};

function VehicleCard({ data }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {data.id}
        </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontStyle: 'italic' }}
          color="text.secondary"
        >
          {data.serial}
        </Typography>
        <Typography variant="body2">
          make: {data.make || '-'} <br />
          model: {data.model || '-'} <br />
          year: {data.year || '-'} <br />
          vin: {data.vin || '-'} <br />
          serial: {data.serial || '-'} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default VehicleCard;
