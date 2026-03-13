import { google } from 'googleapis';

// @s-expect-error remove when update() type is correct
await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    resource: {
        values: data,
    },
});
