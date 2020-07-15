import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../duck/allReducers";
import { ISettings } from "../../duck/types/settingsTypes";
import allActions from "../../duck/allActions";
import {
  SettingsSection,
  SettingsHeader,
  SettingsForm,
  InputBoxes,
  FormInput,
  Label,
  SettingsBtn,
} from "./SettingsStyles";

const showSettingsVariants = {
  initial: {
    clipPath: "circle(0%)",
    scale: 0,
  },
  animate: {
    scale: 1,
    clipPath: "circle(75%)",
  },
  exit: {
    scale: 0,
    clipPath: "circle(0%)",
  },
};
const inputsVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Settings() {
  const state = useSelector((state: RootState) => state.settings);
  const [settings, setSettings] = useState<ISettings>(state);
  const dispatch = useDispatch();
  const handleSettings = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSettings({
      ...settings,
      settings: { ...settings.settings, [e.target.name]: e.target.checked },
    });

  useEffect(() => localStorage.setItem("userSettings", JSON.stringify(state)), [
    state,
  ]);

  return (
    <SettingsSection
      variants={showSettingsVariants}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={{ duration: 0.5, staggerChildren: 0.3, delayChildren: 0.2 }}
    >
      <header>
        <SettingsHeader>Settings</SettingsHeader>
      </header>
      <SettingsForm
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          settings &&
            dispatch(allActions.settingsActions.setSettings(settings));
        }}
      >
        <InputBoxes variants={inputsVariants}>
          <FormInput
            name="darkMode"
            id="switch-mode"
            checked={settings.settings.darkMode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSettings(e)
            }
          />
          <Label htmlFor="switch-mode">
            Dark Mode {settings.settings.darkMode ? " On" : " Off"}
          </Label>
        </InputBoxes>
        <InputBoxes variants={inputsVariants}>
          <FormInput
            name="videoBackground"
            id="video-background"
            checked={settings.settings.videoBackground}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSettings(e)
            }
          />
          <Label htmlFor="video-background">
            Video In Background
            {settings.settings.videoBackground ? " On" : " Off"}
          </Label>
        </InputBoxes>
        <SettingsBtn
          isShow={JSON.stringify(state) !== JSON.stringify(settings)}
          disabled={JSON.stringify(state) === JSON.stringify(settings)}
        >
          Save Changes
        </SettingsBtn>
      </SettingsForm>
    </SettingsSection>
  );
}
