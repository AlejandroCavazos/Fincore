// Privacy and cookie notices (Mexico), transcribed from the drafts Alex shared on
// 2026-10-12. Items in LEGAL_INFO are still pending: they render highlighted until
// filled in. Changing the text of either notice requires bumping LEGAL_VERSION so
// new sign-ups record which version they accepted.

export const LEGAL_VERSION = '2026-10-12'

export const LEGAL_INFO = {
  owner: '[RAZÓN SOCIAL O NOMBRE LEGAL DEL RESPONSABLE]',
  address: '[DOMICILIO COMPLETO, MUNICIPIO, ESTADO, CÓDIGO POSTAL, MÉXICO]',
  email: '[CORREO DE PRIVACIDAD]',
  domain: 'https://alejandrocavazos.github.io/Fincore/',
}

export interface LegalSection {
  title: string
  paragraphs: string[]
}

export interface LegalDoc {
  id: 'privacy' | 'cookies'
  title: string
  updated: string
  sections: LegalSection[]
}

const { owner, address, email, domain } = LEGAL_INFO

export const PRIVACY: LegalDoc = {
  id: 'privacy',
  title: 'Aviso de Privacidad Integral',
  updated: '12 de octubre de 2026',
  sections: [
    {
      title: '1. Identidad y domicilio del responsable',
      paragraphs: [
        `El responsable del tratamiento de datos personales es ${owner}, que opera la plataforma FINCORE, con domicilio en ${address}, correo de privacidad ${email} y sitio web ${domain}.`,
      ],
    },
    {
      title: '2. Datos personales que podemos tratar',
      paragraphs: [
        'Según las funciones utilizadas, podemos recabar: nombre, correo electrónico, credenciales de acceso protegidas, país o región, preferencias de idioma, datos de contacto, información de perfil, institución educativa cuando el usuario la proporcione, cursos inscritos, respuestas, calificaciones, progreso, métricas de dominio y actividad de aprendizaje; mensajes y consultas enviados al tutor de IA; registros técnicos, dirección IP, identificadores de sesión, navegador, dispositivo y eventos de seguridad.',
        'Para suscripciones podemos tratar datos de facturación, régimen fiscal, RFC y datos necesarios para emitir CFDI cuando corresponda, así como referencias y estado de pagos. Los datos completos de tarjetas deben procesarse preferentemente por un proveedor de pagos especializado y no almacenarse directamente en FINCORE. No solicitamos datos financieros bancarios ni patrimoniales para brindar enseñanza general; si una función futura los requiere, se actualizará este aviso.',
      ],
    },
    {
      title: '3. Datos sensibles y menores de edad',
      paragraphs: [
        'FINCORE no solicita intencionalmente datos personales sensibles para sus servicios ordinarios. Se recomienda no introducir datos de salud, biométricos, creencias, contraseñas, datos bancarios completos ni información confidencial de terceros en el tutor de IA. Si se incorporan funciones que requieran datos sensibles, se establecerán mecanismos de consentimiento y protección adecuados.',
        '[DEFINIR POLÍTICA DE EDAD Y AUTORIZACIÓN DE MADRES, PADRES O TUTORES]. En caso de ofrecer servicios a menores, se aplicarán medidas de información, consentimiento y protección apropiadas.',
      ],
    },
    {
      title: '4. Finalidades primarias',
      paragraphs: [
        'Crear, autenticar y administrar cuentas; proporcionar microclases, evaluaciones, ejercicios y seguimiento adaptativo; calcular indicadores de progreso y dominio; personalizar recomendaciones educativas; operar el tutor de IA y moderar su uso; gestionar suscripciones, cobros y facturación; atender solicitudes de soporte; proteger la plataforma, detectar abuso y prevenir fraudes; cumplir obligaciones contractuales, fiscales y legales.',
      ],
    },
    {
      title: '5. Finalidades secundarias y oposición',
      paragraphs: [
        `Con autorización cuando resulte exigible, podremos enviar comunicaciones promocionales, encuestas comerciales, recomendaciones de nuevos productos y medir campañas publicitarias no indispensables. El usuario podrá oponerse a estas finalidades mediante ${email} y los controles de preferencias disponibles, sin afectar el acceso a los servicios esenciales contratados.`,
      ],
    },
    {
      title: '6. Fundamento y consentimiento',
      paragraphs: [
        'El tratamiento se realizará conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente y demás disposiciones aplicables. Cuando la ley requiera consentimiento expreso u otro mecanismo específico, se solicitará por separado. La aceptación del aviso no sustituye los consentimientos que deban recabarse para tratamientos particulares.',
      ],
    },
    {
      title: '7. Transferencias y encargados',
      paragraphs: [
        'Podemos utilizar proveedores que actúen por cuenta de FINCORE para alojamiento, autenticación, infraestructura, analítica, soporte, mensajería, procesamiento de pagos y servicios de IA, sujetos a obligaciones contractuales de confidencialidad y seguridad. Las transferencias a terceros que requieran consentimiento se informarán y someterán a autorización conforme a la ley; podrán existir comunicaciones permitidas legalmente sin consentimiento, por ejemplo a autoridades competentes en los supuestos previstos.',
        'Proveedores que FINCORE utiliza actualmente: GitHub Pages (GitHub, Inc., Estados Unidos) para alojar el sitio; Supabase (Supabase, Inc.) para autenticación y para guardar el correo y el plan de cada cuenta. [CONFIRMAR UBICACIÓN DEL SERVIDOR DE SUPABASE Y AGREGAR PROVEEDORES DE PAGOS E IA CUANDO SE ACTIVEN].',
      ],
    },
    {
      title: '8. Tutor de inteligencia artificial y decisiones automatizadas',
      paragraphs: [
        'Las consultas y respuestas pueden ser procesadas por proveedores tecnológicos para generar explicaciones, pistas y retroalimentación. Los resultados pueden contener errores y no constituyen asesoría financiera, fiscal, legal o de inversión personalizada. FINCORE podrá utilizar reglas automatizadas para adaptar la dificultad y el contenido educativo; el usuario podrá solicitar aclaraciones sobre el tratamiento de sus datos a través del canal de privacidad.',
      ],
    },
    {
      title: '9. Conservación y seguridad',
      paragraphs: [
        'Conservaremos los datos únicamente durante el tiempo necesario para las finalidades informadas, la relación contractual y los plazos legales aplicables; después serán eliminados, bloqueados o anonimizados según proceda. [DEFINIR PLAZOS DE RETENCIÓN POR CATEGORÍA]. Aplicaremos medidas administrativas, técnicas y físicas razonables, como controles de acceso, cifrado donde corresponda, copias de seguridad y gestión de incidentes, sin prometer seguridad absoluta.',
      ],
    },
    {
      title: '10. Derechos ARCO y revocación',
      paragraphs: [
        `El titular podrá solicitar acceso, rectificación, cancelación u oposición (ARCO), así como revocar su consentimiento cuando proceda, escribiendo a ${email}. La solicitud deberá incluir nombre, medio de contacto, descripción clara del derecho solicitado y elementos que permitan identificar los datos; podrá requerirse acreditación de identidad o representación de forma proporcional y segura. FINCORE responderá dentro de los plazos previstos por la legislación aplicable y comunicará la procedencia y, en su caso, ejecución de la solicitud.`,
      ],
    },
    {
      title: '11. Cookies y tecnologías similares',
      paragraphs: [
        'Utilizamos tecnologías necesarias para sesiones y seguridad, y podríamos emplear analítica, personalización o publicidad según las herramientas efectivamente instaladas. Las categorías, controles y terceros se describen en el Aviso de Cookies de FINCORE. Las cookies no esenciales se activarán de acuerdo con las preferencias y requisitos legales aplicables.',
      ],
    },
    {
      title: '12. Cambios y autoridad competente',
      paragraphs: [
        `Cualquier cambio sustancial se comunicará mediante ${domain}, la plataforma o el correo registrado cuando corresponda. El titular podrá acudir ante la autoridad mexicana competente en materia de protección de datos personales conforme al marco institucional vigente. Fecha de última actualización: 12 de octubre de 2026.`,
      ],
    },
  ],
}

export const COOKIES: LegalDoc = {
  id: 'cookies',
  title: 'Aviso de Cookies',
  updated: '12 de octubre de 2026',
  sections: [
    {
      title: '1. Responsable y alcance',
      paragraphs: [
        `FINCORE, operado por ${owner}, utiliza cookies y tecnologías similares en ${domain} y, en su caso, aplicaciones relacionadas. Contacto: ${email}.`,
      ],
    },
    {
      title: '2. ¿Qué son las cookies?',
      paragraphs: [
        'Las cookies son pequeños archivos o identificadores que un sitio puede almacenar o consultar en el navegador. También pueden emplearse almacenamiento local, píxeles, etiquetas y tecnologías equivalentes. Algunas son propias de FINCORE y otras provienen de servicios externos.',
      ],
    },
    {
      title: '3. Categorías y finalidades',
      paragraphs: [
        '**Estrictamente necesarias:** permiten iniciar sesión, mantener autenticación, guardar opciones de seguridad, equilibrar tráfico y prevenir abuso. Sin ellas, funciones esenciales podrían no operar.',
        '**Preferencias y funcionalidad:** recuerdan idioma, ajustes de accesibilidad, interfaz y preferencias educativas.',
        '**Analítica y rendimiento:** FINCORE no utiliza actualmente herramientas de analítica.',
        '**Publicidad y medición:** FINCORE no utiliza actualmente tecnologías de publicidad ni de medición de campañas.',
      ],
    },
    {
      title: '4. Inventario de cookies y tecnologías',
      paragraphs: [
        'FINCORE no instala cookies propias ni de terceros. Utiliza almacenamiento en tu navegador:',
        '**Sesión de cuenta** (almacenamiento local, proveedor Supabase, estrictamente necesaria): mantiene tu sesión iniciada; se conserva hasta que cierras sesión o borras los datos del sitio.',
        '**Progreso y preferencias** (IndexedDB, propio de FINCORE, preferencias y funcionalidad): guarda tu avance, XP, idioma y tema en este dispositivo; se conserva hasta que lo borras desde Configuración o desde el navegador. Si inicias sesión, una copia de tu avance (incluidas tus vidas) se guarda también en tu cuenta para que puedas continuar en otro navegador.',
        '**Vidas y registro de práctica** (almacenamiento local, propio de FINCORE, funcionalidad): guarda tus vidas, repasos del día y un registro de tus eventos de práctica en este dispositivo; el registro no se envía a terceros.',
        '**Archivos para uso sin conexión** (Cache Storage del service worker, propio, estrictamente necesaria): guarda los archivos de la app para que funcione sin internet; no contiene datos personales.',
      ],
    },
    {
      title: '5. Consentimiento',
      paragraphs: [
        'Las tecnologías estrictamente necesarias operan para prestar el servicio. Como FINCORE no utiliza actualmente tecnologías no esenciales, no hay categorías opcionales que configurar. Si en el futuro se incorporan, FINCORE pedirá tu elección antes de activarlas y ofrecerá un enlace persistente para cambiarla.',
      ],
    },
    {
      title: '6. Cómo deshabilitarlas',
      paragraphs: [
        'Puedes bloquear o eliminar estos datos desde la configuración de tu navegador. La eliminación puede cerrar sesiones o restablecer preferencias, y el bloqueo de tecnologías necesarias puede impedir algunas funcionalidades.',
      ],
    },
    {
      title: '7. Plazos y datos personales',
      paragraphs: [
        'La duración de cada tecnología es la indicada en el inventario. Si un identificador permite identificar o hacer identificable a una persona, su tratamiento también queda sujeto al Aviso de Privacidad de FINCORE y a la legislación mexicana aplicable.',
      ],
    },
    {
      title: '8. Proveedores y transferencias',
      paragraphs: [
        'Supabase, Inc. procesa la sesión de cuenta como proveedor de autenticación. La utilización de herramientas de terceros puede implicar tratamiento o transferencias internacionales de datos, que se informan en el Aviso de Privacidad.',
      ],
    },
    {
      title: '9. Actualizaciones y contacto',
      paragraphs: [
        `FINCORE podrá actualizar este aviso cuando cambien las herramientas, finalidades o exigencias legales. Fecha de última actualización: 12 de octubre de 2026. Consultas: ${email}.`,
      ],
    },
  ],
}
