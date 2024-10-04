export const institucinalItems = [
    { label: 'El Departamento', 
      url: '#',
      subItems: [
        { label: 'Historia: Jefes de Departamento', url: '#' },
        { label: 'Historia: Relato Histórico', url: '#' },
        { label: '¿Cómo llegar'}
      ],
    },
    { label: 'Autoridades', url:'#',
      subItems: [
        { label: 'Direccón', url: '#'},
        { label: 'Comisiones de Carrera'}
      ]
    },
    { label: 'Actas de Reunión', url: '#'},
    { label: 'Personal', url: '#', 
      subItems: [
        { label: 'Docente', url: '#'},
        { label: 'No Docente', url: '#'}
      ]
    },
    { label: 'Calendario Académico', url: '#',
      subItems: [
        { label: 'Facultad de Ingeniería', url: 'https://ing.unlp.edu.ar/institucional/calendario-ano-lectivo-completo/', targ: "_blank"},
        { label: 'Facultad Virtual de Informática E Ingeniería', url: 'https://ic.info.unlp.edu.ar/wp-content/uploads/2024/02/IC_CALENDARIO_ACADEMICO_2024.pdf', targ: "_blank"}
      ]
    },
    {label: 'Área Técnica', url: '#'}
  ]

  export   const carrerasItems = [
    { label: 'Postgrado', url:'/postgrado'},
    { label: 'Grado', url: '', 
      subItems: [
        { label: 'Ingenieria en Computacion', url:'/ing_computacion'},
        { label: 'Ingenieria en Electronica', url:'/ing_electronica' },
        { label: 'Ingenieria en Telecomunicaciones', url:'/ing_telecomunicaciones' },
        { label: 'Ingenieria en Energia Electrica', url:'/ing_energiaelectrica' }
      ]
    }
    
  ];

  export const investigacionItems = [
    { label: 'Unidades de Investigacón', url:'/unidadesInv' },
    { label: 'Investigadores', url:'#' },
    { label: 'Repositorio Digital de Trabajos', url:'#' }
  ];
  
  export const noticiasItems = [
    { label: 'Novedades', url: '/novedades'},
    { label: 'Concursos', url:'/concursos'},
    { label: 'Formación Complementaria', url:'#'},
    { label: 'Oferta Laboral', url:'#'},
  ]

  export const barcalaItems = [
    { label: 'Laboratorio Barcala', url: '#'},
    { label: 'Horarios', url:'horarios'},
  ]

  export const clubesItems = [
    { label: 'Club DevOps', url: 'post_devops'},
    { label: 'Club de Robotica', url:'post_robotica'},
  ]