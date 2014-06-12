var dsl = require('../index')
  , base = require('./base')
  , build = require('./build')
  , riemann = require('./riemann')
  , riemanndash = require('./riemann-dash')
  , influx = require('./influx')

module.exports = dsl()
    .include(base)
    .include(build)
    .include(riemann)
    .include(riemanndash)
    .include(influx)
