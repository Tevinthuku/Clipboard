
    Template.new.onRendered(function () {
                        $('.datepicker').pickadate({
                        selectMonths: true, // Creates a dropdown to control month
                        selectYears: 150 // Creates a dropdown of 15 years to control year
                        });
                        
                        //hte consultation dropdown
                        
                        $('select').material_select();
                        
                        

    //
    });
    
        Template.new.events({
            // events go here
            'click .submit' :function(){
                // full year date and timee
                    console.log($('.datepicker').val());
                    // get the year only
                    var dateString = $('.datepicker').val(); 
                    console.log(dateString.slice(-4));
                    //year selected
                    var yearSelected = dateString.slice(-4);
                    
                    // the dropdown
                    
                    var e = document.getElementById("consult");
                    var strUser = e.options[e.selectedIndex].text;
                    
                    console.log(strUser);
                    // todat
                    var d = new Date();
                    
                    // returns the year (four digits)
                    var currentYear = d.getFullYear();
                    
                    //age difference
                    
                    var age = currentYear - yearSelected;
                    
                    console.log(age);
                    var mwezi = dateString.slice(2,-6);
                    
                    console.log(mwezi);
                    //working on the month
                    var month;
                    switch(mwezi) {
                        case " January":
                            month = 1;
                            break;
                        case " February":
                            month = 2;
                            break;
                        case " March":
                            month = 3;
                            break;
                        case " April":
                            month = 4;
                            break;
                        case " May":
                            month = 5;
                            break;
                        case " June":
                            month = 6;
                            break;
                        case " July":
                            month = 7;
                            break;
                        case " August":
                            month = 8;
                            break;
                        case " September":
                            month = 9;
                            break;
                        case " October":
                            month = 10;
                            break;
                        case " November":
                            month = 11;
                            break;
                        case " December":
                            month = 12;
                            break;
                    }
                    
                    console.log(month);

                }
        });
        
        
