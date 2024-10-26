"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Tab, tabClasses, TabList, Tabs } from "@mui/joy";
import { TABS } from "king/constants/text";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navigation = () => {
  const path = usePathname();
  const router = useRouter();
  const [selectedPath, setSelectedPath] = useState<number>(0);

  useEffect(() => {
    const matchedIndex = TABS.findIndex((tab) => tab === path.replace("/", ""));
    setSelectedPath(matchedIndex !== -1 ? matchedIndex : 0);
  }, [path]);

  const handleTabChange = (newValue: number) => {
    setSelectedPath(newValue);
    const routes = ["/home", "/profile", "/skills"];
    router.push(routes[newValue]);
  };

  return (
    <Tabs
      aria-label="tabs"
      value={selectedPath}
      onChange={(_, value) => handleTabChange(value as number)}
      sx={{
        bgcolor: "transparent",
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: "xl",
          bgcolor: "background.level1",
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "sm",
            bgcolor: "background.surface",
          },
        }}
      >
        <Tab disableIndicator>
          <Icon icon="mage:home-2-fill" width={30} height={30} />
        </Tab>
        <Tab disableIndicator>
          <Icon icon="iconamoon:profile-fill" width={30} height={30} />
        </Tab>
        <Tab disableIndicator>
          <Icon icon="mynaui:lightning-solid" width={30} height={30} />
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Navigation;
