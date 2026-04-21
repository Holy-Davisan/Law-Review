export interface FlashcardData {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const flashcards: FlashcardData[] = [
  // Contracts
  {
    id: 1,
    category: 'Contracts',
    question: 'What are the elements of a valid contract?',
    answer: 'Offer, acceptance, consideration, mutual assent, capacity, and legality.',
  },
  {
    id: 2,
    category: 'Contracts',
    question: 'What is consideration?',
    answer:
      'A bargained-for exchange where each party gives something of legal value. It can be a promise, an act, or a forbearance.',
  },
  {
    id: 3,
    category: 'Contracts',
    question: 'What is the mirror image rule?',
    answer:
      'An acceptance must mirror the terms of the offer exactly. Any material change constitutes a counteroffer, not an acceptance.',
  },
  {
    id: 4,
    category: 'Contracts',
    question: 'What is promissory estoppel?',
    answer:
      'A doctrine that enforces a promise even without consideration when: (1) a clear promise was made, (2) the promisee reasonably relied on it, (3) reliance was detrimental, and (4) injustice can only be avoided by enforcement.',
  },
  {
    id: 5,
    category: 'Contracts',
    question: 'What is the Statute of Frauds?',
    answer:
      'Requires certain contracts to be in writing to be enforceable: contracts for the sale of land, contracts that cannot be performed within one year, contracts for goods over $500 (UCC), suretyship agreements, and marriage contracts.',
  },
  {
    id: 6,
    category: 'Contracts',
    question: 'What is anticipatory repudiation?',
    answer:
      'When a party clearly and unequivocally indicates before performance is due that they will not perform. The non-breaching party may treat the contract as immediately breached and sue at once.',
  },
  {
    id: 7,
    category: 'Contracts',
    question: 'What is the parol evidence rule?',
    answer:
      'Extrinsic (prior or contemporaneous oral/written) evidence cannot be used to contradict or vary the terms of a fully integrated written contract. Exceptions include fraud, mistake, ambiguity, and failure of consideration.',
  },
  // Torts
  {
    id: 8,
    category: 'Torts',
    question: 'What are the elements of negligence?',
    answer:
      'Duty, breach of duty, causation (actual and proximate), and damages.',
  },
  {
    id: 9,
    category: 'Torts',
    question: 'What is the "reasonable person" standard?',
    answer:
      'The standard of care in negligence: how a reasonable, ordinary, prudent person would act under the same or similar circumstances.',
  },
  {
    id: 10,
    category: 'Torts',
    question: 'What is res ipsa loquitur?',
    answer:
      '"The thing speaks for itself." A negligence doctrine allowing an inference of negligence when: (1) the accident normally doesn\'t occur without negligence, (2) the instrumentality was in defendant\'s exclusive control, and (3) plaintiff did not contribute.',
  },
  {
    id: 11,
    category: 'Torts',
    question: 'What is strict liability in tort?',
    answer:
      'Liability without fault. Applies to abnormally dangerous activities, wild animals, and product liability (defective products). The defendant is liable regardless of how much care was taken.',
  },
  {
    id: 12,
    category: 'Torts',
    question: 'What is the difference between assault and battery?',
    answer:
      'Assault: intentional act causing reasonable apprehension of imminent harmful/offensive contact. Battery: intentional harmful or offensive contact with another person. Assault requires no contact; battery requires actual contact.',
  },
  {
    id: 13,
    category: 'Torts',
    question: 'What is defamation?',
    answer:
      'A false statement of fact published to a third party that damages the plaintiff\'s reputation. Libel is written; slander is spoken. Public figures must prove actual malice (knowledge of falsity or reckless disregard).',
  },
  // Constitutional Law
  {
    id: 14,
    category: 'Constitutional Law',
    question: 'What is the rational basis test?',
    answer:
      'The lowest level of judicial scrutiny. A law is upheld if it is rationally related to a legitimate government interest. Used for economic and social regulations.',
  },
  {
    id: 15,
    category: 'Constitutional Law',
    question: 'What is strict scrutiny?',
    answer:
      'The highest level of judicial scrutiny. A law must be necessary to achieve a compelling government interest and must be narrowly tailored. Applied to fundamental rights and suspect classifications (race, national origin).',
  },
  {
    id: 16,
    category: 'Constitutional Law',
    question: 'What is the intermediate scrutiny test?',
    answer:
      'The law must be substantially related to an important government interest. Applied to gender and legitimacy classifications.',
  },
  {
    id: 17,
    category: 'Constitutional Law',
    question: 'What is the First Amendment\'s protection of free speech?',
    answer:
      'The government cannot restrict speech based on content unless it passes strict scrutiny. Unprotected speech includes true threats, incitement to imminent lawless action, obscenity, fighting words, and defamation.',
  },
  {
    id: 18,
    category: 'Constitutional Law',
    question: 'What is the dormant Commerce Clause?',
    answer:
      'Implied limitation preventing states from discriminating against or unduly burdening interstate commerce, even absent Congressional action. Discriminatory laws are subject to strict scrutiny.',
  },
  {
    id: 19,
    category: 'Constitutional Law',
    question: 'What is substantive due process?',
    answer:
      'Protects fundamental rights from government interference regardless of the procedures used. Fundamental rights include privacy, marriage, procreation, and child-rearing. Non-fundamental rights get rational basis review.',
  },
  // Criminal Law
  {
    id: 20,
    category: 'Criminal Law',
    question: 'What is the difference between specific and general intent?',
    answer:
      'Specific intent: defendant acts with a particular purpose or objective beyond the actus reus (e.g., larceny requires intent to permanently deprive). General intent: defendant need only intend the act itself.',
  },
  {
    id: 21,
    category: 'Criminal Law',
    question: 'What are the elements of murder?',
    answer:
      'The unlawful killing of a human being with malice aforethought. Malice can be express (intent to kill) or implied (intent to cause serious bodily harm, depraved heart, or felony murder).',
  },
  {
    id: 22,
    category: 'Criminal Law',
    question: 'What is the M\'Naghten test for insanity?',
    answer:
      'A defendant is not criminally responsible if, at the time of the act, due to mental disease or defect, they: (1) did not know the nature and quality of the act, or (2) did not know the act was wrong.',
  },
  {
    id: 23,
    category: 'Criminal Law',
    question: 'What is the felony murder rule?',
    answer:
      'A person is guilty of murder if a death results during the commission of, or attempt to commit, an inherently dangerous felony (e.g., robbery, burglary, arson, rape, kidnapping).',
  },
  {
    id: 24,
    category: 'Criminal Law',
    question: 'What is larceny?',
    answer:
      'The trespassory taking and carrying away of the personal property of another with the intent to permanently deprive the owner of it.',
  },
  // Property
  {
    id: 25,
    category: 'Property',
    question: 'What is adverse possession?',
    answer:
      'Acquiring title to land by possessing it for the statutory period. Requirements (COAH): Continuous, Open and notorious, Actual, and Hostile/adverse to the true owner\'s interests.',
  },
  {
    id: 26,
    category: 'Property',
    question: 'What is a fee simple absolute?',
    answer:
      'The greatest possible estate in land — absolute ownership with no limitations. It is freely inheritable and alienable. Language: "To A" or "To A and her heirs."',
  },
  {
    id: 27,
    category: 'Property',
    question: 'What is the Rule Against Perpetuities (RAP)?',
    answer:
      'No future interest is valid unless it must vest, if at all, within a life in being at the creation of the interest plus 21 years. Applied to contingent remainders, executory interests, and vested remainders subject to open.',
  },
  {
    id: 28,
    category: 'Property',
    question: 'What is an easement?',
    answer:
      'A nonpossessory interest in land that allows the holder to use another\'s property in a specific way. Easements can be affirmative (right to do something) or negative (right to prevent something).',
  },
  // Civil Procedure
  {
    id: 29,
    category: 'Civil Procedure',
    question: 'What is diversity jurisdiction under 28 U.S.C. § 1332?',
    answer:
      'Federal court has jurisdiction when: (1) the parties are citizens of different states (complete diversity), and (2) the amount in controversy exceeds $75,000.',
  },
  {
    id: 30,
    category: 'Civil Procedure',
    question: 'What is the Erie doctrine?',
    answer:
      'In a diversity case, a federal court must apply the substantive law of the state in which it sits, but may apply federal procedural rules. Erie R.R. v. Tompkins (1938).',
  },
  {
    id: 31,
    category: 'Civil Procedure',
    question: 'What is personal jurisdiction?',
    answer:
      'A court\'s authority over the parties in a lawsuit. Requires either: (1) traditional bases (presence, domicile, consent), or (2) minimum contacts with the forum state such that jurisdiction does not offend traditional notions of fair play and substantial justice.',
  },
  {
    id: 32,
    category: 'Civil Procedure',
    question: 'What is the summary judgment standard?',
    answer:
      'Under FRCP 56, summary judgment is granted when there is no genuine dispute as to any material fact and the moving party is entitled to judgment as a matter of law.',
  },
];

export const categories = ['All', ...Array.from(new Set(flashcards.map((f) => f.category)))];
