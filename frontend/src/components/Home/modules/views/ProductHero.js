import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
// import backgroundImage from '../../../../../static/images/background.PNG';

// const backgroundImage = "http://media.getty.edu/museum/images/web/download/14333601.jpg"
const backgroundImage = '../../../../../static/images/background.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
          A Travel in Tamazgha
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Inzan is a cultural project whose aim is to share the beauty of the Amazigh language, heritage and civilization.
        The project was born out of a deep love and appreciation for this culture.
        In Inzan, we believe that Tamazight is a way of life, a style and a mindset. That of freedom, generosity, kindness and seeking wisdom.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="https://www.instagram.com/inzan_wisdom/"
        sx={{ minWidth: 200 }}
      >
        Check our Instagram
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
