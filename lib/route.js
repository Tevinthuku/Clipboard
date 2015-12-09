Router.configure({
    layoutTemplate: 'main'
});

//login template
Router.route('/login');

// home layout
Router.route('/', {
    name: 'new',
    template: 'new'
});

//  old
Router.route('/old');

// register
Router.route('/records');


Router.configure
    progressTick : false
    
 // get rid of the spinner   
Router.configure
    progressSpinner : false