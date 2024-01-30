import React from 'react';
import { Resizable } from 'react-resizable';

function App() {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);

  return (
    <Resizable
      width={width}
      height={height}
      onResize={(event, {element, size}) => {
        setWidth(size.width);
        setHeight(size.height);
      }}
    >
      <div className="App">
        <h1>Hello, world!</h1>
      </div>
    </Resizable>
  );
}