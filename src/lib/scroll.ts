export const scrollToId = (id: string, defaultOffset = 72) => {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("site-header");
  const dynamicOffset = header?.offsetHeight ?? defaultOffset;
  const y = el.getBoundingClientRect().top + window.scrollY - dynamicOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
