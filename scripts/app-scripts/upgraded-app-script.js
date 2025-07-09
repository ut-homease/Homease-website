function doGet(e) {
  return doPost(e);
}

function doPost(e) {
  try {
    // Get form data directly from parameters
    const formData = e.parameter;
    
    // Log the data for debugging
    console.log('Received form data:', formData);
    
    // Check form type and route accordingly
    const formType = formData.formType;
    
    if (formType === 'contact') {
      return handleContactForm(formData);
    } else if (formType === 'support') {
      return handleSupportForm(formData);
    } else {
      return handleContractorForm(formData);
    }
      
  } catch (error) {
    console.log('Script error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== CONTACT FORM HANDLER =====
function handleContactForm(formData) {
  try {
    // Validate required fields
    if (
      !formData.name || !formData.name.trim() ||
      !formData.email || !formData.email.trim() ||
      !formData.message || !formData.message.trim()
    ) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Please fill out all required fields (Name, Email, Message).'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Get the Support and Contact Tracker spreadsheet
    const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
    const sheet = spreadsheet.getSheetByName("Contact Form");
    
    // Check if sheet exists
    if (!sheet) {
      console.log('Contact Form sheet not found. Available sheets:');
      const allSheets = spreadsheet.getSheets();
      allSheets.forEach(s => console.log('- ' + s.getName()));
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Contact Form sheet not found in spreadsheet. Please check sheet names.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Create row data for contact form
    const rowData = [
      formData.name || '',           // Name
      formData.company || '',        // Company
      formData.email || '',          // Email
      formData.phone || '',          // Phone
      formData.message || '',        // Message
      new Date()                     // Timestamp
    ];
    
    // Log the row data
    console.log('Adding contact form row data:', rowData);
    
    // Add to sheet
    sheet.appendRow(rowData);
    
    // Send confirmation email with BCC
    try {
      sendContactConfirmationEmail(formData);
    } catch (emailError) {
      console.log('Contact confirmation email error:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.log('Contact form error:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== SUPPORT FORM HANDLER =====
function handleSupportForm(formData) {
  try {
    // Validate required fields
    if (
      !formData.name || !formData.name.trim() ||
      !formData.email || !formData.email.trim() ||
      !formData.category || !formData.category.trim() ||
      !formData.description || !formData.description.trim()
    ) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Please fill out all required fields (Name, Email, Category, Description).'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Get the Support and Contact Tracker spreadsheet
    const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
    const sheet = spreadsheet.getSheetByName("Support Tickets");
    
    // Check if sheet exists
    if (!sheet) {
      console.log('Support Tickets sheet not found. Available sheets:');
      const allSheets = spreadsheet.getSheets();
      allSheets.forEach(s => console.log('- ' + s.getName()));
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Support Tickets sheet not found in spreadsheet. Please check sheet names.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Generate ticket ID
    const ticketId = generateTicketId();
    
    // Create row data for support ticket
    const rowData = [
      ticketId,                    // Ticket ID
      formData.name,              // Name
      formData.submitterType,     // Who?
      formData.email,             // Email
      formData.phone || '',       // Phone
      formData.category,          // Category
      formData.platform || '',    // Platform
      formData.description,       // Description
      new Date(),                 // Date Submitted
      'Open',                     // Status
      '',                         // First Response Date
      '',                         // Resolution Date
      '',                         // Assigned To
      '',                         // Priority
      '',                         // Resolution Notes
      'Open'                      // Status (Open/In Progress/Closed)
    ];
    
    // Log the row data
    console.log('Adding support ticket row data:', rowData);
    
    // Add to sheet
    sheet.appendRow(rowData);
    
    // Route to appropriate tabs based on category
    if (formData.category === 'bug') {
      createBugReport(ticketId, formData);
    } else if (formData.category === 'feature') {
      createFeatureRequest(ticketId, formData);
    }
    
    // Send notification email to team
    try {
      sendSupportNotificationEmail(ticketId, formData);
    } catch (emailError) {
      console.log('Support notification email error:', emailError);
    }
    
    // Send confirmation email to customer
    try {
      sendSupportConfirmationEmail(ticketId, formData);
    } catch (emailError) {
      console.log('Support confirmation email error:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Support ticket submitted successfully!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.log('Support form error:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== CONTRACTOR FORM HANDLER =====
function handleContractorForm(formData) {
  try {
    // Validate required fields
    if (
      !formData.name || !formData.name.trim() ||
      !formData.company || !formData.company.trim() ||
      !formData.email || !formData.email.trim() ||
      !formData.phone || !formData.phone.trim() ||
      !formData.capsCertified || !formData.capsCertified.trim() ||
      !formData.experience || !formData.experience.trim()
    ) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Please fill out all required fields (Name, Company, Email, Phone, CAPS, Experience).'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName("Website Applications");
    
    // Create row data for contractor form
    const rowData = [
      formData.name || '',           // Name
      formData.company || '',        // Company
      formData.email || '',          // Email
      formData.phone || '',          // Phone
      formData.capsCertified || '',  // CAPS Certified
      formData.experience || '',     // Experience
      formData.message || '',        // Message
      new Date()                     // Timestamp
    ];
    
    // Log the row data
    console.log('Adding contractor form row data:', rowData);
    
    // Add to sheet
    sheet.appendRow(rowData);
    
    // Send confirmation email with BCC
    try {
      sendContractorConfirmationEmail(formData);
    } catch (emailError) {
      console.log('Contractor confirmation email error:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Application submitted successfully!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.log('Contractor form error:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== UTILITY FUNCTIONS =====

// Generate unique ticket ID
function generateTicketId() {
  const date = new Date();
  const dateStr = Utilities.formatDate(date, 'GMT', 'yyyyMMdd');
  const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
  const sheet = spreadsheet.getSheetByName("Support Tickets");
  
  // Check if sheet exists
  if (!sheet) {
    console.log('Support Tickets sheet not found for ticket ID generation');
    return `ST-${dateStr}-001`; // Fallback ID
  }
  
  const lastRow = sheet.getLastRow();
  
  // Count tickets for today
  let todayCount = 0;
  for (let i = 2; i <= lastRow; i++) {
    const ticketDate = sheet.getRange(i, 9).getValue(); // Date Submitted column
    if (ticketDate && Utilities.formatDate(ticketDate, 'GMT', 'yyyyMMdd') === dateStr) {
      todayCount++;
    }
  }
  
  return `ST-${dateStr}-${String(todayCount + 1).padStart(3, '0')}`;
}

// Create bug report entry
function createBugReport(ticketId, formData) {
  try {
    const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
    const sheet = spreadsheet.getSheetByName("Bug Reports");
    
    const bugId = `BUG-${ticketId}`;
    
    const rowData = [
      bugId,                        // Bug ID
      formData.name,               // Reported By
      formData.email,              // Email
      formData.phone || '',        // Phone
      formData.platform || '',     // Platform
      formData.description,        // Bug Summary
      formData.stepsToReproduce || '', // Steps to Reproduce
      formData.expectedResult || '',   // Expected Result
      formData.actualResult || '',     // Actual Result
      new Date(),                  // Date Reported
      'No',                        // Verified (Yes/No)
      '',                          // Severity (Low/High/Critical)
      '',                          // Assigned To
      '',                          // Fix Date
      'Open'                       // Status
    ];
    
    sheet.appendRow(rowData);
    console.log('Created bug report:', bugId);
  } catch (error) {
    console.log('Error creating bug report:', error);
  }
}

// Create feature request entry
function createFeatureRequest(ticketId, formData) {
  try {
    const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
    const sheet = spreadsheet.getSheetByName("Feature Requests");
    
    const requestId = `FR-${ticketId}`;
    
    const rowData = [
      requestId,                   // Request ID
      formData.name,              // Submitted By
      formData.email,             // Email
      formData.submitterType,     // Submitter Type
      formData.description,       // Feature Summary
      '',                         // Use Case
      '',                         // Impact Level (Low/Med/High)
      new Date(),                 // Date Submitted
      '',                         // Assigned To
      'Open',                     // Status
      ''                          // Resolution Notes
    ];
    
    sheet.appendRow(rowData);
    console.log('Created feature request:', requestId);
  } catch (error) {
    console.log('Error creating feature request:', error);
  }
}

// ===== EMAIL FUNCTIONS =====

function sendContactConfirmationEmail(formData) {
  const subject = "HOMEase - Contact Form Received";
  const body = `
    Dear ${formData.name},
    
    Thank you for contacting HOMEase!
    
    We have received your message and will get back to you within 24 hours.
    
    Message Details:
    ${formData.company ? `- Company: ${formData.company}` : ''}
    - Message: ${formData.message}
    
    Best regards,
    The HOMEase Team
  `;
  
  // Send with BCC to both email addresses
  MailApp.sendEmail({
    to: formData.email,
    bcc: "ulises@yourhomease.com, cliff@yourhomease.com",
    subject: subject,
    body: body
  });
}

function sendContractorConfirmationEmail(formData) {
  const subject = "HOMEase Contractor Application Received";
  const body = `
    Dear ${formData.name},
    
    Thank you for your interest in partnering with HOMEase!
    
    We have received your application and our team will review it within 24-48 hours.
    
    Application Details:
    - Name: ${formData.name}
    - Company: ${formData.company}
    - CAPS Certified: ${formData.capsCertified}
    - Experience: ${formData.experience}
    
    Best regards,
    The HOMEase Team
  `;
  
  // Send with BCC to both email addresses
  MailApp.sendEmail({
    to: formData.email,
    bcc: "ulises@yourhomease.com, cliff@yourhomease.com",
    subject: subject,
    body: body
  });
}

function sendSupportNotificationEmail(ticketId, formData) {
  const subject = `New Support Ticket: ${ticketId}`;
  const body = `
    New support ticket submitted:
    
    Ticket ID: ${ticketId}
    From: ${formData.name} (${formData.submitterType})
    Category: ${formData.category}
    Platform: ${formData.platform || 'Not specified'}
    
    Description:
    ${formData.description}
    
    ${formData.category === 'bug' ? `
    Steps to Reproduce:
    ${formData.stepsToReproduce || 'Not provided'}
    
    Expected Result:
    ${formData.expectedResult || 'Not provided'}
    
    Actual Result:
    ${formData.actualResult || 'Not provided'}
    ` : ''}
    
    Please review and assign this ticket.
  `;
  
  MailApp.sendEmail({
    to: "ulises@yourhomease.com, cliff@yourhomease.com",
    subject: subject,
    body: body
  });
}

function sendSupportConfirmationEmail(ticketId, formData) {
  const subject = `Support Ticket Confirmation: ${ticketId}`;
  const body = `
    Dear ${formData.name},
    
    Thank you for contacting HOMEase Support!
    
    We have received your support ticket and our team will review it within 24 hours.
    
    Ticket Details:
    - Ticket ID: ${ticketId}
    - Category: ${formData.category}
    - Platform: ${formData.platform || 'Not specified'}
    - Submitted: ${new Date().toLocaleString()}
    
    Your Issue:
    ${formData.description}
    
    ${formData.category === 'bug' ? `
    Additional Bug Information:
    - Steps to Reproduce: ${formData.stepsToReproduce || 'Not provided'}
    - Expected Result: ${formData.expectedResult || 'Not provided'}
    - Actual Result: ${formData.actualResult || 'Not provided'}
    ` : ''}
    
    What happens next:
    1. Our team will review your ticket within 24 hours
    2. We'll respond to this email thread with updates
    3. You can reply to this email to add more information
    4. We'll keep you updated until your issue is resolved
    
    If you need to add more information, simply reply to this email. Please include your ticket ID (${ticketId}) in any follow-up messages.
    
    Best regards,
    The HOMEase Support Team
    
    ---
    This email thread will be used for all communication regarding ticket ${ticketId} until it is resolved.
  `;
  
  // Send to customer and CC ulises@yourhomease.com
  MailApp.sendEmail({
    to: formData.email,
    cc: "ulises@yourhomease.com",
    subject: subject,
    body: body
  });
}

// ===== TRIGGER FUNCTIONS =====

// Auto-update response dates when status changes
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const sheetName = sheet.getName();
  const row = e.range.getRow();
  const col = e.range.getColumn();
  
  // Only process if it's not the header row
  if (row === 1) return;
  
  if (sheetName === "Support Tickets") {
    // If status column is changed to "In Progress" and no first response date
    if (col === 10 && e.range.getValue() === "In Progress") { // Status column
      const firstResponseCol = 11; // First Response Date column
      if (!sheet.getRange(row, firstResponseCol).getValue()) {
        sheet.getRange(row, firstResponseCol).setValue(new Date());
      }
    }
    
    // If status column is changed to "Closed" and no resolution date
    if (col === 10 && e.range.getValue() === "Closed") { // Status column
      const resolutionCol = 12; // Resolution Date column
      if (!sheet.getRange(row, resolutionCol).getValue()) {
        sheet.getRange(row, resolutionCol).setValue(new Date());
      }
    }
  }
  
  // Auto-update bug report status when support ticket status changes
  if (sheetName === "Support Tickets" && col === 10) { // Status column
    const ticketId = sheet.getRange(row, 1).getValue(); // Ticket ID
    const newStatus = e.range.getValue();
    
    // Find corresponding bug report and update status
    const bugSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bug Reports");
    if (bugSheet) {
      const bugData = bugSheet.getDataRange().getValues();
      for (let i = 1; i < bugData.length; i++) {
        if (bugData[i][0] === `BUG-${ticketId}`) { // Bug ID column
          bugSheet.getRange(i + 1, 15).setValue(newStatus); // Status column
          break;
        }
      }
    }
  }
}

// Calculate response times
function calculateResponseTimes() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Support Tickets");
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    const submissionDate = data[i][8]; // Date Submitted
    const firstResponseDate = data[i][10]; // First Response Date
    const resolutionDate = data[i][11]; // Resolution Date
    
    if (submissionDate && firstResponseDate) {
      const responseTime = Math.floor((firstResponseDate - submissionDate) / (1000 * 60 * 60 * 24));
      // You could add this to a new column or use it for reporting
      console.log(`Ticket ${data[i][0]}: ${responseTime} days to first response`);
    }
  }
}

// ===== DEBUGGING FUNCTIONS =====

// Function to check available sheets (run this manually in Apps Script)
function checkAvailableSheets() {
  const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
  const sheets = spreadsheet.getSheets();
  
  console.log('Available sheets in Support and Contact Tracker:');
  sheets.forEach((sheet, index) => {
    console.log(`${index + 1}. "${sheet.getName()}"`);
  });
  
  return sheets.map(sheet => sheet.getName());
}

// Function to create missing sheets if needed
function createMissingSheets() {
  const spreadsheet = SpreadsheetApp.openById("1Z7oS-bvhq2msQyxlU94jrBxlF4Mzj0gyaTuMV1IYB0g");
  const requiredSheets = [
    "Support Tickets",
    "Bug Reports", 
    "Feature Requests",
    "Contact Form",
    "Internal Notes"
  ];
  
  const existingSheets = spreadsheet.getSheets().map(s => s.getName());
  
  requiredSheets.forEach(sheetName => {
    if (!existingSheets.includes(sheetName)) {
      console.log(`Creating missing sheet: ${sheetName}`);
      const newSheet = spreadsheet.insertSheet(sheetName);
      
      // Add headers based on sheet type
      if (sheetName === "Support Tickets") {
        newSheet.getRange(1, 1, 1, 16).setValues([[
          "Ticket ID", "Name", "Who?", "Email", "Phone", "Category", "Platform", 
          "Description", "Date Submitted", "Status", "First Response Date", 
          "Resolution Date", "Assigned To", "Priority", "Resolution Notes", 
          "Status (Open/In Progress/Closed)"
        ]]);
      } else if (sheetName === "Bug Reports") {
        newSheet.getRange(1, 1, 1, 15).setValues([[
          "Bug ID", "Reported By", "Email", "Phone", "Platform", "Bug Summary",
          "Steps to Reproduce", "Expected Result", "Actual Result", "Date Reported",
          "Verified (Yes/No)", "Severity (Low/High/Critical)", "Assigned To", 
          "Fix Date", "Status"
        ]]);
      } else if (sheetName === "Feature Requests") {
        newSheet.getRange(1, 1, 1, 11).setValues([[
          "Request ID", "Submitted By", "Email", "Submitter Type", "Feature Summary",
          "Use Case", "Impact Level (Low/Med/High)", "Date Submitted", "Assigned To",
          "Status", "Resolution Notes"
        ]]);
      } else if (sheetName === "Contact Form") {
        newSheet.getRange(1, 1, 1, 6).setValues([[
          "Name", "Company", "Email", "Phone", "Message", "Timestamp"
        ]]);
      } else if (sheetName === "Internal Notes") {
        newSheet.getRange(1, 1, 1, 4).setValues([[
          "Reference Ticket ID", "Team Member", "Date", "Note"
        ]]);
      }
    }
  });
  
  console.log('Sheet creation complete');
} 