/**
 * Single source of truth for the platform's modules.
 *
 * `Servicios.astro` renders the cards from this; `MainLayout.astro` builds the
 * schema.org OfferCatalog from the same array, so the structured data can never
 * drift from what the page actually offers.
 */
export interface Modulo {
  id: string;
  /** Matches an <option value> in the quote form's serviceType select. */
  formValue: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  conecta: string;
  accent: string;
  accentDim: string;
}

export const modulos: Modulo[] = [
  {
    id: 'propuestas',
    formValue: 'propuestas',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Propuestas',
    subtitle: 'Cotización técnica y económica',
    description: 'Armas la propuesta con perfiles, horas estimadas y tarifas reales de tu planilla. Nada de precios improvisados.',
    outcomes: [
      'Cotizas con el costo real de tu gente',
      'Reutilizas propuestas anteriores como base',
      'Sabes qué propuestas ganaste y cuáles no',
    ],
    conecta: 'Toma tarifas de Personal · Abre el Proyecto',
    accent: 'var(--blue)',
    accentDim: 'rgba(91, 143, 199, 0.12)',
  },
  {
    id: 'proyectos',
    formValue: 'proyectos',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Control de Proyectos',
    subtitle: 'Presupuesto, avance y desvíos',
    description: 'La propuesta ganada se convierte en proyecto con su presupuesto de horas y costos. Ves el desvío mientras pasa, no al cerrar.',
    outcomes: [
      'Horas gastadas contra horas vendidas, hoy',
      'Alerta cuando un proyecto se empieza a ir',
      'Avance por entregable, no por corazonada',
    ],
    conecta: 'Recibe de Propuestas · Consume Timesheet y Logística',
    accent: 'var(--blue-light)',
    accentDim: 'rgba(143, 184, 224, 0.12)',
  },
  {
    id: 'timesheet',
    formValue: 'timesheet',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Timesheet',
    subtitle: 'Horas por persona, proyecto y tarea',
    description: 'Cada quien carga sus horas contra un proyecto real. Esas horas descuentan presupuesto y alimentan la facturación.',
    outcomes: [
      'Se acabó el Excel de horas por área',
      'Aprobación del jefe de proyecto antes de facturar',
      'Horas facturables y no facturables, separadas',
    ],
    conecta: 'Descuenta del Proyecto · Alimenta Rentabilidad',
    accent: 'var(--cyan)',
    accentDim: 'rgba(108, 180, 200, 0.12)',
  },
  {
    id: 'documentario',
    formValue: 'documentario',
    icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z M13 3v6h6',
    title: 'Control Documentario',
    subtitle: 'Entregables, revisiones y transmittals',
    description: 'Cada plano e informe con su código, su revisión y su estado. Sabes qué versión está vigente y quién la aprobó.',
    outcomes: [
      'Una sola versión vigente, sin copias sueltas',
      'Historial de revisiones y aprobaciones',
      'Trazabilidad para auditoría y cliente',
    ],
    conecta: 'Marca el avance del Proyecto',
    accent: 'var(--blue-pale)',
    accentDim: 'rgba(184, 212, 240, 0.12)',
  },
  {
    id: 'logistica',
    formValue: 'logistica',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Logística',
    subtitle: 'Compras, subcontratos y equipos',
    description: 'Todo lo que se compra queda cargado al proyecto que lo pidió. El costo directo deja de aparecer recién en contabilidad.',
    outcomes: [
      'Cada compra imputada a su proyecto',
      'Requerimientos con aprobación por monto',
      'Subcontratos y servicios en el mismo lugar',
    ],
    conecta: 'Carga costos al Proyecto',
    accent: 'var(--steel)',
    accentDim: 'rgba(122, 165, 205, 0.12)',
  },
  {
    id: 'personal',
    formValue: 'personal',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Personal',
    subtitle: 'Legajos, tarifas y asignación',
    description: 'Quién está en qué proyecto, cuánto cuesta su hora y qué disponibilidad tiene. La base sobre la que cotizas todo lo demás.',
    outcomes: [
      'Tarifa por perfil, siempre actualizada',
      'Ves quién está libre antes de comprometer',
      'Legajos y documentos del personal al día',
    ],
    conecta: 'Alimenta Propuestas y Timesheet',
    accent: 'var(--slate)',
    accentDim: 'rgba(159, 182, 204, 0.12)',
  },
];
