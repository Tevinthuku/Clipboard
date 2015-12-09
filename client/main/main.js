    Template.main.onRendered(function () {
        
        
                // Show sideNav
                $('.button-collapse').sideNav('show');
                // Hide sideNav
                $('.button-collapse').sideNav('hide');
                
                
                  $('.button-collapse').sideNav({
                  menuWidth: 300, // Default is 240
                 
                  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    }
                );
                // paper-fab modal
                $('.modal-trigger').leanModal();
                // tooltips
                $('.tooltipped').tooltip({delay: 50});
                
    
    });