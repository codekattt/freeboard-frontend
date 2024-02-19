export interface ICatPleaseUIProps {
  fetchCats: () => Promise<void>;
  cats: string[];
  isLoading: boolean;
  showLoader: () => void;
  spinning: boolean;
}
