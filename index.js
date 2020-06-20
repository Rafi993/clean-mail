try {
  const searchButton = document.querySelector('input[name="nvp_site_web"');
  searchButton.value = "Web";

  const email = document.querySelector(".gb4").innerText;
  document.getElementById("gbar").remove();

  const menubar = document.getElementById("guser");
  const profile = document.createElement("div");
  profile.id = "profile";
  profile.innerText = email;
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

  // document.getElementById("guser").remove();
} catch (error) {}
