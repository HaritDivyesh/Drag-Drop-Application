
$(document).contextmenu(function() {
    return false;
});

var enteredFirstName = "";
var enteredSecondName = "";
var firstOutside = false;
var secondOutside = false;
var dataToDisplay = ""
var connectionStatus = "Not defined"
var currentItem = ""

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
                    if (currentItem == "FirstName"){
                      firstOutside = true;
                      dataToDisplay = enteredFirstName;
                      console.log(dataToDisplay);
                    }
                    else if (currentItem == "LastName"){
                      secondOutside = true;
                      dataToDisplay = enteredSecondName;
                      console.log(dataToDisplay);
                    }
                },
                over : function(){
                    firstOutside = false;
                    secondOutside = false
                },
                drop: function( event, ui ) {
                    console.log(ui.draggable[0].id);
                    currentItem = ui.draggable[0].id;
                    // Make stuff happen
                    var firstName = $( "#FirstName" );
                    firstName.contextmenu(function() {
                      if(!firstOutside){
                      $('#firstNameModal').modal('show');
                      $( "#SaveFirstName" ).off().on('click' , function() {
                          console.log("Saving First name..");
                          enteredFirstName = $("#FirstNameValue").val();
                          dataToDisplay = enteredFirstName;
                          $('#firstNameModal').modal('hide');
                          console.log(enteredFirstName);
                        });
                      }
                    });

                    var lastName = $( "#LastName" );
                    lastName.contextmenu(function() {
                    if(!secondOutside){
                      $('#secondNameModal').modal('show');
                      $( "#SaveSecondName" ).off().on('click' , function() {
                          console.log("Saving second name..");
                          enteredSecondName = $("#SecondNameValue").val();
                          dataToDisplay = enteredSecondName;
                          $('#secondNameModal').modal('hide');
                          console.log(enteredSecondName);
                        });
                  }

                    });

                    $( "#connect" ).off().on('click' , function() {
                      dataToDisplay = "My name is " + enteredFirstName + " " + enteredSecondName;
                      alert("Boxes are now connected!");
                      connectionStatus = "Connected";
                      $( "#setConnectionStatus" ).text(connectionStatus);
                      $( "#setConnectionStatus" ).css('margin-left', '740px');
                    });

                    $( "#disconnect" ).off().on('click' , function() {
                      dataToDisplay = enteredFirstName + " " + enteredSecondName;
                      alert("Boxes have been disconnected");
                      connectionStatus = "Disconnected";
                      $( "#setConnectionStatus" ).text(connectionStatus);
                      $( "#setConnectionStatus" ).css('margin-left', '725px');
                    });

                    $( "#execute" ).off().on('click' , function() {
                          console.log(dataToDisplay);
                          $( "#nameText" ).text(dataToDisplay);
                    });
                }
        });
});


