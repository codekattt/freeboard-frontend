export interface ICatPleaseUIProps {
  fetchCats: () => Promise<void>;
  cats: string[];
  spinning: boolean;
}
