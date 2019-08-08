import React from 'react';
import Trend from 'react-trend';

// gradient={['#00c6ff', '#F0F', '#FF0']}
export default (props) => (
  <Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={props.data}
    stroke="orange"    
    radius={10}
    strokeWidth={2}
    strokeLinecap={'butt'}
  />
);