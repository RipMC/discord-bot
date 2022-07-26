module.exports = {
	name: 'error',
	once: false,
    	execute() {
            (e) => console.error(e);
    }
}