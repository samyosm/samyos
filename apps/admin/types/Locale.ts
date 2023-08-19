export interface Locale {
  subtag: string;
  englishName: string;
  nativeName: string;
}

export const French: Locale = {
  subtag: 'fr',
  nativeName: 'français',
  englishName: 'French',
};

export const English: Locale = {
  subtag: 'en',
  nativeName: 'english',
  englishName: 'english',
};
