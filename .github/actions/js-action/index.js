const core = require('@actions/core');

function run() {
    const message = core.getInput('message');
    console.log("JavaScript action says:", message);
}

run();
