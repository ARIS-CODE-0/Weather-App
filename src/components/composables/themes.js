import { ref, watch, onMounted } from "vue";

export function changeThemes() {
  const theme = localStorage.getItem("theme") || "light";
  const themes = [
    "light",
    "dark",
    "aqua",
    "autumn",
    "forest",
    "synthwave",
    "winter",
  ];

  let index = themes.indexOf(theme);
  if (index === themes.length - 1) {
    index = -1;
  }

  const newTheme = themes[index + 1];
  document.querySelector("html").setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  console.log(`le thème ${newTheme} a été appliquée (${index + 1})`);
}

export function usetheme(defaultTheme = "light") {
  const theme = ref(defaultTheme);
  // appliquer le thème à <html> dès que `theme` change
  watch(theme, (newTheme) => {
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      theme.value = defaultTheme;
    }
    document.querySelector("html").setAttribute("data-theme", theme.value);
  });

  return {
    theme,
  };
}
