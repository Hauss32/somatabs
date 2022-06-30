$( () => {
    const $overlay = createOverlay();
    const $modal = createOverlayModal();
    createModalButtons( $modal );

    $( '.button-yes' ).click( function() {
        $overlay.remove();
        $modal.remove();
    })

    $( '#submit' ).click( function(event) {
        event.preventDefault();
        const name = $( '#name' ).val();
        const reason = $("#reason option:selected").val();

        if ( hasValidInputs(name, reason) ) {
            handleFormSubmit(name, reason);
        } else {
            handleInputError();
        }
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

function hasValidInputs(name, reason) {
    const validName = name.length > 0;
    const validReason = reason != 'Select a Reason...';

    return validName && validReason;
}

function handleInputError() {
    const $error = $( '#form-error' );
    $error.text('please make sure to include name and contact reason');
}

function handleFormSubmit(name, reason) {
    const $form = $('#contact-form');
    $form.empty();

    const $thanks = $('<h2></h2>');
    $thanks.text(`thanks for reaching out, ${name}!`);
    $thanks.addClass( 'form-thanks' );
    $( $form ).append( $thanks );

    const $feedback = $( '<p></p>');
    const response = respondToInput(reason);
    $feedback.addClass( 'form-feedback' );
    $feedback.text( response );

    $form.append( $feedback );
}

function respondToInput(reason) {
    let text = '';

    switch (reason) {
        case 'purchase':
            text = "Who wouldn't want a little Soma magic in their life?! Sadly, this isn't real. Also, don't do drugs to escape reality."
            break;
        case 'website':
            text = "If this form actually posted somewhere, you could expect a scathing response. RUDE! Also, yeah, it's pretty bad."
            break;
        case 'investor':
            text = "SomaTabs is not currently for sale or open to investments. Although, you might be interested in my bridge..."
            break;
        case 'reality':
            text = "What truly is real? Is this product real? Are WE real? Is this all just a simulation?? All we know is that your question is real...unlike this product."
            break;
        default:
            text = "Not gonna lie, something went wrong with this form. Maybe you're a hacker? Hmm..."
    }

    return text;
}