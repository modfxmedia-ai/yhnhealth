/**
 * CPSC Module content cloned verbatim from yhnhealth.com - 6 post-graduate
 * seminars in the Certification in Patient-Specific Chiropractic series.
 */

export type ModuleConfig = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  overview: string;
  outcomes: string[];
  imageSrc: string;
};

export const MODULES: Record<string, ModuleConfig> = {
  "module-1": {
    slug: "module-1",
    number: "I",
    title: "General Functional Analysis",
    subtitle: "Functional Movement & Neurology · CPSC Certification Exam (for those eligible)",
    overview:
      "To provide updated, researched, and clinically oriented discussion and demonstration of functional evaluation of the chiropractic patient. Specifically, understanding how to identify and correct dysfunction in concise screening and analysis specific to each patient's presentation. A salutogenic perspective is introduced that utilizes objective markers to direct intelligent clinical investigation and show patients the abnormal kinematics, neurological deficiency, and biomechanical imbalances that are the root cause of their decreased health. Slide show presentation, case studies, interactive assessments and class practice time will be used.",
    outcomes: [
      "'Micro' Assessment principles and application to help identify the root CAUSE of a patient's suboptimal health presentation.",
      "The fundamental principles that lead to a concise yet comprehensive understanding of patient-specific functional deficiencies that are utilized to direct clinical care, track patient progression, and quantify patient HEALTH.",
      "How to utilize quantity and quality of movement as a new investigative means to decipher between joint, motor control, and/or tissue consequence as the primary cause(s) of functional deficiency.",
      "Introduction to neuroplastic change as a consequence of subluxation and how to identify these problems utilizing both functional movement and functional neurological analysis.",
      "Introduction to Movement Screen, how it is connected to subluxation, and how it is utilized clinically at each visit, re-eval, and as a critical tool to position and re-position the value of your services.",
      "Functional Neurological Screen (FNS) as it relates to postural analysis, the cervical lordosis, the autonomic nervous system, vision, balance, and coordination. How FNS is also utilized clinically at each visit, re-eval, and as your second critical tool to position and re-position the value of your services.",
      "The large financial difference between patient-specific functional HEALTH care and the status quo of symptom-based pain care.",
    ],
    imageSrc: "/images/modules/module-1.webp",
  },
  "module-2": {
    slug: "module-2",
    number: "II",
    title: "Subluxation & Functional Analysis of Spine",
    subtitle: "Joint, Neuro, Tissue",
    overview:
      "To provide updated, researched, and clinically oriented discussion and demonstration of detailed treatment principles and processes that apply to every phase of patient care. To understand how anatomy, physiology, and neurology are to direct patient-specific care in the spine via the chiropractic adjustment. Specifically, to know how and when to address the joint, affect neuroplastic change, and remove tissue dysfunction consequence. To understand functional progression of your healthcare beginning with the restoration of quantity/quality of movement and neurological integrity within the spine while later addressing functional exam failures that both patient and doctor readily observe.",
    outcomes: [
      "Clearing primary subluxations according to data gained from functional and segmental analysis. Maximizing the affect of your adjustment utilizing functional neurology principles and outcome markers specifically derived from each patient's findings.",
      "Review of the power and purpose of the chiropractic adjustment working Top-Down-Inside-Out with review of Hilton's Law, mechanoreceptor dysfunction, the afferent/efferent feedback loop, and the biomechanical and neurological effects on the patient's function.",
      "Restoring neuroplasticity (Active Motor Control) retraining/strengthening the neural reflex arc with afferent stimulation that restores both quantity and quality of movement and abnormal postural findings that you and the patient can SEE.",
      "General anatomy and neurology review of the Spine/Core. Looking at what you already know (or did know) in a NEW, clinical, and concise way. What contemporary science is telling us about the neurological consequence of subluxation on the rest of the body and understand scientifically WHY and HOW you can get better patient outcomes.",
      "Specific and concise Movement Screen of the neck, mid-back, low-back, and pelvis as a hallmark of clinical investigation and patient education on function, utilized visit to visit and at re-eval's.",
      "Functional Neurology Screen (FNS) application to the spine according to postural analysis and other data as the second hallmark of clinical investigation and patient education on function, utilized visit to visit and at re-evals.",
    ],
    imageSrc: "/images/modules/module-2.webp",
  },
  "module-3": {
    slug: "module-3",
    number: "III",
    title: "Subluxation & Functional Analysis of Upper Extremity",
    subtitle: "Joint, Neuro, Tissue",
    overview:
      "To provide updated, researched, and clinically oriented discussion and demonstration of the relationship between the spine and upper extremity. To understand how anatomy, physiology, and neurology are to direct patient-specific care in this region working Top-Down-Inside-Out via the chiropractic adjustment. Specifically, to know how and when to address the joint, affect neuroplastic change, and remove tissue dysfunction consequence.",
    outcomes: [
      "Review of overall treatment principles and processes that apply to every phase of patient care. Review of how to ensure all neurological connections are intact with care progressions that work Top-Down-Inside-Out.",
      "General anatomy and neurology review of the upper extremity itself and its connection to the cervical and thoracic spine. Looking at what you already know (or did know) in a NEW, clinical, and concise way.",
      "Normal kinematics of the shoulder, elbow, and wrist with specific clinical understanding of how to regain proper movement patterns at each area. The abnormal kinematics that lead to chronic 'conditions' that commonly come in to the office. Identifying the dysfunction that lead to the patient's 'diagnoses' so that function can be restored according to each patient's specific presentation.",
      "Restoring neuroplasticity (Active Motor Control) in the upper extremity retraining/strengthening the neural reflex arc with afferent stimulation that restores both quantity and quality of movement and abnormal postural findings that you and the patient can SEE.",
      "Specific and concise Movement Screen of the upper extremity as a hallmark of clinical investigation and patient education on function, utilized visit to visit and at re-eval's.",
      "Functional Neurology Screen (FNS) application to the upper extremity according to postural analysis and other data as the second hallmark of clinical investigation and patient education on function, utilized visit to visit and at re-evals.",
    ],
    imageSrc: "/images/modules/module-3.webp",
  },
  "module-4": {
    slug: "module-4",
    number: "IV",
    title: "Subluxation & Functional Analysis of Lower Extremity",
    subtitle: "Joint, Neuro, Tissue",
    overview:
      "To provide updated, researched, and clinically oriented discussion and demonstration of the relationship between the spine, pelvis, and lower extremity. To understand how anatomy, physiology, and neurology are to direct patient-specific care in this region working Top-Down-Inside-Out via the chiropractic adjustment. Specifically, to know how and when to address the joint, affect neuroplastic change, and remove tissue dysfunction consequence.",
    outcomes: [
      "Review of overall treatment principles and processes that apply to every phase of patient care. Review of how to ensure all neurological connections are intact with care progressions that work Top-Down-Inside-Out.",
      "General anatomy and neurology review of the lower extremity itself and its connection to the pelvis and lumbar spine. Looking at what you already know (or did know) in a NEW, clinical, and concise way.",
      "Normal kinematics of the hip, knee, and ankle with specific clinical understanding of how to regain proper movement patterns at each area. The abnormal kinematics that lead to chronic 'conditions' that commonly come in to the office. Identifying the dysfunction that lead to the patient's 'diagnoses' so that function can be restored according to each patient's specific presentation.",
      "Restoring neuroplasticity (Active Motor Control) in the lower extremity retraining/strengthening the neural reflex arc with afferent stimulation that restores both quantity and quality of movement and abnormal postural findings that you and the patient can SEE.",
      "Specific and concise Movement Screen of the lower extremity as a hallmark of clinical investigation and patient education on function, utilized visit to visit and at re-eval's.",
      "Functional Neurology Screen (FNS) application to the lower extremity according to postural analysis and other data as the second hallmark of clinical investigation and patient education on function, utilized visit to visit and at re-evals.",
    ],
    imageSrc: "/images/modules/module-4.webp",
  },
  "module-5": {
    slug: "module-5",
    number: "V",
    title: "Functional Progression, Health Improvement Matrices, & Lifestyle Prescription",
    subtitle: "Build your exam · build your patient",
    overview:
      "To provide updated, researched, and clinically oriented discussion and demonstration of the patient functional progression from suboptimal to optimal health. Specifically, to understand how to continually show and uncover further dysfunction that must be addressed after each time you meet a subjective and/or objective outcome marker. To ensure that patient education continues to properly solidify in order to have life-long patient frequencies and in-house referrals. To have skills and understanding needed to make an exam that fits you and your business. To identify and address the deepest level of those lifestyle aspects that are most contributing to each patient subluxating specifically.",
    outcomes: [
      "Important principles for dealing with varying degrees of patience compliance. Meeting the patient where they're at and working them forward on the health continuum according to commitment level and availability.",
      "How to work the patient forward in pieces toward a full functional evaluation utilizing each visit and re-eval to SHOW (not just tell) the patient their dysfunction, increased function, health progression, and need for your services.",
      "Review of Movement Screen, Functional Neurology Screen (FNS), maximizing the chiropractic adjustment, and overall treatment principles and processes as they relate to patient flow and internal marketing.",
      "Build a functional exam outline that is personally appropriate according to base evaluation, markers that fit best for specific patient demographics, and simple electronic documentation for a comprehensive yet concise patient-specific evaluation.",
      "General movement and neuroanatomy principles that provide the ability to give home and lifestyle prescriptions that will contribute to health promotion and reaching the patient's core goals, not pathogenic avoidance. How to avoid clinical tendencies toward an algorithmic '1 size fits all approach' which makes us more similar than different to the status quo commonly found in the other healthcare professions.",
      "Lifestyle prescriptions in regards to movement, exercise, lost curve concerns, regional and overall health, nutrition, and social/community specifically tailored to the need and health promotion of each patient.",
    ],
    imageSrc: "/images/modules/module-5.webp",
  },
  "module-6": {
    slug: "module-6",
    number: "VI",
    title: "Patient Management",
    subtitle: "Communication, Education, Flow Operations & Value-Positioning Procedures",
    overview:
      "To provide information that connects the patient-specific chiropractor with superior patient care and solid financial stability. Specifically, to give the skillset necessary to communicate function in the way a patient understands, show the patient dysfunction versus health, and develop patient education to produce life-long visits. To outline successful visit types, position value of your services consistently, and gain patients that have a real understanding of health.",
    outcomes: [
      "How to identify the specific way that a patient receives information during the initial visit and 'Speak Their Language' accordingly. Identify which of the 4 types of persons that you are and learn how to communicate with each in the way that makes them welcome, comfortable, happy, and safe.",
      "Guiding the patient to identify their core motivations during case history and utilizing them as a continual topic and reminder. Connecting logistical concerns (ie: pain) to emotional ones (ie: limited ADL's), listening, and asking the right questions. Positioning and re-positioning the value of your services.",
      "Properly working the patient forward on the health continuum, having patients that aren't coming for pain but because they know your care is good for them. Patient understanding of function, that the HEALTHIER they are, the less problems they will have. Mitigating the 3 primary reasons that a doctor loses patients.",
      "How we are motivating the patient to spend their time, efforts, and money with us as part of their routine of healthful practices. Functional evaluation is not only giving critical information and directing care, but SHOWING the patient pre/post visit and at re-evals their dysfunction, functional progression, and health gains.",
      "Case history, NPO, and Examination bullet points including timing, value positioning, concise content and delivery, and communication of function. Application during Initial visits versus regular visits. Internal marketing strategies visit to visit and re-eval to re-eval.",
      "Review, availability for any and all questions pertaining to any of the 6 Modules, and Certification Exam for those that are eligible.",
    ],
    imageSrc: "/images/modules/module-6.webp",
  },
};
