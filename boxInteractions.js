
// $(function() {

//   $("#workspace").droppable({
//                 out: function() {
//                     $( this ).droppable( "option", "disabled", false );
//                 },
//                 drop: function( event, ui ) {
//                     $( this ).droppable( "option", "disabled", true );
//                 }
//         });

//   $( "#firstName" ).draggable({
//     drag: function(event,ui){
//       if($(this).data('droppedin')){
//           $(this).data('droppedin').droppable('enable');
//           $(this).data('droppedin',null);
//           $(this).removeClass('dropped');
//         }}
//   });

// });

$(document).contextmenu(function() {
    return false;
});



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
                },
                drop: function( event, ui ) {
                    $( this ).droppable( "option", "disabled", true );

                    // Make stuff happen
                    var firstName = $( "#FirstName" );
                    firstName.contextmenu(function() {
                      console.log("Open first modal");
                      $('#firstNameModal').modal('show');
                      $( "#SaveFirstName" ).click(function() {
                          console.log("Saving First name..");
                          var enteredFirstName = $("#FirstNameValue").val();
                          $('#firstNameModal').modal('hide');
                          console.log(enteredFirstName);
                        });
                    });

                    var lastName = $( "#LastName" );
                    lastName.contextmenu(function() {
                      console.log("Open second modal");
                      $('#secondNameModal').modal('show');
                      $( "#SaveSecondName" ).click(function() {
                          console.log("Saving second name..");
                          var enteredSecondName = $("#SecondNameValue").val();
                          $('#secondNameModal').modal('hide');
                          console.log(enteredSecondName);
                        });
                    });
                }
        });
});


