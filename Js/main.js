
document.addEventListener("DOMContentLoaded", () => {
    const faqGroups = document.querySelectorAll('.faq-group');

    faqGroups.forEach(faqGroup => {
        const header = faqGroup.querySelector('.faq-group-header');
        const icon = header.querySelector('i');
        const body = faqGroup.querySelector('.faq-group-body');

        header.addEventListener('click', () => {
            // Hide all other faq-group bodies and change their icons to plus
            faqGroups.forEach(group => {
                const groupBody = group.querySelector('.faq-group-body');
                const groupIcon = group.querySelector('.faq-group-header i');

                if (groupBody !== body) {
                    groupBody.classList.remove('open');
                    groupIcon.classList.remove('fa-minus');
                    groupIcon.classList.add('fa-plus');
                }
            });

            // Toggle the clicked faq-group body and icon
            if (body.classList.contains('open')) {
                body.classList.remove('open');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                body.classList.add('open');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});


// Mobile menu
document.addEventListener('DOMContentLoaded', ()=>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});