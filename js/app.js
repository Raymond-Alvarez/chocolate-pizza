'use strict';

/* ============================================================
   CHECKBOX STRIKETHROUGH
   
   When a checkbox is clicked, find the label text next to it
   and toggle a strikethrough style on it — just like a 
   real shopping/ingredients list!
   
   We use event delegation on the whole ingredients section
   rather than adding listeners to each checkbox individually.
   ============================================================ */

const ingredientsList = document.getElementById('ingredients-list');

ingredientsList.addEventListener('change', function(event) {

    /* Only react to checkbox changes */
    if (event.target.type === 'checkbox') {

        /* The label wraps both the checkbox and the text.
           We climb up to the label, then find the text inside it.
           The text node sits directly inside the label alongside
           the checkbox input. */
        let label = event.target.closest('label');

        if (label) {
            if (event.target.checked) {
                /* Add strikethrough when checked */
                label.classList.add('checked-item');
            } else {
                /* Remove strikethrough when unchecked */
                label.classList.remove('checked-item');
            }
        }
    }
});

/* ============================================================
   ON PAGE LOAD — apply strikethrough to any pre-checked items
   
   Some checkboxes start as checked in the HTML.
   This makes sure they show the strikethrough on page load
   without needing the user to click them.
   ============================================================ */
document.querySelectorAll('#ingredients-list input[type="checkbox"]:checked').forEach(function(checkbox) {
    checkbox.closest('label').classList.add('checked-item');
});