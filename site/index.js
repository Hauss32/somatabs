$( () => {
    const $overlay = createOverlay();
    const $modal = createOverlayModal();
    createModalButtons( $modal );

    $( '.button-yes' ).click( function() {
        $overlay.remove();
        $modal.remove();
    })
})

function createOverlay() {
    const $overlay = $( '<div></div>' );
    $overlay.addClass( 'overlay' );
    $( ' body' ).prepend( $overlay ); 

    return $overlay;
}

function createOverlayModal() {
    const $modal = $( '<div></div>');
    $modal.addClass( 'overlay-modal' );

    const $modalTitle = $( '<h1></h1>');
    $modalTitle.text('are you are least 21 years of age?');

    $modal.append( $modalTitle );

    $(' body').prepend( $modal );

    return $modal;
}

function createModalButtons($modal) {
    const $buttonDiv = $( '<div></div>' );

    $buttonDiv.addClass( 'button-container' );

    const $buttonYes = $( '<p>yes</p>' );
    $buttonYes.addClass( 'button-yes modal-button' );
    $buttonDiv.append( $buttonYes );

    const $buttonNo = $( '<p>no</p>' );
    $buttonNo.addClass( 'button-no modal-button' );
    $buttonDiv.append($buttonNo);

    $modal.append( $buttonDiv );
}