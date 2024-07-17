document.addEventListener('DOMContentLoaded', () => {
    const ingredientButtons = document.querySelectorAll('.ingredient-button');
    const selectedIngredientsDiv = document.querySelector('.selected-ingredients');

    ingredientButtons.forEach(button => {
        button.addEventListener('click', () => {
            const wrapper = button.closest('.ingredient-wrapper');
            const inputDiv = wrapper.querySelector('.amount-input');
            inputDiv.classList.toggle('hidden');
        });
    });

    document.querySelectorAll('.add-ingredient-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const inputDiv = e.target.closest('.amount-input');
            const amountField = inputDiv.querySelector('.amount-input-field');
            const ingredient = inputDiv.previousElementSibling.getAttribute('data-ingredient');
            const amount = amountField.value.trim();
            if (amount) {
                addIngredient(ingredient, amount);
                inputDiv.classList.add('hidden');
                amountField.value = ''; // Clear the input field
            }
        });
    });

    function addIngredient(ingredient, amount) {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('selected-ingredient');
        ingredientDiv.innerHTML = `
            <span>${ingredient}</span>
            <span>${amount}</span>
        `;
        selectedIngredientsDiv.appendChild(ingredientDiv);
    }
});
