# Project Setup

### Prerequisites:

```Node.js``` and ```npm``` (or yarn) installed on your system.

A basic understanding of React and JavaScript.
    
### 1. Installation:

Clone this repository or download the code files. 
Navigate to the project directory in your terminal.
Run npm install (or yarn install) to install the required dependencies.
Running the Project Locally:

Start the development server by running npm start (or yarn start) in the terminal.
The application will be accessible in your web browser at ```http://localhost:3000``` (or the port specified in your development server configuration).


### 2. Google Sheets Integration:

**Please Note:** This documentation currently uses a placeholder URL for demonstration purposes. You'll need to replace it with your actual Google Sheets integration logic **(Follow step 3 to generate the link).**

**Replace placeholder URL:**

Locate the line in the code:
JavaScript
```
fetch(
    "https://script.google.com/macros/s/YOUR_SHEET_ID/exec",
    // Replace with your Google Sheets integration URL
    {
        method: "POST",
        body: formData
    }
)
```
**Use code with caution.**
Replace YOUR_SHEET_ID with the actual ID of your Google Sheet where you want to store form submissions.

### 3 Set up Google Apps Script:

1. Create a new Google Sheet.
2. Go to Tools > Script editor.
3. Replace the existing code with the provided script logic (specific script logic not provided due to security considerations). 
```
const sheets = SpreadsheetApp.openByUrl("Your sheet url");
//if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("Messages");

function doPost(e){
  console.log(e.parameter)
  let data = e.parameter;
  sheet.appendRow([data.Name,data.PhoneNo,data.Email,data.Message]);
  return ContentService.createTextOutput("Success");
}
```
4. This script will handle receiving and processing form data from your website.
5. Save the script and deploy it as a web app. You'll receive a deployment
6. URL, which is the actual URL you need to replace the placeholder in your code.

### Additional Features and Customizations:

1. Form Validation: The code implements basic form validation using 
2. react-hook-form: ensuring users provide required information in the correct format.
3. Toast Notification: A toast component is used to provide visual feedback to the user upon successful form submission.
4. Loading State: While the form is submitting, a loading indicator is displayed using react-loader-spinner.
5. Framer Motion: The code utilizes Framer Motion for smooth animations and transitions on form elements.

### Code Comments:

The code is well-structured and includes comments explaining the functionality of different sections, making it easier to understand and maintain.

### Further Notes:

1. This documentation provides a general overview. Refer to the specific libraries and technologies used (React, React Hook Form, Framer Motion, etc.) for detailed usage and configuration options.
2. Remember to replace the placeholder Google Sheets integration URL with your actual implementation.
3. The provided script logic might require additional configuration or modifications depending on your specific Google Sheets setup and desired functionality.
4. Overall, this code snippet demonstrates a well-structured and functional contact form implementation with features like validation, toast notifications, and basic Google Sheets integration.
