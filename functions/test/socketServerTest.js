const expect = require('chai').expect;
const io = require('socket.io-client');
const server = require('../server');

describe('Socket.IO server', () => {

    let clientSocket;
    const PORT = 8080;

    before((done) => {
        clientSocket = io.connect(`http://localhost:${PORT}`);
        clientSocket.on('connect', () => {
            console.log('Client connected for test');
            done();
        });
        clientSocket.on('connect_error', (error) => {
            console.log('Connection error:', error);
        });
    });

    after(() => {
        clientSocket.disconnect();
    });

    it('should receive official-notification', (done) => {
        clientSocket.on('official-notification', (data) => {
            expect(data).to.eql({ msg: 'test' });
            done();
        });

        clientSocket.emit('notify-official', { msg: 'test' });
    });

    it('should receive the alerts', async function () {
        this.timeout(5000); // Set timeout to 5000ms
        try {
            const response = await fetch('main.brazilsouth.cloudapp.azure.com:8000/alerts');
            const logs = await response.json();
            expect(logs).to.be.an('array');
        } catch (error) {
            console.log(error);
        }
    });
    

});
