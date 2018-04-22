
$(document).contextmenu(function() {
    return false;
});

var enteredFirstName = "";
var enteredSecondName = "";
var firstOutside = false;
var secondOutside = false;

$(function() {
        $(".name").draggable({
                revert: 'invalid',
                cursor: 'move'
        });
    
        $("#NameBox").droppable({
                drop: function( event, ui ) {
                    $("#WorkSpace").droppable( "option", "disabled", false );
                }
        });
        
        $("#WorkSpace").droppable({
                out: function() {
                    $( this ).droppable( "option", "disabled", false );
                    firstOutside = true;
                    secondOutside = true;
                },
                over : function(){
                    firstOutside = false;
                    secondOutside = false
                },
                drop: function( event, ui ) {
                    // $( this ).droppable( "option", "disabled", true );

                    // Make stuff happen
                    var firstName = $( "#FirstName" );
                    firstName.contextmenu(function() {
                      if(!firstOutside){
                      console.log("Open first modal");
                      $('#firstNameModal').modal('show');
                      $( "#SaveFirstName" ).off().on('click' , function() {
                          console.log("Saving First name..");
                          enteredFirstName = $("#FirstNameValue").val();
                          $('#firstNameModal').modal('hide');
                          console.log(enteredFirstName);
                        });
                      }
                    });

                    var lastName = $( "#LastName" );
                    lastName.contextmenu(function() {
                    if(!secondOutside){
                      console.log("Open second modal");
                      $('#secondNameModal').modal('show');
                      $( "#SaveSecondName" ).off().on('click' , function() {
                          console.log("Saving second name..");
                          enteredSecondName = $("#SecondNameValue").val();
                          $('#secondNameModal').modal('hide');
                          console.log(enteredSecondName);
                        });
                  }

                    });

                    $( "#execute" ).off().on('click' , function() {
                          console.log(enteredFirstName + " " + enteredSecondName);
                    });
                }
        });
});


