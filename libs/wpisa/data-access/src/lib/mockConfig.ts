export const mockConfig = {
  progressBar: {
    steps: [
      'Knowledge check',
      'Your details',
      'Your investment',
      'Check and confirm',
    ],
  },
  intro: {
    metaTitle: 'Knowledge check',
    heading: 'A couple of questions to start',
    summary:
      "<p>The first step of your application is a quick knowledge check, just to make sure you understand how Wesleyan's With Profits ISA works.</p><p>We are required to ask these questions to ensure that the product is appropriate for you.</p>",
    nextButtonLabel: 'Continue',
    knowledgeCheckdown:
      "Sorry, we're having some technical issues. Please try to confirm your answer again. If this problem persists, please call us on 0121 200 9341.",
  },
  knowledgeCheck: {
    step1: {
      metaTitle: 'Knowledge check',
      heading: 'Question 1 of 2',
      summary:
        "<p>Wesleyan's With Profits ISA aims to steady the ups and downs of investment returns through a process called smoothing. Do you understand what this means?</p>",
      questions: [
        '<b>Yes</b>, I understand that in order to provide a stronger return in times of poor market performance, the fund may keep back some returns during times of strong market performance.',
        "<b>No</b>, I don't understand what this means.",
      ],
      nextButtonLabel: 'Continue',
      backButtonLabel: 'Back to introduction',
    },
    step2: {
      metaTitle: 'Knowledge check',
      heading: 'Question 2 of 2',
      summary:
        '<p>In times of particularly poor market performance, smoothing alone may not be sufficient to protect all customers from the withdrawals of others. In this case we may apply a Market Value Reduction (MVR). Do you understand what this means?</p>',
      questions: [
        '<b>Yes</b>, I understand that the value of any withdrawals may be adjusted to more fairly reflect underlying market performance. Also, I realise I may get back less than I invest, as the With Profits ISA Fund involves moderate investment risk.',
        "<b>No</b>, I don't understand what this means.",
      ],
      nextButtonLabel: 'Continue',
      backButtonLabel: 'Back to question 1',
    },
  },
  yourDetails: {
    metaTitle: 'Your details',
    heading: 'Your details',
    summary:
      "<p>Great, that's the knowledge check complete. Now we just need a few personal details from you.</p>",
    personalInformationLabel: 'Personal information',
    title: {
      inputLabel: 'Title',
      inputError: 'Please select your title',
    },
    firstName: {
      inputLabel: 'First name',
      inputError: 'Please add your name',
    },
    surname: {
      inputLabel: 'Surname',
      inputError: 'Please add your surname',
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
        'Please enter a valid 9-digit NI number, for example QQ 12 34 56 C. You’ll find yours on your National Insurance card, payslip or P60.',
    },
    niTooltip:
      'You can find this on your National Insurance card, payslip or P60.',
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
        inputOtherError:
          'Sorry, we can’t seem to find your address. Please enter your address manually.',
      },
      findAddress: 'Find address',
      selectYourAddress: {
        inputLabel: 'Please select your address',
        inputError: 'Please provide your full home address',
      },
      enterAddressManuallyLabel: 'Enter address manually',
      cantSeeAddressLabel: "Can't see your address?",
      flatNumber: {
        inputLabel: 'Flat number (if applicable)',
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
        inputError: 'Please enter a valid UK mobile number, starting 07',
      },
    },
    marketing: {
      heading:
        "<p>From time to time, we'd like to contact you with relevant news, offers and information - such as product promotions or financial review reminders. If you're happy to receive these communications, just select below how you'd like us to keep in touch.</p> ",
      email: 'Email',
      phone: 'Phone',
      post: 'Post',
    },
    privacy:
      '<p>Rest assured, the security of your personal data is very important to us. You can see how we protect your information by visiting our <a href="https://www.wesleyan.co.uk/privacy" rel="noopener noreferrer" class="wes-link wes-text-m" target="_blank">privacy page</a></p>',
    nextButtonLabel: 'Continue',
  },
  investmentOptions: {
    metaTitle: 'Your investment',
    heading: 'How would you like to invest?',
    summary:
      '<p>You can open your ISA with a single lump sum, regular monthly payments or a combination of the two. Bear in mind the total ISA allowance for the {tax-year} tax year is  {total-annual-allowance}</p>',
    singleLumpSum: {
      title: 'Single lump sum',
      summary: 'Make an initial one-off payment up to {max-lump-sum-amount}.',
      lumpSumPayment: {
        metaTitle: 'Your investment - Lump-sum',
        heading: 'How much would you like to invest?',
        summary:
          "<p>Your initial lump-sum investment can be anywhere between {min-new-lump-sum-amount} and {max-lump-sum-amount}. We'll take card details from you at the end of the application.</p>",
        lumpSumAmount: {
          inputLabel: 'Lump-sum amount',
          inputError:
            'Your lump-sum amount must be between {min-new-lump-sum-amount} and {max-lump-sum-amount}',
        },
        lumpSumHelpText:
          'Minimum lump-sum amount is {min-new-lump-sum-amount}. ',
        nextButtonLabel: 'Continue',
        backButtonLabel: 'Back to investment options',
      },
    },
    monthlyPayments: {
      title: 'Monthly payments',
      summary: 'Set up regular payments via Direct Debit.',
      monthlyPayment: {
        metaTitle: 'Your investment - Monthly payments',
        heading: 'Set up your monthly payments',
        summary:
          '<p>How much would you like to pay into your With Profits ISA each month?</p>',
        monthlyAmount: {
          inputLabel: 'Monthly Direct Debit amount',
          inputOtherError:
            "Your lump-sum and monthly payments can't exceed {total-annual-allowance} in this tax year",
          inputMinError:
            'The minimum monthly payment is {min-new-monthly-amount} per month. ',
          inputMaxError:
            ' The maximum monthly payment is {max-monthly-amount} per month. To invest more into your ISA, you might want to consider making a lump-sum payment as well.',
        },
        monthlyHelpText: 'Minimum monthly payment is {min-new-monthly-amount}.',
        nextButtonLabel: 'Continue',
        backButtonLabel: 'Back to investment options',
      },
    },
    monthlyAndLumpSum: {
      title: 'Lump sum and monthly payments',
      summary: 'Combine both options to maximise your ISA allowance.',
      monthlyAndLumpSumPayment: {
        metaTitle: 'Your investment - Lump-sum and monthly payments',
        heading: 'How much would you like to invest?',
        summary:
          '<p>Below you can make a single lump-sum payment to open your ISA, then set up monthly contributions to build your investment. In total, you can invest up to {total-annual-allowance} in the {tax-year} tax year.</p>',
        monthlyAmount: {
          inputLabel: 'Monthly Direct Debit amount',
          inputOtherError:
            "Your lump-sum and monthly payments can't exceed {total-annual-allowance} in this tax year",
          inputMinError:
            'The minimum monthly payment is {min-new-monthly-amount} per month. ',
          inputMaxError:
            'The maximum monthly payment is {max-monthly-amount} per month. To invest more into your ISA, you might want to consider adjusting your lump-sum payment.',
        },
        monthlyHelpText: 'Minimum monthly payment is {min-new-monthly-amount}.',
        lumpSumAmount: {
          inputLabel: 'Lump-sum amount',
          inputError:
            'Your lump-sum amount must be between {min-new-lump-sum-amount} and {max-lump-sum-amount}',
        },
        lumpSumHelpText:
          'Minimum lump-sum amount is {min-new-lump-sum-amount}. ',
        lumpSumTooltip:
          "We'll take card details for your lump-sum payment at the end of the application.",
        nextButtonLabel: 'Continue',
        backButtonLabel: 'Back to investment options',
      },
    },
    directDebitDetails: {
      bankName: {
        inputLabel: 'Bank/Building Society',
        inputError: 'Please add the name of your bank or building society',
      },
      bankNameTooltip:
        'By providing your bank details below, you are authorising Wesleyan to take your monthly payments from the specified account, in accordance with the Direct Debit Guarantee.',
      accountName: {
        inputLabel: 'Name of account holder',
        inputError: 'Please add the name of the bank account holder',
      },
      accountNumber: {
        inputLabel: 'Bank/Building Society account number',
        inputError:
          'Please enter a valid account number, between 6 and 8 digits long',
      },
      sortCode: {
        inputLabel: 'Branch sort code',
        inputError: 'Please enter a valid 6 digit sort code',
      },
      heading: 'Direct Debit Guarantee',
      summary:
        '<p>This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.</p>',
      bodyCopy:
        '<ul class="wes-list wes-list-bullets"><li>If there are any changes to the amount, date or frequency of your Direct Debit, Wesleyan Assurance Society will notify you ten working days in advance of your account being debited or as otherwise agreed. If you request Wesleyan Assurance Society to collect a payment, confirmation of the amount and date will be given to you at the time of the request.</li><li>If an error is made in the payment of your Direct Debit, by Wesleyan Assurance Society or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.</li><li>If you receive a refund you are not entitled to, you must pay it back when Wesleyan Assurance Society asks you to.</li><li>You can cancel a Direct Debit at any time by simply contacting you bank or building society. Written confirmation may be required. Please also notify Wesleyan.</li></ul>',
    },
    nextButtonLabel: 'Continue',
    backButtonLabel: 'Back to your details',
  },
  validationSummary: {
    heading: 'We didn’t quite get everything we need…',
    summary:
      'Please check back through the form to add any missing information or correct any errors.',
  },
  declaration: {
    metaTitle: 'Declaration',
    heading: 'Please confirm your details',
    summary:
      "<p />Almost there. Please just double-check the information below, and accept the declaration when you're ready. <p />",
    nextButtonLabel: 'Confirm',
    backButtonLabel: 'Back to investment options',
    editLabel: 'Edit',
    yourDetailsLabel: 'Your personal details',
    directDebitLabel: 'Your Direct Debit details',
    yourInvestmentLabel: 'Your investment',
    perMonthLabel: 'per month',
    totalInvestmentText: 'Total investment for the {tax-year} tax year: ',
    isaLabel: 'ISA declaration',
    declarationText:
      '<p>HMRC\'s ISA rules require you to make a declaration when applying for a new ISA, to confirm that you are eligible to subscribe. Please read and confirm the declaration below to proceed.</p>\n<p>The With Profits ISA is designed to meet the needs of those who wish to invest in a tax advantageous product for a minimum of five years, and who are willing to accept management charges, understand how the With Profits Fund works and accept the risks of investing.</p>\n<p>The answers you provided at the start of this application indicate that the With Profits ISA is appropriate for your needs.</p>\n<p>As you have not received any advice or a recommendation from us during this application, you have made your own choice as to the suitability of this ISA for your circumstances.</p>\n<p>I authorise Wesleyan Assurance Society:</p>\n<ul class="wes-list wes-list-bullets">\n<li>To hold my cash subscriptions, any other proceeds in respect of my ISA investments and any other cash</li>\n<li>To make on my behalf any claims to relief from tax in respect of ISA investments.</li>\n</ul>\n<p>I declare that:</p>\n\n<ul class="wes-list wes-list-bullets">\n <li>All subscriptions made, and to be made, belong to me</li>\n <li>I am 18 years of age or over</li>\n <li>I have not subscribed/made payments, and will not subscribe/make payments that exceed the overall subscription limit across any combination of permitted ISAs in the same tax year</li>\n <li>I have not subscribed/made payments and will not subscribe/make payments to another stocks and shares ISA in the same tax year that I subscribe to this one</li>\n <li>I am resident in the United Kingdom for tax purposes or, if not so resident, either perform duties which, by virtue of Section 28 of the Income Tax (Earnings \u0026amp; Pensions) Act 2003 (Crown employees serving overseas), are treated as being performed in the United Kingdom or I am married to, or in a civil partnership with, a person who performs such duties. I will inform Wesleyan Assurance Society if I cease to be so resident or to perform such duties, or to be married to, or in a civil partnership with, a person who performs such duties.</li>\n <li>I have checked my application for accuracy and completeness, including any statements not entered by me and it is correct to the best of my knowledge and belief.</li>\n <li>I understand that Wesleyan Assurance Society is required by law to confirm my identity and will do this through the services of a credit checking agency. I understand that this check is to confirm my identity only and will not affect my credit score.</li>\n <li>I understand that the With Profits ISA is governed by a standard set of terms and conditions and that Wesleyan Assurance Society will administer the plan in line with these.</li>\n</ul>\n',
    confirmContent:
      '<p>\nBy clicking the \'confirm\' button below, you acknowledge that you have read and accepted the <a href="/savings-and-investments/with-profits-isa/isa-declaration" target="_blank" class="wes-link">ISA declaration</a>, and that you wish to enter\ninto a contract with Wesleyan Assurance Society for a With Profits ISA on the basis set out in this application.\n</p>',
    totalInvestmentSmallText:
      "*We've calculated this by multiplying your monthly payments by the number of months left in the tax year, then adding your lump sum investment. The total ISA allowance for this tax year is {total-annual-allowance}.",
  },
  envConfig: {
    applicationInsightsKey: 'fdf7ed55-0a2a-491c-a2ea-a1d6593b8f0d',
    gtmKey: 'GTM-NKVZTBD',
  },
  endPoints: {
    confirmationErrorPage:
      '/savings-and-investments/with-profits-isa/confirmation-error',
    confirmationPage: '/savings-and-investments/with-profits-isa/confirmation',
    knowledgecheckFailurePage:
      '/savings-and-investments/with-profits-isa/check-cannot-proceed',
    disableISAApplication: false,
    formUnavailablePage:
      '/savings-and-investments/with-profits-isa/form-unavailable',
    bookmarkRedirectPage:
      '/savings-and-investments/with-profits-isa/before-you-begin',
  },
  payment: {
    metaTitle: 'Card details',
    heading: "We're ready for those card details now",
    summary:
      "<p>To complete your application, we just need to take a debit card payment for your lump-sum investment of: <b>{lump-sum}</b></p><p>Click the button below and we'll transfer you to our secure payment provider, SagePay, so you can enter your card details.</p><p>Once you're done, you'll be redirected back here for your confirmation.</p>",
    backButtonLabel: 'Back',
    nextButtonLabel: 'Make your payment >',
  },
  inactivityModal: {
    heading: 'Your With Profits ISA application will time out in…',
    summary:
      "<p>As you'e been inactive for a while, your application will soon reset (we do that to keep your information secure). To cancel the time-out and continue, just click below.</p>",
    idleTimeInSeconds: 540,
    timeoutTimeInSeconds: 60,
    continueButtonLabel: 'Continue application',
  },
  sessionTimeoutModal: {
    heading: 'Your With Profits ISA application will expire in...',
    summary:
      '<p>For your own security, your With Profits ISA application is about to expire. After this time, you will need to restart your application.</p>',
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
  marketSegmentList: [
    { key: '123', value: 'GENMEDPRAC', label: 'GP' },
    { key: '124', value: 'HOSDOCS', label: 'Hospital Doctor' },
    { key: '125', value: 'STUDENTMED', label: 'Student Medic' },
    { key: '126', value: 'DENTISTS', label: 'Dentist' },
    { key: '127', value: 'DENTALSTU', label: 'Student Dentist' },
    { key: '128', value: 'TEACHERS', label: 'Teacher' },
    { key: '129', value: 'WFL', label: 'Lawyer' },
    { key: '120', value: 'OTHER', label: 'Other' },
  ],
};
