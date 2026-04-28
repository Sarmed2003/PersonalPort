"use client";

import { useMemo, useState, type ReactNode } from "react";
import { type AppId, type TopicChipId } from "@/content/profile";
import { ContextPanel } from "./ContextPanel";
import { DeviceFrame } from "./DeviceFrame";
import { panelFromSource, type PanelSource } from "./panelFromProfile";
import { PhoneScreens } from "./PhoneScreens";
import { StatusBar } from "./StatusBar";

type Screen =
  | { view: "home" }
  | { view: "app"; app: AppId }
  | { view: "item"; app: AppId; itemId: string };

type Props = {
  compactTop?: boolean;
  /** Name/headline + headshot, etc. — above the context panel, right of the device */
  rightColumnTop?: ReactNode;
};

export function PortfolioShell({
  compactTop = false,
  rightColumnTop = null,
}: Props) {
  const [screen, setScreen] = useState<Screen>({ view: "home" });
  const [panelSource, setPanelSource] = useState<PanelSource>({ type: "default" });
  const [activeChip, setActiveChip] = useState<TopicChipId | null>(null);

  const panel = useMemo(() => panelFromSource(panelSource), [panelSource]);

  const openApp = (id: AppId) => {
    setActiveChip(null);
    setScreen({ view: "app", app: id });
    setPanelSource({ type: "app", id });
  };

  const openItem = (app: AppId, itemId: string) => {
    setActiveChip(null);
    setScreen({ view: "item", app, itemId });
    setPanelSource({ type: "item", app, itemId });
  };

  const goBack = () => {
    setActiveChip(null);
    if (screen.view === "item") {
      setScreen({ view: "app", app: screen.app });
      setPanelSource({ type: "app", id: screen.app });
      return;
    }
    if (screen.view === "app") {
      setScreen({ view: "home" });
      setPanelSource({ type: "default" });
    }
  };

  const onChip = (id: TopicChipId) => {
    setActiveChip(id);
    setScreen({ view: "home" });
    setPanelSource({ type: "chip", id });
  };

  return (
    <div
      className={`relative min-h-0 flex-1 overflow-hidden ${
        compactTop ? "pt-0" : "pt-2"
      }`}
    >
      <div
        className={`relative mx-auto flex min-h-0 w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-5 ${
          compactTop ? "py-2 md:py-3" : "py-4 md:py-8"
        }`}
      >
        <div className="flex w-full min-h-0 shrink-0 items-stretch justify-center md:w-[48%] md:max-w-[min(100%,600px)] md:justify-end md:pr-1 md:pl-0 lg:pr-4">
          <div className="w-full">
            <DeviceFrame statusBar={<StatusBar />}>
              <PhoneScreens
                screen={screen}
                onOpenApp={openApp}
                onOpenItem={openItem}
                onBack={goBack}
                onChip={onChip}
                activeChip={activeChip}
              />
            </DeviceFrame>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-stretch justify-start gap-0 md:min-w-[20rem] md:max-w-[min(100%,28rem)] md:pl-0.5">
          {rightColumnTop}
          <div className="min-h-0 w-full min-w-0 flex-1">
            <ContextPanel state={panel} />
          </div>
        </div>
      </div>
    </div>
  );
}
