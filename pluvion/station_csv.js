var getJSON = require('get-json');
var jsonexport = require('jsonexport');
var fs = require('fs');

getJSON('https://us-central1-pluvion-tech.cloudfunctions.net/stations/selec', function (error, resp) {
    console.log(error);
    console.log(resp);
    //var txtjson = [inserir json manualmente] ;
    jsonexport(resp, function (err, res) {
        if (err) return console.log(err);
        console.log(res);

        geraCsv(res);
    });
});

function geraCsv(res){
    fs.writeFile('formList.csv', res, 'utf8', function (err) {
        if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
        } else {
            console.log('It\'s saved!');
        }
    });
}