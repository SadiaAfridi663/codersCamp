// Mobile Menu Toggle
        const menuBtn = document.getElementById( 'menu-btn' );
        const mobileMenu = document.getElementById( 'mobile-menu' );

        menuBtn.addEventListener( 'click', () => {
            mobileMenu.classList.toggle( 'hidden' );
            // Optional: Toggle icon between bars and x
            menuBtn.innerHTML = mobileMenu.classList.contains( 'hidden' )
                ? '<i class="fas fa-bars text-xl"></i>'
                : '<i class="fas fa-times text-xl"></i>';
        } );