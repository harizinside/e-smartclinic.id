import type { MenuProps } from './interfaces/menu'

export const LIST_MENU = <MenuProps[]>[
  {
    name: 'Beranda',
    href: '/',
    icon: 'home',
    status: true,
    order: 1,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: []
  },
  {
    name: 'Otoritasi',
    href: '/admin',
    icon: 'shield-check',
    status: true,
    order: 2,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Pengguna',
        href: '/admin/users',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Hak Akses',
        href: '/admin/role-privilages',
        icon: 'chevron-right',
        status: true,
        order: 2,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  },
  {
    name: 'System',
    href: '/system',
    icon: 'command-line',
    status: true,
    order: 3,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Golongan Darah',
        href: '/system/blood-type',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Pendidikan Terakhir',
        href: '/system/last-education',
        icon: 'chevron-right',
        status: true,
        order: 2,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Suku',
        href: '/system/ethnic-group',
        icon: 'chevron-right',
        status: true,
        order: 3,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Status Pernikahan',
        href: '/system/marital-status',
        icon: 'chevron-right',
        status: true,
        order: 4,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Marketing',
        href: '/system/marketing',
        icon: 'chevron-right',
        status: true,
        order: 5,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Agama',
        href: '/system/religion',
        icon: 'chevron-right',
        status: true,
        order: 6,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Title',
        href: '/system/title',
        icon: 'chevron-right',
        status: true,
        order: 7,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Status Pekerjaan',
        href: '/system/working-status',
        icon: 'chevron-right',
        status: true,
        order: 8,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Area',
        href: '/system/region/area',
        icon: 'chevron-right',
        status: true,
        order: 10,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  },
  {
    name: 'Tambahan',
    href: '/add-on',
    icon: 'puzzle-piece',
    status: true,
    order: 4,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Obat-Obatan',
        href: '/add-on/drugs',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Layanan',
        href: '/add-on/services',
        icon: 'chevron-right',
        status: true,
        order: 2,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Asuransi & Jaminan',
        href: '/add-on/insurance-guarantee',
        icon: 'chevron-right',
        status: true,
        order: 3,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Penyakit (Subjective)',
        href: '/add-on/disease',
        icon: 'chevron-right',
        status: true,
        order: 4,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Diagnosa (Assesment)',
        href: '/add-on/diagnosis',
        icon: 'chevron-right',
        status: true,
        order: 5,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Prognosa (Assesment)',
        href: '/add-on/prognosis',
        icon: 'chevron-right',
        status: true,
        order: 6,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'ICD-10 (Assesment)',
        href: '/add-on/icd-10',
        icon: 'chevron-right',
        status: true,
        order: 7,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  },
  {
    name: 'Info Klinik',
    href: '/clinic-info',
    icon: 'presentation-chart-bar',
    status: true,
    order: 5,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: []
  },
  {
    name: 'Jadwal Praktik',
    href: '/practice-schedule',
    icon: 'calendar-days',
    status: true,
    order: 6,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: []
  },
  {
    name: 'Kontak (Pasien)',
    href: '/contacts',
    icon: 'users',
    status: true,
    order: 7,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: []
  },
  {
    name: 'Rawat Jalan',
    href: '/outpatient',
    icon: 'beaker',
    status: true,
    order: 8,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Penilaian (Assesment)',
        href: '/outpatient',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Asuransi & Jaminan',
        href: '/outpatient/insurance-guarantee',
        icon: 'chevron-right',
        status: true,
        order: 2,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  },
  {
    name: 'Rekam Medis',
    href: '/medical-record',
    icon: 'book-open',
    status: true,
    order: 9,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: []
  },
  {
    name: 'Inventori',
    href: '/inventory',
    icon: 'squares-2x2',
    status: true,
    order: 10,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: []
  },
  {
    name: 'Pembelian',
    href: '/payments',
    icon: 'calculator',
    status: true,
    order: 11,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Outpatients',
        href: '/payments',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Online',
        href: '/payments/online',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  },
  {
    name: 'Laporan',
    href: '/reports',
    icon: 'chart-bar',
    status: true,
    order: 12,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Pasien',
        href: '/reports/patients',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Pembelian',
        href: '/reports/payment',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Obat-obatan',
        href: '/reports/drugs',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  },
  {
    name: 'Statistik (CRM)',
    href: '/crm',
    icon: 'variable',
    status: true,
    order: 13,
    privilage: {
      create: true,
      read: true,
      update: true,
      delete: true,
      import: true,
      export: true
    },
    children: [
      {
        name: 'Patients',
        href: '/crm/patients',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      },
      {
        name: 'Payment',
        href: '/crm/payment',
        icon: 'chevron-right',
        status: true,
        order: 1,
        privilage: {
          create: true,
          read: true,
          update: true,
          delete: true,
          import: true,
          export: true
        }
      }
    ]
  }
]
