export const BUDGET_OPTIONS = [
  { value: "3k-5k", label: "$3,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-15k", label: "$10,000 - $15,000" },
  { value: "15k-20k", label: "$15,000 - $20,000" },
  { value: "20k-25k", label: "$20,000 - $25,000" },
  { value: "25k+", label: "More than $25,000" },
] as const;

export const SERVICES = [
  { value: "product", label: "Product" },
  { value: "no-code", label: "No-code" },
  { value: "low-code", label: "Low-code" },
  { value: "development", label: "Development" },
  { value: "automation", label: "Automation" },
  { value: "devops", label: "DevOps" },
  { value: "ai", label: "AI" },
  { value: "other", label: "Other" },
] as const;
