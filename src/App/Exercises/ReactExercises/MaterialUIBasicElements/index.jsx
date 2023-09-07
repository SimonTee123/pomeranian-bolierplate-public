//import { Button } from '@mui/material';

/*export const MaterialUIBasicElements = () => {
  return (
    <div>
      <Button variant="contained">Kliknij mnie</Button>
    </div>
  );
};*/

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function MaterialUIBasicElements() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Stack>
  );
}
