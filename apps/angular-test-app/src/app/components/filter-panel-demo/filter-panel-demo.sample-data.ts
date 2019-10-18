import { TreeNode } from '@ffdc/uxg-angular-components/filter/filter-tree';

export const sampleFilterTree: TreeNode[] = [
  {
    label: 'Consumer Banking',
    children: [
      {
        label: 'Alerts'
      },
      {
        label: 'Customer Management'
      },
      {
        label: 'Money Movement'
      }
    ]
  },
  {
    label: 'Corporate Banking',
    children: [
      {
        label: 'Account Information'
      },
      {
        label: 'Back Office'
      },
      {
        label: 'Payments'
      }
    ]
  },
  {
    label: 'Financial Toolbox'
  },
  {
    label: 'Lending',
    children: [
      {
        label: 'Data Management'
      },
      {
        label: 'Integration'
      },
      {
        label: 'Lending Tools'
      }
    ]
  },
  {
    label: 'Payment',
    children: [
      {
        label: 'Fees & Billings'
      },
      {
        label: 'Payment Initiation'
      },
      {
        label: 'Payment Request'
      }
    ]
  }
];
