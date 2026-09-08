/**
 * Secuencias didácticas desarrolladas por Crestech.
 *
 * OJO — esto es una COPIA del catálogo que vive en el repo `didakt`
 * (Crestech Didáctico), en `content/secuencias.ts`. Se duplicó a propósito el
 * 2026-09-08 para poder mostrárselo a un cliente antes de que el hub esté
 * deployado en su VPS. **Si cambiás una secuencia, cambiala en los dos lados.**
 *
 * Las URLs apuntan a los deploys de Railway, que son los que están vivos hoy.
 * Cuando el hub esté andando, esto pasa a linkear a `didactico.crestech.com.ar`
 * y esta duplicación se puede borrar.
 */

export interface RecursoDidactico {
  nombre: string;
  momento?: string;
  descripcion: string;
  url: string;
}

export interface SecuenciaDidactica {
  slug: string;
  titulo: string;
  bajada: string;
  descripcion: string;
  nivel: string;
  grados: string;
  areas: string[];
  programa?: string;
  acento: string;
  recursos: RecursoDidactico[];
  /** PDF en `public/didactico/`, si la secuencia tiene manual publicable. */
  manual?: { archivo: string; detalle: string };
  /** Tiene manual pero no se publica el archivo (ver comentario en el dato). */
  manualSinPublicar?: string;
}

const STEM = "https://app-production-176a.up.railway.app";
const BILLETERA = "https://billetera-virtual-educativa-production.up.railway.app";
const MUNDIALITO = "https://mundialito-escolar-production.up.railway.app";

export const SECUENCIAS: SecuenciaDidactica[] = [
  {
    slug: "stem-primer-ciclo",
    titulo: "Secuencia STEM+ · Primer Ciclo",
    bajada: "Del lenguaje cotidiano a la instrucción programable",
    descripcion:
      "Dos recursos de una misma secuencia. Primero los chicos descubren, hablándole a un robot, que no toda indicación se puede convertir en una acción. Después inventan su propio código de símbolos y lo usan para armar misiones que resuelve otro grupo.",
    nivel: "Nivel primario",
    grados: "1.º a 3.º grado",
    areas: ["Pensamiento computacional", "STEM+"],
    programa: "Buenos Aires Aprende",
    acento: "#38bdf8",
    recursos: [
      {
        nombre: "Robot mensajero",
        momento: "Desafío 1 · diagnóstico",
        descripcion:
          "Simulador para probar indicaciones orales. Distingue la instrucción que se puede ejecutar de la que le falta información, de la que está fuera del repertorio del robot y del fallo de reconocimiento.",
        url: `${STEM}/robot`,
      },
      {
        nombre: "Creador de misiones",
        momento: "Desafíos 2, 3 y 4",
        descripcion:
          "La clase redibuja los cuatro símbolos que acordó en papel, cada grupo arma una misión de recorrido y el grupo visitante la juega en una sala de solo lectura. Una misión sólo se publica con una solución comprobada.",
        url: `${STEM}/misiones`,
      },
    ],
    manual: {
      archivo: "/didactico/manual-docente-stem.pdf",
      detalle: "13 páginas, con capturas reales de cada pantalla",
    },
  },
  {
    slug: "billetera-virtual",
    titulo: "Billetera Virtual Educativa",
    bajada: "Dinero digital, sin dinero real",
    descripcion:
      "Simulador de billetera virtual para trabajar consumo, ahorro y medios de pago digitales en el aula. El docente arma un aula con un crédito inicial y genera los QR de las operaciones; cada estudiante entra con un apodo, paga escaneando y ve su saldo y su historial. No hay dinero real ni datos personales de los chicos.",
    nivel: "Nivel primario",
    grados: "6.º y 7.º grado",
    areas: ["Educación financiera", "Ciudadanía digital"],
    programa: "Buenos Aires Aprende",
    acento: "#34d399",
    recursos: [
      {
        nombre: "Panel docente",
        momento: "Antes y durante la clase",
        descripcion:
          "Crea el aula con su crédito inicial y muestra en vivo quién se conectó y con cuánto saldo. Permite ajustar créditos o cerrar el aula al terminar.",
        url: `${BILLETERA}/docente`,
      },
      {
        nombre: "Generador de QR",
        momento: "Armado de la actividad",
        descripcion:
          "Genera los QR de cada operación —compras, descuentos y reintegros— para imprimir o proyectar. Sirve para una demostración con proyector o para una feria de comercios con varios puestos.",
        url: `${BILLETERA}/generar`,
      },
      {
        nombre: "Billetera del estudiante",
        momento: "Durante la clase",
        descripcion:
          "El estudiante entra al aula por código o escaneando el QR, elige apodo y avatar, y paga escaneando los QR de los puestos. Ve el saldo y el historial de cada movimiento.",
        url: `${BILLETERA}/estudiante`,
      },
    ],
    // El manual de la Billetera NO se publica acá: trae impreso el PIN docente
    // en texto plano. Se menciona que existe, pero el PDF no se sirve desde el
    // sitio comercial. Decisión del 2026-09-08.
    manualSinPublicar: "11 páginas, con capturas reales de cada pantalla",
  },
  {
    slug: "mundialito-escolar",
    titulo: "Mundialito Escolar",
    bajada: "Un torneo entero, sin planilla",
    descripcion:
      "Organizador de torneos escolares con formato de mundial: fase de grupos y después eliminación directa. Se cargan los equipos, la app arma los grupos y el fixture, y las tablas y el cuadro final se actualizan solos con cada resultado. Funciona sin conexión y sin cuentas.",
    nivel: "Nivel primario",
    grados: "Todos los grados",
    areas: ["Educación física", "Convivencia"],
    acento: "#fbbf24",
    recursos: [
      {
        nombre: "Organizador de torneo",
        descripcion:
          "Carga de equipos, sorteo de grupos, fixture, tabla de posiciones y cuadro de eliminatorias en una sola pantalla. El torneo se guarda en el navegador y se comparte con un código.",
        url: MUNDIALITO,
      },
    ],
  },
];
