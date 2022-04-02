import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const wheatImage = '../../../../../static/images/themes/wheat.png';
const oliveImage = '../../../../../static/images/themes/olive.png';
const ariesImage = '../../../../../static/images/themes/aries.png';
const curvyLines = '../../../../../static/images/themes/curvyLines.png';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={curvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={wheatImage}
                alt="wheat"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Proverbs
              </Typography>
              <Typography variant="h5">
                {
                  'They are the gems of wisdom. Proverbs are culturally specific, yet their meaning has universality;'
                }
                {
                  'everyone can relate to them in some way and on some level.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={oliveImage}
                alt="olive"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Symbols
              </Typography>
              <Typography variant="h5">
                {
                  'Humans, consciously and subconsciously, are always striving to make sense of their surrounding world.'
                }

                {'Symbols—such as gestures, signs, objects, signals, and words—help people craft meaning in their interactions with one another.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={ariesImage}
                alt="aries"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                History
              </Typography>
              <Typography variant="h5">
                {'Through history, we can learn how past societies, systems, ideologies, governments, cultures and technologies were built, how they operated, and how they have changed.'}
                {'The rich history of the world helps us to paint a detailed picture of where we stand today.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
