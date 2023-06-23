const {google} = require('googleapis');

async function verifyGoogleToken(token) {
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        "http://localhost:3000/login"
    );

    try {
        oauth2Client.setCredentials({ access_token: token });
        const people = google.people({ version: 'v1', auth: oauth2Client });
        const res = await people.people.get({
            resourceName: 'people/me',
            personFields: 'emailAddresses,names,photos',
        });
        const person = res.data;
        return person;
    } catch (error) {
        console.error('Error occurred during token verification:', error);
        return null;
    }
}

module.exports = verifyGoogleToken;