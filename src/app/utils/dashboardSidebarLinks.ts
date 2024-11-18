import Users from "@/assets/icons/users-dashboard.svg";
import Guarantors from "@/assets/icons/guarantors.svg";
import Loans from "@/assets/icons/loans.svg";
import DecisionModels from "@/assets/icons/decision-models.svg";
import Savings from "@/assets/icons/savings.svg";
import LoanRequests from "@/assets/icons/loan-requests.svg";
import WhiteList from "@/assets/icons/whitelist.svg";
import Karma from "@/assets/icons/karma.svg";
import Organization from "@/assets/icons/organization.svg";
import LoanProducts from "@/assets/icons/loan-requests.svg";
import SavingsProducts from "@/assets/icons/savings-products.svg";
import FeesAndCharges from "@/assets/icons/fees-and-charges.svg";
import Transactions from "@/assets/icons/transactions.svg";
import Services from "@/assets/icons/services.svg";
import ServiceAccount from "@/assets/icons/service-account.svg";
import Settlement from "@/assets/icons/settlement.svg";
import Reports from "@/assets/icons/reports.svg";
import Preferences from "@/assets/icons/preferences.svg";
import FeesAndPricing from "@/assets/icons/fees-and-pricing.svg";
import AuditLogs from "@/assets/icons/docs.svg";
import SystemsMessages from "@/assets/icons/systems-messages.svg";

export const sideBarLinks = [
  {
    id: 1,
    title: "Customers",
    links: [
      {
        id: 1,
        href: "customers/users",
        title: "Users",
        icon: Users,
      },
      {
        id: 2,
        href: "customers/guarantors",
        title: "Guarantors",
        icon: Guarantors,
      },
      {
        id: 3,
        href: "customers/loans",
        title: "Loans",
        icon: Loans,
      },
      {
        id: 4,
        href: "customers/models",
        title: "Decision Models",
        icon: DecisionModels,
      },
      {
        id: 5,
        href: "customers/savings",
        title: "Savings",
        icon: Savings,
      },
      {
        id: 6,
        href: "customers/loan-requests",
        title: "Loan Requests",
        icon: LoanRequests,
      },
      {
        id: 7,
        href: "customers/whitelist",
        title: "Whitelist",
        icon: WhiteList,
      },
      {
        id: 8,
        href: "karma",
        title: "Karma",
        icon: Karma,
      },
    ],
  },
  {
    id: 2,
    title: "Businesses",
    links: [
      {
        id: 1,
        href: "businesses/organization",
        title: "Organization",
        icon: Organization,
      },
      {
        id: 2,
        href: "businesses/loan-products",
        title: "Loan Products",
        icon: LoanProducts,
      },
      {
        id: 3,
        href: "businesses/savings-products",
        title: "Savings Products",
        icon: SavingsProducts,
      },
      {
        id: 4,
        href: "businesses/fees-and-charges",
        title: "Fees and Charges",
        icon: FeesAndCharges,
      },
      {
        id: 5,
        href: "businesses/transactions",
        title: "Transactions",
        icon: Transactions,
      },
      {
        id: 6,
        href: "businesses/services",
        title: "Services",
        icon: Services,
      },
      {
        id: 7,
        href: "businesses/service-account",
        title: "Service Account",
        icon: ServiceAccount,
      },
      {
        id: 8,
        href: "businesses/settlements",
        title: "Settlements",
        icon: Settlement,
      },
      {
        id: 9,
        href: "businesses/reports",
        title: "Reports",
        icon: Reports,
      },
    ],
  },
  {
    id: 3,
    title: "Settings",
    links: [
      {
        id: 1,
        href: "settings/preferences",
        title: "Preferences",
        icon: Preferences,
      },
      {
        id: 2,
        href: "setting/fees-and-pricing",
        title: "Fees and Pricing",
        icon: FeesAndPricing,
      },
      {
        id: 3,
        href: "settings/audit-logs",
        title: "Audit Logs",
        icon: AuditLogs,
      },
      {
        id: 4,
        href: "settings/systems-messages",
        title: "Systems Messages",
        icon: SystemsMessages,
      },
    ],
  },
];
