export type User = {
  id: number;
  status: string;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  customerId: string;
  guarantors: [
    {
      full_name: string;
      phone_number: string;
      relationship: string;
      email_address: string;
    },
    {
      full_name: string;
      phone_number: string;
      relationship: string;
      email_address: string;
    }
  ];
  account_details: {
    tier: string;
    avatar: string;
    bank_name: string;
    account_number: number;
    account_balance: number;
  };
  personal_information: {
    bvn: number;
    gender: string;
    children: string;
    full_name: string;
    organization: string;
    phone_number: string;
    email_address: string;
    marital_status: string;
    type_of_residence: string;
    dateJoined: string;
    username: string;
  };
  education_and_employment: {
    loan_repayment: number;
    monthly_income: {
      max: number;
      min: number;
    };
    employment_status: string;
    level_of_education: string;
    sector_of_employment: string;
    duration_of_employment: string;
    office_email: string;
  };
};

export default User;
