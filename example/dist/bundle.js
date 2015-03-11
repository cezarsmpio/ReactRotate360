require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"reactrotate360":[function(require,module,exports){
var React = require('react');

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

},{"react":false}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL1JlYWN0Um90YXRlMzYwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBUaGUgbWFpbiByb3RhdGUgY2xhc3NcbiAqL1xudmFyIFJvdGF0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJSb3RhdGVcIixcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0ZXA6IDAuMSxcbiAgICAgIHBvc3RlcjogZmFsc2UsXG4gICAgICB0eXBlOiAndmlkZW8nXG4gICAgfVxuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICB0aGlzLm1ha2VWaWRlbygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgIHRoaXMubWFrZUltYWdlcygpO1xuICAgICAgfVxuICB9LFxuICBtYWtlVmlkZW86IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLnJlZnMucmFuZ2UuZ2V0RE9NTm9kZSgpLFxuICAgICAgICB2aWRlbyA9IHRoaXMucmVmcy52aWRlby5nZXRET01Ob2RlKCk7XG5cbiAgICAvLyBTZXQgbWF4IGF0dHIgb24gcmFuZ2Ugd2hlbiB2aWRlbyBsb2FkZWRcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgZnVuY3Rpb24oZSkge1xuICAgICAgcmFuZ2UubWF4ID0gdGhpcy5kdXJhdGlvbjtcbiAgICB9KTtcblxuICAgIC8vIFNldCByYW5nZSBvcHRpb25zXG4gICAgcmFuZ2UubWluID0gMDtcbiAgICByYW5nZS52YWx1ZSA9IDA7XG4gICAgcmFuZ2Uuc3RlcCA9IHRoaXMucHJvcHMuc3RlcDtcblxuICAgIHZpZGVvLmNvbnRyb2xzID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgdmlkZW8gcG9zdGVyIGlmIGV4aXN0c1xuICAgIGlmICh0aGlzLnByb3BzLnBvc3Rlcikge1xuICAgICAgdmlkZW8ucG9zdGVyID0gdGhpcy5wcm9wcy5wb3N0ZXI7XG4gICAgfVxuICB9LFxuICBtYWtlSW1hZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5yZWZzLnJhbmdlLmdldERPTU5vZGUoKTtcblxuICAgIC8vIFNldCByYW5nZSBvcHRpb25zXG4gICAgcmFuZ2UubWluID0gMTtcbiAgICByYW5nZS5tYXggPSB0aGlzLnByb3BzLnRvdGFsO1xuICAgIHJhbmdlLnZhbHVlID0gMDtcbiAgICByYW5nZS5zdGVwID0gMTtcbiAgfSxcbiAgaGFuZGxlQ2hhbmdlVmlkZW86IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLnJlZnMucmFuZ2UuZ2V0RE9NTm9kZSgpLFxuICAgICAgICB2aWRlbyA9IHRoaXMucmVmcy52aWRlby5nZXRET01Ob2RlKCk7XG5cbiAgICB2aWRlby5jdXJyZW50VGltZSA9IHJhbmdlLnZhbHVlO1xuICB9LFxuICBoYW5kbGVDaGFuZ2VJbWFnZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5nZSA9IHRoaXMucmVmcy5yYW5nZS5nZXRET01Ob2RlKCksXG4gICAgICAgIGltYWdlQ29udGFpbmVyID0gdGhpcy5yZWZzLmltYWdlLmdldERPTU5vZGUoKSxcbiAgICAgICAgaW1hZ2UgPSB0aGlzLnJlZnMuaW1hZ2UucmVmcy5pbWFnZS5nZXRET01Ob2RlKCk7XG5cbiAgICBpbWFnZS5zcmMgPSB0aGlzLnByb3BzLnBhdGggKyAnLycgKyByYW5nZS52YWx1ZSArICcuJyArIHRoaXMucHJvcHMuZXh0O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVkaWE7XG5cbiAgICAvLyBJZiAndHlwZScgaXMgJ3ZpZGVvJywgd2UgY2FsbCB0aGUgdmlkZW8gY29tcG9uZW50XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgbWVkaWEgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdGF0ZVZpZGVvU291cmNlcywge3NyYzogdGhpcy5wcm9wcy5zcmMsIHJlZjogXCJ2aWRlb1wifSlcbiAgICB9XG5cbiAgICAvLyBJZiAndHlwZScgaXMgJ2ltYWdlJywgd2UgY2FsbCB0aGUgaW1hZ2UgY29tcG9uZW50XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgbWVkaWEgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdGF0ZUltYWdlcywge3BhdGg6IHRoaXMucHJvcHMucGF0aCwgdG90YWw6IHRoaXMucHJvcHMudG90YWwsIGV4dDogdGhpcy5wcm9wcy5leHQsIHJlZjogXCJpbWFnZVwifSlcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGV2ZW50IHdlIHdpbGwgY2FsbFxuICAgIHZhciBoYW5kbGUgPSAodGhpcy5wcm9wcy50eXBlID09PSAndmlkZW8nKSA/ICdoYW5kbGVDaGFuZ2VWaWRlbycgOiAnaGFuZGxlQ2hhbmdlSW1hZ2UnO1xuXG5cbiAgICAvLyAuLiBSZW5kZXIhXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3RhdGUtYm94XCJ9LCBcbiAgICAgICAgbWVkaWEsIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJyYW5nZVwiLCByZWY6IFwicmFuZ2VcIiwgb25DaGFuZ2U6IHRoaXNbaGFuZGxlXSwgY2xhc3NOYW1lOiBcInJvdGF0ZS1yYW5nZVwifSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuLyoqXG4gKiBSb3RhdGUgSW1hZ2VzIENvbXBvbmVudFxuICovXG52YXIgUm90YXRlSW1hZ2VzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlJvdGF0ZUltYWdlc1wiLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXh0OiAnanBnJ1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGltYWdlU3JjID0gdGhpcy5wcm9wcy5wYXRoICsgJy8xLicgKyB0aGlzLnByb3BzLmV4dDtcblxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm90YXRlLWltYWdlc1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogaW1hZ2VTcmMsIGNsYXNzTmFtZTogXCJyb3RhdGUtaW1hZ2VcIiwgcmVmOiBcImltYWdlXCJ9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLyoqXG4gKiBSb3RhdGUgVmlkZW9zIFNvdXJjZXMgQ29tcG9uZW50XG4gKi9cbnZhciBSb3RhdGVWaWRlb1NvdXJjZXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiUm90YXRlVmlkZW9Tb3VyY2VzXCIsXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2VzID0gW10sXG4gICAgICAgIGkgPSAwO1xuXG4gICAgdGhpcy5wcm9wcy5zcmMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIC8vIEZvciBwZXJmb3JtYW5jZSB3ZSBhZGQga2V5IHByb3AgLSBodHRwOi8vZ29vLmdsL0F1ZTFZYlxuXG4gICAgICBzb3VyY2VzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCB7a2V5OiBpLCBzcmM6IHNvdXJjZX0pKTtcbiAgICAgICsraTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc291cmNlczogc291cmNlc1xuICAgIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInZpZGVvXCIsIHtjbGFzc05hbWU6IFwicm90YXRlLXZpZGVvXCIsIHByZWxvYWQ6IFwiYXV0b1wifSwgXG4gICAgICAgIHRoaXMuc3RhdGUuc291cmNlc1xuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdGF0ZTtcbiJdfQ==
