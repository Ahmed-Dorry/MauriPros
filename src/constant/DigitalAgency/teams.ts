export interface ITeam {
  id: number;
  number: string;
  name: string;
  post: string;
  image: string;
  shape: string;
  isActive: boolean;
}

export interface TeamData {
  section: {
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
  };
  members: ITeam[];
}