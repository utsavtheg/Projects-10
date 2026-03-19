document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggleBtn = document.querySelectorAll(".sidebar-toggle");
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const themeIcon = themeToggleBtn.querySelector(".theme-icon");
  const searchForm = document.querySelector(".search-form");

  // Update the theme icon based on current theme and sidebar state
  const updateThemeIcon = () => {
    const isDark = document.body.classList.contains("dark-theme");
    themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : "dark_mode";
  }
  // Apply dark theme if saved or system prefers
  const savedTheme = localStorage.getItem("theme");
  const systemPreferDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPreferDark);

  document.body.classList.toggle("dark-theme", shouldUseDarkTheme);

  // Toggle sidebar collapsed state on button click
  sidebarToggleBtn.forEach((btn) => 
    { btn.addEventListener("click", () =>
       { sidebar.classList.toggle("collapsed");
         updateThemeIcon();
        
         }); 
        });
  // Expand the sidebar when the search form is clicked
  searchForm.addEventListener("click", () => {
    if (sidebar.classList.contains("collapsed")) {
      sidebar.classList.remove("collapsed");
      searchForm.querySelector("input").focus();//focus the light
    }
  });

  // Toggle between themes on theme button click
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
  });
});

// const isMobile = window.innerWidth <= 768;
// let sidebar ;
// if(isMobile){
//   sidebar.classList.remove("collapsed");
// } else {
//   sidebar.classList.add("collapsed");
// }