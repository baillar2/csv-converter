var fs = require('fs')
var input = process.argv[2]
var output = process.argv[3]

var data = fs.readFileSync(input, 'utf8')	
var rows = data.split('\n')
var headers = rows[0].split(',')
var result = []
	for(var i=1;i<rows.length; i++){
			var obj = {}
			var currentRow = rows[i].split(',')
		
			for(var j=0; j<headers.length; j++){
				obj[headers[j]]=currentRow[j]
			}
		
		result.push(obj)	
	}


fs.writeFile('output.json', JSON.stringify(result))