const Messages = require('./messages.js')

const ErrorDict = {
	// Arguments
	illegalArgument: Messages.illegalArgument,
	usageMessage: Messages.usageMessage,

	// Equation
	forbiddenCharacters: Messages.forbiddenCharacters,
	notEquation: Messages.notEquation,
	badPolynom: Messages.badPolynom
}

const errorHandler = (error, details) => {
	const reason = ErrorDict[error]

	console.log(reason)
	process.exit()
}

module.exports = { errorHandler }
