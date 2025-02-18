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
  },
  required: ["occupation", "nationality"],
};

export default schema;
