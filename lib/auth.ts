// MOCK AUTH - Replace with real better-auth setup when ready
export const auth = {
  api: {
    getSession: async ({ headers }: { headers: any }) => {
      // Mocking a logged-in user for Phase 3 UI testing
      return {
        user: {
          id: 'mock-user-id',
          email: 'admin@example.com',
          name: 'Admin User'
        }
      };
    }
  }
};
