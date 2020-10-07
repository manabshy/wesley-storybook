export const mockConfig = {
  progressBar: {
    steps: [
      'Knowledge check',
      'Your details',
      'Investment options',
      'Declaration',
      'Confirmation',
    ],
  },
  intro: {
    metaTitle: 'Intro Meta Title',
    heading: 'A couple of questions to start',
    summary:
      "<p>The first step pf your application is a quick knowledge check, just to make sure you understand how the With Profits ISA works.\r\n</p>\r\n<p>\r\nWe're required to ask these questions by the Financial Conduct Authority, as we manage investments on your behalf.\r\n</p>",
    nextButtonLabel: 'Continue',
  },
  knowledgeCheck: {
    step1: {
      metaTitle: 'Knowledge check Step1 Meta Title',
      heading: 'Question 1 of 2',
      summary:
        "<p>The With Profits ISA aims to steady the ups and downs of investment returns through a process called 'smoothing'. Do you understand what this means?</p>",
      questions: [
        '<b>Yes</b>, I understand that in order to provide a stronger return in times of poor market performance,the fund may limit my return in times of poor market performance, the fund may limit my returns during times of strong market performance.',
        "<b>No</b>, I don't understand what this means.",
      ],
      nextButtonLabel: 'Continue',
      backButtonLabel: 'Back to introduction',
    },
    step2: {
      metaTitle: 'Knowledge check Step2 Meta Title',
      heading: 'Question 2 of 2',
      summary:
        '<p>In times of particularly poor market performance, smoothing alone may not be sufficient to protect all customer from the withdrawals of others. In this case we may apply a Market Value Reduction (MVR). Do you understand what this means?</p>',
      questions: [
        '<b>Yes</b>, I understand that the value of any withdrawals may be adjusted to fairly reflect underlying market performance. Also, I realise I may get back less than I invest, as the With Profits fund involves moderate investment risk.',
        "<b>No</b>, I don't understand what this means.",
      ],
      nextButtonLabel: 'Continue',
      backButtonLabel: 'Back to question 1',
    },
  },
  yourDetails: {
    metaTitle: 'Your details Meta Title',
    heading: 'Your details',
    summary:
      "<p>\nGreat, that's the knowledge check complete. Now we just need a few personal details from you.\n</p>",
    personalInformationLabel: 'Personal Information',
    title: {
      inputLabel: 'Title',
      inputError: 'Please select your title',
    },
    firstName: {
      inputLabel: 'First name',
      inputError: 'please add your first name',
    },
    surname: {
      inputLabel: 'Surname',
      inputError: 'please add your surname',
    },
    dob: {
      inputLabel: 'Date of birth',
      inputError: 'Please enter a valid date of birth in the format 01 08 1970',
      inputOtherError:
        'The date of birth you entered would make you ineligible for our With Profits ISA. You must be between 18 and 74 to apply.',
    },
    profession: {
      inputLabel: 'Profession',
      inputError: 'Please let us know your profession',
    },
    niNumber: {
      inputLabel: 'National Insurance number',
      inputError:
        "Please enter a valid 9-digit NI number, for example JK 45 67 89 D. You'll find yours on your National Insurance card, payslip or P60.",
    },
    niTooltip: 'NI number tool-tip',
    nationality: {
      inputLabel: 'Nationality',
      inputError: 'Please let us know your nationality',
    },
    addressDetails: {
      heading: 'Home address',
      summary:
        '<p>This is the address your plan documentation will be sent to. It must also match your billing address.</p>',
      postcode: {
        inputLabel: 'Postcode',
        inputError: "Please make sure you've entered a valid postcode",
      },
      findAddress: 'Find address',
      selectYourAddress: {
        inputLabel: 'Please select your address',
        inputError: 'Invalid address',
      },
      enterAddressManuallyLabel: 'Enter address manually',
      cantSeeAddressLabel: "Can't see your address?",
      flatNumber: {
        inputLabel: 'First name',
        inputError: '',
      },
      houseNumber: {
        inputLabel: 'House number',
        inputError: 'Please provide either a house number or a house name',
      },
      houseName: {
        inputLabel: 'House name (if applicable)',
        inputError: '',
      },
      street: {
        inputLabel: 'Street',
        inputError: 'Please include the name of your street',
      },
      town: {
        inputLabel: 'Town / City',
        inputError:
          "Please add your town or city (or village if that's more relevant)",
      },
      region: {
        inputLabel: 'Region (optional)',
        inputError: '',
      },
      county: {
        inputLabel: 'County (optional)',
        inputError: '',
      },
    },
    contactDetails: {
      heading: 'Contact details',
      personalEmail: {
        inputLabel: 'Personal email',
        inputError: 'Please enter a valid email address',
      },
      mobileNumber: {
        inputLabel: 'Mobile number',
        inputError: 'Please enter a valid mobile number, starting 07',
      },
    },
    marketing: {
      heading:
        "<p>From time to time, we'd like to contact you with relevant news, offers and information - such as product promotions or financial review reminders.If you're happy to receive these communications, just select below how you'd like us to keep in touch.</p> \n",
      email: 'Email',
      phone: 'Phone',
      post: 'Post',
    },
    privacy:
      "<p>Rest assured, the security of your personal data is very important to us, so we'll never pass it to third parties. You can see how we protect your information by visiting our privacy page</p>",
    nextButtonLabel: 'Continue',
  },
  investmentOptions: {
    metaTitle: 'Investment options Meta Title',
    heading: 'How would you like to invest?',
    summary:
      '<p>You can open your ISA with a single lump sum, regular monthly payments or a combination of the two. Bear in mind the total ISA allowance for the {tax-year} tax year is {total-annual-allowance}.</p>',
    singleLumpSum: {
      title: 'Single lump-sum',
      summary: 'Make an initial one-off payment up to {max-lump-sum-amount}.',
      lumpSumPayment: {
        metaTitle: 'Single lump-sum Meta Title',
        heading: 'How much would you like to invest?',
        summary:
          "<p>\nYour initial lump-sum investment can be anywhere between {min-new-lump-sum-amount} and {max-lump-sum-amount}. We'll take card details from you at the end of the application.\n</p>",
        lumpSumAmount: {
          inputLabel: 'Lump sum payment',
          inputError:
            'Your lump-sum amount must be between {min-new-lump-sum-amount} and {max-lump-sum-amount}',
        },
        lumpSumHelpText:
          'Minimum lump-sum payment is {min-new-lump-sum-amount}. ',
        nextButtonLabel: 'Continue',
        backButtonLabel: 'Back to investment options',
      },
    },
    monthlyPayments: {
      title: 'Monthly payments',
      summary: 'Combine both options to maximise your ISA allowance.',
      monthlyPayment: {
        metaTitle: 'Monthly payment Meta Title',
        heading: 'Set up your monthly payments',
        summary:
          '<p>How much would you like to pay into your With Profits ISA each month?</p>',
        monthlyAmount: {
          inputLabel: 'Monthly Direct Debit amount',
          inputMaxError:
            'The maximum monthly payment is {max-monthly-amount} per month. To invest more into your ISA, you might want to consider making a lump-sum payment as well.',
          inputMinError:
            'The minimum monthly payment is {min-new-monthly-amount} per month',
          inputOtherError:
            "Your lump sum and monthly payments can't exceed {total-annual-allowance} in this tax year",
        },
        monthlyHelpText: 'Minimum monthly payment is {min-new-monthly-amount}.',
        nextButtonLabel: 'Continue',
        backButtonLabel: 'Back to investment options',
      },
    },
    monthlyAndLumpSum: {
      title: 'Lump-sum and monthly payments',
      summary: 'Combine both options to maximise your ISA allowance.',
      monthlyAndLumpSumPayment: {
        metaTitle: 'Monthly and lump-sum Meta Title',
        heading: 'How much would you like to invest?',
        summary:
          '<p>Below you can make a single lump-sum payment to open your ISA, then set up monthly contributions to build your investment. In total, you can invest up to {total-annual-allowance} before 5th April 2021.</p>',
        monthlyAmount: {
          inputLabel: 'Monthly Direct Debit amount',
          inputMaxError:
            'The maximum monthly payment is {max-monthly-amount} per month. To invest more into your ISA, you might want to consider making a lump-sum payment as well.',
          inputMinError:
            'The minimum monthly payment is {min-new-monthly-amount} per month',
          inputOtherError:
            "Your lump sum and monthly payments can't exceed {total-annual-allowance} in this tax year",
        },
        monthlyHelpText: 'Minimum monthly payment is {min-new-monthly-amount}.',
        lumpSumAmount: {
          inputLabel: 'Lump sum payment',
          inputError:
            'Your lump-sum amount must be between {min-new-lump-sum-amount} and {max-lump-sum-amount}',
        },
        lumpSumHelpText:
          'Minimum lump-sum payment is {min-new-lump-sum-amount}. ',
        lumpSumTooltip:
          "We'll take card details for your lump-sum payment at the end of the application.",
        nextButtonLabel: 'Continue',
        backButtonLabel: 'Back to investment options',
      },
    },
    directDebitDetails: {
      bankName: {
        inputLabel: 'Bank/Building Society',
        inputError: 'Invalid bank/building society',
      },
      bankNameTooltip:
        'By providing your bank details below, you are authorising Wesleyan to take your monthly payments from the specified account, in accordance with the Direct Debit Guarantee.',
      accountName: {
        inputLabel: 'Bank account holder name(s)',
        inputError: 'Invalid account holder',
      },
      accountNumber: {
        inputLabel: 'Bank/Building Society account number',
        inputError: 'Invalid account number',
      },
      sortCode: {
        inputLabel: 'Branch sort code',
        inputError: 'Invalid sort code',
      },
      heading: 'Direct Debit Guarantee',
      summary:
        '<p>This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.</p>',
      bodyCopy:
        '<ul><li>If there are any changes to the amount, date or frequency of your Direct Debit, Wesleyan Assurance Society will notify you ten working days in advance of your account being debited or as otherwise agreed. If you request Wesleyan Assurance Society to collect a payment, confirmation of the amount and date will be given to you at the time of the request.</li>\n<li>If an error is made in the payment of your Direct Debit, by Wesleyan Assurance Society or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.</li>\n<li>If you receive a refund you are not entitled to, you must pay it back when Wesleyan Assurance Society asks you to.</li>\n<li>You can cancel a Direct Debit at any time by simply contacting you bank or building society. Written confirmation may be required. Please also notify Wesleyan.\n</li></ul>',
    },
    nextButtonLabel: 'Continue',
    backButtonLabel: 'Back to your details',
  },
  validationSummary: {
    heading: "We didn't quite get everything we need...",
    summary:
      'Please check back through the form to add any missing information or correct any errors.',
  },
  declaration: {
    heading: 'Please confirm your details',
    summary:
      "<p />Almost there. Please just double-check the information below, and accept the declaration when you're ready. <p />",
    nextButtonLabel: 'Confirm',
    backButtonLabel: 'Back to investment options',
    editLabel: 'Edit details',
    yourDetailsLabel: 'Your details',
    directDebitLabel: 'Your Direct Debit details',
    yourInvestmentLabel: 'Your investment',
    perMonthLabel: 'per month',
    totalInvestmentText: 'Total investment for the {tax-year}: ',
    isaLabel: 'ISA declaration',
    isaRules:
      "<p>HMRC'S ISA rules require you to make a declaration when applying for a new ISA, to confirm that you are eligible to subscribe. Please read and confirm the declaration below to proceed.</p>",
    adviceContent:
      '<p>The answers you provided at the start of this application indicate you have sufficient understanding of the With Profits ISA.</p>\n<p>As you have not received any advice or a recommendation from us during this application, you will need to make your own choice as to the suitability of this ISA for your circumstances.</p>',
    authoriseCheckbox: {
      inputLabel: 'I authorise Wesleyan Assurance Society:',
      inputError:
        "Please tick the 'I authorise' checkbox before confirming your declaration",
    },
    authoriseContent:
      '<ul>\n<li>To hold my cash subscriptions, any other proceeds in respect of my ISA investments and any other cash</li>\n<li>To make on my behalf any claims to relief from tax is respect of ISA investments.</li>\n</ul>',
    declarationCheckbox: {
      inputLabel: 'I declare that:',
      inputError:
        "Please tick the 'I declare' checkbox before confirming your declaration",
    },
    content:
      '<ul>\n    <li>All subscriptions made, and to be made, belong to me</li>\n    <li>I am 18 years of age or over</li>\n    <li>I have not subscribed/made payments, and will not subscribe/make payments that exceed the overall subscription limit across any combination of permitted ISAs in the same tax year</li>\n    <li>I have not subscribed/made payments and will not subscribe/make payments to another stocks and shares ISA in the same tax year that I subscribe to this one</li>\n    <li>I am resident in the United Kingdom for tax purposes or, if not so resident, either perform duties which, by virtue of Section 28 of the Income Tax (Earnings &amp; Pensions) Act 2003 (Crown employees serving overseas), are treated as being performed in the United Kingdom or I am married to, or in civil partnership with, a person who performs such duties. I will inform Wesleyan Assurance Society if I cease to be so resident or to perform such duties, or to be married to, or in a civil partnership with, a person who performs such duties.</li>\n    <li>I have checked my application for accuracy and completeness, including any statements not entered by me and it is correct to the best of my knowledge and belief.</li>\n    <li>I understand that the With Profits ISA is governed by a standard set of terms and conditions and that Wesleyan Assurance Society will administer the plan in line with these.</li>\n</ul>',
    confirmContent:
      '<p>By clicking Confirm, I acknowledge I have read and understood the declarations and agree to them. I wish to enter into a contract with Wesleyan Assurance Society for a With Profits ISA on the basis set out in this application.</p>',
  },
  endPoints: {
    confirmationErrorPage:
      '/savings-and-investments/with-profits-isa/confirmation-error',
    confirmationPage: '/savings-and-investments/with-profits-isa/confirmation',
    bookmarkRedirectPage:
      '/savings-and-investments/with-profits-isa/before-you-begin',
    formUnavailablePage:
      '/savings-and-investments/with-profits-isa/form-unavailable',
  },
  payment: {
    metaTitle: 'Card details',
    heading: "We're ready for those card details now",
    summary:
      '<p>\nPlease enter your debit card details below for your lump-sum payment of: {lump-sum}\n</p>\n<p>\nPlease note, you must use a debit card for this payment - so please ensure you have sufficient funds in your account to avoid any back charges.\n</p>',
    infoCopy:
      "Don't navigate away from this page while your payment is being processed, or your application may be affected.",
    backButtonLabel: 'Back',
  },
  inactivityModal: {
    heading: 'Your With Profits ISA application will time out in…',
    summary:
      "<p>\nAs you've been inactive for a while, your application will soon reset (we do that to keep your information secure). To cancel the time-out and continue, just click below.\n</p>",
    continueButtonLabel: 'Continue application',
    idleTimeInSeconds: 540,
    timeoutTimeInSeconds: 60,
  },
  sessionTimeoutModal: {
    heading: 'Your With Profits ISA application will time out in…',
    summary:
      '<p>\nFor your own security, your With Profits ISA application is about to expire. After this time, you will need to restart your application.\n</p>',
    continueButtonLabel: 'Continue application',
  },
  titleList: [
    {
      value: 'c2044dac-a1eb-48c8-b23c-5255bac96bc0',
      label: 'Mr',
    },
    {
      value: '37c037af-7ecb-47a9-8c16-738150d57d26',
      label: 'Mrs',
    },
    {
      value: 'b0fae53c-fc94-4a82-9b92-426e4b54485f',
      label: 'Miss',
    },
    {
      value: 'd7743753-25ff-4343-820d-c1a45ce39d25',
      label: 'Ms',
    },
    {
      value: 'ad28900f-c863-4ea3-bbcf-83aca8065533',
      label: 'Dr',
    },
    {
      value: 'ae9cde20-ab54-4b07-ba80-933b487729f6',
      label: 'Professor',
    },
  ],
  envConfig: {
    applicationInsightsKey: 'fdf7ed55-0a2a-491c-a2ea-a1d6593b8f0d',
  },
  marketSegmentList: [
    {
      value: 'GENMEDPRAC',
      label: 'GP',
    },
    {
      value: 'HOSDOCS',
      label: 'Hospital Doctor',
    },
    {
      value: 'TBD',
      label: 'Student Medic',
    },
    {
      value: 'DENTISTS',
      label: 'Dentist',
    },
    {
      value: 'DENTALSTU',
      label: 'Student Dentist',
    },
    {
      value: 'TEACHERS',
      label: 'Teacher',
    },
    {
      value: 'WFL',
      label: 'Lawyer',
    },
    {
      value: 'OTHER',
      label: 'Other',
    },
  ],
};