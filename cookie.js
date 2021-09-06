const getCookie = (name) => {
  const cookie = document.cookie;
  const allcookie = cookie.split("; ");
  const findCookie = allcookie.find((c) => c.includes(name));
  if (findCookie) {
    const cookieNameValue = findCookie.split("=");
    return cookieNameValue[1];
  }
};

getCookie();
