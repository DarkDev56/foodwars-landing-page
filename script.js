const navMobile = document.getElementById('nav-mobile');
const navButton = document.getElementById('button-nav-icon');

function HandleNavClick()
{
    if (navMobile.classList.contains('scale-0'))
    {
        navMobile.classList.remove('scale-0');
        navMobile.classList.add('scale-100');
        navButton.classList.remove('fa-bars');
        navButton.classList.add('fa-close');
    }
    else
    {
        navMobile.classList.remove('scale-100');
        navMobile.classList.add('scale-0');
        navButton.classList.remove('fa-close');
        navButton.classList.add('fa-bars');
    }
}
