!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ReactRotate360=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

/**
 * The main rotate class
 */
var Rotate = React.createClass({displayName: "Rotate",
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
      media = React.createElement(RotateVideoSources, {src: this.props.src, ref: "video"})
    }

    // If 'type' is 'image', we call the image component
    if (this.props.type === 'image') {
      media = React.createElement(RotateImages, {path: this.props.path, total: this.props.total, ext: this.props.ext, ref: "image"})
    }

    // Set the event we will call
    var handle = (this.props.type === 'video') ? 'handleChangeVideo' : 'handleChangeImage';


    // .. Render!
    return (
      React.createElement("div", {className: "rotate-box"}, 
        media, 

        React.createElement("input", {type: "range", ref: "range", onChange: this[handle], className: "rotate-range"})
      )
    );
  }
});

/**
 * Rotate Images Component
 */
var RotateImages = React.createClass({displayName: "RotateImages",
  getDefaultProps: function () {
    return {
      ext: 'jpg'
    }
  },
  render: function () {
    var imageSrc = this.props.path + '/1.' + this.props.ext;

    return (
      React.createElement("div", {className: "rotate-images"}, 
        React.createElement("img", {src: imageSrc, className: "rotate-image", ref: "image"})
      )
    );
  }
});



/**
 * Rotate Videos Sources Component
 */
var RotateVideoSources = React.createClass({displayName: "RotateVideoSources",
  componentWillMount: function () {
    var sources = [],
        i = 0;

    this.props.src.map(function (source) {
      // For performance we add key prop - http://goo.gl/Aue1Yb

      sources.push(React.createElement("source", {key: i, src: source}));
      ++i;
    });

    this.setState({
      sources: sources
    });
  },
  render: function () {
    return (
      React.createElement("video", {className: "rotate-video", preload: "auto"}, 
        this.state.sources
      )
    );
  }
});

module.exports = Rotate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});