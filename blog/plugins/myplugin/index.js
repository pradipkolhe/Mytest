/*!
 * myplugin
 */

 "use strict";

/*!
 * Module dependencies
 */
var contentstack =  require('contentstack-express');

var Stack = contentstack.Stack();

module.exports = function Myplugin() {


   var options = Myplugin.options;


   Myplugin.templateExtends = function(engine) {

   };


   Myplugin.serverExtends = function(app) {
       //var express = require('express');
       //var nunjucks = require('nunjucks');
       //
       ////var app = express();
       //
       //app.get('/', function (req, res) {
       //    console.log('inside server extends');
       //    var blogPostQuery = Stack.ContentType('blog_post').Query();
       //    blogPostQuery.toJSON().find().spread(function (result) {
       //        console.log(result);
       //        //res.send(result);
       //        res.render('pages/home/test.html', { 'entry': result })
       //    });
       //});


   }

};