// Home Page
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

const userSettings: Settings = {
  theme: true,
  font: "24px",
  sidebar: false,
};
