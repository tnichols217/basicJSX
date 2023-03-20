module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.tsx$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '^.+\\.jsx$': 'babel-jest',
    }
  };