
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
                    });

                    var lastName = $( "#LastName" );
                    lastName.contextmenu(function() {
                      console.log("Open second modal");
                    });
                }
        });
});