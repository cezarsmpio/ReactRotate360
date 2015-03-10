var React = require('react'),
    Rotate = require('reactrotate360');

// Render videos
var sources = [
  'video/video.mp4',
  'video/video.oggtheora.ogv',
  'video/video.webmhd.webm'
];

React.render(<Rotate src={sources} />, document.querySelector('#video'));

// Render images
React.render(<Rotate type="image" path="images" ext="png" total="43" />, document.querySelector('#images'));