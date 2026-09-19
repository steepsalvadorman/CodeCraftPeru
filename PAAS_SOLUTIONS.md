# CodeCraft Perú — Portafolio de Sistemas Integrados de Gestión vía Web

Este documento constituye el **plano técnico y comercial** de los módulos de gestión web de CodeCraft Perú. Ha sido diseñado para servir como manual de consulta recurrente para desarrollo de software, auditorías y propuestas comerciales B2B.

---

## 1. GestCore ERP
*Sistema de gestión empresarial web integrado*

*   **Problema Crítico:** Procesos dispersos en planillas Excel, sistemas desconectados, falta de trazabilidad en compras/ventas y reportes manuales propensos a errores.
*   **¿Cómo funciona?**
    1.  Los usuarios registran operaciones (compras, ventas, pagos, cobros) desde cualquier navegador con roles y permisos granulares.
    2.  Flujos de aprobación automatizados según montos, áreas o tipos de documento.
    3.  Integración contable con generación de asientos y conciliación bancaria.
    4.  Panel ejecutivo con indicadores financieros y operativos en tiempo real.
*   **Especificaciones Tecnológicas:**
    *   **Backend:** Java 21, Spring Boot, PostgreSQL.
    *   **Frontend:** Angular 17+ con dashboards responsivos.
    *   **Seguridad:** JWT, RBAC, auditoría de cambios.
*   **Propuesta de Valor B2B:** Un solo origen de verdad para toda la operación, eliminando duplicidad de datos y reduciendo errores administrativos.

---

## 2. StockWeb
*Control de inventarios y almacén multi-sede*

*   **Problema Crítico:** Quiebres de stock, kardex desactualizado, falta de trazabilidad por lote/serie y transferencias entre sedes sin control.
*   **¿Cómo funciona?**
    1.  Registro de entradas (compras, devoluciones) y salidas (ventas, consumo interno) desde la web.
    2.  Kardex automático con historial de movimientos por producto, lote y ubicación.
    3.  Transferencias entre almacenes con confirmación y trazabilidad.
    4.  Alertas de stock mínimo y reportes de rotación de inventario.
*   **Especificaciones Tecnológicas:**
    *   **Backend:** Spring Boot con API REST.
    *   **Frontend:** Angular con tablas dinámicas y filtros avanzados.
    *   **Base de datos:** PostgreSQL con índices optimizados para consultas de kardex.
*   **Propuesta de Valor B2B:** Reducción de quiebres de stock en un 30% y trazabilidad completa de cada unidad en el almacén.

---

## 3. CRMPlus
*Gestión comercial, pipeline y facturación electrónica*

*   **Problema Crítico:** Oportunidades de venta sin seguimiento, cotizaciones en formatos distintos, facturación manual y falta de visibilidad del ciclo comercial.
*   **¿Cómo funciona?**
    1.  Registro de leads y clientes con historial de interacciones.
    2.  Pipeline visual de oportunidades con etapas configurables.
    3.  Generación de cotizaciones y conversión a pedidos con un clic.
    4.  Emisión de comprobantes electrónicos integrados con SUNAT.
*   **Especificaciones Tecnológicas:**
    *   **Backend:** Spring Boot con integración OSE/PSE para facturación.
    *   **Frontend:** Angular con vistas Kanban y formularios dinámicos.
    *   **Integración:** Conexión directa con GestCore ERP e StockWeb.
*   **Propuesta de Valor B2B:** Aumento del 20% en tasa de conversión y ciclo comercial completamente visible y auditable.

---

## 4. InsightBoard
*Business Intelligence y reportes automatizados*

*   **Problema Crítico:** Datos aislados en cada área, reportes manuales que tardan días, decisiones basadas en información desactualizada.
*   **¿Cómo funciona?**
    1.  Conexión automática con todos los módulos (ERP, inventarios, CRM).
    2.  Dashboards personalizables con KPIs por rol (gerencia, ventas, almacén).
    3.  Reportes programados por correo con exportación a PDF/Excel.
    4.  Alertas de desviación cuando indicadores superan umbrales definidos.
*   **Especificaciones Tecnológicas:**
    *   **Backend:** Spring Boot con motor de agregaciones y caché.
    *   **Frontend:** Angular con gráficos interactivos (Chart.js / D3).
    *   **Base de datos:** PostgreSQL con vistas materializadas para consultas rápidas.
*   **Propuesta de Valor B2B:** Decisiones basadas en datos unificados con reportes generados en segundos, no días.
