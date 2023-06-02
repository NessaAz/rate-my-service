import interact from "interactjs";
import { dragMoveListener } from "./resizableDraggable";

function dropZone(cssSelector){
    // enable draggables to be dropped into this
    interact(cssSelector).dropzone({
        // only accept elements matching this CSS selector
        accept: '.yes-drop',
        overlap: "pointer",
    
        // listen for drop related events:
    
        ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
        },
        ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        },
        ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.textContent = 'Dragged out'
        },
        ondrop: function (event) {
        event.relatedTarget.textContent = 'Dropped'
        },
        ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        }
    })
    
    interact('.drag-drop')
        .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
            })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        listeners: { move: dragMoveListener }
    })
}

  window.dragMoveListener = dragMoveListener;

export default dropZone;