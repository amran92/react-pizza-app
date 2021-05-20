import React from 'react';
import { FeatureContainer } from './FeatureElements';
import FeatureButton from "@material-ui/core/Button";



const Feature = () => {
    return (
      <FeatureContainer>
        <h1>Pizza of the Day</h1>
        <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
        <FeatureButton
          style={{
            fontSize: 24,
          }}
          variant="contained"
          size="large"
          color="secondary"
        >
          Order Now
        </FeatureButton>
      </FeatureContainer>
    );
};

export default Feature;