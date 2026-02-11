const body = document.body;
const settingsBtn = document.getElementById("settingsBtn");
const panel = document.getElementById("settingsPanel");

settingsBtn.onclick = () => {
  panel.classList.toggle("open");
};

function applyClass(prefix, value) {
  body.className = body.className
    .split(" ")
    .filter(c => !c.startsWith(prefix))
    .join(" ");
  body.classList.add(value);
}

document.getElementById("layoutSelect").onchange = e =>
  applyClass("layout", e.target.value);

document.getElementById("menuSelect").onchange = e =>
  applyClass("menu", e.target.value);

document.getElementById("scrollSelect").onchange = e =>
  applyClass("scroll", e.target.value);

/* Menu click behavior */
document.querySelectorAll(".menu-click .top-menu li").forEach(li => {
  li.onclick = () => li.classList.toggle("active");
});

/* Theme color */
document.querySelectorAll(".colors button").forEach(btn => {
  btn.onclick = () =>
    document.documentElement.style.setProperty(
      "--main-color",
      btn.dataset.color
    );
});

document.getElementById("customColor").oninput = e =>
  document.documentElement.style.setProperty("--main-color", e.target.value);
