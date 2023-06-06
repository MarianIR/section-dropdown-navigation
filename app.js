const responsiveNav = () => {
  const navigation = document.querySelector(".navigation");
  const openMenuBtn = document.querySelector(".open-menu-btn");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  const activeNavElement = document.querySelectorAll(".active-nav-element");
  const activeElementList = document.querySelectorAll(".active-element-list");
  const arrow = document.querySelectorAll(".arrow");
  // This is the code for the responsive navigation
  const handleMenuVisibility = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 1070) {
      navigation.style.display = "flex";
      openMenuBtn.style.display = "none";
      closeMenuBtn.style.display = "block";
    } else {
      navigation.style.display = "none";
      openMenuBtn.style.display = "block";
      closeMenuBtn.style.display = "none";
    }
  };

  // Initial check on page load
  handleMenuVisibility();

  // Listen for window resize events
  window.addEventListener("resize", handleMenuVisibility);

  openMenuBtn.addEventListener("click", () => {
    navigation.style.display = "block";
    closeMenuBtn.style.display = "block";
    openMenuBtn.style.display = "none";
  });

  closeMenuBtn.addEventListener("click", () => {
    navigation.style.display = "none";
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  });
  // This is the code for the active navigation component
  let activeIndex = null;
  activeNavElement.forEach((title, index) => {
    title.addEventListener("click", () => {
      if (activeIndex !== null && activeIndex !== index) {
        arrow[activeIndex].classList.remove("active");
        activeElementList[activeIndex].classList.remove("show");
      }
      arrow[index].classList.toggle("active");
      activeElementList[index].classList.toggle("show");
      activeIndex = activeIndex === index ? null : index;
    });
  });
};

responsiveNav();
