'use strict'

/*
@class: IndexController
@descrip: Main controller for index app
*/
class IndexController {
   
   /*
   @name: Main
   @descrip: Index view
   */
   main (req, res) {
      var usernameString = null;
      if ( req.user && req.user.username ) {
        usernameString = req.user.username;
      }
      
      try {
        return res.render('index', { username: usernameString });
      } catch (e) {
        return res.render("500");
      }
   }


   /*
   @name: Ensayos
   @descrip: Ensayos
   */
   ensayos (req, res) {
     try {
        return res.render('ensayos');
      } catch (e) {
        return res.render("500");
      }
   }
   
   /*
   @name: login
   @descrip: Login user
   */
   login (req, res) {
     try {
        //Component contact-form
        let component = `
            System.config({
              paths: {
                  'ng2-login-form/*': 'node_modules/ng2-login-form/*.js',
              },
              packages: {
                publics: {
                  format: 'register',
                  defaultExtension: 'js'
                }
              }
            });
            System.import('publics/boot')
              .then(null, console.error.bind(console));
        `;

        return res.render('login', {component: component});
      } catch (e) {
        return res.render("500");
      }
   }
   
   /*
   @name: logout
   @descrip: Logout session
   */
   logout (req, res) {
      try {
        req.logout();
      } catch (e) {
        return res.render("500");
      } finally {
        return res.redirect("/login");
      }
   }
  
}

module.exports = new IndexController;