function scrollToSection(event, sectionId) {
    event.preventDefault(); // prevent the default behavior of the link
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" }); // scroll to the section
  }