var React = require('react');

/**
 * The main rotate class
 */
var Rotate = React.createClass({
  getDefaultProps: function () {
    return {
      step: 0.1,
      poster: false,
      type: 'video'
    }
  },
  componentDidMount: function () {
      if (this.props.type === 'video') {
        this.makeVideo();
      }

      if (this.props.type === 'image') {
        this.makeImages();
      }
  },
  makeVideo: function () {
    var range = this.refs.range.getDOMNode(),
        video = this.refs.video.getDOMNode();

    // Set max attr on range when video loaded
    video.addEventListener('loadeddata', function(e) {
      range.max = this.duration;
    });

    // Set range options
    range.min = 0;
    range.value = 0;
    range.step = this.props.step;

    video.controls = false;

    // Set video poster if exists
    if (this.props.poster) {
      video.poster = this.props.poster;
    }
  },
  makeImages: function () {
    var range = this.refs.range.getDOMNode();

    // Set range options
    range.min = 1;
    range.max = this.props.total;
    range.value = 0;
    range.step = 1;
  },
  handleChangeVideo: function () {
    var range = this.refs.range.getDOMNode(),
        video = this.refs.video.getDOMNode();

    video.currentTime = range.value;
  },
  handleChangeImage: function () {
    var range = this.refs.range.getDOMNode(),
        imageContainer = this.refs.image.getDOMNode(),
        image = this.refs.image.refs.image.getDOMNode();

    image.src = this.props.path + '/' + range.value + '.' + this.props.ext;
  },
  render: function () {
    var media;

    // If 'type' is 'video', we call the video component
    if (this.props.type === 'video') {
      media = <RotateVideoSources src={this.props.src} ref="video" />
    }

    // If 'type' is 'image', we call the image component
    if (this.props.type === 'image') {
      media = <RotateImages path={this.props.path} total={this.props.total} ext={this.props.ext} ref="image" />
    }

    // Set the event we will call
    var handle = (this.props.type === 'video') ? 'handleChangeVideo' : 'handleChangeImage';


    // .. Render!
    return (
      <div className="rotate-box">
        {media}

        <input type="range" ref="range" onChange={this[handle]} className="rotate-range" />
      </div>
    );
  }
});

/**
 * Rotate Images Component
 */
var RotateImages = React.createClass({
  getDefaultProps: function () {
    return {
      ext: 'jpg'
    }
  },
  render: function () {
    var imageSrc = this.props.path + '/1.' + this.props.ext;

    return (
      <div className="rotate-images">
        <img src={imageSrc} className="rotate-image" ref="image" />
      </div>
    );
  }
});



/**
 * Rotate Videos Sources Component
 */
var RotateVideoSources = React.createClass({
  componentWillMount: function () {
    var sources = [],
        i = 0;

    this.props.src.map(function (source) {
      // For performance we add key prop - http://goo.gl/Aue1Yb

      sources.push(<source key={i} src={source} />);
      ++i;
    });

    this.setState({
      sources: sources
    });
  },
  render: function () {
    return (
      <video className="rotate-video" preload="auto">
        {this.state.sources}
      </video>
    );
  }
});

module.exports = Rotate;
