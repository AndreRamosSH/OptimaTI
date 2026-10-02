export const defaultCases = [
    {
        id: "case-1",
        title: "Caída de Ventas en Black Friday",
        symptom: "El sistema de ventas web se bloqueó totalmente durante el pico de tráfico del Black Friday.",
        options: [
            { id: "opt-1", text: "Servidores colapsaron al llegar al 100% de CPU y RAM.", category: "Infraestructura", detail: "Falta de auto-escalamiento y capacidad insuficiente.", action: "Migrar a una arquitectura Cloud con auto-scaling y balanceo de carga automático." },
            { id: "opt-2", text: "Nadie se dio cuenta del alto tráfico hasta que el sistema cayó.", category: "Herramientas", detail: "No hay alarmas configuradas para picos de uso.", action: "Implementar monitoreo activo (Datadog/Zabbix) con alertas tempranas antes del 80% de uso." },
            { id: "opt-3", text: "El equipo no supo reiniciar el servicio correctamente.", category: "Personal", detail: "Falta de capacitación técnica en manejo de crisis.", action: "Realizar simulacros técnicos y capacitación cruzada entre niveles de soporte." }
        ]
    },
    {
        id: "case-2",
        title: "Pérdida de Datos de Cliente",
        symptom: "Un técnico nuevo borró accidentalmente una tabla crítica de la base de datos de producción.",
        options: [
            { id: "opt-1", text: "El técnico siguió un manual con comandos equivocados.", category: "Procesos", detail: "Documentación técnica desactualizada e incorrecta.", action: "Actualizar la Base de Conocimiento (KEDB) y requerir revisión por pares en cambios críticos." },
            { id: "opt-2", text: "El técnico tenía permisos de administrador global por defecto.", category: "Procesos", detail: "Falta de políticas de acceso de menor privilegio.", action: "Auditar accesos e implementar modelo RBAC (Role-Based Access Control)." },
            { id: "opt-3", text: "Nadie le explicó al técnico la diferencia entre los entornos.", category: "Personal", detail: "Inducción (Onboarding) técnica deficiente.", action: "Mejorar programa de inducción técnica y asignar un mentor a los nuevos ingresos." }
        ]
    },
    {
        id: "case-3",
        title: "Interrupción de Red en Planta",
        symptom: "La red de la fábrica principal se cayó durante 4 horas, parando la producción.",
        options: [
            { id: "opt-1", text: "Un switch principal se quemó por falla eléctrica recurrente.", category: "Infraestructura", detail: "Hardware defectuoso sin redundancia de energía.", action: "Instalar UPS redundantes y reemplazar switches obsoletos." },
            { id: "opt-2", text: "Había alertas del switch fallando hace semanas, pero nadie las miró.", category: "Procesos", detail: "Flujo de trabajo de gestión de eventos no definido.", action: "Establecer una matriz de escalamiento clara para eventos de hardware crítico." },
            { id: "opt-3", text: "El software de monitoreo de red dejó de funcionar el mes pasado.", category: "Herramientas", detail: "Sistemas de gestión desactualizados u obsoletos.", action: "Renovar licencias y actualizar el sistema de monitoreo central (ej. PRTG/SolarWinds)." }
        ]
    }
];

export function getCases() {
    if (typeof window === 'undefined') return defaultCases;
    const stored = localStorage.getItem('gsti-cases');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('gsti-cases', JSON.stringify(defaultCases));
    return defaultCases;
}

export function saveCase(newCase) {
    const cases = getCases();
    cases.push(newCase);
    localStorage.setItem('gsti-cases', JSON.stringify(cases));
}

export function getHistory() {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('gsti-history');
    return stored ? JSON.parse(stored) : [];
}

export function saveTicket(ticket) {
    const history = getHistory();
    history.unshift(ticket);
    localStorage.setItem('gsti-history', JSON.stringify(history));
}
