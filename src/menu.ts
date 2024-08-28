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
    href: '#',
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
        name: 'Title',
        href: '/system/title',
        icon: 'chevron-right',
        status: true,
        order: 9,
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
        name: 'Provinsi (Area)',
        href: '/system/region/provinces',
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
      },
      {
        name: 'Kota (Area)',
        href: '/system/region/citys',
        icon: 'chevron-right',
        status: true,
        order: 11,
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
        name: 'Kecamatan (Area)',
        href: '/system/region/subdistricts',
        icon: 'chevron-right',
        status: true,
        order: 12,
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
        name: 'Kelurahan (Area)',
        href: '/system/region/villages',
        icon: 'chevron-right',
        status: true,
        order: 13,
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
    href: '#',
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
        href: '/addon/drugs',
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
        href: '/addon/services',
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
        href: '/addon/insurance-guarantee',
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
        href: '/addon/disease',
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
        href: '/addon/diagnosis',
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
        href: '/addon/prognosis',
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
        href: '/addon/icd-10',
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
    href: '/patients',
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
    href: '#',
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
        href: '#',
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
        href: '#',
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
    href: '#',
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
    href: '#',
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
        href: '#',
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
        href: '#',
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
    href: '#',
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
    href: '#',
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
