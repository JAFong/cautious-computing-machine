const schema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 3,
      description: "First Name",
    },
    lastName: {
      type: "string",
      minLength: 3,
      description: "Last Name",
    },
    email: {
      type: "string",
      minLength: 3,
      description: "Email",
    },
    countryOfCitizenship: {
      type: "string",
      description: "Country of Citizenship",
      enum: ["DE", "IT", "JP", "US", "RU", "Other"],
    },
    website: {
      type: "string",
      minLength: 3,
      description: "LinkedIn/Personal Website URL",
    },
    visa: {
      type: "object",
      properties: {
        categoriesOfInterest: {
          type: "array",
          uniqueItems: true,
          items: {
            type: "string",
            enum: ["O-1", "EB-1A", "EB-2 NIW", "I don't know"],
          },
          minItems: 1,
        },
      },
    },
    additionalInformation: {
      type: "string",
      minLength: 3,
      description: "Additional Information",
    },
  },
  required: ["firstName", "lastName", "email", "countryOfCitizenship", "visa"],
};

export default schema;
