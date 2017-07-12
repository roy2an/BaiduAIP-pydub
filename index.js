var AipSpeech = require("./aip/").speech;
var fs = require('fs');
var async = require('async');
var exec = require('child_process').exec;

// 设置APPID/AK/SK
var APP_ID = "9850917";
var API_KEY = "YTdfpjxf72t3AFg2FMdW4Ibr";
var SECRET_KEY = "oEwfKrNbICK7g5MxIG8ZLitmnoLwGnZs";

var client = new AipSpeech(APP_ID, API_KEY, SECRET_KEY);

// var musicBook = [{speed:6, pitch:2, tone:0},
//                  {speed:4, pitch:2, tone:0}];
// var clips = [];
// var dhh = fs.createWriteStream('./dhh-interview.mp3');

async.series([
    function (callback) {
        client.text2audio('捧', {spd: 2, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice0.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        client.text2audio('油', {spd: 4, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice2.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        client.text2audio('一', {spd: 4, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice3.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        client.text2audio('生', {spd: 5, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice4.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        client.text2audio('一', {spd: 4, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice5.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        client.text2audio('起', {spd: 5, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice6.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        client.text2audio('走', {spd: 3, pit:3, per: 1}).then(function(result) {
            // 把data数据写入到文件
            fs.writeFileSync('./test/mpVoice8.mp3', result.data);
            callback();
        });
    },
    function (callback) {
        exec('python index.py ',function(error,stdout,stderr){
            if(stdout.length >1){
                console.log('you offer args:',stdout);
            } else {
                console.log('you don\'t offer args');
            }
            if(error) {
                console.info('stderr : '+stderr);
            }
        });
        // files = fs.readdirSync('./test/');
        // files.forEach(function (file) {
        //     if( file.indexOf(".mp3") != -1 )
        //         clips.push(file);
        // });

        // main();
    }],
    function (){
        console.log('Done');
    }
);

function main() {
    if (!clips.length) {
        dhh.end("Done");
        return;
    }
    currentfile = './test/' + clips.shift();
    stream = fs.createReadStream(currentfile);
    stream.pipe(dhh, {end: false});
    stream.on("end", function() {
        console.log(currentfile + ' appended');
        main();        
    });
}