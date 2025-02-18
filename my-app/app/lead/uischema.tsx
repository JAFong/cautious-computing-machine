const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/firstName",
        },
        {
          type: "Control",
          scope: "#/properties/lastName",
        },
        {
          type: "Control",
          scope: "#/properties/email",
        },
        {
          type: "Control",
          scope: "#/properties/countryOfCitizenship",
        },
        {
          type: "Control",
          scope: "#/properties/website",
        },
      ],
    },
    {
      type: "Label",
      text: "Additional Information",
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/height",
        },
        {
          type: "Control",
          scope: "#/properties/nationality",
        },
        {
          type: "Control",
          scope: "#/properties/occupation",
          options: {
            suggestion: [
              "Accountant",
              "Engineer",
              "Freelancer",
              "Journalism",
              "Physician",
              "Student",
              "Teacher",
              "Other",
            ],
          },
        },
      ],
    },
  ],
};

export default uischema;
