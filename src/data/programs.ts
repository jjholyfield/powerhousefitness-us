export interface Program {
  slug: string
  name: string
  price: number
  priceDisplay: string
  isSubscription: boolean
  subscriptionInterval?: 'month' | 'year'
  duration: string
  daysPerWeek: string
  sessionLength?: string
  category: 'flagship' | 'team'
  categoryLabel: string
  equipment: string
  trainheroicUrl: string
  hero: { headline: string; subheadline: string }
  description: string
  included: string[]
  forYou: string[]
  notForYou: string
  teamCallout: string
  otherPrograms: string[]
  faq: Array<{ q: string; a: string }>
  seo: { title: string; description: string }
}

export const programs: Program[] = [
  {
    slug: 'powerhouse-fitness-team',
    name: 'Powerhouse Fitness Team',
    price: 20,
    priceDisplay: '$20/mo',
    isSubscription: true,
    subscriptionInterval: 'month',
    duration: 'Ongoing',
    daysPerWeek: '4',
    sessionLength: '45-60 min',
    category: 'team',
    categoryLabel: 'Team Plan',
    equipment: 'Dumbbells, barbell with weights, bench, cable machine, leg press or hack squat machine',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/team/the-iron-forge?attrib=599393-aff-powerhouse-team',
    hero: {
      headline: 'Powerhouse Fitness Team',
      subheadline: 'Ongoing structured programming for women who train seriously, with coach access, new training blocks every cycle, and a community following the same plan.',
    },
    description: 'This is ongoing training programming built specifically for women, delivered through TrainHeroic with new programming every training block. Four days per week, 45 to 60 minutes per session, and the programming is built on science-backed principles that actually change body composition because progressive overload with compound movements recruits more muscle fiber, drives a stronger hormonal response to training, and builds the kind of strength that random workouts and cardio-only approaches never will.\n\nThe reason structured periodized programming produces better long-term results than rotating through random routines is because your body adapts to repeated stimulus, and the only way to keep progressing is to change the stimulus in a planned way, which is exactly what the programming does every training block. The training covers the full curriculum, strength, nutrition, supplementation, and hormones, because training without understanding the other variables that influence body composition is like following a recipe without half the ingredients.\n\nYou get coach access for form checks and programming questions, instructional videos for every movement, and a community of women following the same programming and pushing each other through the same blocks. This is not a "workout of the day" subscription. This is a system.',
    included: [
      'Ongoing programming delivered through the TrainHeroic app (4 days per week, 45 to 60 minutes per session)',
      'New programming every training block',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Coach access for form checks and programming questions',
      'Community of women training on the same block',
      '7-day free trial',
      'Cancel anytime, no contract',
    ],
    forYou: [
      'You are tired of conflicting advice about how women should train and you want structured, science-backed programming that actually builds strength and changes body composition',
      'You want ongoing programming that evolves every training block instead of repeating the same routine',
      'You want coach access so your form checks and programming questions get answered by the people who write the programming',
      'You are ready to stop guessing and start following a system',
    ],
    notForYou: 'If you want a single 12-week program that you buy once and own forever, Barbell Beauties is the one-time purchase option at $47. The Team Plan is built for women who want to train consistently over months with programming that changes every cycle.',
    teamCallout: '',
    otherPrograms: ['barbell-beauties'],
    faq: [
      {
        q: 'What is the difference between the Team Plan and Barbell Beauties?',
        a: 'Barbell Beauties is a one-time purchase. 12 weeks of programming, you own it forever. The Team Plan is $20 per month and gives you new programming every training block plus coach access and the training community. If you want one structured program, buy Barbell Beauties. If you want ongoing programming that evolves, join the Team Plan.',
      },
      {
        q: 'Where do I access my program?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Dumbbells, a barbell with weights, a bench, a cable machine, and a leg press or hack squat machine. This is gym-based programming and you need gym equipment to run it.',
      },
      {
        q: 'What is the difference between these programs and coaching?',
        a: 'Programs give you training. Coaching gives you the full system, labs, clinical protocols, a dedicated coach with weekly calls, monthly clinical calls with Josh, quarterly bloodwork, and ongoing optimization based on your data. The Team Plan is $20 per month. Health Optimization Coaching is $5,000 for six months.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. No contract, no commitment beyond the current month. Cancel through TrainHeroic whenever you want. The 7-day free trial gives you a full week to try the programming before any charge.',
      },
    ],
    seo: {
      title: 'Powerhouse Fitness Team -- $20/mo Women\'s Training Program',
      description: 'Ongoing structured training for women delivered through TrainHeroic. 4 days per week, coach access, new programming every block. $20/month with 7-day free trial.',
    },
  },
  {
    slug: 'barbell-beauties',
    name: 'Barbell Beauties',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '5',
    sessionLength: '45-75 min',
    category: 'flagship',
    categoryLabel: 'Standalone Program',
    equipment: 'Full gym (barbell, rack, bench, dumbbells, cable machine, leg press or hack squat machine)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772010268?attrib=599393-aff-powerhouse-barbellbeauties',
    hero: {
      headline: 'Barbell Beauties',
      subheadline: '12 weeks of structured lifting for women who are ready to train with real weight and finally see real changes, $47.',
    },
    description: 'This is a 12-week women\'s training program built on progressive overload with compound movements because that is what actually changes body composition. Heavy hip thrusts, squats, lunges, and pressing movements with structured periodization across the full 12 weeks so the weight on the bar keeps climbing and your body keeps adapting. Five days a week of programming that trains your entire body through movement patterns that build real strength, and the progressive overload is programmed into every block so you are not guessing at what weight to use or when to increase.\n\nThe reason compound movements with real weight produce better results than high-rep, low-weight routines is because heavier loads recruit more muscle fiber, create a stronger hormonal response to training, and drive the kind of adaptation that actually changes how your body looks and performs. This is not a cardio program with some light dumbbells thrown in. This is structured lifting built for women who are ready to stop doing the same thing that has not been working and start training with a plan that has progressive overload, periodization, and real compound movements at its core.\n\nEvery exercise has video demonstrations, the progression is mapped out across all 12 weeks, and you own the program forever once you purchase it.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app (5 days per week)',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Progressive overload structured across the full 12 weeks',
      'Buy once, own forever',
    ],
    forYou: [
      'You are ready to pick up real weight and follow structured programming with progressive overload',
      'You have access to a full gym and you want a program that uses it',
      'You are tired of random workouts that do not progress and you want 12 weeks of structured training with a clear plan',
      'You want to build strength and change how your body looks through compound movements and real periodization',
    ],
    notForYou: 'If you want ongoing programming that changes every training block with coach access and a training community, the Powerhouse Fitness Team at $20 per month is a better fit for long-term training. Barbell Beauties is 12 weeks of structured programming. The Team Plan is ongoing.',
    teamCallout: 'Or join the Powerhouse Fitness Team at $20 per month for ongoing programming with coach access that changes every training block.',
    otherPrograms: ['powerhouse-fitness-team'],
    faq: [
      {
        q: 'Is this program for beginners?',
        a: 'This program works for women at any level as long as you have gym access and you are willing to follow the programming. The exercises have video demonstrations, the progression is structured, and the weight starts where you start. If you have never touched a barbell, the first few weeks will teach you the movement patterns while you build your base.',
      },
      {
        q: 'What is the difference between this and the Team Plan?',
        a: 'Barbell Beauties is a one-time purchase. 12 weeks of programming, you own it forever. The Powerhouse Fitness Team is $20 per month with new programming every training block, coach access for form checks, and a training community. If you want one structured program, Barbell Beauties is the move. If you want ongoing programming that evolves, join the Team Plan.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym access. You need a barbell with weights, a squat rack, a bench, dumbbells, a cable machine, and a leg press or hack squat machine. This is a compound movement program and it requires gym equipment.',
      },
      {
        q: 'How long are the workouts?',
        a: 'Five days per week. Sessions are structured around compound movements with progressive overload so you get in, do the work, and progress. Most sessions run between 45 and 75 minutes depending on the training block.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'Barbell Beauties is self-guided. If you want ongoing programming with coach access and a community, the Powerhouse Fitness Team is $20 per month. If you want the full individualized system with labs, clinical protocols, and a dedicated coach, that is Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Barbell Beauties -- 12-Week Women\'s Training Program | $47',
      description: '12 weeks of structured lifting for women built on progressive overload with compound movements. 5 days per week, video demos, own forever. $47 on TrainHeroic.',
    },
  },
]

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug)
}

export const PROGRAM_CATEGORIES = [
  { key: 'team', label: 'Team Plan', slugs: ['powerhouse-fitness-team'] },
  { key: 'flagship', label: 'Standalone Programs', slugs: ['barbell-beauties'] },
]
