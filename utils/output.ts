export default class Output {
    public write(data) {
        process.stdout.write(data);
    }

    public writeLine(data) {
        process.stdout.write(`${data}\n`);
    }
}