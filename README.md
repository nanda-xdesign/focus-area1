## FOCUS AREA

This project addresses the objectives outlined in Focus Area 1 of the QE Cross-Skilling Initiative.

### 🚀 **Getting Started**

#### **Prerequisites:**
* Node.js 18+ (22+ recommended for latest features)
* npm (included with Node.js installations)
   
### 🧪 **Running the Tests**
1. Verify that Node.js is installed and the correct version is in use:
   * `node —version`
   * `nvm use node`
3. Navigate to the Playwright tests directory:
   * `cd ./playwright-tests`
5. Execute the test suite:
   * `npx playwright test candymapper.spec.ts`

### 📊 Test Reports

View HTML Report:
* `npx playwright show-report`

Generate and Open Report:
 * `npx playwright test --reporter=html`
