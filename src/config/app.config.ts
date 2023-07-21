interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Affiliate Marketer'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Affiliate Marketer', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'balaji',
  addOns: ['notifications'],
};
