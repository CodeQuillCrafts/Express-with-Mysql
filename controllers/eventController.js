const db = require('../models/eventModel.js');

// Function to insert data
const insertEvent = (req, res) => {
    const {
        parent_id, company_id, event_name, label_color, location, description,
        start_date_time, end_date_time, host, status, note, repeat, repeat_every,
        repeat_cycles, repeat_type, send_reminder, remind_time, remind_type, event_link,
        added_by, last_updated_by, event_id
    } = req.body;

    db.query(`INSERT INTO ${process.env.TABLE_NAME || 'taskTable'} (
        parent_id, company_id, event_name, label_color, location, description,
        start_date_time, end_date_time, host, status, note, \`repeat\`, repeat_every,
        repeat_cycles, repeat_type, send_reminder, remind_time, remind_type, event_link,
        added_by, last_updated_by, event_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
        parent_id, company_id, event_name, label_color, location, description,
        start_date_time, end_date_time, host, status, note, repeat, repeat_every,
        repeat_cycles, repeat_type, send_reminder, remind_time, remind_type, event_link,
        added_by, last_updated_by, event_id
    ], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Data inserted successfully');
    });
};

// Function to update data with id
const updateEvent = (req, res) => {
    const { eventId } = req.params;
    const {
        parent_id, company_id, event_name, label_color, location, description,
        start_date_time, end_date_time, host, status, note, repeat, repeat_every,
        repeat_cycles, repeat_type, send_reminder, remind_time, remind_type, event_link,
        added_by, last_updated_by, event_id
    } = req.body;

    db.query(`UPDATE ${process.env.TABLE_NAME || 'taskTable'} SET
        parent_id = ?, company_id = ?, event_name = ?, label_color = ?, location = ?, description = ?,
        start_date_time = ?, end_date_time = ?, host = ?, status = ?, note = ?, \`repeat\` = ?, repeat_every = ?,
        repeat_cycles = ?, repeat_type = ?, send_reminder = ?, remind_time = ?, remind_type = ?, event_link = ?,
        added_by = ?, last_updated_by = ?, event_id = ?
        WHERE id = ?`, [
        parent_id, company_id, event_name, label_color, location, description,
        start_date_time, end_date_time, host, status, note, repeat, repeat_every,
        repeat_cycles, repeat_type, send_reminder, remind_time, remind_type, event_link,
        added_by, last_updated_by, event_id, eventId
    ], (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            res.status(500).send('Error updating data');
            return;
        }
        res.status(200).send('Data updated successfully');
    });
};

// Function to read data with id
const getEventById = (req, res) => {
    const { eventId } = req.params;
    db.query(`SELECT * FROM ${process.env.TABLE_NAME || 'taskTable'} WHERE id = ?`, [eventId], (err, results) => {
        if (err) {
            console.error('Error reading data:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.status(200).json(results);
    });
};

// Function to read all data
const getEvents = (req, res) => {
    db.query(`SELECT * FROM ${process.env.TABLE_NAME || 'taskTable'}`, (err, results) => {
        if (err) {
            console.error('Error reading data:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.status(200).json(results);
    });
};

module.exports = {
    insertEvent,
    updateEvent,
    getEventById,
    getEvents
};

// const db = require('../models/eventModel.js');

// // Function to insert data
// const insertEvent = (req, res) => {
//     const { username, password } = req.body;
//     db.query(`INSERT INTO ${process.env.TABLE_NAME || 'taskTable'} (username, password) VALUES (?, ?)`, [username, password], (err, results) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             res.status(500).send('Error inserting data');
//             return;
//         }
//         res.status(200).send('Data inserted successfully');
//     });
// };

// // Function to update data with id
// const updateEvent = (req, res) => {
//     const { eventId } = req.params;
//     const { username, password } = req.body;
//     db.query(`UPDATE ${process.env.TABLE_NAME || 'taskTable'} SET username = ?, password = ? WHERE id = ?`, [username, password, eventId], (err, results) => {
//         if (err) {
//             console.error('Error updating data:', err);
//             res.status(500).send('Error updating data');
//             return;
//         }
//         res.status(200).send('Data updated successfully');
//     });
// };

// // Function to read data with id
// const getEventById = (req, res) => {
//     const { eventId } = req.params;
//     db.query(`SELECT * FROM ${process.env.TABLE_NAME || 'taskTable'} WHERE id = ?`, [eventId], (err, results) => {
//         if (err) {
//             console.error('Error reading data:', err);
//             res.status(500).send('Error reading data');
//             return;
//         }
//         res.status(200).json(results);
//     });
// };

// // Function to read all data
// const getEvents = (req, res) => {
//     const { eventId } = req.params;
//     db.query(`SELECT * FROM ${process.env.TABLE_NAME || 'taskTable'}`, (err, results) => {
//         if (err) {
//             console.error('Error reading data:', err);
//             res.status(500).send('Error reading data');
//             return;
//         }
//         res.status(200).json(results);
//     });
// };

// module.exports = {
//     insertEvent,
//     updateEvent,
//     getEventById,
//     getEvents
// };