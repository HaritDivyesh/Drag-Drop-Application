
$(document).contextmenu(function() {
    return false;
});

var enteredFirstName = "";
var enteredSecondName = "";
var firstOutside = true;
var secondOutside = true;
var dataToDisplay = "";
var connectionStatus = "Not defined";
var currentItem = "";
var noItems = false

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
                out: function(event, ui) {
                    $( this ).droppable( "option", "disabled", false );
                    currentItem = ui.draggable[0].id;

                     var howMany = $(this).data("howMany");
                      $(this).data("howMany", howMany-1);
                      if ( howMany == 3){
                        if (noItems){
                          dataToDisplay = "";
                          $("#execute").click();
                        }
                        noItems = true;
                      }
                      
                    if (currentItem == "FirstName"){
                      firstOutside = true;
                      dataToDisplay = enteredSecondName;
                    }
                    if (currentItem == "LastName"){
                      secondOutside = true;
                      dataToDisplay = enteredFirstName;
                    }

                },
                over : function(){
                    firstOutside = false;
                    secondOutside = false;
                    if (!firstOutside || !secondOutside){
                      howMany = $(this).data("howMany") || 0;
                      $(this).data("howMany", howMany+1);
                    }
                    
                },
                drop: function( event, ui ) {
                    currentItem = ui.draggable[0].id;
                    var firstName = $( "#FirstName" );
                    firstName.contextmenu(function() {
                      if(!firstOutside){
                      $('#firstNameModal').modal('show');
                      $( "#SaveFirstName" ).off().on('click' , function() {
                          enteredFirstName = $("#FirstNameValue").val();
                          dataToDisplay = enteredFirstName;
                          $('#firstNameModal').modal('hide');
                        });
                      }
                    });

                    var lastName = $( "#LastName" );
                    lastName.contextmenu(function() {
                    if(!secondOutside){
                      $('#secondNameModal').modal('show');
                      $( "#SaveSecondName" ).off().on('click' , function() {
                          enteredSecondName = $("#SecondNameValue").val();
                          dataToDisplay = enteredSecondName;
                          $('#secondNameModal').modal('hide');
                        });
                  }

                    });

                    if (currentItem == "FirstName"){
                      dataToDisplay = enteredFirstName;
                    }
                    else if (currentItem == "LastName"){
                      dataToDisplay = enteredSecondName;
                    }

                    $( "#connect" ).off().on('click' , function() {
                      if (!firstOutside && !secondOutside){
                        dataToDisplay = "My name is " + enteredFirstName + " " + enteredSecondName;
                        alert("Boxes are now connected!");
                        connectionStatus = "Connected";
                        $( "#setConnectionStatus" ).text(connectionStatus);
                        $( "#setConnectionStatus" ).css('margin-left', '740px');
                      }
                    });

                    $( "#disconnect" ).off().on('click' , function() {
                      if (!firstOutside && !secondOutside){
                        dataToDisplay = enteredFirstName + " " + enteredSecondName;
                        alert("Boxes have been disconnected");
                        connectionStatus = "Disconnected";
                        $( "#setConnectionStatus" ).text(connectionStatus);
                        $( "#setConnectionStatus" ).css('margin-left', '725px');
                    }
                    });

                    $( "#execute" ).off().on('click' , function() {
                          $( "#nameText" ).text(dataToDisplay);
                    });
                }
        });
});


