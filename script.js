//your JS code here. If required.
const codes = document.querySelectorAll('.code');
 
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {

            codes[idx].value = '';

            setTimeout(() => codes[idx + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
            // Move focus to previous field on backspace
            setTimeout(() => codes[idx - 1]?.focus(), 10);
        }
    });


    code.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value.slice(-1);
        }
    });
});
