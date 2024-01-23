type SettingStore = {
  activeBar: string;
  setActiveBar: (val: string) => void;

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default SettingStore;
