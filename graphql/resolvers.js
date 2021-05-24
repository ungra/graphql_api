const jh = {
  name: "jh",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => jh,
  },
};

export default resolvers;
