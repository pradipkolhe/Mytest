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
       var nunjucks = require('nunjucks');

       //var app = express();

       app.extends().get('/', function (req, res) {
           console.log('inside server extends');
           var blogPostQuery = Stack.ContentType('blog_post').Query();
           blogPostQuery.toJSON().find().spread(function (result) {
              // console.log(result);
               //res.send(result);
               //var homeQuery = Stack.ContentType('home').Query();
               //homeQuery.toJSON().find().homEntry.only('button')
               //console.log(homeQuery);
               var entry = {
                   entry: result
               }
               res.render('pages/home/test.html', entry)
           });
       });
       function error(err) {
           // err object
           console.log(err);
       };

   }

};