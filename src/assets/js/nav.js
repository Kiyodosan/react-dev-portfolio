// function navJs() {
/* const navJs = () => {
  const primaryNav = document.querySelector('.primary-nav');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  
  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
  
    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
}

export default navJs */

const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});