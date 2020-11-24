export type IExperience = {
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
};

export const experiences: IExperience[] = [
  {
    company: 'Passionate People',
    role: 'Software Engineer',
    description: 'beetje software maken',
    startDate: '01-12-2020',
    endDate: 'NOW'
  },
  {
    company: 'Hybriq',
    role: 'Co-founder & Software Engineer',
    description: 'lorem',
    startDate: '01-03-2018',
    endDate: '01-11-2020'
  },
  {
    company: 'Effectory',
    role: 'Software Engineer',
    description: 'lorem',
    startDate: '01-08-2015',
    endDate: '01-03-2018'
  }
];
