
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
                    $("#trash").droppable( "option", "disabled", false );
                }
        });
        
        $("#WorkSpace").droppable({
                out: function() {
                    $( this ).droppable( "option", "disabled", false );
                },
                drop: function( event, ui ) {
                    $( this ).droppable( "option", "disabled", true );
                }
        });
});