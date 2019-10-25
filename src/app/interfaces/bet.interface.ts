export interface IBet {
  id: number;
  draw: number;
  teams: ITeam[];
}

export interface ITeam {
  name: string;
  win: number;
}

export interface ISport {
  id: string;
  items: IBet[];
}
