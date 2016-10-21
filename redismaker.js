var me = { name: 'henry', siblings: ['hugh', 'noah']};

var inserter = function(data) {
	return JSON.stringify(data);
}

var deserter = function (string) {
	return JSON.parse(string);
}

