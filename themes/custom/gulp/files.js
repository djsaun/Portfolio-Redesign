var paths = {
  components: {
    normalizecss: './node_modules/normalize.css/',
  },
  css: {
    src: './static/css/src/',
    dist: './static/css/dist/',
    maps: './static/css/src/maps/'
  },
  js: {
    src: './static/js/src/',
    vendor: './static/js/vendor/',
    dist: './static/js/dist/',
    jshint: './'
  },
  js_map: {
    src: './static/js/src/',
    dist: './static/js/dist/',
    jshint: './'
  },
  images: {
    src: './static/images/src/',
    dist: './static/images/dist/'
  },
  sprites: {
    src: './static/images/src/icons/',
    dist: './static/images/dist/icons/'
  },
  sprite: {
    dist: './static/images/dist/'
  }
}

var globs = {
  js: {
    src: [
      paths.js.src + 'main.js',
      paths.js.src + 'slider.js',
    ],
    dist: {
      original: 'app.js',
      minified: 'app.min.js'
    },
    jshint: '.jshintrc'
  },
  css: {
    raw: [
      paths.css.src + '*.css'
    ],
    src: [
      paths.css.src + 'style.css'
    ],
    dist: {
      original: 'style.css',
      minified: 'style.min.css',
      temp: 'style.temp.css'
    },
    maps: [
      'config.yml',
      'bp.yml',
      'colors.yml',
      'icons.yml',
      'fonts.yml'
    ],
    normalize: paths.components.normalizecss + 'normalize.css'
  },
  images: {
    src: paths.images.src + '**',
    dist: paths.images.dist + '*.*'
  },
  sprites: {
    src: paths.sprites.src + '*.svg',
    dist: paths.sprites.dist
  },
  sprite: {
    src: paths.sprites.dist + 'svg-symbols.svg',
    dist: 'icons.svg'
  }
};

module.exports = {
  paths: paths,
  globs: globs
};
