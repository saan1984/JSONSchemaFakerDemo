var jsf = require('json-schema-faker'),
    aStudentSchema ={
        type: 'object',
        properties: {
            name:{
                type: 'string',
                faker: 'name.findName'
            },
            score:{
                type: 'integer',
                minimum:10,
                maximum:80
            }
        }
    };

var aStudentData = jsf(aStudentSchema);
console.log("aaStudentData: ",aStudentData);