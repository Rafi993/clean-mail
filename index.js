const addLabel = (element) => {
  const label = element.querySelector("font font");
  if ((label.innerText || "").length > 0) {
    label.style.backgroundColor = label.color;
    label.classList.add("label");
  }
};

try {
  const searchButton = document.querySelector('input[name="nvp_site_web"');
  searchButton.value = "Web";

  const email = document.querySelector(".gb4").innerText;
  document.getElementById("gbar").remove();

  const menubar = document.getElementById("guser");
  const profile = document.createElement("div");
  profile.id = "profile";
  profile.innerText = (email || "").split("@")[0];
  menubar.prepend(profile);

  const logout = document.createElement("a");
  logout.innerText = "Logout";
  logout.id = "logout";
  logout.href = "https://mail.google.com/mail/logout?hl=en";
  menubar.appendChild(logout);

  document.querySelector("#guser > nobr").remove();

  document
    .querySelector("body > table:nth-child(15) > tbody > tr > td:nth-child(1)")
    .remove();

  // Styling read emails
  Array.from(document.querySelectorAll("tr[bgcolor='#E8EEF7']")).forEach(
    (element, index) => {
      element.classList.add("read-email");
      addLabel(element);
    }
  );

  // Unread emails
  Array.from(document.querySelectorAll("tr[bgcolor='#ffffff']")).forEach(
    (element, index) => {
      element.classList.add("unread-email");
      addLabel(element);
    }
  );
} catch (error) {}
