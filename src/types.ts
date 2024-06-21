export type User = {
  _id: string;
  index: number;
  guid: string;
  status: string;
  picture: string;
  age: string;
  name: string;
  username: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  BVN: string;
  residence: string;
  childrenNumber: string;
  marital: string;
  registered: string;
  education: string;
  tier: string;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  organisation: {
    id: string;
    name: string;
  };
  employmentDetails: {
    status: string;
    sector: string;
    duration: string;
    office_email: string;
    income: string;
  };
  bankDetails: {
    name: string;
    number: string;
    verified: string;
  };
  guarantors: [
    {
      id: string;
      name: string;
      email: string;
      relationship: string;
    }
  ];
  loans: Array<{
    id: string;
    amount: string;
    interest: string;
    dateLoaned: string;
    repaymentDate: string;
  }>;
};

export type FormState = {
  organisation: string;
  username: string;
  email: string;
  date: Date;
  phoneNumber: string;
  status: string;
};

export enum Status {
  blacklist = "blacklist",
  active = "active",
  inactive = "active",
  pending = "pending",
}
