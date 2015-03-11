require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./example/src/app.js":[function(require,module,exports){
var React = require('react'),
    Rotate = require('reactrotate360');

// Render videos
var sources = [
  'video/video.mp4',
  'video/video.oggtheora.ogv',
  'video/video.webmhd.webm'
];

React.render(React.createElement(Rotate, {src: sources}), document.querySelector('#video'));

// Render images
React.render(React.createElement(Rotate, {type: "image", path: "images", ext: "png", total: "43"}), document.querySelector('#images'));
},{"react":false,"reactrotate360":false}]},{},["./example/src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZXhhbXBsZS9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIFJvdGF0ZSA9IHJlcXVpcmUoJ3JlYWN0cm90YXRlMzYwJyk7XG5cbi8vIFJlbmRlciB2aWRlb3NcbnZhciBzb3VyY2VzID0gW1xuICAndmlkZW8vdmlkZW8ubXA0JyxcbiAgJ3ZpZGVvL3ZpZGVvLm9nZ3RoZW9yYS5vZ3YnLFxuICAndmlkZW8vdmlkZW8ud2VibWhkLndlYm0nXG5dO1xuXG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb3RhdGUsIHtzcmM6IHNvdXJjZXN9KSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvJykpO1xuXG4vLyBSZW5kZXIgaW1hZ2VzXG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb3RhdGUsIHt0eXBlOiBcImltYWdlXCIsIHBhdGg6IFwiaW1hZ2VzXCIsIGV4dDogXCJwbmdcIiwgdG90YWw6IFwiNDNcIn0pLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJykpOyJdfQ==
