import React, { Component } from "react";

// delete!
import { Button } from "./components/atoms/Button";
import { Input } from "./components/atoms/Input";
import { Card } from "./components/atoms/Card";
import { ThemeProvider } from "styled-components";
import { DropDown } from "./components/molecules/DropDown";
import { HelloPage } from "./components/pages/HelloPage";
import { SideBar } from "./components/organisms/SideBar";

import theme from "./theme";
import "./App.css";
import { EduCard } from "./components/organisms/EduCard";
import { EduPage } from "./components/pages/EduPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <EduPage></EduPage>
        {/* <div>
          <Card>
            <Input placeholder="your name" onChange={() => {}}></Input>
            <Button onClick={() => {}}>{"test"}</Button>
            <DropDown
              options={[
                "test1",
                "test2",
                "test3",
                "test4",
                "test5",
                "test6",
                "test7",
              ]}
              select={"test7"}
            ></DropDown>
          </Card>
        </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
