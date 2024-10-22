const baseStyles = {
  fontsSize: {
    textoTitulo: '32px',
    textoSemiGrande: '28px',
    textoNormal: '24px',
    TextoPequeno: '20px',
    textoMenor: '16px',
  }
};

export const lightTheme = {
  ...baseStyles,
  colors: {
    bg: "#F5FDEE",
    bgButton: "#537552",
    bgInput: "#BAD9A2",
    bgRadioButton: "#00524B",
    bgAccordionButton: "#00524B",
    bgAccordionContainer: "#BAD9A2",
    bgTitulo: "#00524B",
    text: "#00524b",
    textButton: "#BAD9A2",
    textRadioButton: "#BAD9A2",
    textAccordionButton: "#BAD9A2",
    textAccordionContainer: "#00524B",
    textTitulo: "#BAD9A2",
    textLink: "#00524b",
    borderColor: "#537552",
    selected: "#F5BD63",
    sectionSelected: "#008DC4",
    iconThemeColor: "#00524B",
    navColor: "#BAD9A2",
    iconNavColor: "#00524B",
    iconSelectedNavColor: "#008DC4",
  },
  icon: {
    iconThemeName: "moon",
  },
};

export const darkTheme = {
  ...baseStyles,
  colors: {
    bg: "#002320",
    bgButton: "#BAD9A2",
    bgInput: "#537552",
    bgRadioButton: "#537552",
    bgAccordionButton: "#537552",
    bgAccordionContainer: "#BAD9A2",
    bgTitulo: "#BAD9A2",
    text: "#BAD9A2",
    textButton: "#00524B",
    textRadioButton: "#BAD9A2",
    textAccordionButton: "#BAD9A2",
    textAccordionContainer: "#00524B",
    textTitulo: "#00524B",
    textLink: "#008DC4",
    borderColor: "#BAD9A2",
    selected: "#F5BD63",
    sectionSelected: "#008DC4",
    iconThemeColor: "#BAD9A2", 
    navColor: "#537552",
    iconNavColor: "#BAD9A2",
    iconSelectedNavColor: "#F5BD63",
  },
  icon: {
    iconThemeName: "sun",
  },
};
