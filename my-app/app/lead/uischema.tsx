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
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/visa",
        },
      ],
    },
    {
      type: "Label",
      text: "How Can We Help You?",
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/additionalInformation",
          options: {
            multi: true,
          },
        },
      ],
    },
  ],
};

export default uischema;
