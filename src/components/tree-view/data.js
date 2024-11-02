const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "locations",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Acount",
        to: "acount",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "loging",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Randon data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
