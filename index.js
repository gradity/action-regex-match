const {getInput, setOutput, setFailed} = require('@actions/core');

try {
    const text = getInput('text');
    const regexExp = getInput('regexExp');

    const checker = (str, regexExp) => {
        matchRes = str.match(regexExp);
        return matchRes == null ? false : true;
    };

    const match = checker(text, regexExp)

    setOutput('match', match);

} catch (error) {
    setFailed(error.message);
}