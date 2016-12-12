const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: 'indent',
  activity: true
});

const jasmine = new Jasmine();
jasmine.loadConfig({
  'spec_dir': '',
  'spec_files': [
    'dist/**/*.spec.js'
  ],
  stopSpecOnExpectationFailure: true,
  random: false
});

jasmine.addReporter(reporter);

jasmine.onComplete((passed) => {
  console.log('Finished test run at ' + Date());
  process.exit(passed ? 0 : 1);
});

jasmine.execute();
