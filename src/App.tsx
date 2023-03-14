import RiddeyCard from "./components/RiddeyCard/RiddeyCard";
import { Icons, Avatar } from "./icons/icons";
import { Flex } from "./global.css";
import { DivOverlay } from "./app.css";

export const App = () => {
  return (
    <main>
      <div className={DivOverlay}>
        <div className={Flex}>
          <Icons width={50} height={50} />
          <Icons width={40} height={40} />
          <Icons width={40} height={40} />
          <Icons width={40} height={40} />
        </div>
        <div className={Flex}>
          <Icons width={40} height={40} />
          <Icons width={40} height={40} />
          <Icons width={40} height={40} />
          <Icons width={40} height={40} />
          <Avatar width={70} height={70} />
        </div>
      </div>
      <RiddeyCard />
    </main>
  );
};
