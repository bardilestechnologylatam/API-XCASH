const { Connection, CommandCall } = require('itoolkit');
const { XMLParser } = require('fast-xml-parser');

const conn = {}

conn.program = () => {
    const connection = new Connection({
        transport: 'ssh',
        transportOptions: { host: '', username: '', password: '' },
    });

    const command = new CommandCall({ type: 'cl', command: 'RTVJOBA USRLIBL(?) SYSLIBL(?)' });

    connection.add(command);

    connection.run((error, xmlOutput) => {
    if (error) {
        throw error;
    }

    const Parser = new XMLParser();
    const result = Parser.parse(xmlOutput);
    console.log(JSON.stringify(result));
    });

}

module.exports = conn;

