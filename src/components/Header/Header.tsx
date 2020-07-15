import React, { Dispatch, SetStateAction } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  ContainerHeader,
  HeaderBrand,
  HeaderSettingsBtn,
} from "./HeaderStyles";
import { NavLink } from "react-router-dom";

interface IShowSettings {
  setShowSettings: Dispatch<SetStateAction<boolean>>;
  showSettings: boolean;
}

export default function Header({
  setShowSettings,
  showSettings,
}: IShowSettings) {
  return (
    <ContainerHeader>
      <NavLink to="/" style={{ textDecoration: "none" }} title="Home">
        <HeaderBrand>adrianTube</HeaderBrand>
      </NavLink>
      <HeaderSettingsBtn
        onClick={() => setShowSettings(!showSettings)}
        name="settings"
      >
        <SettingsIcon />
      </HeaderSettingsBtn>
    </ContainerHeader>
  );
}
