document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navItems = document.querySelectorAll('.nav-item, .js-tab-trigger');
    const sections = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-tab');

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
                // Optional: Add exit animation class if needed
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Sound Effect on Click (Simulated)
    const buttons = document.querySelectorAll('button, .nav-item, .lc-card, .trace-node');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Play a subtle UI sound if implemented
            console.log('UI Click Sound');

            // Add a small visual ripple or scale effect
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 100);
        });
    });

    // Floating Animation Adjustments (Parallax)
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX * -0.01);
        const moveY = (e.clientY * -0.01);

        const nebula = document.querySelector('.bg-nebula');
        if (nebula) {
            nebula.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        const characterContainer = document.querySelector('.hero-character');
        if (characterContainer) {
            const charX = (e.clientX * 0.02); // Move opposite or slightly differently for depth
            const charY = (e.clientY * 0.02);
            characterContainer.style.transform = `translate(${charX}px, ${charY}px)`;
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    function toggleMenu() {
        mobileNavOverlay.classList.toggle('active');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

    // Mobile Navigation Logic (Separate or shared)
    mobileNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-tab');

            // Update Active State
            mobileNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Close menu after selection
            toggleMenu();
        });
    });
});
