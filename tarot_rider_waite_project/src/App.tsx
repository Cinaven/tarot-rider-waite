import React, { useEffect, useState } from "react";
import foolImage from "./assets/1e57a42cec7bbd06-image_search_0_rider_waite_tarot_the_fool_0_original_card.png";
import magicianImage from "./assets/af8a77528e05416b-image_search_0_rws_tarot_01_magician_wikimedia.png";
import priestessImage from "./assets/71dadf7f64a22c1f-image_search_1_rider_waite_tarot_high_priestess_2_original_card.png";
import empressImage from "./assets/90042d438e935fe3-image_search_0_rider_waite_tarot_the_empress_3_original_card.png";
import emperorImage from "./assets/efe0d9115ea57be7-image_search_1_rws_tarot_04_emperor.png";
import hierophantImage from "./assets/86eecb2f28223acf-image_search_1_rws_tarot_05_hierophant_pope.jpg";
import chariotImage from "./assets/eef6b7bbaea3f551-image_search_1_rws_tarot_07_chariot_wikimedia_full_card.png";
import strengthImage from "./assets/df10cdfdc2e2b607-image_search_0_rider_waite_tarot_strength_8_original_card.jpg";
import hermitImage from "./assets/6cca3b1d68603b87-image_search_0_rider_waite_tarot_the_hermit_9_original_card.png";
import wheelImage from "./assets/6d45fcaca5ddff7d-image_search_0_rws_tarot_10_wheel_of_fortune_wikimedia.png";
import justiceImage from "./assets/f5379dbda203cb56-carta_11_justicia.png";
import deathImage from "./assets/5abe30ee5edefcd8-image_search_1_rws_tarot_13_death_wikimedia.png";

import temperanceRWImage from "./assets/15d5939e3bf8cfaa-image_search_0_rws_tarot_14_temperance_wikimedia.png";
import hangedFixedImage from "./assets/4e34f4e95b177e93-image_search_0_tarotaccessories_hanged_man_tarot_card.png";
import moonImage from "./assets/fba68c1600e80a31-FIX_18_LUNA.png";
import sunImage from "./assets/8714c9e459252f17-FIX_19_SOL.png";
import judgementImage from "./assets/f5ca2891bd411aee-FIX_20_JUICIO.png";
const loversImage = "https://upload.wikimedia.org/wikipedia/commons/8/87/RWS1909_-_06_Lovers.jpeg";
const starImage = "https://upload.wikimedia.org/wikipedia/commons/4/44/RWS1909_-_17_Star.jpeg";
const worldImage = "https://upload.wikimedia.org/wikipedia/commons/a/a4/RWS1909_-_21_World.jpeg";
const devilImage = "https://upload.wikimedia.org/wikipedia/commons/2/26/RWS1909_-_15_Devil.jpeg";
const towerImage = "https://upload.wikimedia.org/wikipedia/commons/2/2a/RWS1909_-_16_Tower.jpeg";








type Entry = { term: string; text: string };

const uprightGeneral: Entry[] = [
  { term: "Nuevos comienzos", text: "Inicios, oportunidades, potencial ilimitado y nuevos caminos." },
  { term: "Esencia", text: "Libertad, independencia, espontaneidad, inocencia y despreocupación." },
  { term: "Aventura", text: "Viajes, experiencias desconocidas, improvisación y vivir el presente." },
  { term: "Actitud", text: "Fe, confianza, valentía, riesgos y saltos de fe." },
  { term: "Creatividad", text: "Originalidad, imaginación y pensamiento libre." },
];

const uprightRealms: Entry[] = [
  { term: "Interpretación", text: "Comenzar de cero, tomar riesgos y aventurarse." },
  { term: "Amor", text: "Enamoramiento, nuevas relaciones, aventuras y libertad." },
  { term: "Trabajo", text: "Nuevos proyectos, emprendimientos y oportunidades." },
  { term: "Dinero", text: "Nuevos ingresos, oportunidades y riesgos económicos." },
  { term: "Salud", text: "Vitalidad, energía, recuperación y posibles accidentes." },
  { term: "Espiritualidad", text: "Despertar, libertad interior y autodescubrimiento." },
];

const reversedGeneral: Entry[] = [
  { term: "Falta de control", text: "Imprudencia, irresponsabilidad, caos y desorganización." },
  { term: "Decisiones", text: "Precipitación, riesgos innecesarios y oportunidades desaprovechadas." },
  { term: "Bloqueos", text: "Falta de dirección, objetivos y miedo a comenzar." },
  { term: "Inmadurez", text: "Ingenuidad, credulidad y falta de compromiso." },
];

const reversedRealms: Entry[] = [
  { term: "Interpretación", text: "Imprudencia, falta de preparación, miedo al cambio y decisiones precipitadas." },
  { term: "Amor", text: "Inestabilidad, inmadurez, falta de compromiso y relaciones pasajeras." },
  { term: "Trabajo", text: "Inexperiencia, irresponsabilidad y mala planificación." },
  { term: "Dinero", text: "Gastos impulsivos, pérdidas y riesgos innecesarios." },
  { term: "Salud", text: "Descuido personal, negligencia y accidentes." },
  { term: "Espiritualidad", text: "Desorientación, inmadurez y falta de propósito." },
];

const magicianUprightGeneral: Entry[] = [
  { term: "Voluntad y liderazgo", text: "Poder personal, determinación, liderazgo, diplomacia y negociación." },
  { term: "Inteligencia y creatividad", text: "Habilidad, destreza, ingenio, imaginación y creatividad." },
  { term: "Acción", text: "Iniciativa, nuevos proyectos y manifestación de ideas y deseos." },
  { term: "Enfoque", text: "Concentración, confianza, talento y capacidad para alcanzar objetivos y aprovechar recursos." },
  { term: "Comunicación", text: "Elocuencia, persuasión y capacidad de convencer." },
];

const magicianUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Iniciativa, habilidades y recursos para conseguir objetivos." },
  { term: "Amor", text: "Conquista, seducción, atracción e iniciativa sentimental." },
  { term: "Trabajo", text: "Talentos, proyectos, emprendimientos y oportunidades de éxito." },
  { term: "Dinero", text: "Generación de ingresos, negocios, inversiones y oportunidades." },
  { term: "Salud", text: "Vitalidad, energía y recuperación." },
  { term: "Espiritualidad", text: "Manifestación, intuición y conexión entre voluntad y pensamiento." },
];

const magicianReversedGeneral: Entry[] = [
  { term: "Engaño y manipulación", text: "Mentiras, estafas, fraudes, falsas promesas y abuso de poder." },
  { term: "Comunicación", text: "Manipulación y engaño mediante las palabras." },
  { term: "Potencial bloqueado", text: "Talentos desaprovechados, habilidades ocultas, bloqueo creativo y dispersión mental." },
  { term: "Inseguridad", text: "Falta de confianza, iniciativa y planificación." },
];

const magicianReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Engaños, manipulación, potencial desaprovechado e inseguridad." },
  { term: "Amor", text: "Manipulación emocional, seducción interesada, mentiras y falsas promesas." },
  { term: "Trabajo", text: "Engaños profesionales, falta de preparación y talentos desaprovechados." },
  { term: "Dinero", text: "Estafas, fraudes, malas negociaciones y pérdidas por engaños." },
  { term: "Salud", text: "Descuido personal y falta de atención al bienestar." },
  { term: "Espiritualidad", text: "Mal uso de conocimientos espirituales, falsas enseñanzas y desconexión interior." },
];

const priestessUprightGeneral: Entry[] = [
  { term: "Intuición y misterio", text: "Presentimientos, secretos, misterios y conocimientos ocultos." },
  { term: "Sabiduría", text: "Inteligencia, aprendizaje, subconsciente y mundo interior." },
  { term: "Actitud", text: "Silencio, paciencia, prudencia, discreción, observación y revelaciones." },
  { term: "Espiritualidad", text: "Meditación, adivinación, estabilidad emocional y confianza interior." },
  { term: "Ciclos vitales", text: "Fertilidad, embarazo y gestación." },
];

const priestessUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Escuchar la intuición, observar y esperar antes de actuar; información desconocida." },
  { term: "Amor", text: "Sentimientos ocultos, misterio, conexión profunda y amor secreto." },
  { term: "Trabajo", text: "Estudios, investigación, conocimientos y discreción." },
  { term: "Dinero", text: "Prudencia, ahorro, planificación e información reservada." },
  { term: "Salud", text: "Fertilidad, embarazo y atención a los ciclos del cuerpo." },
  { term: "Espiritualidad", text: "Intuición, meditación, sabiduría esotérica y conexión interior." },
];

const priestessReversedGeneral: Entry[] = [
  { term: "Bloqueo intuitivo", text: "Ignorar los presentimientos y desconectarse del mundo interior." },
  { term: "Secretos y engaños", text: "Mentiras, información oculta o retenida y falsedad." },
  { term: "Confusión", text: "Falta de claridad y mal uso de conocimientos espirituales." },
  { term: "Actitud", text: "Impaciencia e indiscreción." },
];

const priestessReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Desconfianza de la intuición, secretos, engaños e información incompleta." },
  { term: "Amor", text: "Secretos, desconfianza, sentimientos reprimidos y relaciones ocultas." },
  { term: "Trabajo", text: "Falta de preparación, información incompleta y secretos profesionales." },
  { term: "Dinero", text: "Confusión económica, engaños y malas decisiones." },
  { term: "Salud", text: "Desatención del cuerpo y de las propias necesidades." },
  { term: "Espiritualidad", text: "Bloqueo intuitivo, desconexión espiritual y confusión interior." },
];

const empressUprightGeneral: Entry[] = [
  { term: "Abundancia y prosperidad", text: "Crecimiento, bienestar material, comodidad, éxito empresarial y oportunidades favorables." },
  { term: "Creatividad", text: "Imaginación, expresión artística, desarrollo de proyectos y realización del potencial." },
  { term: "Amor y belleza", text: "Amor, sensualidad, belleza y placer." },
  { term: "Cuidado y protección", text: "Nutrición, feminidad, maternidad, generosidad y energía maternal." },
  { term: "Naturaleza y fertilidad", text: "Embarazo, fertilidad y conexión con la tierra." },
];

const empressUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Crecimiento, abundancia, creatividad, fertilidad y desarrollo de proyectos." },
  { term: "Amor", text: "Amor correspondido, romanticismo, sensualidad y relaciones afectuosas." },
  { term: "Trabajo", text: "Creatividad, reconocimiento, crecimiento profesional y proyectos exitosos." },
  { term: "Dinero", text: "Abundancia, prosperidad, ingresos favorables y comodidad económica." },
  { term: "Salud", text: "Vitalidad, bienestar, fertilidad, embarazo y maternidad." },
  { term: "Espiritualidad", text: "Conexión con la naturaleza, amor propio y energía creadora." },
];

const empressReversedGeneral: Entry[] = [
  { term: "Bloqueos y estancamiento", text: "Falta de inspiración, creatividad y crecimiento." },
  { term: "Autoestima", text: "Inseguridad, baja autoestima, descuido personal y falta de amor propio." },
  { term: "Dependencia y control", text: "Dependencia emocional, necesidad de aprobación, sobreprotección, posesividad y celos." },
  { term: "Recursos y motivación", text: "Desperdicio, dificultades económicas, pereza y comodidad excesiva." },
  { term: "Ciclos vitales", text: "Dificultades relacionadas con la fertilidad o maternidad." },
  { term: "Relaciones", text: "Problemas familiares y conflictos afectivos." },
];

const empressReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Bloqueos, dependencia, baja autoestima y dificultades para desarrollar proyectos." },
  { term: "Amor", text: "Dependencia emocional, celos, posesividad y relaciones desequilibradas." },
  { term: "Trabajo", text: "Bloqueos creativos, falta de motivación y proyectos estancados." },
  { term: "Dinero", text: "Desperdicio de recursos, gastos excesivos y dependencia económica." },
  { term: "Salud", text: "Descuido personal, agotamiento y falta de atención al bienestar." },
  { term: "Espiritualidad", text: "Desconexión de la naturaleza, falta de amor propio y bloqueo creativo." },
];

const emperorUprightGeneral: Entry[] = [
  { term: "Liderazgo y autoridad", text: "Poder, experiencia, toma de decisiones, paternidad y figura paterna." },
  { term: "Orden y estructura", text: "Disciplina, estabilidad, organización, planificación y control." },
  { term: "Protección y responsabilidad", text: "Seguridad, límites, compromiso y madurez." },
  { term: "Metas y patrimonio", text: "Ambición, determinación, perseverancia, estabilidad material y éxito mediante el esfuerzo." },
  { term: "Instituciones", text: "Leyes y normas." },
];

const emperorUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Control, estabilidad, autoridad y construcción de bases sólidas." },
  { term: "Amor", text: "Compromiso, protección, fidelidad y relaciones estables; persona seria y responsable." },
  { term: "Trabajo", text: "Liderazgo, ascensos, autoridad y éxito profesional." },
  { term: "Dinero", text: "Estabilidad financiera, ahorro, administración y patrimonio." },
  { term: "Salud", text: "Disciplina, constancia y hábitos saludables." },
  { term: "Espiritualidad", text: "Autodisciplina, dominio personal y principios." },
];

const emperorReversedGeneral: Entry[] = [
  { term: "Abuso de poder", text: "Autoritarismo, dominación, tiranía y control excesivo." },
  { term: "Rigidez", text: "Inflexibilidad, terquedad, dificultad para aceptar opiniones y conflictos con autoridades." },
  { term: "Falta de estructura", text: "Desorden, inestabilidad, falta de disciplina, responsabilidad y límites." },
  { term: "Inseguridad", text: "Debilidad oculta detrás de una apariencia de autoridad." },
];

const emperorReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Abuso de autoridad, rigidez, desorganización y pérdida de control." },
  { term: "Amor", text: "Relaciones controladoras, celos, dominación y frialdad emocional." },
  { term: "Trabajo", text: "Conflictos con superiores, abuso de autoridad y falta de organización." },
  { term: "Dinero", text: "Mala administración, inestabilidad económica y falta de planificación." },
  { term: "Salud", text: "Falta de disciplina, descuido de hábitos y estrés por exceso de control." },
  { term: "Espiritualidad", text: "Rigidez de pensamiento, dogmatismo e imposición de creencias." },
];

const hierophantUprightGeneral: Entry[] = [
  { term: "Sabiduría y guía", text: "Conocimiento, enseñanza, consejos, orientación, mentoría y maestros." },
  { term: "Fe y tradición", text: "Religión, creencias establecidas, espiritualidad y conexión con lo divino." },
  { term: "Formación y valores", text: "Estudios, aprendizaje, instituciones, normas, moralidad, respeto, obediencia y disciplina." },
  { term: "Uniones", text: "Matrimonio, compromiso y relaciones tradicionales." },
];

const hierophantUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Tradición, aprendizaje, orientación y búsqueda de respuestas mediante creencias establecidas." },
  { term: "Amor", text: "Matrimonio, compromiso, fidelidad y unión basada en valores compartidos." },
  { term: "Trabajo", text: "Estudios, enseñanza, instituciones, contratos, empleo estable y consejos de personas experimentadas." },
  { term: "Dinero", text: "Estabilidad económica, administración conservadora y respeto por las normas financieras." },
  { term: "Salud", text: "Tratamientos convencionales, asesoramiento profesional y seguimiento médico." },
  { term: "Espiritualidad", text: "Fe, religión, rituales, tradiciones y enseñanzas espirituales." },
];

const hierophantReversedGeneral: Entry[] = [
  { term: "Rebeldía y ruptura", text: "Rechazo de tradiciones, normas e instituciones; conflictos con autoridades." },
  { term: "Rigidez y falsedad", text: "Dogmatismo, fanatismo, hipocresía, falsos maestros y malos consejos." },
  { term: "Libertad de pensamiento", text: "Búsqueda de creencias propias y caminos independientes." },
  { term: "Crisis espiritual", text: "Falta de orientación y pérdida de fe." },
];

const hierophantReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Rechazo de normas tradicionales, cuestionamiento de creencias y búsqueda de un camino propio." },
  { term: "Amor", text: "Relaciones poco convencionales, rechazo al matrimonio, conflictos de valores y falta de compromiso." },
  { term: "Trabajo", text: "Problemas institucionales, conflictos con superiores y rechazo de normas laborales." },
  { term: "Dinero", text: "Decisiones poco convencionales, falta de asesoramiento y dificultades de planificación." },
  { term: "Salud", text: "Desconfianza de tratamientos convencionales o rechazo de indicaciones profesionales." },
  { term: "Espiritualidad", text: "Crisis de fe, dogmatismo, falsas enseñanzas y búsqueda de espiritualidad independiente." },
];

const loversUprightGeneral: Entry[] = [
  { term: "Amor y pasión", text: "Romance, atracción, deseo, pasión y magnetismo." },
  { term: "Unión y acuerdos", text: "Parejas, alianzas, asociaciones y compromisos." },
  { term: "Armonía", text: "Afinidad, compatibilidad, valores compartidos y conexión emocional." },
  { term: "Elecciones", text: "Decisiones importantes, dualidad, dilemas y caminos diferentes." },
];

const loversUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Amor, unión y decisiones importantes según los propios valores." },
  { term: "Amor", text: "Enamoramiento, atracción mutua, compromiso, relaciones correspondidas y posibilidad de matrimonio." },
  { term: "Trabajo", text: "Asociaciones, acuerdos, colaboración y decisiones profesionales importantes." },
  { term: "Dinero", text: "Acuerdos económicos, sociedades y decisiones compartidas." },
  { term: "Salud", text: "Equilibrio físico y emocional, hábitos saludables y buenas decisiones." },
  { term: "Espiritualidad", text: "Unión de opuestos, armonía interior y decisiones alineadas con los valores personales." },
];

const loversReversedGeneral: Entry[] = [
  { term: "Rupturas y conflictos", text: "Desamor, separación, desacuerdos e incompatibilidad." },
  { term: "Relaciones tóxicas", text: "Infidelidad, tentaciones, triángulos amorosos, dependencia emocional y falta de compromiso." },
  { term: "Indecisión", text: "Dificultad para elegir, decisiones equivocadas e irresponsabilidad." },
  { term: "Desarmonía", text: "Contradicciones y conflictos interiores." },
];

const loversReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Indecisión, incompatibilidad, conflictos y decisiones equivocadas." },
  { term: "Amor", text: "Separaciones, infidelidad, celos, desacuerdos y falta de compromiso." },
  { term: "Trabajo", text: "Conflictos entre compañeros, sociedades problemáticas y malas decisiones." },
  { term: "Dinero", text: "Desacuerdos económicos, malas asociaciones y dificultades para decidir." },
  { term: "Salud", text: "Desequilibrio emocional, estrés y dificultad para mantener hábitos saludables." },
  { term: "Espiritualidad", text: "Conflictos internos, contradicciones y desconexión de los propios valores." },
];

const chariotUprightGeneral: Entry[] = [
  { term: "Éxito y victoria", text: "Triunfo, reconocimiento y conquista de objetivos." },
  { term: "Fuerza y determinación", text: "Voluntad, carácter, ambición, iniciativa y perseverancia." },
  { term: "Avance y movimiento", text: "Progreso, superación de obstáculos, viajes, desplazamientos y cambios de lugar." },
  { term: "Dominio personal", text: "Control emocional, autodisciplina, independencia, confianza y seguridad." },
];

const chariotUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Avance, victoria y superación de obstáculos mediante voluntad y esfuerzo." },
  { term: "Amor", text: "Conquista, iniciativa, avance de la relación y superación de dificultades; viajes románticos o relaciones a distancia." },
  { term: "Trabajo", text: "Ascensos, éxito profesional, nuevos proyectos y reconocimiento." },
  { term: "Dinero", text: "Progreso económico, aumento de ingresos y éxito en negocios." },
  { term: "Salud", text: "Recuperación, vitalidad, energía y determinación." },
  { term: "Espiritualidad", text: "Dominio personal, control de impulsos y avance espiritual." },
];

const chariotReversedGeneral: Entry[] = [
  { term: "Bloqueos y derrotas", text: "Obstáculos, retrasos, fracasos, proyectos frustrados, estancamiento y viajes cancelados." },
  { term: "Pérdida de control", text: "Falta de dirección, conflictos de voluntad y dificultad para decidir." },
  { term: "Impulsividad", text: "Agresividad, falta de disciplina, exceso de ambición y competitividad." },
];

const chariotReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Falta de control, obstáculos, retrasos y dificultades para alcanzar objetivos." },
  { term: "Amor", text: "Conflictos, falta de dirección, distanciamiento y luchas de poder." },
  { term: "Trabajo", text: "Estancamiento profesional, proyectos retrasados y falta de organización." },
  { term: "Dinero", text: "Retrasos económicos, gastos imprevistos y falta de control financiero." },
  { term: "Salud", text: "Agotamiento, falta de disciplina y dificultad para mantener la constancia." },
  { term: "Espiritualidad", text: "Falta de dirección, descontrol emocional y dificultad para avanzar interiormente." },
];

const strengthUprightGeneral: Entry[] = [
  { term: "Coraje y fortaleza", text: "Valentía, poder interior, confianza y capacidad para superar miedos y dificultades." },
  { term: "Autocontrol", text: "Paciencia, dominio de los impulsos y control de las emociones mediante la calma." },
  { term: "Determinación", text: "Seguridad personal, perseverancia, resistencia y fuerza de voluntad." },
  { term: "Bondad y empatía", text: "Compasión, generosidad, tolerancia, comprensión y perdón." },
  { term: "Vitalidad", text: "Pasión, energía y magnetismo." },
];

const strengthUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Fuerza de voluntad, paciencia y autocontrol para superar obstáculos sin imponerse." },
  { term: "Amor", text: "Pasión, atracción, fidelidad y confianza; superar conflictos con paciencia y comprensión." },
  { term: "Trabajo", text: "Perseverancia, liderazgo, confianza y capacidad para afrontar desafíos." },
  { term: "Dinero", text: "Disciplina financiera, control de gastos y superación de dificultades económicas." },
  { term: "Salud", text: "Vitalidad, resistencia, recuperación y fortaleza física y emocional." },
  { term: "Espiritualidad", text: "Dominio de los instintos, equilibrio interior, compasión y fortaleza espiritual." },
];

const strengthReversedGeneral: Entry[] = [
  { term: "Inseguridad y miedo", text: "Debilidad, falta de confianza, cobardía, vulnerabilidad, baja autoestima e inferioridad." },
  { term: "Descontrol", text: "Falta de autocontrol, impaciencia, irritabilidad, agresividad y comportamiento dominante." },
  { term: "Agotamiento", text: "Desánimo, falta de voluntad, frustración, represión emocional e incapacidad para afrontar dificultades." },
];

const strengthReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Inseguridad, falta de control emocional y dificultad para superar problemas." },
  { term: "Amor", text: "Celos, inseguridad, discusiones, dependencia y descontrol emocional." },
  { term: "Trabajo", text: "Falta de confianza, agotamiento, conflictos y dificultad para asumir responsabilidades." },
  { term: "Dinero", text: "Falta de disciplina, gastos impulsivos y poco control financiero." },
  { term: "Salud", text: "Agotamiento físico y emocional, falta de vitalidad y descuido personal." },
  { term: "Espiritualidad", text: "Debilidad interior, miedo, inseguridad y falta de control de los impulsos." },
];

const hermitUprightGeneral: Entry[] = [
  { term: "Soledad y retiro", text: "Aislamiento voluntario, necesidad de espacio personal, lentitud, espera y alejamiento de distracciones." },
  { term: "Introspección", text: "Reflexión, autoconocimiento, búsqueda de respuestas, verdades interiores y propósito." },
  { term: "Sabiduría", text: "Experiencia, madurez, estudio, investigación y conocimiento profundo." },
  { term: "Actitud", text: "Prudencia, paciencia, discreción, independencia y autosuficiencia." },
];

const hermitUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Retiro, reflexión y búsqueda interior; tomar distancia para comprender y encontrar respuestas." },
  { term: "Amor", text: "Soledad voluntaria, necesidad de espacio, relaciones tranquilas y sentimientos reservados." },
  { term: "Trabajo", text: "Estudios, investigación, trabajo individual, planificación y adquisición de experiencia." },
  { term: "Dinero", text: "Ahorro, prudencia, administración cuidadosa y planificación a largo plazo." },
  { term: "Salud", text: "Descanso, tranquilidad y atención al bienestar físico y emocional." },
  { term: "Espiritualidad", text: "Meditación, introspección, sabiduría, búsqueda de la verdad y crecimiento espiritual." },
];

const hermitReversedGeneral: Entry[] = [
  { term: "Aislamiento y evasión", text: "Soledad no deseada, aislamiento excesivo, rechazo de los demás y evasión de problemas." },
  { term: "Cierre emocional", text: "Rechazo de consejos y ayuda, miedo a la intimidad, dificultad para relacionarse y desconexión personal." },
  { term: "Desorientación", text: "Pérdida de propósito, falta de orientación, impaciencia y resistencia a reflexionar." },
  { term: "Estado emocional", text: "Pesimismo, tristeza y pensamientos negativos." },
];

const hermitReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Aislamiento excesivo, soledad, confusión y dificultad para aceptar ayuda." },
  { term: "Amor", text: "Distanciamiento, soledad, frialdad emocional y dificultad para abrirse." },
  { term: "Trabajo", text: "Estancamiento, aislamiento profesional, falta de orientación y resistencia al trabajo en equipo." },
  { term: "Dinero", text: "Preocupación económica, falta de planificación y decisiones tomadas desde el miedo." },
  { term: "Salud", text: "Aislamiento, agotamiento emocional y descuido del bienestar." },
  { term: "Espiritualidad", text: "Desconexión interior, pérdida de propósito, pesimismo y falta de orientación." },
];

const wheelUprightGeneral: Entry[] = [
  { term: "Cambios y evolución", text: "Giros inesperados, acontecimientos importantes, movimiento, progreso y mejoras." },
  { term: "Destino y oportunidades", text: "Suerte, oportunidades inesperadas, sincronicidades y acontecimientos imprevistos." },
  { term: "Ciclos y karma", text: "Ciclos de vida, finales, nuevos comienzos, karma y causa y consecuencia." },
  { term: "Adaptación", text: "Capacidad para aceptar y adaptarse a nuevas circunstancias." },
];

const wheelUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Cambios importantes, oportunidades, giros del destino y comienzo de un nuevo ciclo." },
  { term: "Amor", text: "Encuentros inesperados, nuevos romances, cambios favorables y evolución de la relación." },
  { term: "Trabajo", text: "Nuevas oportunidades, ascensos y cambios laborales favorables." },
  { term: "Dinero", text: "Buena suerte económica, ganancias inesperadas y oportunidades de inversión." },
  { term: "Salud", text: "Cambios favorables, recuperación y evolución positiva." },
  { term: "Espiritualidad", text: "Ciclos kármicos, sincronicidades, cambios de conciencia y aceptación de los ciclos vitales." },
];

const wheelReversedGeneral: Entry[] = [
  { term: "Mala suerte y obstáculos", text: "Acontecimientos desfavorables, cambios inesperados, dificultades, retrasos y oportunidades perdidas." },
  { term: "Estancamiento", text: "Resistencia al cambio, repetición de errores y ciclos negativos." },
  { term: "Incertidumbre", text: "Inestabilidad, falta de control y consecuencias de decisiones pasadas." },
];

const wheelReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Cambios desfavorables, obstáculos, retrasos y repetición de situaciones." },
  { term: "Amor", text: "Inestabilidad sentimental, relaciones cíclicas, rupturas y reconciliaciones repetidas." },
  { term: "Trabajo", text: "Retrasos, cambios inesperados, oportunidades perdidas e inestabilidad laboral." },
  { term: "Dinero", text: "Pérdidas económicas, gastos imprevistos y fluctuaciones financieras." },
  { term: "Salud", text: "Altibajos, recaídas y dificultades para mantener una evolución estable." },
  { term: "Espiritualidad", text: "Resistencia al cambio, repetición de patrones negativos y dificultad para aceptar los ciclos de la vida." },
];

const justiceUprightGeneral: Entry[] = [
  { term: "Equilibrio y rectitud", text: "Justicia, objetividad, orden, disciplina y honestidad." },
  { term: "Verdad y decisiones", text: "Claridad, decisiones importantes y juicios imparciales." },
  { term: "Karma y responsabilidad", text: "Consecuencias de los actos, causa y efecto, retribución y reconocimiento de méritos." },
  { term: "Leyes y acuerdos", text: "Contratos, documentos, asuntos legales y resolución justa de conflictos." },
];

const justiceUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Equilibrio, verdad, decisiones justas y consecuencias de las propias acciones." },
  { term: "Amor", text: "Relaciones equilibradas, honestidad, compromiso y formalización de la relación." },
  { term: "Trabajo", text: "Contratos, acuerdos, asuntos legales y reconocimiento profesional." },
  { term: "Dinero", text: "Equilibrio económico, administración responsable, pagos pendientes y asuntos financieros o legales." },
  { term: "Salud", text: "Equilibrio físico y emocional, moderación y responsabilidad en los cuidados." },
  { term: "Espiritualidad", text: "Karma, equilibrio espiritual, verdad interior y responsabilidad por los propios actos." },
];

const justiceReversedGeneral: Entry[] = [
  { term: "Injusticia y desequilibrio", text: "Desigualdad, falta de objetividad, acuerdos incumplidos y situaciones injustas." },
  { term: "Engaño y corrupción", text: "Mentiras, deshonestidad, falta de transparencia, abuso de poder y parcialidad." },
  { term: "Decisiones y leyes", text: "Decisiones equivocadas, problemas legales y conflictos judiciales." },
  { term: "Irresponsabilidad", text: "Evasión de responsabilidades, falta de autocrítica y consecuencias negativas de acciones pasadas." },
];

const justiceReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Injusticias, desequilibrios, deshonestidad y consecuencias de malas decisiones." },
  { term: "Amor", text: "Desigualdad, deshonestidad, falta de compromiso y conflictos sentimentales." },
  { term: "Trabajo", text: "Injusticias laborales, contratos desfavorables, conflictos legales y falta de reconocimiento." },
  { term: "Dinero", text: "Deudas, problemas legales, pagos pendientes y desequilibrios financieros." },
  { term: "Salud", text: "Desequilibrio de hábitos, descuido personal e irresponsabilidad con el bienestar." },
  { term: "Espiritualidad", text: "Falta de equilibrio interior, negación de errores y dificultad para asumir consecuencias." },
];

const hangedUprightGeneral: Entry[] = [
  { term: "Pausa y espera", text: "Suspensión de acontecimientos, estancamiento temporal y retrasos." },
  { term: "Sacrificio y aceptación", text: "Renuncia, entrega, paciencia, rendición y aceptación de circunstancias que no se pueden controlar." },
  { term: "Perspectiva", text: "Cambio de visión, introspección y reflexión profunda." },
  { term: "Desapego y compasión", text: "Altruismo, sacrificio por los demás, desapego material y transformación interior." },
];

const hangedUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Pausa necesaria, sacrificios y cambio de perspectiva; situación detenida que requiere paciencia." },
  { term: "Amor", text: "Espera, sacrificios sentimentales, sentimientos no correspondidos y necesidad de cambiar de perspectiva." },
  { term: "Trabajo", text: "Proyectos detenidos, retrasos y necesidad de replantear objetivos." },
  { term: "Dinero", text: "Estancamiento económico, sacrificios financieros y espera de ingresos." },
  { term: "Salud", text: "Descanso, recuperación lenta y cambios de hábitos." },
  { term: "Espiritualidad", text: "Renuncia al ego, desapego, meditación, sacrificio y transformación de conciencia." },
];

const hangedReversedGeneral: Entry[] = [
  { term: "Bloqueo e inmovilidad", text: "Estancamiento prolongado, falta de avances, indecisión y oportunidades perdidas." },
  { term: "Resistencia", text: "Rechazo al cambio, dificultad para aceptar la realidad, impaciencia y frustración." },
  { term: "Egoísmo y sacrificio inútil", text: "Falta de disposición para ceder, esfuerzos sin recompensa, victimismo y sensación de estar atrapado." },
];

const hangedReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Bloqueo, resistencia, sacrificios innecesarios y dificultad para avanzar." },
  { term: "Amor", text: "Relaciones estancadas, sacrificios unilaterales, dependencia y negativa a cambiar." },
  { term: "Trabajo", text: "Proyectos paralizados, retrasos, frustración y falta de perspectivas." },
  { term: "Dinero", text: "Bloqueos financieros, pérdidas por sacrificios innecesarios y dificultades económicas." },
  { term: "Salud", text: "Resistencia al descanso, descuido personal y dificultad para cambiar hábitos perjudiciales." },
  { term: "Espiritualidad", text: "Estancamiento interior, resistencia al crecimiento y apego a viejas creencias." },
];

const deathUprightGeneral: Entry[] = [
  { term: "Finales y cierres", text: "Terminación de etapas, rupturas, separaciones definitivas y cierre de ciclos." },
  { term: "Transformación y renacimiento", text: "Cambios profundos, renovación, reconstrucción personal y muerte simbólica de antiguas formas de pensar y vivir." },
  { term: "Nuevos comienzos", text: "Cambios inevitables, transición hacia otra etapa y oportunidades de empezar de nuevo." },
  { term: "Desapego y liberación", text: "Soltar personas, situaciones, hábitos y todo aquello que ya no sirve." },
];

const deathUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Fin de una etapa, transformación profunda y liberación para avanzar." },
  { term: "Amor", text: "Rupturas, separaciones o transformación profunda de la relación y comienzo de una nueva etapa." },
  { term: "Trabajo", text: "Fin de un empleo o proyecto, cambios profesionales y nuevas oportunidades." },
  { term: "Dinero", text: "Cambios financieros, cierre de etapas económicas, eliminación de deudas y reorganización de recursos." },
  { term: "Salud", text: "Transformación de hábitos y estilo de vida; final de una etapa de recuperación o tratamiento." },
  { term: "Espiritualidad", text: "Renacimiento espiritual, transformación interior, desapego y liberación de viejas creencias." },
];

const deathReversedGeneral: Entry[] = [
  { term: "Resistencia y miedo", text: "Temor al cambio, a lo desconocido y a comenzar de nuevo; permanencia en situaciones perjudiciales." },
  { term: "Apego y negación", text: "Dificultad para aceptar finales, cerrar etapas, soltar el pasado y asumir pérdidas." },
  { term: "Estancamiento", text: "Cambios retrasados, transformaciones incompletas y situaciones que se prolongan." },
];

const deathReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Resistencia al cambio, apego al pasado y dificultad para cerrar ciclos." },
  { term: "Amor", text: "Relaciones que no terminan, miedo a la separación y dependencia emocional." },
  { term: "Trabajo", text: "Resistencia a cambios laborales, proyectos estancados y dificultad para abandonar una situación." },
  { term: "Dinero", text: "Estancamiento económico, malos hábitos financieros y deudas pendientes." },
  { term: "Salud", text: "Resistencia a modificar hábitos y prolongación de situaciones que requieren atención." },
  { term: "Espiritualidad", text: "Bloqueo espiritual, apego a antiguas creencias y resistencia a la transformación interior." },
];

const temperanceUprightGeneral: Entry[] = [
  { term: "Equilibrio y calma", text: "Armonía, moderación, paciencia, serenidad, tranquilidad y autocontrol emocional." },
  { term: "Cooperación y acuerdos", text: "Tolerancia, comprensión, comunicación, reconciliación y resolución pacífica de conflictos." },
  { term: "Sanación", text: "Recuperación, renovación, protección y guía espiritual." },
  { term: "Adaptación e integración", text: "Capacidad para encontrar puntos medios, unir opuestos y combinar elementos." },
];

const temperanceUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Equilibrio, paciencia, moderación y recuperación; encontrar el punto medio y respetar los tiempos." },
  { term: "Amor", text: "Relaciones armoniosas, comprensión, paciencia, reconciliaciones y sentimientos equilibrados." },
  { term: "Trabajo", text: "Cooperación, trabajo en equipo, acuerdos y progreso gradual." },
  { term: "Dinero", text: "Administración equilibrada, ahorro, moderación y recuperación económica progresiva." },
  { term: "Salud", text: "Sanación, recuperación, equilibrio físico y emocional y buenos hábitos." },
  { term: "Espiritualidad", text: "Armonía interior, meditación, equilibrio energético y unión entre cuerpo, mente y espíritu." },
];

const temperanceReversedGeneral: Entry[] = [
  { term: "Excesos y descontrol", text: "Desequilibrio, falta de moderación, descontrol emocional, adicciones y hábitos perjudiciales." },
  { term: "Impaciencia y bloqueo", text: "Ansiedad, retrasos en la recuperación y falta de progreso." },
  { term: "Conflictos y desorden", text: "Desacuerdos, falta de armonía, dificultad para encontrar puntos medios y desorganización." },
  { term: "Desconexión", text: "Falta de equilibrio entre cuerpo, mente y emociones." },
];

const temperanceReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Desequilibrio, impaciencia, excesos y dificultad para encontrar armonía." },
  { term: "Amor", text: "Discusiones, incompatibilidad, falta de comprensión y relaciones desequilibradas." },
  { term: "Trabajo", text: "Conflictos, falta de cooperación, desorganización y dificultades para llegar a acuerdos." },
  { term: "Dinero", text: "Gastos excesivos, mala administración y desequilibrio financiero." },
  { term: "Salud", text: "Excesos, malos hábitos, agotamiento y dificultad para mantener el equilibrio." },
  { term: "Espiritualidad", text: "Desconexión interior, desequilibrio energético y falta de armonía espiritual." },
];

const devilUprightGeneral: Entry[] = [
  { term: "Deseo y pasión", text: "Tentaciones, placeres materiales, sexualidad, magnetismo y deseos ocultos." },
  { term: "Ataduras y vicios", text: "Dependencias, adicciones, obsesiones, miedos, limitaciones y falta de libertad." },
  { term: "Poder y manipulación", text: "Engaños, relaciones tóxicas, control, dominación, celos y posesividad." },
  { term: "Materialismo", text: "Ambición, codicia y apego a lo material." },
];

const devilUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Ataduras, tentaciones, obsesiones y deseos que dominan; advertencia sobre dependencias y manipulaciones." },
  { term: "Amor", text: "Pasión, deseo sexual, atracción intensa, celos, posesividad y relaciones dependientes o tóxicas." },
  { term: "Trabajo", text: "Ambición, poder, competencia, manipulación y ambientes tóxicos; éxito material y reconocimiento." },
  { term: "Dinero", text: "Ambición económica, materialismo, ganancias, deudas y dependencia financiera." },
  { term: "Salud", text: "Adicciones, excesos, hábitos perjudiciales y dependencias físicas o emocionales." },
  { term: "Espiritualidad", text: "Apegos materiales, tentaciones, sombras personales y necesidad de liberarse de patrones negativos." },
];

const devilReversedGeneral: Entry[] = [
  { term: "Liberación", text: "Ruptura de ataduras, dependencias y relaciones tóxicas; recuperación del poder personal y la independencia." },
  { term: "Superación", text: "Abandono de adicciones, malos hábitos, obsesiones y comportamientos compulsivos." },
  { term: "Conciencia y verdad", text: "Reconocimiento de errores y sombras personales, revelación de engaños y manipulaciones." },
  { term: "Resistencia", text: "Miedo a liberarse y permanencia en situaciones perjudiciales." },
];

const devilReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Liberación de dependencias y reconocimiento de aquello que impide avanzar; dificultad para abandonar malos hábitos." },
  { term: "Amor", text: "Liberación de relaciones tóxicas, superación de celos y dependencia emocional; dificultad para romper vínculos perjudiciales." },
  { term: "Trabajo", text: "Abandono de ambientes tóxicos, liberación de manipulaciones y recuperación de independencia profesional." },
  { term: "Dinero", text: "Superación de deudas, control de gastos compulsivos y liberación de dependencias económicas." },
  { term: "Salud", text: "Superación de adicciones, abandono de hábitos perjudiciales y recuperación del autocontrol." },
  { term: "Espiritualidad", text: "Liberación de apegos, reconocimiento de las propias sombras y recuperación de la libertad interior." },
];

const towerUprightGeneral: Entry[] = [
  { term: "Rupturas y crisis", text: "Cambios bruscos, acontecimientos inesperados, conflictos, pérdidas y destrucción de estructuras." },
  { term: "Derrumbe y revelación", text: "Caída de falsas creencias, ilusiones y seguridades; verdades que salen a la luz y toma de conciencia." },
  { term: "Liberación y transformación", text: "Ruptura de situaciones opresivas, renovación y reconstrucción sobre bases más sólidas." },
];

const towerUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Crisis, cambios inesperados y revelaciones que obligan a enfrentar la realidad." },
  { term: "Amor", text: "Rupturas, discusiones, separaciones y descubrimiento de verdades ocultas." },
  { term: "Trabajo", text: "Despidos, cierres, cambios inesperados y derrumbe de proyectos." },
  { term: "Dinero", text: "Pérdidas repentinas, gastos imprevistos y dificultades económicas." },
  { term: "Salud", text: "Crisis que requieren atención y necesidad de cambiar hábitos perjudiciales." },
  { term: "Espiritualidad", text: "Despertar repentino y ruptura de antiguas creencias." },
];

const towerReversedGeneral: Entry[] = [
  { term: "Resistencia y miedo", text: "Temor al cambio, a perder la estabilidad y a enfrentar verdades incómodas; evitar rupturas inevitables." },
  { term: "Crisis reprimidas", text: "Conflictos internos, problemas prolongados y cambios retrasados." },
  { term: "Reconstrucción gradual", text: "Recuperación lenta después de una pérdida y liberación progresiva de situaciones perjudiciales." },
];

const towerReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Crisis evitadas, cambios aplazados y resistencia a transformar una situación." },
  { term: "Amor", text: "Rupturas aplazadas, conflictos reprimidos y posibles reconciliaciones." },
  { term: "Trabajo", text: "Inestabilidad, miedo a perder el empleo y problemas sin resolver." },
  { term: "Dinero", text: "Dificultades prolongadas y recuperación económica lenta." },
  { term: "Salud", text: "Problemas desatendidos y resistencia a cambiar hábitos." },
  { term: "Espiritualidad", text: "Apego a antiguas creencias y miedo a la transformación personal." },
];

const starUprightGeneral: Entry[] = [
  { term: "Esperanza y confianza", text: "Fe, optimismo, ilusiones, sueños y confianza en el futuro." },
  { term: "Sanación y armonía", text: "Renovación, recuperación, paz, tranquilidad y bienestar." },
  { term: "Inspiración y talento", text: "Creatividad, imaginación, reconocimiento y éxito gradual." },
  { term: "Esencia y protección", text: "Generosidad, bondad, autenticidad, pureza, guía y bendiciones." },
];

const starUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Esperanza, renovación y recuperación después de una etapa difícil." },
  { term: "Amor", text: "Amor sincero, armonía, confianza, romanticismo y esperanza de encontrar o recuperar pareja." },
  { term: "Trabajo", text: "Inspiración, reconocimiento, creatividad y oportunidades favorables." },
  { term: "Dinero", text: "Mejoras económicas graduales y oportunidades de recuperación." },
  { term: "Salud", text: "Sanación, recuperación y renovación de energía." },
  { term: "Espiritualidad", text: "Fe, intuición, inspiración y conexión con el universo." },
];

const starReversedGeneral: Entry[] = [
  { term: "Desánimo y pesimismo", text: "Desesperanza, desilusión, falta de fe, motivación y confianza en el futuro." },
  { term: "Inseguridad y bloqueos", text: "Baja autoestima, falta de inspiración y dificultades para reconocer las propias capacidades." },
  { term: "Frustración y desconexión", text: "Sueños incumplidos, pérdida de propósito y desconexión espiritual." },
];

const starReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Pesimismo, desilusión y dificultad para recuperar la esperanza." },
  { term: "Amor", text: "Desconfianza, decepciones y dificultades para abrirse emocionalmente." },
  { term: "Trabajo", text: "Falta de inspiración, estancamiento y ausencia de reconocimiento." },
  { term: "Dinero", text: "Preocupaciones económicas y expectativas frustradas." },
  { term: "Salud", text: "Desánimo y agotamiento emocional." },
  { term: "Espiritualidad", text: "Pérdida de fe, desconexión interior y falta de propósito." },
];

const moonUprightGeneral: Entry[] = [
  { term: "Engaños e ilusiones", text: "Fantasías, apariencias engañosas, mentiras y falsas expectativas." },
  { term: "Confusión y misterio", text: "Incertidumbre, secretos, situaciones ocultas, ambigüedad y falta de claridad." },
  { term: "Miedos y emociones", text: "Inseguridad, ansiedad, dudas, sospechas, desconfianza e inestabilidad emocional." },
  { term: "Intuición y subconsciente", text: "Sensibilidad, sueños, imaginación, creatividad y percepción extrasensorial." },
];

const moonUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Confusión, incertidumbre y miedos; necesidad de distinguir la intuición de las ilusiones." },
  { term: "Amor", text: "Celos, inseguridades, secretos y sentimientos confusos." },
  { term: "Trabajo", text: "Incertidumbre, engaños, información incompleta y situaciones poco transparentes." },
  { term: "Dinero", text: "Confusión financiera, gastos ocultos y posibles engaños." },
  { term: "Salud", text: "Ansiedad, alteraciones del sueño y sensibilidad emocional." },
  { term: "Espiritualidad", text: "Sueños, intuición y exploración del subconsciente." },
];

const moonReversedGeneral: Entry[] = [
  { term: "Revelación y verdad", text: "Descubrimiento de secretos, engaños y mentiras." },
  { term: "Claridad y superación", text: "Fin de la confusión, liberación de ilusiones, superación de miedos y recuperación emocional." },
  { term: "Bloqueos persistentes", text: "Intuición bloqueada, interpretaciones equivocadas, ansiedad y temores sin resolver." },
];

const moonReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Verdades reveladas, superación de confusiones y descubrimiento de engaños." },
  { term: "Amor", text: "Secretos e infidelidades descubiertos, aclaración de sentimientos y superación de inseguridades." },
  { term: "Trabajo", text: "Información revelada y resolución de situaciones confusas." },
  { term: "Dinero", text: "Descubrimiento de gastos ocultos y aclaración de problemas financieros." },
  { term: "Salud", text: "Reconocimiento de problemas desatendidos y superación de miedos." },
  { term: "Espiritualidad", text: "Revelaciones interiores y recuperación de la conexión intuitiva." },
];

const sunUprightGeneral: Entry[] = [
  { term: "Alegría y vitalidad", text: "Felicidad, satisfacción, energía, entusiasmo, inocencia y alegría de vivir." },
  { term: "Éxito y realización", text: "Triunfos, logros, reconocimiento, celebraciones, creatividad y cumplimiento de objetivos." },
  { term: "Claridad y confianza", text: "Verdad, revelaciones positivas, optimismo y seguridad." },
  { term: "Abundancia y afecto", text: "Prosperidad, bienestar, amor, armonía, buena fortuna y protección." },
];

const sunUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Éxito, felicidad, claridad y resultados favorables." },
  { term: "Amor", text: "Amor correspondido, pasión, estabilidad, matrimonio, familia y posibilidad de embarazo." },
  { term: "Trabajo", text: "Éxito profesional, ascensos, reconocimiento y nuevos proyectos." },
  { term: "Dinero", text: "Prosperidad, ganancias y estabilidad económica." },
  { term: "Salud", text: "Vitalidad, energía, recuperación y bienestar." },
  { term: "Espiritualidad", text: "Iluminación, claridad interior y conexión con la propia esencia." },
];

const sunReversedGeneral: Entry[] = [
  { term: "Retrasos y frustración", text: "Éxito demorado, felicidad incompleta y expectativas incumplidas." },
  { term: "Desánimo y falta de energía", text: "Pesimismo, inseguridad, falta de entusiasmo y dificultad para disfrutar." },
  { term: "Ego y apariencia", text: "Orgullo, egoísmo, vanidad y necesidad de reconocimiento externo." },
  { term: "Falta de claridad", text: "Confusión temporal y dificultad para ver las cosas con claridad." },
];

const sunReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Retrasos, desánimo y dificultades para disfrutar los resultados esperados." },
  { term: "Amor", text: "Distanciamiento, discusiones y falta de entusiasmo." },
  { term: "Trabajo", text: "Ascensos retrasados, falta de reconocimiento y proyectos frustrados." },
  { term: "Dinero", text: "Ganancias menores a las esperadas y gastos excesivos." },
  { term: "Salud", text: "Falta de energía, agotamiento y desánimo." },
  { term: "Espiritualidad", text: "Desconexión interior, ego y pérdida temporal de confianza." },
];

const judgementUprightGeneral: Entry[] = [
  { term: "Despertar y renovación", text: "Renacimiento, transformación personal, despertar de conciencia y descubrimiento del propósito." },
  { term: "Evaluación y verdad", text: "Reflexión, toma de conciencia, revelaciones, reconocimiento de errores y aceptación de responsabilidades." },
  { term: "Perdón y segundas oportunidades", text: "Reconciliación, liberación del pasado, nuevas etapas y reencuentros." },
  { term: "Decisiones y noticias", text: "Resolución de situaciones, decisiones importantes y acontecimientos decisivos." },
];

const judgementUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Renovación, evaluación del pasado y decisiones que permiten comenzar una nueva etapa." },
  { term: "Amor", text: "Reconciliaciones, reencuentros, segundas oportunidades y decisiones definitivas." },
  { term: "Trabajo", text: "Reconocimiento, ascensos, evaluaciones y nuevas oportunidades." },
  { term: "Dinero", text: "Resolución de asuntos pendientes y decisiones financieras importantes." },
  { term: "Salud", text: "Recuperación, renovación de hábitos y toma de conciencia sobre el bienestar." },
  { term: "Espiritualidad", text: "Despertar espiritual, perdón y descubrimiento del propósito de vida." },
];

const judgementReversedGeneral: Entry[] = [
  { term: "Negación y culpa", text: "Falta de autocrítica, arrepentimiento, dificultad para perdonarse y críticas excesivas." },
  { term: "Miedo y resistencia", text: "Temor a decidir, cambiar y enfrentar las consecuencias de los propios actos." },
  { term: "Pasado y estancamiento", text: "Dificultad para cerrar etapas, oportunidades desaprovechadas y falta de claridad sobre el propósito personal." },
];

const judgementReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Negación, falta de reflexión y dificultad para superar el pasado." },
  { term: "Amor", text: "Reconciliaciones fallidas, resentimientos y falta de perdón." },
  { term: "Trabajo", text: "Falta de reconocimiento, oportunidades perdidas y miedo a cambiar." },
  { term: "Dinero", text: "Asuntos pendientes, errores financieros y dificultades para resolver deudas." },
  { term: "Salud", text: "Descuido de hábitos y resistencia a realizar cambios." },
  { term: "Espiritualidad", text: "Desconexión del propósito, culpa y resistencia al despertar espiritual." },
];

const worldUprightGeneral: Entry[] = [
  { term: "Éxito y culminación", text: "Finalización de etapas, logros, objetivos cumplidos, realización personal, reconocimiento y recompensas." },
  { term: "Plenitud y armonía", text: "Satisfacción, felicidad, equilibrio, integración, madurez y crecimiento." },
  { term: "Ciclos y expansión", text: "Cierre de ciclos, nuevos comienzos, viajes, extranjero, libertad y superación de límites." },
];

const worldUprightRealms: Entry[] = [
  { term: "Interpretación", text: "Culminación exitosa, cumplimiento de objetivos y apertura a nuevas oportunidades." },
  { term: "Amor", text: "Relaciones plenas, compromiso, estabilidad, matrimonio y proyectos compartidos." },
  { term: "Trabajo", text: "Éxito profesional, reconocimiento, culminación de proyectos y oportunidades en el extranjero." },
  { term: "Dinero", text: "Prosperidad, estabilidad y cumplimiento de objetivos financieros." },
  { term: "Salud", text: "Bienestar, equilibrio y recuperación física y emocional." },
  { term: "Espiritualidad", text: "Realización, evolución e integración interior." },
];

const worldReversedGeneral: Entry[] = [
  { term: "Inconclusión y retrasos", text: "Proyectos sin terminar, objetivos pendientes, dificultades para cerrar ciclos y falta de reconocimiento." },
  { term: "Bloqueo y miedo", text: "Estancamiento, resistencia a avanzar y temor a terminar una etapa para comenzar otra." },
  { term: "Vacío e insatisfacción", text: "Falta de plenitud, sensación de estar incompleto y ausencia de realización personal." },
];

const worldReversedRealms: Entry[] = [
  { term: "Interpretación", text: "Ciclos inconclusos, retrasos y dificultades para alcanzar la realización." },
  { term: "Amor", text: "Relaciones sin resolver, falta de compromiso y dificultad para lograr estabilidad." },
  { term: "Trabajo", text: "Proyectos inconclusos, retrasos y falta de reconocimiento." },
  { term: "Dinero", text: "Ganancias retrasadas y objetivos financieros sin alcanzar." },
  { term: "Salud", text: "Recuperación incompleta y falta de equilibrio." },
  { term: "Espiritualidad", text: "Estancamiento, falta de plenitud y dificultad para cerrar ciclos interiores." },
];

const arcanos = [
  { number: "0", name: "EL LOCO", status: "complete" as const },
  { number: "I", name: "EL MAGO", status: "complete" as const },
  { number: "II", name: "LA SACERDOTISA", status: "complete" as const },
  { number: "III", name: "LA EMPERATRIZ", status: "complete" as const },
  { number: "IV", name: "EL EMPERADOR", status: "complete" as const },
  { number: "V", name: "EL PAPA — EL HIEROFANTE", status: "complete" as const },
  { number: "VI", name: "LOS ENAMORADOS", status: "complete" as const },
  { number: "VII", name: "EL CARRO", status: "complete" as const },
  { number: "VIII", name: "LA FUERZA", status: "complete" as const },
  { number: "IX", name: "EL ERMITAÑO", status: "complete" as const },
  { number: "X", name: "LA RUEDA DE LA FORTUNA", status: "complete" as const },
  { number: "XI", name: "LA JUSTICIA", status: "complete" as const },
  { number: "XII", name: "EL COLGADO", status: "complete" as const },
  { number: "XIII", name: "LA MUERTE", status: "complete" as const },
  { number: "XIV", name: "LA TEMPLANZA", status: "complete" as const },
  { number: "XV", name: "EL DIABLO", status: "complete" as const },
  { number: "XVI", name: "LA TORRE", status: "complete" as const },
  { number: "XVII", name: "LA ESTRELLA", status: "complete" as const },
  { number: "XVIII", name: "LA LUNA", status: "complete" as const },
  { number: "XIX", name: "EL SOL", status: "complete" as const },
  { number: "XX", name: "EL JUICIO", status: "complete" as const },
  { number: "XXI", name: "EL MUNDO", status: "complete" as const },
];

function MeaningList({ items }: { items: Entry[] }) {
  return (
    <ul className="m-0 list-none space-y-2.5 p-0">
      {items.map((item) => (
        <li key={item.term} className="flex gap-2.5 text-[17px] leading-7 sm:text-lg sm:leading-8">
          <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--gold)]" />
          <span><strong className="font-bold text-[var(--ink)]">{item.term}:</strong> {item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display m-0 mt-7 text-[26px] font-semibold leading-none tracking-[0.035em] text-[var(--ink)] first:mt-0 sm:text-[28px]">
      {children}
    </h3>
  );
}

function TarotImage({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="alert" className="flex aspect-[2/3.5] w-full flex-col items-center justify-center gap-2 bg-[#fffaf0] px-6 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--gold-deep)]">Imagen no disponible</span>
        <span className="text-[14px] leading-5 text-[var(--muted)]">No se pudo cargar la imagen de esta carta.</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} style={style} onError={() => setFailed(true)} />;
}

function CardFigure({ src, alt, caption, rotated = false }: { src: string; alt: string; caption: string; rotated?: boolean }) {
  return (
    <figure className="m-0 mx-auto w-full max-w-[360px] lg:mx-0">
      <div className="overflow-hidden rounded-[3px] border-2 border-[var(--line)] bg-[#bfa14f] shadow-[0_18px_38px_rgba(52,38,12,0.24)]">
        <TarotImage
          src={src}
          alt={alt}
          className="block aspect-[2/3.5] w-full bg-[#bfa14f] object-contain"
          style={rotated ? { transform: "rotate(180deg)" } : undefined}
        />
      </div>
      <figcaption className="font-display m-0 mt-3 text-center text-lg font-bold tracking-[0.18em] text-[var(--gold-deep)]">{caption}</figcaption>
    </figure>
  );
}

function DetailRow({
  image,
  alt,
  caption,
  heading,
  badge,
  general,
  realms,
  inverted = false,
}: {
  image: string;
  alt: string;
  caption: string;
  heading: string;
  badge: string;
  general: Entry[];
  realms: Entry[];
  inverted?: boolean;
}) {
  return (
    <section
      aria-labelledby={inverted ? "invertido" : "al-derecho"}
      className={`grid items-start gap-7 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:gap-10 lg:px-10 ${inverted ? "bg-[var(--surface)]" : "border-b-2 border-[var(--line)]"}`}
    >
      <CardFigure src={image} alt={alt} caption={caption} rotated={inverted} />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id={inverted ? "invertido" : "al-derecho"} className="font-display m-0 text-[clamp(2.1rem,5vw,3rem)] font-semibold leading-none text-[var(--ink)]">
            {heading}
          </h2>
          <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${inverted ? "border-[#bdb1c8] bg-[var(--purple-bg)] text-[var(--purple)]" : "border-[#9dbfa8] bg-[var(--green-bg)] text-[var(--green)]"}`}>
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${inverted ? "bg-[var(--purple)]" : "bg-[var(--green)]"}`} />
            {badge}
          </span>
        </div>
        <SectionHeading>Significado general</SectionHeading>
        <div className="mt-4"><MeaningList items={general} /></div>
        <SectionHeading>Ámbitos</SectionHeading>
        <div className="mt-4"><MeaningList items={realms} /></div>
      </div>
    </section>
  );
}

function FoolDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={foolImage} alt="The Fool · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={uprightGeneral} realms={uprightRealms} />
      <DetailRow image={foolImage} alt="The Fool · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={reversedGeneral} realms={reversedRealms} inverted />
    </article>
  );
}

function MagicianDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={magicianImage} alt="The Magician · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={magicianUprightGeneral} realms={magicianUprightRealms} />
      <DetailRow image={magicianImage} alt="The Magician · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={magicianReversedGeneral} realms={magicianReversedRealms} inverted />
    </article>
  );
}

function PriestessDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={priestessImage} alt="The High Priestess · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={priestessUprightGeneral} realms={priestessUprightRealms} />
      <DetailRow image={priestessImage} alt="The High Priestess · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={priestessReversedGeneral} realms={priestessReversedRealms} inverted />
    </article>
  );
}

function EmpressDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={empressImage} alt="The Empress · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={empressUprightGeneral} realms={empressUprightRealms} />
      <DetailRow image={empressImage} alt="The Empress · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={empressReversedGeneral} realms={empressReversedRealms} inverted />
    </article>
  );
}

function EmperorDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={emperorImage} alt="The Emperor · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={emperorUprightGeneral} realms={emperorUprightRealms} />
      <DetailRow image={emperorImage} alt="The Emperor · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={emperorReversedGeneral} realms={emperorReversedRealms} inverted />
    </article>
  );
}

function HierophantDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={hierophantImage} alt="The Hierophant · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={hierophantUprightGeneral} realms={hierophantUprightRealms} />
      <DetailRow image={hierophantImage} alt="The Hierophant · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={hierophantReversedGeneral} realms={hierophantReversedRealms} inverted />
    </article>
  );
}

function TypographicFigure({ caption, numeral, name, rotated = false }: { caption: string; numeral: string; name: string; rotated?: boolean }) {
  return (
    <figure className="m-0 mx-auto w-full max-w-[360px] lg:mx-0">
      <div className="overflow-hidden rounded-[3px] border-2 border-[var(--line)] bg-[#fffaf0] shadow-[0_18px_38px_rgba(52,38,12,0.24)]">
        <div className="flex aspect-[2/3.5] w-full flex-col items-center justify-center bg-[#fffaf0] px-6 py-8 text-center" style={rotated ? { transform: "rotate(180deg)" } : undefined}>
          <span className="font-display text-5xl font-semibold text-[var(--gold-deep)]">{numeral}</span>
          <span className="font-display mt-4 text-2xl font-bold leading-6 text-[var(--ink)]">{name}</span>
          <span className="mt-4 h-px w-12 bg-[var(--line)]" aria-hidden="true" />
          <span className="mt-3 max-w-[240px] text-[14px] italic leading-5 text-[var(--muted)]">Arcano Mayor · Rider-Waite-Smith</span>
        </div>
      </div>
      <figcaption className="font-display m-0 mt-3 text-center text-lg font-bold tracking-[0.18em] text-[var(--gold-deep)]">{caption}</figcaption>
    </figure>
  );
}

function TypographicDetailRow({ figure, heading, badge, general, realms, inverted = false }: { figure: React.ReactNode; heading: string; badge: string; general: Entry[]; realms: Entry[]; inverted?: boolean }) {
  return (
    <section aria-labelledby={inverted ? "invertido" : "al-derecho"} className={`grid items-start gap-7 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:gap-10 lg:px-10 ${inverted ? "bg-[var(--surface)]" : "border-b-2 border-[var(--line)]"}`}>
      {figure}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id={inverted ? "invertido" : "al-derecho"} className="font-display m-0 text-[clamp(2.1rem,5vw,3rem)] font-semibold leading-none text-[var(--ink)]">{heading}</h2>
          <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${inverted ? "border-[#bdb1c8] bg-[var(--purple-bg)] text-[var(--purple)]" : "border-[#9dbfa8] bg-[var(--green-bg)] text-[var(--green)]"}`}>
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${inverted ? "bg-[var(--purple)]" : "bg-[var(--green)]"}`} />
            {badge}
          </span>
        </div>
        <SectionHeading>Significado general</SectionHeading>
        <div className="mt-4"><MeaningList items={general} /></div>
        <SectionHeading>Ámbitos</SectionHeading>
        <div className="mt-4"><MeaningList items={realms} /></div>
      </div>
    </section>
  );
}

function LoversDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={loversImage} alt="The Lovers · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={loversUprightGeneral} realms={loversUprightRealms} />
      <DetailRow image={loversImage} alt="The Lovers · Rider-Waite original, invertidos" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={loversReversedGeneral} realms={loversReversedRealms} inverted />
    </article>
  );
}

function TemperanceDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={temperanceRWImage} alt="Temperance · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={temperanceUprightGeneral} realms={temperanceUprightRealms} />
      <DetailRow image={temperanceRWImage} alt="Temperance · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={temperanceReversedGeneral} realms={temperanceReversedRealms} inverted />
    </article>
  );
}

function HangedDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={hangedFixedImage} alt="The Hanged Man · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={hangedUprightGeneral} realms={hangedUprightRealms} />
      <DetailRow image={hangedFixedImage} alt="The Hanged Man · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={hangedReversedGeneral} realms={hangedReversedRealms} inverted />
    </article>
  );
}

function DeathDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={deathImage} alt="Death · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={deathUprightGeneral} realms={deathUprightRealms} />
      <DetailRow image={deathImage} alt="Death · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={deathReversedGeneral} realms={deathReversedRealms} inverted />
    </article>
  );
}

function JusticeDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={justiceImage} alt="Justice · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={justiceUprightGeneral} realms={justiceUprightRealms} />
      <DetailRow image={justiceImage} alt="Justice · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={justiceReversedGeneral} realms={justiceReversedRealms} inverted />
    </article>
  );
}

function ChariotDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={chariotImage} alt="The Chariot · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={chariotUprightGeneral} realms={chariotUprightRealms} />
      <DetailRow image={chariotImage} alt="The Chariot · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={chariotReversedGeneral} realms={chariotReversedRealms} inverted />
    </article>
  );
}

function StrengthDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={strengthImage} alt="Strength · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={strengthUprightGeneral} realms={strengthUprightRealms} />
      <DetailRow image={strengthImage} alt="Strength · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={strengthReversedGeneral} realms={strengthReversedRealms} inverted />
    </article>
  );
}

function HermitDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={hermitImage} alt="The Hermit · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={hermitUprightGeneral} realms={hermitUprightRealms} />
      <DetailRow image={hermitImage} alt="The Hermit · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={hermitReversedGeneral} realms={hermitReversedRealms} inverted />
    </article>
  );
}

function WheelDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={wheelImage} alt="Wheel of Fortune · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={wheelUprightGeneral} realms={wheelUprightRealms} />
      <DetailRow image={wheelImage} alt="Wheel of Fortune · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={wheelReversedGeneral} realms={wheelReversedRealms} inverted />
    </article>
  );
}

function DevilDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={devilImage} alt="The Devil · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={devilUprightGeneral} realms={devilUprightRealms} />
      <DetailRow image={devilImage} alt="The Devil · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={devilReversedGeneral} realms={devilReversedRealms} inverted />
    </article>
  );
}

function TowerDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <div className="flex justify-center border-b border-[var(--line-soft)] bg-[var(--paper)] p-5">
        <img src={towerImage} alt="La Torre · Rider-Waite-Smith original" className="max-h-[440px] w-auto rounded-[3px] border border-[var(--line)] shadow-lg" />
      </div>
      <TypographicDetailRow figure={<TypographicFigure caption="AL DERECHO" numeral="XVI" name="LA TORRE" />} heading="Al derecho" badge="Al derecho" general={towerUprightGeneral} realms={towerUprightRealms} />
      <TypographicDetailRow figure={<TypographicFigure caption="INVERTIDO" numeral="XVI" name="LA TORRE" rotated />} heading="Invertido" badge="Invertido" general={towerReversedGeneral} realms={towerReversedRealms} inverted />
    </article>
  );
}

function StarDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={starImage} alt="The Star · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={starUprightGeneral} realms={starUprightRealms} />
      <DetailRow image={starImage} alt="The Star · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={starReversedGeneral} realms={starReversedRealms} inverted />
    </article>
  );
}

function MoonDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={moonImage} alt="The Moon · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={moonUprightGeneral} realms={moonUprightRealms} />
      <DetailRow image={moonImage} alt="The Moon · Rider-Waite original, invertida" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={moonReversedGeneral} realms={moonReversedRealms} inverted />
    </article>
  );
}

function SunDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={sunImage} alt="The Sun · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={sunUprightGeneral} realms={sunUprightRealms} />
      <DetailRow image={sunImage} alt="The Sun · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={sunReversedGeneral} realms={sunReversedRealms} inverted />
    </article>
  );
}

function JudgementDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={judgementImage} alt="Judgement · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={judgementUprightGeneral} realms={judgementUprightRealms} />
      <DetailRow image={judgementImage} alt="Judgement · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={judgementReversedGeneral} realms={judgementReversedRealms} inverted />
    </article>
  );
}

function WorldDetail() {
  return (
    <article className="print-card overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--paper-2)] shadow-[0_24px_70px_rgba(74,56,18,0.18)]">
      <DetailRow image={worldImage} alt="The World · Rider-Waite original, al derecho" caption="AL DERECHO" heading="Al derecho" badge="Al derecho" general={worldUprightGeneral} realms={worldUprightRealms} />
      <DetailRow image={worldImage} alt="The World · Rider-Waite original, invertido" caption="INVERTIDO" heading="Invertido" badge="Invertido" general={worldReversedGeneral} realms={worldReversedRealms} inverted />
    </article>
  );
}

type StoryCard = { view: string; numeral: string; name: string; subtitle: string; text: string; lesson: string };
type StoryStage = { title: string; intro?: string; cards: StoryCard[] };

const storyStages: StoryStage[] = [
  {
    title: "Primera etapa: el descubrimiento del mundo (0–VII)",
    cards: [
      { view: "fool", numeral: "0.", name: "El Loco", subtitle: "El comienzo", text: "El Loco representa a alguien que se aventura hacia lo desconocido. No tiene un camino definido ni sabe qué le espera, pero está dispuesto a experimentar. Es el nacimiento de una experiencia, la libertad, la espontaneidad y la confianza en la vida.", lesson: "atreverse a comenzar, aunque no tenga todas las respuestas." },
      { view: "magician", numeral: "I.", name: "El Mago", subtitle: "Descubrir sus capacidades", text: "Durante su viaje, El Loco conoce al Mago, quien le enseña que tiene herramientas y capacidades para construir su propio camino. Descubre que puede actuar, tomar decisiones y transformar sus ideas en realidad.", lesson: "reconocer su potencial y utilizar sus recursos." },
      { view: "priestess", numeral: "II.", name: "La Sacerdotisa", subtitle: "Aprender a escuchar", text: "Después de descubrir sus capacidades, comprende que no todo se consigue mediante la acción. También necesita aprender a observar, guardar silencio y escuchar su intuición. La Sacerdotisa le enseña que existen conocimientos que todavía no puede ver y que algunas respuestas se encuentran dentro de él.", lesson: "confiar en su intuición y comprender lo que permanece oculto." },
      { view: "empress", numeral: "III.", name: "La Emperatriz", subtitle: "Experimentar la vida", text: "El Loco descubre la belleza de la vida a través de la Emperatriz. Aprende sobre el amor, la creatividad, la abundancia, la fertilidad y el disfrute. Es una etapa de crecimiento donde las ideas comienzan a desarrollarse y las experiencias se vuelven más enriquecedoras.", lesson: "cuidar, crear, disfrutar y permitir que las cosas crezcan." },
      { view: "emperor", numeral: "IV.", name: "El Emperador", subtitle: "Encontrar estabilidad", text: "Ahora comprende que no basta con disfrutar de la vida: también necesita orden, disciplina y responsabilidad. El Emperador le enseña a establecer límites, construir estructuras y hacerse cargo de sus decisiones.", lesson: "desarrollar autoridad, estabilidad y autocontrol." },
      { view: "hierophant", numeral: "V.", name: "El Hierofante (El Papa)", subtitle: "Aprender de los demás", text: "En esta etapa, El Loco se encuentra con las tradiciones, las creencias y las enseñanzas de la sociedad. Aprende de maestros, instituciones y personas con experiencia. Descubre valores y principios que pueden orientar su vida.", lesson: "adquirir conocimientos, encontrar valores y comprender las enseñanzas tradicionales." },
      { view: "lovers", numeral: "VI.", name: "Los Enamorados", subtitle: "Elegir su propio camino", text: "El Loco llega a un momento en el que debe tomar decisiones importantes. Comprende que no puede seguir simplemente lo que otros le enseñaron: necesita descubrir qué desea realmente. También experimenta el amor, las relaciones y la conexión con otras personas.", lesson: "elegir desde sus valores, asumir las consecuencias y comprometerse con aquello que ama." },
      { view: "chariot", numeral: "VII.", name: "El Carro", subtitle: "Avanzar hacia sus objetivos", text: "Después de tomar sus decisiones, El Loco está preparado para avanzar. Tiene una dirección y desea conquistar sus objetivos. Sin embargo, descubre que necesita controlar sus impulsos, mantener la determinación y superar los obstáculos.", lesson: "tener voluntad, disciplina y determinación para avanzar." },
    ],
  },
  {
    title: "Segunda etapa: las pruebas y el autoconocimiento (VIII–XIV)",
    intro: "El Loco ya ha conocido el mundo exterior. Ahora comienza un viaje más profundo: aprender a dominarse, comprender sus errores y aceptar que no puede controlar todo lo que sucede.",
    cards: [
      { view: "strength", numeral: "VIII.", name: "La Fuerza", subtitle: "Dominarse a sí mismo", text: "Durante el camino, descubre que la verdadera fuerza no consiste en imponer su voluntad mediante la violencia o la agresividad. Aprende a controlar sus impulsos, manejar sus emociones y actuar con paciencia, compasión y valentía.", lesson: "la verdadera fortaleza nace del autocontrol." },
      { view: "hermit", numeral: "IX.", name: "El Ermitaño", subtitle: "Buscar respuestas en su interior", text: "Después de tantas experiencias, El Loco necesita detenerse y alejarse del ruido exterior. Se toma un tiempo para reflexionar, analizar su vida y descubrir qué quiere realmente.", lesson: "encontrar sabiduría mediante la introspección y la soledad voluntaria." },
      { view: "wheel", numeral: "X.", name: "La Rueda de la Fortuna", subtitle: "Aceptar los cambios", text: "El Loco descubre que la vida no permanece igual. Hay momentos de suerte, oportunidades, pérdidas y situaciones que escapan de su control. Comprende que todo cambia y que no siempre puede decidir lo que sucede, pero sí cómo afrontarlo.", lesson: "aceptar los ciclos de la vida y adaptarse a los cambios." },
      { view: "justice", numeral: "XI.", name: "La Justicia", subtitle: "Asumir las consecuencias", text: "Ahora debe enfrentarse a sus propias decisiones. Comprende que cada acción tiene consecuencias y que necesita actuar con honestidad y responsabilidad. Aprende a reconocer sus errores y a buscar el equilibrio.", lesson: "actuar con justicia, objetividad y responsabilidad." },
      { view: "hanged", numeral: "XII.", name: "El Colgado", subtitle: "Aprender a soltar", text: "El Loco llega a un momento en el que siente que no puede avanzar. Por más que lo intenta, las cosas permanecen detenidas. Entonces comprende que necesita dejar de luchar y observar la situación desde otra perspectiva. Aprende a sacrificar aquello que ya no le sirve y a aceptar que no todo depende de su voluntad.", lesson: "soltar, esperar y cambiar su manera de ver las cosas." },
      { view: "death", numeral: "XIII.", name: "La Muerte", subtitle: "Transformarse", text: "Durante el viaje, comprende que algunas etapas deben terminar para que otras puedan comenzar. Deja atrás antiguas versiones de sí mismo, relaciones, hábitos o situaciones que ya cumplieron su propósito. Aunque el cambio puede ser doloroso, también representa una oportunidad de renacimiento.", lesson: "aceptar los finales y permitir una transformación profunda." },
      { view: "temperance", numeral: "XIV.", name: "La Templanza", subtitle: "Encontrar el equilibrio", text: "Después de atravesar una transformación, El Loco necesita reconstruirse. Aprende a tener paciencia, moderar sus emociones y encontrar un equilibrio entre los diferentes aspectos de su vida. Ya no busca resultados inmediatos: comprende que las cosas necesitan tiempo para desarrollarse.", lesson: "encontrar armonía, moderación y tranquilidad." },
    ],
  },
  {
    title: "Tercera etapa: la transformación y la realización (XV–XXI)",
    intro: "El Loco ha aprendido mucho, pero todavía debe enfrentarse a sus mayores desafíos: sus deseos, sus miedos, sus ilusiones y todo aquello que le impide ser verdaderamente libre.",
    cards: [
      { view: "devil", numeral: "XV.", name: "El Diablo", subtitle: "Enfrentarse a sus ataduras", text: "El Loco descubre que todavía existen cosas que lo mantienen prisionero: dependencias, obsesiones, tentaciones, deseos descontrolados y relaciones poco saludables. Comprende que muchas veces él mismo permanece atado a situaciones de las que podría liberarse.", lesson: "reconocer sus dependencias y recuperar su libertad." },
      { view: "tower", numeral: "XVI.", name: "La Torre", subtitle: "Derribar las falsas estructuras", text: "Aquello que parecía estable comienza a derrumbarse. La Torre representa una crisis o acontecimiento inesperado que destruye las estructuras construidas sobre mentiras, falsas creencias o fundamentos débiles. Aunque la experiencia puede ser dolorosa, permite descubrir la verdad y comenzar de nuevo.", lesson: "aceptar la destrucción de lo que ya no puede sostenerse." },
      { view: "star", numeral: "XVII.", name: "La Estrella", subtitle: "Recuperar la esperanza", text: "Después de la destrucción, El Loco encuentra nuevamente la esperanza. Comienza a sanar, recupera la confianza en sí mismo y comprende que todavía existen oportunidades para reconstruir su vida.", lesson: "confiar, sanar y mantener la esperanza en el futuro." },
      { view: "moon", numeral: "XVIII.", name: "La Luna", subtitle: "Enfrentarse a sus miedos", text: "Aunque ha recuperado la esperanza, todavía existen cosas que no comprende. La Luna lo conduce hacia un mundo de incertidumbre, emociones profundas, inseguridades, ilusiones y miedos. Aprende que no todo es lo que parece y que necesita explorar su subconsciente para comprenderse mejor.", lesson: "reconocer sus miedos, escuchar sus emociones y distinguir la realidad de las ilusiones." },
      { view: "sun", numeral: "XIX.", name: "El Sol", subtitle: "Encontrar la claridad", text: "Finalmente, la oscuridad comienza a desaparecer. El Loco alcanza una etapa de felicidad, claridad, confianza y vitalidad. Ahora puede ver las cosas con mayor transparencia y disfrutar de lo que ha conseguido.", lesson: "vivir con autenticidad, alegría y confianza." },
      { view: "judgement", numeral: "XX.", name: "El Juicio", subtitle: "Despertar y renacer", text: "Después de todo lo vivido, El Loco experimenta un despertar. Comprende sus experiencias pasadas, reconoce cuánto ha cambiado y siente el llamado a vivir de una manera más auténtica. Es el momento de dejar atrás el pasado y responder a un propósito más profundo.", lesson: "despertar, perdonarse, aceptar su pasado y comenzar una nueva etapa." },
      { view: "world", numeral: "XXI.", name: "El Mundo", subtitle: "Alcanzar la realización", text: "El viaje llega a su culminación. El Loco ha experimentado, aprendido, sufrido, amado y cambiado. Ahora comprende mejor quién es y encuentra una sensación de plenitud. Ha completado un ciclo de crecimiento y está preparado para comenzar otro, pero ya no es la misma persona que empezó el viaje.", lesson: "alcanzar la realización, integrar sus experiencias y completar un ciclo." },
    ],
  },
];

function ModeToggle({ mode, onSelect }: { mode: "fichas" | "historia"; onSelect: (next: "fichas" | "historia") => void }) {
  return (
    <div role="group" aria-label="Vista" className="inline-flex rounded-full border-2 border-[var(--line)] bg-[var(--paper-2)] p-1 shadow-[0_6px_18px_rgba(74,56,18,0.08)]">
      <button type="button" onClick={() => onSelect("fichas")} aria-pressed={mode === "fichas"} className={`rounded-full px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] sm:px-5 ${mode === "fichas" ? "bg-[var(--gold-deep)] text-white" : "text-[var(--gold-deep)] hover:bg-[var(--surface)]"}`}>📖 Fichas</button>
      <button type="button" onClick={() => onSelect("historia")} aria-pressed={mode === "historia"} className={`rounded-full px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] sm:px-5 ${mode === "historia" ? "bg-[var(--gold-deep)] text-white" : "text-[var(--gold-deep)] hover:bg-[var(--surface)]"}`}>🌙 Modo Historia</button>
    </div>
  );
}

function StoryView({ onOpen }: { onOpen: (view: string) => void }) {
  return (
    <section aria-label="Modo Historia — El viaje del Loco" className="mt-9 sm:mt-11">
      <div className="mx-auto max-w-3xl text-center">
        <p className="m-0 text-[11px] font-semibold uppercase leading-5 tracking-[0.34em] text-[var(--gold-deep)] sm:text-xs sm:tracking-[0.42em]">Modo Historia</p>
        <h2 className="font-display m-0 mt-3 text-[clamp(2.2rem,6vw,3.6rem)] font-semibold leading-[0.95] text-[var(--ink)]">El viaje del Loco</h2>
        <p className="m-0 mt-5 text-lg italic leading-8 text-[var(--muted)] sm:text-xl">El Loco comienza su viaje. Es joven, inocente, curioso y está lleno de posibilidades. No sabe qué encontrará, pero siente el impulso de explorar la vida.</p>
        <div className="mx-auto mt-6 flex max-w-xl items-center gap-3" aria-hidden="true"><span className="gold-rule flex-1" /><span className="text-sm text-[var(--gold)]">◆</span><span className="gold-rule flex-1" /></div>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-12">
        {storyStages.map((stage) => (
          <section key={stage.title} aria-label={stage.title}>
            <h3 className="font-display m-0 text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-[1.05] text-[var(--gold-deep)]">{stage.title}</h3>
            {stage.intro && <p className="m-0 mt-4 text-lg italic leading-8 text-[var(--muted)]">{stage.intro}</p>}
            <div className="mt-7 space-y-5">
              {stage.cards.map((card) => (
                <article key={card.view} className="rounded-[4px] border border-[var(--line-soft)] bg-[var(--paper-2)] px-5 py-5 shadow-[0_10px_30px_rgba(74,56,18,0.08)] sm:px-7 sm:py-6">
                  <h4 className="m-0 text-xl font-bold leading-7 text-[var(--ink)] sm:text-[22px]"><span className="font-display text-[var(--gold-deep)]">{card.numeral} </span>{card.name} <span className="font-normal text-[var(--ink)]">— {card.subtitle}</span></h4>
                  <p className="m-0 mt-3 text-[17px] leading-8 text-[var(--ink)] sm:text-lg">{card.text}</p>
                  <p className="m-0 mt-4 text-[17px] italic leading-8 text-[var(--gold-deep)] sm:text-lg"><strong className="font-bold">Su aprendizaje:</strong> {card.lesson}</p>
                  <button type="button" onClick={() => onOpen(card.view)} className="mt-4 inline-flex items-center gap-1 bg-transparent p-0 text-[14px] font-bold uppercase tracking-[0.12em] text-[var(--gold-deep)] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]">Ver ficha →</button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

type StudyNoteRecord = { id: string; value: { arcano: string; text: string } };

export default function App() {
  const [view, setView] = useState<"home" | "fool" | "magician" | "priestess" | "empress" | "emperor" | "hierophant" | "lovers" | "chariot" | "strength" | "hermit" | "wheel" | "justice" | "hanged" | "death" | "temperance" | "devil" | "tower" | "star" | "moon" | "sun" | "judgement" | "world">("home");
  const [notes, setNotes] = useState<StudyNoteRecord[]>([]);
  const [noteText, setNoteText] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [noteResult, setNoteResult] = useState<{ saved: number; remaining: number; error: string | null; reloadError: string | null } | null>(null);
  const [notesError, setNotesError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [mode, setMode] = useState<"fichas" | "historia">("fichas");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [view]);

  async function callRecords(action: string, args: Record<string, unknown>) {
    const response = await fetch("actions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action, args }),
    });
    if (!response.ok) throw new Error("No se pudo conectar con el registro de notas.");
    const payload = await response.json();
    if (payload.error) throw new Error(typeof payload.error === "string" ? payload.error : "No se pudo completar la operación.");
    return payload.data;
  }

  async function reloadRecords() {
    const data = await callRecords("records.list", { collection: "study_notes" });
    setNotes(Array.isArray(data?.records) ? data.records : []);
  }

  useEffect(() => {
    reloadRecords().catch((e) => {
      setNotesError(e instanceof Error ? e.message : String(e));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createRow(row: { arcano: string; text: string }, idempotencyKey: string) {
    await callRecords("records.create", { collection: "study_notes", value: row, idempotency_key: idempotencyKey });
  }

  async function saveNote() {
    const text = noteText.trim();
    if (!text || savingNote) return;
    const rows = [{ arcano: view, text }];
    const idempotencyKey = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `nota-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setSavingNote(true);
    let saved = 0;
    let error: string | null = null;
    try {
      for (const row of rows) {
        await createRow(row, idempotencyKey);
        saved += 1;
      }
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    }
    let reloadError: string | null = null;
    try {
      await reloadRecords();
    } catch (e) {
      reloadError = e instanceof Error ? e.message : String(e);
    }
    setNoteResult({ saved, remaining: rows.length - saved, error, reloadError });
    if (saved > 0 && !error) setNoteText("");
    setSavingNote(false);
  }

  async function deleteNote(id: string) {
    setDeletingId(id);
    try {
      await callRecords("records.delete", { collection: "study_notes", id });
      await reloadRecords();
      setNoteResult({ saved: 0, remaining: 0, error: null, reloadError: null });
    } catch (e) {
      setNoteResult({ saved: 0, remaining: 0, error: e instanceof Error ? e.message : String(e), reloadError: null });
    }
    setDeletingId(null);
  }

  const cardImages = [foolImage, magicianImage, priestessImage, empressImage, emperorImage, hierophantImage, loversImage, chariotImage, strengthImage, hermitImage, wheelImage, justiceImage, hangedFixedImage, deathImage, temperanceRWImage, devilImage, towerImage, starImage, moonImage, sunImage, judgementImage, worldImage];
  const cardAlts = ["The Fool · Rider-Waite original", "The Magician · Rider-Waite original", "The High Priestess · Rider-Waite original", "The Empress · Rider-Waite original", "The Emperor · Rider-Waite original", "The Hierophant · Rider-Waite original", "The Lovers · Rider-Waite original", "The Chariot · Rider-Waite original", "Strength · Rider-Waite original", "The Hermit · Rider-Waite original", "Wheel of Fortune · Rider-Waite original", "Justice · Rider-Waite original", "The Hanged Man · Rider-Waite original", "Death · Rider-Waite original", "Temperance · Rider-Waite original", "The Devil · Rider-Waite original", "The Tower · Rider-Waite original", "The Star · Rider-Waite original", "The Moon · Rider-Waite original", "The Sun · Rider-Waite original", "Judgement · Rider-Waite original", "The World · Rider-Waite original"];
  const cardImage = (index: number) => cardImages[index] ?? foolImage;
  const cardAlt = (index: number) => cardAlts[index] ?? "The Fool · Rider-Waite original";
  const cardView = (index: number): "fool" | "magician" | "priestess" | "empress" | "emperor" | "hierophant" | "lovers" | "chariot" | "strength" | "hermit" | "wheel" | "justice" | "hanged" | "death" | "temperance" | "devil" | "tower" | "star" | "moon" | "sun" | "judgement" | "world" => (index === 1 ? "magician" : index === 2 ? "priestess" : index === 3 ? "empress" : index === 4 ? "emperor" : index === 5 ? "hierophant" : index === 6 ? "lovers" : index === 7 ? "chariot" : index === 8 ? "strength" : index === 9 ? "hermit" : index === 10 ? "wheel" : index === 11 ? "justice" : index === 12 ? "hanged" : index === 13 ? "death" : index === 14 ? "temperance" : index === 15 ? "devil" : index === 16 ? "tower" : index === 17 ? "star" : index === 18 ? "moon" : index === 19 ? "sun" : index === 20 ? "judgement" : index === 21 ? "world" : "fool");

  return (
    <div data-safe-area-inset-root className="min-h-screen bg-[var(--paper)]" style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)" }}>
      <main className="print-shell mx-auto w-full max-w-[1240px] overflow-x-clip px-4 py-6 sm:px-6 sm:py-9 lg:px-10 lg:py-11">
        {view === "home" ? (
          <>
            <div className="pointer-events-none mb-5 flex items-center justify-center gap-3 sm:mb-7" aria-hidden="true">
              <span className="gold-rule w-10 sm:w-24" />
              <span className="text-[var(--gold)]">✦</span>
              <span className="gold-rule w-10 sm:w-24" />
            </div>

            <header className="mx-auto max-w-4xl text-center">
              <p className="m-0 text-[11px] font-semibold uppercase leading-5 tracking-[0.34em] text-[var(--gold-deep)] sm:text-xs sm:tracking-[0.42em]">
                Ficha de estudio · Tarot
              </p>
              <h1 className="font-display m-0 mt-3 text-[clamp(2.7rem,8.5vw,5.6rem)] font-semibold leading-[0.92] tracking-[0.015em] text-[var(--ink)]">
                Arcanos Mayores
                <span className="mt-2 block text-[clamp(1.35rem,4vw,2.3rem)] font-medium italic tracking-[0.04em] text-[var(--gold-deep)]">
                  Tarot Rider-Waite
                </span>
              </h1>
              <p className="mx-auto m-0 mt-5 max-w-2xl text-lg italic leading-7 text-[var(--muted)] sm:text-xl">
                Guía completa, arcano por arcano. Haz clic en cada carta para ver su ficha.
              </p>

              <div className="mt-7 flex justify-center">
                <ModeToggle mode={mode} onSelect={setMode} />
              </div>

              <div className="mx-auto mt-6 flex max-w-xl items-center gap-3" aria-hidden="true">
                <span className="gold-rule flex-1" />
                <span className="text-sm text-[var(--gold)]">◆</span>
                <span className="gold-rule flex-1" />
              </div>
            </header>

            {mode === "historia" ? (<StoryView onOpen={(next) => setView(next as any)} />) : (<section aria-label="Los 22 Arcanos Mayores" className="mt-9 sm:mt-11">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
                <h2 className="font-display m-0 text-[clamp(1.9rem,4.5vw,2.8rem)] font-semibold leading-none text-[var(--ink)]">La colección</h2>
                <p className="m-0 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Del 0 al XXI</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {arcanos.map((arcano, index) => {
                  if (arcano.status === "complete") {
                    return (
                      <button
                        key={arcano.name}
                        type="button"
                        onClick={() => setView(cardView(index))}
                        className="group min-w-0 cursor-pointer overflow-hidden rounded-[4px] border-2 border-[var(--line)] bg-[var(--paper-2)] text-left shadow-[0_16px_36px_rgba(74,56,18,0.16)] transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
                        aria-label={index === 5 ? "Ver la ficha completa de V. EL PAPA — EL HIEROFANTE" : `Ver la ficha completa de ${index}. ${arcano.name}`}
                      >
                        <span className="relative block overflow-hidden">
                          <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--gold-deep)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">Completo</span>

                          {index === 16 ? (
                            <span className="flex aspect-[2/3.5] w-full flex-col items-center justify-center bg-[#fffaf0] px-4 py-6 text-center">
                              <span className="font-display text-4xl font-semibold text-[var(--gold-deep)]">{arcano.number}</span>
                              <span className="font-display mt-3 text-lg font-bold leading-6 text-[var(--ink)]">{arcano.name}</span>
                              <span className="mt-3 text-[13px] italic leading-5 text-[var(--muted)]">Arcano Mayor · Rider-Waite-Smith</span>
                            </span>
                          ) : (
                            <TarotImage src={cardImage(index)} alt={cardAlt(index)} className="block aspect-[2/3.5] w-full bg-[#bfa14f] object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                          )}
                        </span>
                        <span className="block px-3 py-3.5 text-center sm:px-4 sm:py-4">
                          {index === 5 ? (
                            <span className="font-display mt-1 block min-h-[2.5rem] text-[17px] font-bold leading-5 text-[var(--ink)] sm:text-lg">V. EL PAPA — EL HIEROFANTE</span>
                          ) : (
                            <>
                              <span className="font-display block text-lg font-semibold leading-5 text-[var(--gold-deep)]">{index}.</span>
                              <span className="font-display mt-1 block min-h-[2.5rem] text-[17px] font-bold leading-5 text-[var(--ink)] sm:text-lg">{arcano.name}</span>
                            </>
                          )}
                          <span className="mt-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--gold-deep)]">Ver ficha →</span>
                        </span>
                      </button>
                    );
                  }
                  return (
                    <article key={arcano.name} aria-label={`${index}. ${arcano.name} — Próximamente`} className="min-w-0 overflow-hidden rounded-[4px] border border-[var(--line-soft)] bg-[var(--paper-2)] opacity-70 grayscale-[0.35]">
                      <div className="relative flex aspect-[2/3.5] flex-col items-center justify-center bg-[#e9e1c9] px-3 py-6 text-center">
                        <span className="absolute left-3 top-3 rounded-full border border-[var(--line-soft)] bg-[var(--paper)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Próximamente</span>
                        <span className="font-display text-4xl font-semibold text-[#a99a73] sm:text-5xl">{arcano.number}</span>
                        <span className="mt-3 text-lg text-[#a99a73]" aria-hidden="true">✦</span>
                        <span className="mt-3 h-px w-12 bg-[#c6b78f]" aria-hidden="true" />
                        <span className="mt-3 text-[13px] italic leading-5 text-[var(--muted)]">Carta por revelar</span>
                      </div>
                      <div className="px-3 py-3.5 text-center sm:px-4 sm:py-4">
                        <span className="font-display block text-lg font-semibold leading-5 text-[var(--muted)]">{index}.</span>
                        <span className="font-display mt-1 block min-h-[2.5rem] text-[17px] font-bold leading-5 text-[var(--ink)] sm:text-lg">{arcano.name}</span>
                        <span className="mt-2 block text-[13px] leading-5 text-[var(--muted)]">Envíame el texto para agregarla</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>)}

            <footer className="mx-auto mt-10 max-w-4xl text-center text-sm leading-6 text-[var(--muted)]">
              <p className="m-0">Lectura de estudio · Observa la carta, luego las palabras.</p>
            </footer>
          </>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between gap-3 sm:mb-7">
              <button
                type="button"
                onClick={() => setView("home")}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-2)] px-4 py-2.5 text-sm font-bold text-[var(--gold-deep)] shadow-[0_6px_18px_rgba(74,56,18,0.08)] transition-colors hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
              >
                <span aria-hidden="true">←</span> Volver a todos los arcanos
              </button>
              <ModeToggle mode={mode} onSelect={(next) => { setMode(next); setView("home"); }} />
            </div>


            <div className="pointer-events-none mb-5 flex items-center justify-center gap-3 sm:mb-7" aria-hidden="true">
              <span className="gold-rule w-10 sm:w-24" />
              <span className="text-[var(--gold)]">✦</span>
              <span className="gold-rule w-10 sm:w-24" />
            </div>

            <header className="mx-auto max-w-4xl text-center">
              <p className="m-0 text-[11px] font-semibold uppercase leading-5 tracking-[0.34em] text-[var(--gold-deep)] sm:text-xs sm:tracking-[0.42em]">
                Ficha de estudio · Tarot
              </p>
              <h1 className="font-display m-0 mt-3 text-[clamp(3.2rem,10vw,6.2rem)] font-semibold leading-[0.88] tracking-[0.015em] text-[var(--ink)]">
                {view === "magician" ? "I. EL MAGO" : view === "priestess" ? "II. LA SACERDOTISA" : view === "empress" ? "III. LA EMPERATRIZ" : view === "emperor" ? "IV. EL EMPERADOR" : view === "hierophant" ? "V. EL PAPA — EL HIEROFANTE" : view === "lovers" ? "VI. LOS ENAMORADOS" : view === "chariot" ? "VII. EL CARRO" : view === "strength" ? "VIII. LA FUERZA" : view === "hermit" ? "IX. EL ERMITAÑO" : view === "wheel" ? "X. LA RUEDA DE LA FORTUNA" : view === "justice" ? "XI. LA JUSTICIA" : view === "hanged" ? "XII. EL COLGADO" : view === "death" ? "XIII. LA MUERTE" : view === "temperance" ? "XIV. LA TEMPLANZA" : view === "devil" ? "XV. EL DIABLO" : view === "tower" ? "XVI. LA TORRE" : view === "star" ? "XVII. LA ESTRELLA" : view === "moon" ? "XVIII. LA LUNA" : view === "sun" ? "XIX. EL SOL" : view === "judgement" ? "XX. EL JUICIO" : view === "world" ? "XXI. EL MUNDO" : "0. EL LOCO"}
              </h1>
              <p className="m-0 mt-4 text-lg italic leading-7 text-[var(--muted)] sm:text-xl">
                Arcano Mayor · Rider-Waite-Smith
              </p>
              <div className="mx-auto mt-6 flex max-w-xl items-center gap-3" aria-hidden="true">
                <span className="gold-rule flex-1" />
                <span className="text-sm text-[var(--gold)]">◆</span>
                <span className="gold-rule flex-1" />
              </div>
            </header>

            <div className="mt-8 sm:mt-10">
              {view === "magician" ? <MagicianDetail /> : view === "priestess" ? <PriestessDetail /> : view === "empress" ? <EmpressDetail /> : view === "emperor" ? <EmperorDetail /> : view === "hierophant" ? <HierophantDetail /> : view === "lovers" ? <LoversDetail /> : view === "chariot" ? <ChariotDetail /> : view === "strength" ? <StrengthDetail /> : view === "hermit" ? <HermitDetail /> : view === "wheel" ? <WheelDetail /> : view === "justice" ? <JusticeDetail /> : view === "hanged" ? <HangedDetail /> : view === "death" ? <DeathDetail /> : view === "temperance" ? <TemperanceDetail /> : view === "devil" ? <DevilDetail /> : view === "tower" ? <TowerDetail /> : view === "star" ? <StarDetail /> : view === "moon" ? <MoonDetail /> : view === "sun" ? <SunDetail /> : view === "judgement" ? <JudgementDetail /> : view === "world" ? <WorldDetail /> : <FoolDetail />}
            </div>

            <section aria-label="Notas de estudio" className="mx-auto mt-8 max-w-4xl rounded-[4px] border border-[var(--line-soft)] bg-[var(--paper-2)] px-5 py-6 shadow-[0_10px_30px_rgba(74,56,18,0.08)] sm:px-8">
              <h2 className="font-display m-0 text-3xl font-semibold text-[var(--ink)]">Notas de estudio</h2>
              <p className="m-0 mt-2 text-[15px] leading-6 text-[var(--muted)]">Escribe una reflexión sobre este arcano. Se guarda en tu bitácora y vuelve a aparecer al volver a abrir la ficha.</p>
              <label htmlFor="nota-estudio" className="mt-5 block text-sm font-bold text-[var(--ink)]">Tu nota</label>
              <textarea
                id="nota-estudio"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={3}
                placeholder="¿Qué te dice esta carta hoy?"
                className="mt-2 w-full rounded-[3px] border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-[16px] leading-6 text-[var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
              />
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={saveNote}
                  disabled={savingNote || !noteText.trim()}
                  className="rounded-full bg-[var(--gold-deep)] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  {savingNote ? "Guardando…" : "Guardar nota"}
                </button>
                {noteResult && (
                  <p role="status" className="m-0 text-sm leading-5 text-[var(--muted)]">
                    {noteResult.error ? `No se pudo guardar: ${noteResult.error}` : noteResult.saved > 0 ? `Guardada: ${noteResult.saved} · Pendiente: ${noteResult.remaining}` : "Nota eliminada."}
                    {noteResult.reloadError ? ` · No se pudo recargar: ${noteResult.reloadError}` : ""}
                  </p>
                )}
              </div>
              {notesError && <p role="status" className="m-0 mt-3 text-sm leading-5 text-[var(--muted)]">Las notas guardadas no están disponibles en este momento.</p>}
              <div className="mt-5 border-t border-[var(--line-soft)] pt-4">
                {notes.filter((n) => n.value?.arcano === view).length === 0 ? (
                  <p className="m-0 text-[15px] italic leading-6 text-[var(--muted)]">Aún no hay notas guardadas para este arcano.</p>
                ) : (
                  <ul className="m-0 list-none space-y-3 p-0">
                    {notes.filter((n) => n.value?.arcano === view).map((n) => (
                      <li key={n.id} className="flex items-start justify-between gap-3 rounded-[3px] border border-[var(--line-soft)] bg-[var(--surface)] px-3 py-2.5">
                        <span className="min-w-0 text-[16px] leading-6 text-[var(--ink)]" style={{ overflowWrap: "anywhere" }}>{n.value.text}</span>
                        <button type="button" onClick={() => deleteNote(n.id)} disabled={deletingId === n.id} className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-bold text-[var(--gold-deep)] disabled:opacity-50">
                          {deletingId === n.id ? "Eliminando…" : "Eliminar"}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            <footer className="mx-auto mt-6 max-w-4xl text-center text-sm leading-6 text-[var(--muted)]">
              <p className="m-0">Lectura de estudio · Observa la carta, luego las palabras.</p>
            </footer>
          </>
        )}
      </main>
    </div>
  );
}
