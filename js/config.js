// test comment to deploy app
window._config = {
    cognito: {
        userPoolId: process.env.POOLID, // e.g. us-east-2_uXboG5pAb
        userPoolClientId: process.env.CLIENTID, // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'ca-central-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: process.env.URL // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
